let localiteArray = [];

class Localite {
	city:string;
	zip:number;
	address:string;
	doornumber:number;
	images:string;
	author:string;
	day:number;
	month:string;
	year:number;

	constructor(city, zip, address, doornumber,images,author,day,month,year) { 
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
}

class Market extends Localite {
  visit: boolean;
  description:string;

  constructor(city, zip, address, doornumber, images,author,day,month,year, visit,description) {
    super(city, zip, address, doornumber, images,author,day,month,year);
    this.visit = visit;
    this.description = description;
    localiteArray.push(this);
  }
  marketInfo() {
    return `
     
      <div class="col-10 col-md-4">
      <div class="card">
      		<div class="absolute">
              <h3 onclick="addvisit(${this.city})">${this.city}</h3>
              	<button type="button" class="btn btn-primary">
  				Profile <span class="badge badge-light">100</span>
  				</button>
                     
            	<a href="singlemarket.html" onclick=return marketDetails();><img class="card-img-top" src="${this.images}" alt="${this.city}" width="300"></a>         
          	</div>
          	<div class="card-img-overlay">
            	<p class="card-text">${this.author}${this.day}${this.month}${this.year}</p>
          	</div>
        </div>
      </div>
    
    `;
  }
  marketDetails() {
    return `
    <div class="col">
        <!-- Jumbotron -->
          <div class="jumbotron h-md-50 mx-2" style="background-image: url(img/"${this.images}" ); background-size: cover; background-repeat: no-repeat;">
        	
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
  }
}

let cityl  = new Market("wien", 2700, "steinbach", 36, 'img/market1.png',"mireille",23,"juillet",09,"", false );
document.write(cityl.marketInfo())
document.write(cityl.marketDetails())



/*
class Man extends Person {
  favorite: boolean;

  constructor(id, name, age, phrase, photo, location, hobbies, favorite_music, favorite) {
    super(id, name, age, phrase, photo, location, hobbies, favorite_music, );
    this.favorite = favorite;
    personArray.push(this);
  }

  personInfo() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.phrase}</p>
          </div>
        </div>
      </div>
    `;
  };

  personDetails() {
    return `
      <div class="col-lg-6 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid favoritesHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Name: ${this.name}</h4>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Location: ${this.location}</p>
            <p class="card-text">Hobbies: ${this.hobbies}</p>
            <p class="card-text">Favorite Music: ${this.favorite_music}</p>
          </div>
        </div>
      </div>
    `;
  };
};

*/