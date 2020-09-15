import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdataComponent } from './userdata/userdata.component'

const routes: Routes = [
  { path : 'createUser', component : UserdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }