var request = require('request')
var URL = 'http://wolf.teach.cs.toronto.edu:3090/number'; // enter the correct URL for API endpoint

request.get(URL, function (err, response, body){
  if (err) {
    console.log(err)
  } else {
    var data = JSON.parse(body)
    //This is how we add stuff to the JSON object
    data['name'] = 'Michael Ly';
     data['utorid'] = 'lymicha6';
    var postRequestOptions = {
      url: 'http://wolf.teach.cs.toronto.edu:3090/number', // enter the correct URL for API endpoint
      
      method: 'POST', 
      json: data, // did you remember to update data ?
      headers: {
        'Content-Type': 'application/json'
      }
    }

    request(postRequestOptions, function(err, response, body) {
      if (err) {
          console.log(err)
      } else {
          console.log(body);
      }
    })
  }
});
