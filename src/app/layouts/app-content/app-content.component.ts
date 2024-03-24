import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from '../../components/app-navbar/app-navbar.component';

@Component({
  selector: 'app-app-content',
  standalone: true,
  imports: [RouterModule,AppNavbarComponent],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.css'
})
export class AppContentComponent {

}
