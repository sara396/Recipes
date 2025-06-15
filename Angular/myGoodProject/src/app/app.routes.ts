import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: SignInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'MoreDetails/:_id', component: MoreDetailsComponent },
    { path: 'AddRecipe', component: AddRecipeComponent },
    {path:'PersonalArea',component:PersonalAreaComponent},
    { path: '**', component: HomeComponent }

];
