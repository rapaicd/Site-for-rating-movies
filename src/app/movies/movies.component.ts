import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  type="";
  id!:any;
  url='';
  myMovies!:any;

  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.type=this.route.snapshot.params['type'];
    if(this.type==='trending'){
      this.url='http://localhost:4200/assets/data/trending-movies.json';
    }
    if(this.type==='theatres'){
      this.url='http://localhost:4200/assets/data/popular-in-theatres.json';
    }
    if(this.type==='popular'){
      this.url='http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe(movies=>{
      this.myMovies=movies;
    });
  }

  Submit(){
  }
}
