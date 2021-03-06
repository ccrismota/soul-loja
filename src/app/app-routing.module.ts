import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackUsuarioComponent } from './components/feedback-usuario/feedback-usuario.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NovaLojaComponent } from './components/nova-loja/nova-loja.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { NovoServicoComponent } from './components/novo-servico/novo-servico.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SorteioComponent } from './components/sorteio/sorteio.component';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';


//APP ROUTING gerencia as rotas da aplicação no geral

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/novo', component: NovoProdutoComponent },
  { path: 'cadastro', component:CadastroComponent },
  { path: 'feedback/usuario',component: FeedbackUsuarioComponent},
  { path: 'teste-data-binding', component: TesteDataBindingComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'servico/novo', component: NovoServicoComponent},
  { path: 'nova-loja', component:NovaLojaComponent},
  { path: 'sorteio', component:SorteioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'github/repos', component: GithubReposComponent},
  { path: '**', component: NotFoundComponent}//Deve ser sempre a ultima rota da lista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
