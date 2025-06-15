import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { user } from '../../interface/userInterface';
import { RecipeServicesService } from '../../services/recipe-services.service';
import { recipe } from '../../interface/recipe';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrUsers: Array<user> = [{ _id: "", address: "", favoriteRecipe: [], isManager: false, nameUser: "", password: "", phone: "", __v: 0 }]
  arrRecipe: Array<recipe> = [{ _id: "", recipeName: "", userCode: "", ingredient: [{ name: "", amount: "" }], level: "", time: "", type: "", pic: "" }]
  arrTemp: Array<recipe> = []
  recipe: recipe = { _id: "", recipeName: "", userCode: "", ingredient: [{ name: "", amount: "" }], level: "", time: "", type: "", pic: "" }
  url: String = 'http://localhost:1234/'
  typeFilter: String = ""

  constructor(public userS: UserServicesService, private recipeS: RecipeServicesService, private route: Router) {
    console.log('HomeComponent constructor');
  };
  addToFevoriteRecipe(_id: string) {
    console.log("addToFevoriteRecipe", _id);
    debugger
    this.userS.addToFevoriteRecipe(this.userS.getUserId(), _id).subscribe({
      next: (o) => {
        alert("the recipe add")
        console.log(o);

      },
      error: (err) => {
        alert("the recipe didnt add")
        console.log(err);

      }
    })

  }

  getRecipeById(_id?: string) {
    if (_id && _id != "")
      this.route.navigate([`/MoreDetails/${_id}`])
  }

  filterTo() {
    this.arrTemp = this.arrRecipe.filter(recipe => {
      return recipe.type == this.typeFilter
    })
  }

  ngOnInit() {
    const filter = this.recipeS.getTypeToFilter()
    console.log("🔍 filter שהתקבל מהשירות:", filter);
    this.recipeS.getAllRecipe().subscribe(
      (recipes: recipe[]) => {
        console.log("הנתונים שהתקבלו מהשרת:", recipes);
        this.arrRecipe = recipes;
        //בדיקה האם יש צורך בסינון ולא בהבאת כל המתכונים
        if (filter == "") {
          this.arrTemp = [...this.arrRecipe]
        }
        else {
          this.typeFilter = filter
          this.filterTo()
        }
      }
      , error => {
        console.error("שגיאה בקבלת נתונים:", error);
      })


    //הזנה לארוע אם היה שינוי
    this.recipeS.$listenToTypeToFilter.subscribe(filter => {
      this.typeFilter = filter
      if (filter != "")
        this.filterTo()
      else {
        this.arrTemp = [...this.arrRecipe]
      }
    })

  }

}
