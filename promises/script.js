

// The Promise Constructor
// ****************************

// var myPromise = new Promise(function(resolve, reject) {
//     if (Math.random() > .5) {
//         resolve("It's your lucky day.");
//     } else {
//         reject('You lose. You get nothing.');
//     }
// });
//
// myPromise
//     .then( val => console.log(val) )
//     .catch( e => console.log(e) )






// without saving it in a var
// ****************************

// new Promise(function(resolve, reject) {
//     if (Math.random() > .5) {
//         resolve("It's your lucky day.")
//     } else {
//         reject("You lose. You get nothing.")
//     }
// }).then(function(val) {
//     console.log(val)
// }).catch(function(e) {
//     console.log(e)
// })







// Promise.all
// ****************************

const https = require('https')

var getDog = new Promise(function(resolve, reject) {
    const options = {
        hostname: 'dog.ceo',
        path: '/api/breeds/image/random'
    }

    https.request(options, res => {

        let body = ''
        res.on('data', chunk => body += chunk )
        res.on('end', () => resolve(JSON.parse(body).message) )

    }).end()
})

var getCardano = new Promise(function(resolve, reject) {
    https.get('https://api.coinmarketcap.com/v1/ticker/cardano/', res => {

        let body = ''
        res.on('data', chunk => body += chunk)
        res.on('end', () => resolve(JSON.parse(body)) )

    }).end()
})

var getTaco = new Promise(function(resolve, reject) {
    https.get('https://taco-randomizer.herokuapp.com/random/', res => {

        let body = ''
        res.on('data', chunk => body += chunk)
        res.on('end', () => resolve(JSON.parse(body)) )

    }).end()
})

Promise.all([
    getDog,
    getCardano,
    getTaco
]).then(function(x) {
    console.log("All of my promises were resolved!", x)
}).catch(function(e) {
    console.log('At least one of my promises was rejected :(', e)
})
