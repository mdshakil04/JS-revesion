var mobile = {
    brand : "Samsung",
    price : 19000,
    storage : "64gb"
}
var priceCount1 = mobile['price']
console.log(priceCount1)
var priceCount2 = mobile.price;
console.log(priceCount2)
var propertiesName = Object.keys(mobile);
console.log(propertiesName)
var propertiesValues = Object.values(mobile)
console.log(propertiesValues)
// Set a value in objects key
mobile.price = 20000;
mobile['brand'] = "Techno"
console.log(mobile)