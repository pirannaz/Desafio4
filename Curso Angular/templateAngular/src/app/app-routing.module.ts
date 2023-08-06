import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUserComponent } from './one-user/one-user.component';
import { UsuariosComponent } from './testimonials/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'users/:variable', component: OneUserComponent },
  { path: '', component: UsuariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
