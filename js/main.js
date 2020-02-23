var localiteArray = [];
var Localite = /** @class */ (function () {
    function Localite(type, city, zip, address, doornumber, images, author, day, month, year, visit) {
        this.type = type;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.doornumber = doornumber;
        this.images = images;
        this.author = author;
        this.day = day;
        this.month = month;
        this.year = year;
        this.visit = visit;
    }
    Localite.prototype.Info = function () {
        return "\n     \n     <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\n\t\t\n        \t\t<h4 class=\"card-text\"\">" + this.city + "\n        \t\t\n        \t\t\n        \t\t<small><button type=\"button\" class=\"btn btn-primary\">\n  \t\t\t\tProfile <span class=\"badge badge-light\">100</span>\n  \t\t\t\t</button></small></h4>\n\n      <div class=\"card\">  \t\t \n      \t\t\t     \t\t\n   \t\t\t<div>              \n            \t <img class=\"card-img-top\" src=\"" + this.images + "\" alt=\"" + this.city + "\" width=\"300\">\n            </div> \n           \t<div class=\"absoluteTop\">\n              \t<h4><span class=\"badge badge-light text-primary\">" + this.type + "</span></h4>\n            </div>         \n          \t\n          \t<div class=\"card-img-overlay\">\n            \t<p class=\"card-text\">" + this.author + this.day + this.month + this.year + "</p>\n          \t</div>\n        </div>\n      \n    </div>\n    ";
    };
    return Localite;
}());
/*class Market extends Localite {
  visit: boolean;
  description:string;

  constructor(type,city, zip, address, doornumber, images,author,day,month,year, visit,description) {
    super(type,city, zip, address, doornumber, images,author,day,month,year);
    this.visit = visit;
    this.description = description;
    localiteArray.push(this);
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
let cityl  = new Localite("","location","wien", 2700, "steinbach", 36, 'img/market1.png',"mireille",23,"juillet",09,"", false );
/*document.write(cityl.marketInfo())*/
/*document.getElementById('target').innerHTML=cityl.Info();
/*document.getElementById('content').innerHTML=cityl.marketDetails();*/
/*document.getElementById('content').innerHTML = cityl.marketDetails();

class Events extends Localite {
  visit: boolean;
  description:string;
  meetanddrink:string;

  constructor(type,city, zip, address, doornumber, images,author,day,month,year, visit,description,meetanddrink) {
    super(type,city, zip, address, doornumber, images,author,day,month,year);
    this.visit = visit;
    this.description = description;
    this.meetanddrink = meetanddrink
    localiteArray.push(this);
  }
  
  infoDetails() {
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
   

}*/
var array = [
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/shirley.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
    { type: "location", city: "wien", zip: 2700, address: "muhlgasse", doornumber: "36", images: "img/market1.png", author: "mireille", day: 23, month: "fevrier", year: 2020 },
];
for (var i = 0; i < Localite.length; i++) {
    document.getElementById("target").innerHTML += "\n  \n  <div class=\"activities-panel\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\"\">\n       <div class= \"post\"> \n    <img class=\"avatar\" src=\"img/pin.png\">\n  \n\t\t\n        \t\t<h4 class=\"card-text\"\">" + this.city + "        \t\t\n        \t\t<small><button type=\"button\" class=\"btn btn-primary\">\n  \t\t\t\tProfile <span class=\"badge badge-light\">100</span>\n  \t\t\t\t</button></small></h4>\n\n      <div class=\"card\">  \t\t \n      \t\t\t     \t\t\n   \t\t\t    <div>              \n            \t <img class=\"card-img-top\" src=\"{" + Localite[i] + this.images + "}\" alt=\"" + this.city + "\" width=\"300\">\n            </div> \n           \t<div class=\"absoluteTop\">\n              \t<h4><span class=\"badge badge-light text-primary\">" + this.type + "</span></h4>\n            </div>         \n          \t\n          \t<div class=\"card-img-overlay\">\n            \t<p class=\"card-text\">" + this.author + this.day + this.month + this.year + "</p>\n          \t</div>\n          \t<p onclick=\"window.open('singlemarket.html')\" class=\"link\" id=\"redirect\">W3docs</p>\n      </div>\n  </div>   \n  </div>\n\n  </div>\n    ";
    /*let arr1 = new Localite(
    
    
        '3',
      'location',
      'wien',
      '1200',
      'hsurnrk',
      '27',
      'img/sleep.png',
      'mireille',
      '21',
      'fevrier',
      '2020',
      
      false,
      
    );
    let arr2 = new Localite(
        '4',
    'location',
      'wien',
      '1200',
      'hsurnrk',
      '27',
      'img/maroc.png',
      'mireille',
      '21',
      'fevrier',
      '2020',
      false,
    );
    let arr3 = new Localite(
        '5',
      'location',
      'wien',
      '1200',
      'hsurnrk',
      '27',
      'img/mar3.png',
      'mireille',
      '21',
      'fevrier',
      '2020',
      
      false,
      
    );
    let arr4 = new Localite(
        '6',
    'location',
      'wien',
      '1200',
      'hsurnrk',
      '27',
      'img/shirley.png',
      'mireille',
      '21',
      'fevrier',
      '2020',
      
      false,
    );
    
    /*function renderOJHTML(classname) {
      let locationContent: string = '';
    
      for (let tempID in localiteArray) {
        if (localiteArray[tempID].type == classname) {
          locationContent += localiteArray[tempID].Info();
        };
      };
    
      $('#' + name).replaceWith(`<div class="row text-center mt-1" id=${name}>${locationContent}</div>`);
    };
    
    
    
    
    
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
    
    */ }
/*let arr1 = new Localite(


    '3',
  'location',
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/sleep.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  
  false,
  
);
let arr2 = new Localite(
    '4',
'location',
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/maroc.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  false,
);
let arr3 = new Localite(
    '5',
  'location',
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/mar3.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  
  false,
  
);
let arr4 = new Localite(
    '6',
'location',
  'wien',
  '1200',
  'hsurnrk',
  '27',
  'img/shirley.png',
  'mireille',
  '21',
  'fevrier',
  '2020',
  
  false,
);

/*function renderOJHTML(classname) {
  let locationContent: string = '';

  for (let tempID in localiteArray) {
    if (localiteArray[tempID].type == classname) {
      locationContent += localiteArray[tempID].Info();
    };
  };

  $('#' + name).replaceWith(`<div class="row text-center mt-1" id=${name}>${locationContent}</div>`);
};





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
