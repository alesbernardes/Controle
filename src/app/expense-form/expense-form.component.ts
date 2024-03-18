import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from './expense.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  cadastroForm: FormGroup;
  paymentMethods = ['Cartão de débito', 'Cartão de crédito', 'À vista'];
  categories: string[] = [];

  constructor(private fb: FormBuilder,
              private expenseService: ExpenseService,
              private categoryService: CategoryService) { } // Added semicolon

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nomeDespesa: ['', Validators.required, Validators.minLength(3)], // Nome da despesa (required, min length 3)
      dataCompra: [null, Validators.required],                      // Data da compra (required)
      dataVencimento: [null, Validators.date],                      // Data de vencimento (optional)
      valor: ['', Validators.required, Validators.min(0)],           // Valor da despesa (required, positive)
      loja: ['', Validators.maxLength(40)],                          // Loja (optional, max length 40)
      prestacoes: [false],
      numeroParcelas: [],                                            // Number of installments (conditionally required)
      valorParcela: [],                                            // Installment value (conditionally required)
      formaPagamento: ['', Validators.required],                    // Forma de pagamento (required)
      quemEfetuouCompra: ['', Validators.maxLength(50)],             // Quem efetuou a compra (optional, max length 50)
    });

    // Get category suggestions as user types
    this.cadastroForm.get('nomeDespesa').valueChanges.subscribe(nomeDespesa => {
      this.categoryService.getSuggestions(nomeDespesa).subscribe(suggestions => {
        this.categories = suggestions;
      });
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const despesa = this.cadastroForm.value;

      this.expenseService.saveExpense(despesa).subscribe(
        () => {
          console.log('Despesa salva com sucesso!');
          this.cadastroForm.reset();
        },
        (error) => {
          // Exibir mensagem de erro com base no erro específico
          const mensagemErro = this.getMensagemErro(error);
          // Você pode usar uma notificação por toast ou exibir a mensagem de erro no formulário
          console.error('Erro ao salvar despesa:', error);
        }
      );
    }

    // Função para obter mensagem de erro amigável com base no tipo de erro
    getMensagemErro(error: any) {
      if (error.error && error.error.message) {
        return error.error.message;
      }
      return 'Ocorreu um erro ao salvar a despesa. Tente novamente mais tarde.';
    }
  }

  togglePrestasoes() {
    const parcelasRequired = this.cadastroForm.get('prestacoes').value;
    const numeroParcelas = this.cadastroForm.get('numeroParcelas');
    const valorParcela = this.cadastroForm.get('valorParcela');

    if (parcelasRequired) {
      numeroParcelas.setValidators([Validators.required]);
      valorParcela.setValidators([Validators.required]);
    } else {
      numeroParcelas.clearValidators();
      valorParcela.clearValidators();
    }

    numeroParcelas.updateValueAndValidity();
    valorParcela.updateValueAndValidity();
  }
}
