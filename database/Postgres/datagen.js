const fs = require('fs');

// *** LISTINGS
// var listings = {
//   title: ['dream home', 'romantic bungalo', 'rathole', 'mansion', 'serial murder', 'beach house'],
//   price: [10, 99, 56, 132, 400, 1000, 345, 190, 180, 170],
//   type: ['Whole house', 'Whole appartment', 'Whole condo', 'Granny unit', 'Trailer parked on lawn'],
//   bed_count: [1,2,3,4,5,6,7,8,9,10],
//   avg_stars: [1,2,3,4,5],
//   review_count: "generate value between 1 and 10000",
//   owner_user_id: "generate value between 1 and 10000",
//   plus: ['t', 'f'],
// };
// var helper = function() {
//     var title = listings.title[Math.floor(Math.random() * 6)];
//     var price = listings.price[Math.floor(Math.random() * 10)];
//     var type = listings.type[Math.floor(Math.random() * 5)];
//     var bed_count = Math.floor(Math.random() * 11);
//     var avg_stars = Math.floor(Math.random() * 6);
//     var review_count = Math.floor(Math.random() * 10000);
//     var owner_user_id = Math.floor(Math.random() * 10000);
//     var plus = listings.plus[Math.floor(Math.random() * 2)]
//     var string = title + ',' + price + ',' + type + ',' + bed_count + ',' + avg_stars + ',' + review_count + ',' + owner_user_id + ',' + plus + '\n';
//     return string;
// }
// *** IMAGES
// let imageUrls = []
// for (var k = 1; k <= 40; k++) {
//     let imageUrl = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${k}`
//     imageUrls.push(imageUrl);
// }
// var helper = function(count) {
//   var string = imageUrls[Math.floor(Math.random() * 40)];
//   string = string + ', ' + count + '\n';
//   return string;
// }
// *** Recomendations
var secondaryId = function() {
  return Math.floor(Math.random() * 10021944);
}
var helper = function(count) {
  var string = count + ', ' + secondaryId();
  string = string + '\n';
  return string;
}
// *** OPINIONS
// var truthValue = function () {
//   if (Math.floor(Math.random() * 2) === 1) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }
// var helper = function(count) {
//   var string = Math.floor(Math.random() * 10000000) + ', ' + count + ', ' + truthValue() + '\n';
//   return string;
// }
// ***

var realcount = 10021944;

var recursion = function(count) {
  fs.appendFile('recommendations.csv', helper(count), (err) => {
    if (err) throw err;
    if (count < realcount) {
      recursion(count + 1);
    }
  });
}

recursion(1);

// SELECT * FROM recommendations, listings, opinions, images, WHERE recommendations.primary_list_id = listings.id AND opinions.listing_id = listings.id AND images.list_id = listings.id AND listings.id = 99999 LIMIT 10;