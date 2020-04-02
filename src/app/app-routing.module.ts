import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'data'
}, {
  path: 'data',
  component: DataComponent,
}, {
  path: 'crud',
  component: CrudComponent,
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'data',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
