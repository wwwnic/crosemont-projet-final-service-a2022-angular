import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(protected router: Router) {}

  goToPrescription(): void {
    this.router.navigate(['/prescription'])
  }

  goToInformation(): void {
    this.router.navigate(['/information'])
  }
}
