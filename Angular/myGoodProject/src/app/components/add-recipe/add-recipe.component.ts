import { Component } from '@angular/core';
import { recipe } from '../../interface/recipe';
import { RecipeServicesService } from '../../services/recipe-services.service';
import { FormsModule } from '@angular/forms';
import { UserServicesService } from '../../services/user-services.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  newRecipe: recipe = { _id: "", recipeName: "", userCode: "", ingredient: [{ name: "", amount: "" }], level: "", time: "", type: "", pic: "" }
  ingredient: any = { name: "", amount: "" };
  public pic: File | null = null;

  constructor(private recipeS: RecipeServicesService, private userS: UserServicesService,private imageS:ImageService) { }


  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.pic = fileInput.files[0];
    }
  }

  addNewRecipe() {
    debugger
    const userId = this.userS.getUserId()
    console.log("userId", userId);
    const fromData=new FormData()
    fromData.append('image',this.pic!)
    this.imageS.uploudImg(fromData).subscribe({
      next:(res)=>{
        // this.newRecipe.pic=res.imageUrl
        this.newRecipe.pic = "uploud/" + (res.imageUrl ?? "");

        let recipeToSend = { ...this.newRecipe };
        console.log("recipeToSend",recipeToSend);
        
    delete recipeToSend._id;
    recipeToSend.userCode = userId
    console.log("recipeToSend.userCode", recipeToSend.userCode);
    this.recipeS.addNewRecipe(recipeToSend).subscribe({
      next: (t) => {
        console.log("success to add new recipe", t);
        alert("The recipe was successfully added")
      },
      error: (err) => {
        console.log(err.error);

        if (err.error.includes("cant be with empty value"))
          alert(err.error);

        if (err.error == "didnt have this user")
          alert("didnt have user with this code")
        else
          console.log("didnt success", err);
      }
    })

      },
      error:(e)=>{
        console.log(e.error);    
      }
    })
    



    
  }

  saveNewIngredient() {
    this.newRecipe.ingredient.push(this.ingredient)
    this.ingredient = { name: "", amount: "" };
  }
}
