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
var Market = /** @class */ (function () {
    function Market(city, zip, address, doornumber, images, author, day, month, year, description, visit) {
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
    Market.prototype.marketDetails = function () {
        return "\n    <div class=\"col\">\n        <!-- Jumbotron -->\n          <div class=\"jumbotron h-md-50 mx-2\">\n        \t<img class=\"card-img-top\" src=\"" + this.images + "\" alt=\"" + this.city + "\" > \n            <h1>There's more to boots than meets the eye...</h1>\n            <p>...there's the inside portion where you put your feet.</p>\n          </div>\n     </div>   \n        <!-- End of Jumbotron -->\n      \n      <div class=\"container pt-3\">\n     \n            <h4 class=\"card-title\">city: " + this.city + "</h4>\n            <p class=\"card-text\">zip: " + this.zip + "</p>\n            <p class=\"card-text\">address: " + this.address + "</p>\n            <p class=\"card-text\">doornumber: " + this.doornumber + "</p>\n            <p class=\"card-text\">description: " + this.description + "</p>\n          \n        </div>\n      \n    ";
    };
    return Market;
}());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip, address, doornumber, images, author, day, month, year, visit, description, meetanddrink) {
        var _this = _super.call(this, city, zip, address, doornumber, images, author, day, month, year, description, meetanddrink) || this;
        _this.visit = visit;
        _this.description = description;
        _this.meetanddrink = meetanddrink;
        localiteArray.push(_this);
        return _this;
    }
    Events.prototype.eventsDetails = function () {
        return "\n    <div class=\"col\">\n        <!-- Jumbotron -->\n          <div class=\"jumbotron h-md-50 mx-2\">\n        \t<img class=\"card-img-top\" src=\"" + this.images + "\" alt=\"" + this.city + "\" > \n            <h1>There's more to boots than meets the eye...</h1>\n            <p>...there's the inside portion where you put your feet.</p>\n          </div>\n     </div>   \n        <!-- End of Jumbotron -->\n      \n      <div class=\"container pt-3\">\n     \n            <h4 class=\"card-title\">city: " + this.city + "</h4>\n            <p class=\"card-text\">zip: " + this.zip + "</p>\n            <p class=\"card-text\">address: " + this.address + "</p>\n            <p class=\"card-text\">doornumber: " + this.doornumber + "</p>\n            <p class=\"card-text\">description: " + this.description + "</p>\n            <p class=\"card-text\">description: " + this.meetanddrink + "</p>\n\n          \n        </div>\n      \n    ";
    };
    return Events;
}(Market));
/*here start the objects*/
var arenaviolet = new Market('wien', '1200', 'hsurnrk', '27', 'img/sleep.png', 'mireille', '21', 'fevrier', '2020', 'skjfsajgkeuarkjncjhfb', false);
var aubergeamuse = new Market('wien', '1200', 'hsurnrk', '27', 'img/maroc.png', 'mireille', '21', 'fevrier', '2020', 'skjfsajgkeuarkjncjhfb', false);
var violet = new Market('wien', '1200', 'hsurnrk', '27', 'img/mar3.png', 'mireille', '21', 'fevrier', '2020', 'skjfsajgkeuarkjncjhfb', false);
var amuse = new Market('wien', '1200', 'hsurnrk', '27', 'img/shirley.png', 'mireille', '21', 'fevrier', '2020', 'skjfsajgkeuarkjncjhfb', false);
var cityl = new Market("wien", 2700, "steinbach", 36, 'img/market1.png', "mireille", 23, "juillet", 09, "", false);
document.getElementById('content').innerHTML = cityl.marketDetails();
