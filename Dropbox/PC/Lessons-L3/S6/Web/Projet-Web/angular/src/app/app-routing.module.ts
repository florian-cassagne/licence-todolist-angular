import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CreatorViewComponent} from './creator-view/creator-view.component';
import {AuthComponent} from './components/pages/auth/auth.component';
import {AuthGuard} from './services/auth-guard';
import {EditCreatorComponent} from './edit-creator/edit-creator.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';


const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'about', component: AboutComponent },
  { path: 'creator', pathMatch: 'full', redirectTo: 'creators' },
  { path: 'creator-view', component: CreatorViewComponent},
  { path: 'creators', canActivate: [AuthGuard], component: CreatorViewComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditCreatorComponent },
  { path: 'users', component: UserListComponent },
  { path : 'new-user' , component: NewUserComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routedComponents = [TodosComponent, AboutComponent, CreatorViewComponent, AuthComponent, CreatorViewComponent, EditCreatorComponent, NewUserComponent, FourOhFourComponent] ;
