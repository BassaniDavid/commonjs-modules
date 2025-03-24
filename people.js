const names = require("./names.js")

const hobbiesFun = require("./hobbies.js")

console.log(names('mario','rossi'))

console.log(hobbiesFun('a','b','c'))




function result () {
    return{
        fullName: names('mario','rossi').firstName + ' ' + names('mario','rossi').lastName,
        hobbies: `${hobbiesFun('arrampicata','trekking', 'lettura')[0]}, ${hobbiesFun('arrampicata','trekking', 'lettura')[1]}, ${hobbiesFun('arrampicata','trekking', 'lettura')[2]}`
    }
}

console.log(result(names,hobbiesFun))

