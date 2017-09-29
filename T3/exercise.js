var request = require('request') //This gets the library

//var query = 'http://wolf.teach.cs.toronto.edu:3090/number'
function addTwoNumbers(url, callback) {
    
        request.get(url, function (err, resp, body){
            var data = JSON.parse(body)
            /*
                let us assume data is of the form 
                data = {
                    number: 40
                }
            */
            var number1 = data['number'];
	    console.log("Number 1 is: " + number1);
            // we are nesting another request within the callback of the first request
            request.get(url, function (err, resp, body) {
                var data = JSON.parse(body)
                var number2 = data['number'];
		console.log("Number 2 is: " + number2);
                var sum = number1 + number2
                console.log("Sum is: " + sum);
		
		callback(sum)
            })
        })
    }
    
//addTwoNumbers('http://wolf.teach.cs.toronto.edu:3090/number') //Call function

//Use callback to get sum
addTwoNumbers('http://wolf.teach.cs.toronto.edu:3090/number', function(sum) {
  console.log("Callback: ", sum)
})
