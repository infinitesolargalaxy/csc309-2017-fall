const request = require('request')

request.get('https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2017-01-01', function (err,res, body) {
if(err) {
console.log(err)
} else {
data = JSON.parse(body)

//Modify this to access different JSON fields
//'https://ssd-api.jpl.nasa.gov/fireball.api?limit=5'
//console.log(data) //ex1
//console.log(data.signature.source) //ex2, get name of api
//console.log(data.fields) //ex3, get datafield names
//console.log(data.data[3][8]) //ex4 get velocity (9th in array) of 4th entry
//console.log(data.count) //ex5 get count of data after january 2017
}
})
