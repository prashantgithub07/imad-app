// Counter Code


//submit username/password to login

var submit = document.getElementById('login_btn');
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
          submit.value = 'Login';
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
    submit.value = 'Logging in...';
   
};

var register = document.getElementById('register_btn');
register.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              alert('User created successfully');
          } else if (request.status === 500) {
              alert('Could not register the user');
          }
          register.value = 'Register';
      }  
      // Not done yet
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://coco98.imad.hasura-app.io/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));        
    register.value = 'Rugistering...';
};