import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'websolarr';
  
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    let data = {username: "koy", feedback: "I love you"};
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
      alert(JSON.stringify(result));
    });
  }
}
