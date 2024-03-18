import { NgModule } from '@angular/core'; // Import necessary for @NgModule
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core'; // Import Component
import { ExpenseFormComponent } from './app/expense-form/expense-form.component'; // Supondo que o componente esteja neste diretório





@Component({
  selector: 'app-root', // Assuming your selector is 'app-root'
  templateUrl: './components/app.component.html',
  styleUrls: ['./components/app.component.css']
})
export class AppComponent { }

export const routes: Routes = [
  { path: '', component: ExpenseFormComponent }, // Display ExpenseFormComponent on root path
  // Add more routes for other components here (commented out for now)
  //{ path: 'home', component: HomeComponent }, // Example route (uncomment if needed)
  //{ path: 'list', component: ListComponent }, // Example route (uncomment if needed)
  //{ path: 'detail/:id', component: DetailComponent }, // Example route (uncomment if needed)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register routes with RouterModule.forRoot
  exports: [RouterModule] // Make RouterModule available for other modules
})
export class AppRoutingModule { }
