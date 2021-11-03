import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    books = [
      { name : "book1"},
      { name : "book2"}
    ];

    persons : any;

    private header : HttpHeaders;

  constructor(private http: HttpClient) { 
    this.header = new HttpHeaders();
  }

  ngOnInit(): void {
    /*this.header = this.header.set("Authorization", "Basic " + window.btoa("Admin:adminpassword"));

    var suscriber = this.http.get("http://localhost:9000/person", {
      headers : this.header,

    }).subscribe((data) => {
      console.log("tout est ok");
      console.log(data);
      this.persons = data;
      suscriber.unsubscribe();
    },
    (error) => {
      console.log(error);
      suscriber.unsubscribe();

    });*/
  }

  printHeader(): void{
    console.log(this.header);
  }

}



