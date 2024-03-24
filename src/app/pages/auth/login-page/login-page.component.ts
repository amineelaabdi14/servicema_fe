import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { UserstateService } from '../../../state/userstate.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email = '';
  password = '';
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private userStateService: UserstateService
  ) {}

  onSubmit() {
    console.log(this.email, this.password);
    
    this.authService.authenticate({ email: this.email, password: this.password })
      .subscribe(
        (authenticationResponse) => {
            // console.log("cc");
            console.log(authenticationResponse);
            this.userStateService.setUser(authenticationResponse);
            localStorage.setItem('token', authenticationResponse.token);
            localStorage.setItem('refreshToken', authenticationResponse.refreshToken);
            localStorage.setItem('role', authenticationResponse.role);
            localStorage.setItem('name', authenticationResponse.name);
            localStorage.setItem('email', authenticationResponse.email);
            localStorage.setItem('email', authenticationResponse.email);
            
            this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error');
        }
      );
  }
}
