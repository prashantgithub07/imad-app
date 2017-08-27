// Counter Code
var button = document.getElementById('counter'); 
button.onclick = function () {
    
    //create request object
    var request = new XMLHttpRequest();
    
    
    //cpture the response and store it in variable
    request.onreadystatechange = function () {
      if (request.readystate === XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      } 
      //not done yet
        
    };
    
    //Make the request 
    request.open('GET', 'http://pdbbhole.imad.hasura-app.io/counter', true);
    request.send(null);
     
};