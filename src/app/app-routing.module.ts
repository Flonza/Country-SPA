import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //De esta manera importaremos un modulo completo por medio del import del componente principal
  {path: 'paises', loadChildren: ()=>import('./modules/paises/paises.module').then(m => m.PaisesModule)},
  {path: '**', redirectTo: 'paises'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
