import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserServicesService } from '../../services/user-services.service';
import { RecipeServicesService } from '../../services/recipe-services.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  register: Boolean = false
  constructor(public userS: UserServicesService,private route:Router,public recipeS:RecipeServicesService) { }

  logOut(){
    this.userS.setUserName("")
    this.userS.changeRegister(false)
    this.route.navigate(['/Home'])
  }
  ngOnInit(){
  }
}
