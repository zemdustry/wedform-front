import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';
import { InformationComponent } from './information/components/information.component';
import { PhotoComponent } from './photo/components/photo.component';
import { RegisterComponent } from './register/components/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
