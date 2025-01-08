import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

const routes: Routes = [{ path: '', component: MenuComponent } ,
  {path : 'proposeMenu' , component : AddMenuComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
