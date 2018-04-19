import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response} from '@angular/http';

@Component({
  selector: 'app-translate-api',
  templateUrl: './translate-api.component.html',
  styleUrls: ['./translate-api.component.css']
})
export class TranslateApiComponent implements OnInit {
	loading:Boolean = false;
	apiRoot:string = `https://translate.yandex.net/`;
	data:any;

	getJSON(searchString:string){
		this.loading = true;
		let apiURL = `api/v1.5/tr.json/translate?key=trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0&text=${searchString}&lang=en`
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
  constructor(private http:Http) { }

  ngOnInit() {
  }

}
