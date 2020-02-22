var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var localiteArray = [];
var Localite = /** @class */ (function () {
    function Localite(city, zip, address, doornumber, images, author, day, month, year) {
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
    return Localite;
}());
var Market = /** @class */ (function (_super) {
    __extends(Market, _super);
    function Market(city, zip, address, doornumber, images, author, day, month, year, visit, description) {
        var _this = _super.call(this, city, zip, address, doornumber, images, author, day, month, year) || this;
        _this.visit = visit;
        _this.description = description;
        localiteArray.push(_this);
        return _this;
    }
    Market.prototype.marketInfo = function () {
        return "\n     \n      <div class=\"col-10 col-md-4\">\n      <div class=\"card\">\n      \t\t<div class=\"absolute\">\n              <h3 onclick=\"addvisit(" + this.city + ")\">" + this.city + "</h3>\n              \t<button type=\"button\" class=\"btn btn-primary\">\n  \t\t\t\tProfile <span class=\"badge badge-light\">100</span>\n  \t\t\t\t</button>\n                     \n            \t<a href=\"singlemarket.html\" onclick=return marketDetails();><img class=\"card-img-top\" src=\"" + this.images + "\" alt=\"" + this.city + "\" width=\"300\"></a>         \n          \t</div>\n          \t<div class=\"card-img-overlay\">\n            \t<p class=\"card-text\">" + this.author + this.day + this.month + this.year + "</p>\n          \t</div>\n        </div>\n      </div>\n    \n    ";
    };
    Market.prototype.marketDetails = function () {
        return "\n    <div class=\"col\">\n        <!-- Jumbotron -->\n          <div class=\"jumbotron h-md-50 mx-2\" style=\"background-image: url(img/\"" + this.images + "\" ); background-size: cover; background-repeat: no-repeat;\">\n        \t\n            <h1>There's more to boots than meets the eye...</h1>\n            <p>...there's the inside portion where you put your feet.</p>\n          </div>\n     </div>   \n        <!-- End of Jumbotron -->\n      \n      <div class=\"container pt-3\">\n     \n            <h4 class=\"card-title\">city: " + this.city + "</h4>\n            <p class=\"card-text\">zip: " + this.zip + "</p>\n            <p class=\"card-text\">address: " + this.address + "</p>\n            <p class=\"card-text\">doornumber: " + this.doornumber + "</p>\n            <p class=\"card-text\">description: " + this.description + "</p>\n          \n        </div>\n      \n    ";
    };
    return Market;
}(Localite));
var cityl = new Market("wien", 2700, "steinbach", 36, 'img/market1.png', "mireille", 23, "juillet", 09, "", false);
document.write(cityl.marketInfo());
document.write(cityl.marketDetails());
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
