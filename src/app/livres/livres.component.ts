import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  public categ;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://127.0.0.1:8080/categories")
    ._subscribe(data=>{
      this.categ=data;
    }, err=>{
      console.log(err);
    })
  }

}
