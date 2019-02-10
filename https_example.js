const https = require('https');

console.log('did it');


// http request:

 const options = {
     host: 'www.nikmal.co',
     path: '/'
 };

 const callback = (response) => {
    console.log('In response handler callback!');
    console.log('Response:', response);
 };

 console.log('Making request!');

 https.request(options,callback).end();

 console.log('I\'ve made the request!');