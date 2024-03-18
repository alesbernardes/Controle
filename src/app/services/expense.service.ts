@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://your-backend-api/expenses'; // Substitua pela URL da sua API backend

  constructor(private http: HttpClient) { }

  saveExpense(expense: Expense): Observable<any> {
    return this.http.post(this.apiUrl, expense);
  }

  // Método para buscar as categorias da API (opcional)
  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl + '/categories');
  }
}
