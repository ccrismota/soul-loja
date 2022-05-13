import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { GithubService } from 'src/app/shared/services/github/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {


  userName: string = '';
  resultados: Repository[] = [];
  loading = false;

  constructor(private githubservice: GithubService) {}

  onBuscar(){
    this.githubservice.getUserRepositories(this.userName).subscribe({
      next: (repositorios) => {
        this.resultados = repositorios;
        this.loading = false;
        this.userName = '';
      },
      error: (err) => {
        this.loading = false;
        this.resultados = [];
        alert("Usuario não encontrato")
      }
    });
  }

  ngOnInit(): void {
  }

}
