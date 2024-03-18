import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface CategorySuggestion {
  // Define the structure of a single category suggestion
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://your-backend-api/categories'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getSuggestions(nomeDespesa: string): Observable<CategorySuggestion[]> {
    return this.http.get<CategorySuggestion[]>(this.apiUrl + '/suggestions?nomeDespesa=' + nomeDespesa)
      .pipe(
        catchError(error => {
          // Handle errors gracefully, e.g., log the error or return a default value
          console.error('Error fetching category suggestions:', error);
          return of([]); // Return an empty array in case of error
        })
      );
  }
}
