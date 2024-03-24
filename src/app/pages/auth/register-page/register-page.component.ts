import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  email = '';
  name = '';
  password = '';
  constructor(private service:AuthServiceService ,private router:Router) {}

  onSubmit() {
    this.service.register({ email: this.email, name: this.name, password: this.password }).subscribe(
      (authenticationResponse) => {
        // console.log("cc");
        console.log(authenticationResponse);
        
        localStorage.setItem('token', authenticationResponse.token);
        localStorage.setItem('refreshToken', authenticationResponse.refreshToken);
        localStorage.setItem('role', authenticationResponse.role);
        localStorage.setItem('name', authenticationResponse.name);
        localStorage.setItem('email', authenticationResponse.email);

        this.router.navigate(['/home']);
    },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
