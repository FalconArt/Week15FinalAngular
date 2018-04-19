import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-api',
  templateUrl: './photo-api.component.html',
  styleUrls: ['./photo-api.component.css']
})
export class PhotoApiComponent implements OnInit {

	loading:Boolean = false;
	apiRoot:string = `https://translate.yandex.net/`;
	data:any;

	getJSON(searchString:string){
		this.loading = true;
		let apiURL = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0`
		this.http.get(apiURL)
		.toPromise()
		.then(res => {
			this.data = res.json().results;
			this.loading = false;
			console.log(this.data);
		}, err => {
			console.log(err);
		});
	}
	//const photoURL = `https://api.unsplash.com/search/photos?page=1&query=${newText}&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0`;
  constructor() { }

  ngOnInit() {
  }

}
