import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  technologies: Technology[] = [];
  query: string;
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.httpService.getSearchTechnology(this.query).subscribe((technologies: Technology[]) => {
        this.technologies = technologies['data'];
      });
    });
  }

}
