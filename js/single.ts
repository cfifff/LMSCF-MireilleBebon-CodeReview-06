let localiteArray = [];

class Market {
	city:string;
	zip:number;
	address:string;
	doornumber:number;
	images:string;
	author:string;
	day:number;
	month:string;
	year:number;
	description:string;
	visit:boolean;
	constructor(city, zip, address, doornumber,images,author,day,month,year,description,visit) { 
       this.city = city;
       this.zip = zip;
       this.address = address;
       this.doornumber = doornumber;
       this.images = images;
       this.author = author;
       this.day = day;
       this.month = month;
       this.year = year;
}
marketDetails() {
    return `
    <div class="col">
        <!-- Jumbotron -->
          <div class="jumbotron h-md-50 mx-2">
        	<img class="card-img-top" src="${this.images}" alt="${this.city}" > 
            <h1>There's more to boots than meets the eye...</h1>
            <p>...there's the inside portion where you put your feet.</p>
          </div>
     </div>   
        <!-- End of Jumbotron -->
      
      <div class="container pt-3">
     
            <h4 class="card-title">city: ${this.city}</h4>
            <p class="card-text">zip: ${this.zip}</p>
            <p class="card-text">address: ${this.address}</p>
            <p class="card-text">doornumber: ${this.doornumber}</p>
            <p class="card-text">description: ${this.description}</p>
          
        </div>
      
    `;
  }}
  class Events extends Market {
  visit: boolean;
  description:string;
  meetanddrink:string;

  constructor(city, zip, address, doornumber, images,author,day,month,year, visit,description,meetanddrink) {
    super(city, zip, address, doornumber, images,author,day,month,year,description,meetanddrink);
    this.visit = visit;
    this.description = description;
    this.meetanddrink = meetanddrink
    localiteArray.push(this);
  }
  
  eventsDetails() {
    return `
    <div class="col">
        <!-- Jumbotron -->
          <div class="jumbotron h-md-50 mx-2">
        	<img class="card-img-top" src="${this.images}" alt="${this.city}" > 
            <h1>There's more to boots than meets the eye...</h1>
            <p>...there's the inside portion where you put your feet.</p>
          </div>
     </div>   
        <!-- End of Jumbotron -->
      
      <div class="container pt-3">
     
            <h4 class="card-title">city: ${this.city}</h4>
            <p class="card-text">zip: ${this.zip}</p>
            <p class="card-text">address: ${this.address}</p>
            <p class="card-text">doornumber: ${this.doornumber}</p>
            <p class="card-text">description: ${this.description}</p>
            <p class="card-text">description: ${this.meetanddrink}</p>

          
        </div>
      
    `;
  }
   

}

/*here start the objects*/

let arenaviolet = new Market(
  
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/sleep.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  'skjfsajgkeuarkjncjhfb',
  false,
  
);
let aubergeamuse = new Market(
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/maroc.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  'skjfsajgkeuarkjncjhfb',
  false,
);
let violet = new Market(
  
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/mar3.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  'skjfsajgkeuarkjncjhfb',
  false,
  
);
let amuse = new Market(
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/shirley.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  'skjfsajgkeuarkjncjhfb',
  false,
);

let cityl  = new Market("wien", 2700, "steinbach", 36, 'img/market1.png',"mireille",23,"juillet",09,"", false );
document.getElementById('content').innerHTML=cityl.marketDetails();