// Counter Code
var button = document.getElementById('counter'); 
button.onclick = function () {
    
    //create request object
    var request = new XMLHttpRequest();
    
    
    //cpture the response and store it in variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
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

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // should make request to server and send name
    // Capture a list of names and render it as a list
    //create request object
    var request = new XMLHttpRequest();
    
    
    //cpture the response and store it in variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
               var list = '';
                for (var i=0; i<names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
          }
      } 
      //not done yet
        
    };
    
    //Make the request 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://pdbbhole.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
     
   
};