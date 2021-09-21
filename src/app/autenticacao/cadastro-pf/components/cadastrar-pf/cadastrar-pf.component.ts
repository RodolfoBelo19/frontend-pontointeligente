import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPf } from '../../models/cadastro-pf.model';
import { CadastrarPfService } from '../../services/cadastrar-pf.service';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPjService: CadastrarPfService,
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome:   ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]]
    });
  }

  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPjService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          const msg: string = "Realiza o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
    return false;

    return false;
  }

}
