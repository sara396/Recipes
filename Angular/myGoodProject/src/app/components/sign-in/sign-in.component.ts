import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { FormsModule } from '@angular/forms';
import { user } from '../../interface/userInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  name: String = ""
  password: String = ""
  url: String = 'http://localhost:1234/'
  arrUsers: user = { _id: "", address: "", favoriteRecipe: [], isManager: false, nameUser: "", password: "", phone: "", __v: 0 }



  constructor(private userS: UserServicesService, private route: Router) { }

  getUserByNameAndPass() {
    if (this.name != "" && this.password != "") {
      alert("in getUserByNameAndPass")
      debugger
      this.userS.getUserByNameAndPass(this.name, this.password)
        .subscribe({
          next: (user) => {
            console.log("המשתמש נימצא", user);
            console.log("המשתמש user._id", user._id);
            this.userS.setUserId(user._id)
            console.log("המשתמש getUserId", this.userS.getUserId());
            this.arrUsers = user
            alert(`hi ${this.name}`)
            debugger
            this.userS.changeRegister(true)
            this.userS.setUserName(this.name)
          }
          ,
          error: (err) => {
            if (err.error === "didnt find" && err.status == 401) {
              alert("משתמש לא נמצא");
              console.log("אתה מועבר לעמוד הרשמה");
              this.route.navigate(['/SignUp'])
            }
            else {
              console.log("errFromGetUserByNameAndPass ", err);
            }
          }
        }
        )
    }
    else {
      alert("name and password is required")
    }
  }
}
