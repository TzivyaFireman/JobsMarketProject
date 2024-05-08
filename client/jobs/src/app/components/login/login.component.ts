import { Component } from '@angular/core';
import { User } from '../../models/user';
import { JobField } from '../../models/jobField';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService) {
  }
  user: User = {
    Id: "",
    UserName: "",
    Password: "",
    JobField: JobField.DEVELOPER,
  }



  saveUser() {
    if (this.isPasswordValid())
      this.loginService.getUser(this.user.UserName, this.user.Password);
    else
      alert("invalid password");
  }

  isPasswordValid(): boolean {
    if (this.user.Password.length < 0) {
      return false;
    }
    if (this.user.Password.includes(" ")) {
      return false;
    }
    return true;
  }
}
