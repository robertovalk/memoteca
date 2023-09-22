import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo 1'
  }

  criarPensamento() {
    alert("Noso pensamento criado")
  }

  deletarPensamento() {
    alert("Pensamento deletado com sucesso!")
  }
}
