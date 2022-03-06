import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { EditCreatorComponent } from './edit-creator/edit-creator.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorViewComponent } from './creator-view/creator-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { RoutingComponent } from './routing/routing.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {CreatorService} from './services/creator.service';
import {TodoService} from './services/todo.service';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    EditCreatorComponent,
    CreatorsComponent,
    CreatorViewComponent,
    UserListComponent,
    NewUserComponent,
    AuthComponent,
    RoutingComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService, CreatorService, AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
