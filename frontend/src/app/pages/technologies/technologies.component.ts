import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  techenologies: Technology[];

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTecnologias().subscribe(( techenology: Technology[] ) => {
      
      this.techenologies = techenology['data']
      console.log(this.techenologies);
      
    });
  }

}
