import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { InformationComponent } from './information/components/information/information.component';
import { PhotoComponent } from './photo/components/photo.component';
import { RegisterComponent } from './register/components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
