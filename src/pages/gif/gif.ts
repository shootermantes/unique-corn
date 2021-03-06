import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteService } from '../../app/services/quote.service';

@Component({
  selector: 'gif',
  templateUrl: 'gif.html'
})
export class GifPage {
	
	item: any;
	tags: any;
	joke: any;

	constructor(public navCtrl: NavController, public params:NavParams, private quoteService:QuoteService) {
		this.item = params.get('item');
	}

	ngOnInit(){
		let slug = "#"+this.item.slug;

		let reg = /[-]/g;
		this.tags = slug.replace(reg, ' #')


		this.quoteService.getPosts().subscribe(response => {
			
			this.joke = response.value.joke 
		
			return
		})
	}

}
