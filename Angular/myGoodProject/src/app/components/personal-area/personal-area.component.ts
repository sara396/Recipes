import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-personal-area',
  imports: [],
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.css'
})
export class PersonalAreaComponent {
  constructor(private userS:UserServicesService){}
  favoriteRecipeId:Array<String>=[]
  ngOnInit(){
    debugger
    const userName=this.userS.getUserName()
    const userId=this.userS.getUserId()

    
   this.userS.getFavoriteRecipe(userId).subscribe({
    next:(favoriteRecipe)=>{
      this.favoriteRecipeId=favoriteRecipe
      console.log("favoriteRecipeId",this.favoriteRecipeId);
    },
    error:(err)=>{
      console.log(err.message);
      
    }
   })
   
  }
}
