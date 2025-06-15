import { Component } from '@angular/core';
import { user } from '../../interface/userInterface';
import { FormsModule } from '@angular/forms';
import { UserServicesService } from '../../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser: user = { _id: "", address: "", favoriteRecipe: [], isManager: false, nameUser: "", password: "", phone: "", __v: 0 }
  url: String = 'http://localhost:1234/'

  constructor(private userS: UserServicesService, private route: Router) { }
  addNewUser() {
    this.userS.addUser(this.newUser)
      .subscribe({
        next: (t) => {
          alert(`hi ${this.newUser.nameUser} you succesfully register `)
          alert("אתה מועבר לעמוד התחברות")
          this.userS.setUserName("")
          this.userS.changeRegister(false)
          this.route.navigate(['/Login'])
        }
        , error: (err) => {
          if (err.status == 409 || err.error == "A user with this ID already exists")
            alert("A user with this ID already exists please try again")
          else {

            const newerr = err.error
            const match = err.error.match(/`(.+?)` is required/)  //ביטוי רגולרי בשביל למצוא מה השגיאה
            alert(`didnt succes to add,${match[1]} is required`)
            console.log("match[1]", match[1]);

            // alert(`didnt succes to add,${err.error}`)
            console.log("didnt succes to add", err);
          }
        }
      })
  }
}
