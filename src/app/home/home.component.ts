import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies!:any;
  theatresMovies!:any;
  popularMovies!:any;
  isFalse!:boolean;
  isLoading!:boolean;
  niz=[1,2,3,4];
  trendingNum=5;
  theatreNum=5;
  trendingIsView!:boolean;
  theatreIsView!:boolean;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.isFalse=false;
    this.isLoading=true;
    setTimeout(()=>{
      this.getTrendingMovies();
      this.getTheatresMovies();
      this.getPopularMovies();
      this.isFalse=true;
      this.isLoading=false;
      this.trendingIsView=true;
      this.theatreIsView=true;
    },500);
    
  }

  getTrendingMovies(){
      this.http.get('http://localhost:4200/assets/data/trending-movies.json').
      subscribe((movies)=>{
      this.trendingMovies=movies;
    });
  }

  getTheatresMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-in-theatres.json').
    subscribe((movies)=>{
      this.theatresMovies=movies;
    })
  }

  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').
    subscribe(movies=>{
      this.popularMovies=movies;
    });
  }

  TrendingViewAll(){
    this.trendingNum=10;
    this.trendingIsView=false;
  }
  TrendingShowLess(){
    this.trendingNum=5;
    this.trendingIsView=true;
  }
  TheatreViewAll(){
    this.theatreNum=10;
    this.theatreIsView=false;
  }
  TheatreShowLess(){
    this.theatreNum=5;
    this.theatreIsView=true;
  }

  goToMovie(type:String,id:number){
    this.router.navigate(['movies',type,id]);
  }
}
