
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.module';
import { AppComponent } from './components/app.component';
//import { HomeComponent } from './home/home.component'; // Correção
//import { ListComponent } from './list/list.component'; // Correção
//import { DetailComponent } from './detail/detail.component'; // Correção
import { ExpenseFormComponent } from './expense-form/expense-form.component'; // Correção

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent, // Adicione os componentes aqui
   // ListComponent, // Adicione os componentes aqui
   // DetailComponent, // Adicione os componentes aqui
    ExpenseFormComponent // Adicione os componentes aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
