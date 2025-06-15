import { Component } from '@angular/core';
import { RecipeServicesService } from '../../services/recipe-services.service';
import { recipe } from '../../interface/recipe';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-details',
  imports: [RouterLink],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  recipe: recipe = { _id: "", recipeName: "", userCode: "", ingredient: [{ name: "", amount: "" }], level: "", time: "", type: "", pic: "" }
  url: String = 'http://localhost:1234/'

  constructor(private recipeS: RecipeServicesService, private active: ActivatedRoute) { }

  getRecipeById(id: string) {
    this.recipeS.getRecipeById(id)
      .subscribe(r => {
        this.recipe = r;
        console.log("המתכון שהתקבל מהשרת", r);
      },
        err => console.log(err))
  }

  ngOnInit() {
    this.active.params.subscribe((o: any) => {
      console.log(o);
      console.log(o._id);    
      
      this.getRecipeById(o._id)
    })
  }
}