// Push, Unshift, Shift, Pop

// var words = ["Hey", "you"]
// words.push("what", "you")
// // console.log(words)
//
// words.unshift("Oh")
// console.log(words)
//
// var newWord = words.shift()
// console.log(newWord, " ", words)





// =====================================================================
// ========================== SPLICE ===================================
// =====================================================================

// returns new array of the items between the start and end. Old array IS mutated.
// first param = index at which to start deleting
// second param = # of items to be removed....NOT last index
// third param = what will be replaced

// var lyrics = ["Ginger","we", "are", "the", "best"]
//
// lyrics.splice(2,2,"da")
//
// console.log(lyrics)










// =====================================================================
// ========================== SLICE ====================================
// =====================================================================
// ** returns new array of the items between the start and end index. Old array is NOT mutated.
// first param = start index
// second param = end index
/*

var arr = [0,1,2,3,4]

var sliced = arr.slice(1,4)

console.log(sliced)
*/





// =====================================================================
// ========================== JOIN =====================================
// =====================================================================


// converts the contents an array into a string with each item separated by the
// delimitor specified as the first parameter

// var superArr = ["Batman", "The Flash", "Superman", "Jessica Jones"]
// console.log( superArr.join(' and ') )


// var name = ["M", "I", "K", "E"]
// console.log(name.join(''))






// =====================================================================
// ========================== CONCAT ===================================
// =====================================================================

// returns a new array consisting of the combination of the
// passed in arrays and/or non-array values

// var food = ["Chicken"]
// var x = ["and", "rice"]
// var newFood = food.concat( x )
// console.log(newFood)







// =====================================================================
// ========================== SPLIT ====================================
// =====================================================================

// returns a new array consisting of each item in a string
// separated by a set of characters you specify in the argument.

// var sentence = "I want each of these to be their own index"
// console.log(sentence.split(" "))







// =====================================================================
// ========================== MAP ======================================
// =====================================================================



// var mapArr = ["Everybody", "loves", "raymond"]
//
// console.log(mapArr.map(function(item) {
//     return item + "zzzz"
// }))










// =====================================================================
// Exercise 1 - each ===================================================
// =====================================================================
/*
function each(objOrArr, callback) {
    if (Array.isArray(objOrArr) === true) {
        console.log("its an arr")
       for (var i = 0; i < objOrArr.length; i++) {
           callback(objOrArr[i], i)
       }
   }

   else if (typeof objOrArr === "object") {
       console.log("its an obj")
        for (var key in objOrArr) {
            callback(key, objOrArr[key])
        }
    }

    else {
        console.log("didnt work :\`(")
    }
}
/*

// OBJECT
// each({
//     a: 1,
//     b: 2
// }, function(val, name) {
//     console.log('The value of ' + name + ' is ' + val);
// })

// ARRAY
// each(['a', 'b'], function(val, idx) {
//    console.log('The value of item ' + idx + ' is ' + val);
//  });

// Exercise 2 - Reverse ===================================================
/*
function createArray(arr) {
    var copyArr = arr;
    var copyArr2 = arr;
    var newArr = []

    for (var i=arr.length-1; i >= 0; i--){
        newArr.push(arr[i])
    }

    return newArr;
}


var songLyrics = ["Where", "are", "you", "now"]

var backwards = createArray(songLyrics)
console.log(backwards)
console.log(songLyrics)
*/

// Exercise 3 - getLessThanZero ============================================
/*
function getLessThanZero(arr){
    var newArr = [];

    for (var i=0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var zeroArr = getLessThanZero([1, 2, -1, -90, 10]);

console.log(zeroArr);

zeroArr = getLessThanZero([1, 2])

console.log(zeroArr)
*/

// var reverse = function(arr){
//      var rev_array = [];
//      arr.forEach( function(value) {
//          rev_array.unshift(value);
//      });
//      return (rev_array);
//  };
//
//  console.log(reverse([1,2,3,4,5,6]));
//  console.log(reverse(['a','b','c','d']));
