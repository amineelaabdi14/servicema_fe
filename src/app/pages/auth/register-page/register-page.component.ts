import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  constructor(private service:AuthServiceService ) {}

  onSubmit() {
    this.service.register({ email: this.email, name: this.name, password: this.password }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
