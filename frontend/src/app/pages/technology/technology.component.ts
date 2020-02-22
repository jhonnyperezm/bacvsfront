import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../service/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = {
    name: '',
    description: '',
    logo: '',
    _id: '',
    tags: [],
    createdAt: null,
    updatedAt: null,


  }
  constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
     const id: string = params['id'];
     this.httpService.getTecnologia(id).subscribe((technology: Technology) => {
      this.technology = technology['data'];
     });
    });

  }

}
