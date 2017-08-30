// Counter Code


//submit username/password to login

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
              console.log('user logged in');
              alert('Login Sucessfully');
          } else if (request.status === 403) {
              alert('Username/Password is incorrect');
          } else if (request.status === 500) {
              alert('Something went Wrong on the server');
          }
      } 
      //not done yet
        
    };
    
    //Make the request 
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    console.log(username);
    console.log(password); 
    request.open('POST', 'http://pdbbhole.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
     
   
};