/*
var obj = Object.create(null, {
    city: {
        value: 'Berlin'
    }
});

console.log(delete obj.city) //false (error in strict mode)
// console.log(obj.city);

obj.city = 'Dallas';
// console.log(obj.city); //'Berlin'

for (var prop in obj) {
    console.log(prop); //'city' is not logged
}
*/


// var obj = {
//   city: 'Berlin'
// };
//
// obj.country = 'Germany';
//
// delete obj.city; //true
//
// obj.country = 'Canada';
//
// obj.country; //'Canada'
//
// for (var prop in obj) {
//   console.log(prop); //'country' is logged
// }
//
// obj.anything = 123
//
// console.log(obj.valueOf())


var proto = {
  prop: 'whatever'
};

var obj = Object.create(proto);

console.log(obj.hasOwnProperty('prop'))
