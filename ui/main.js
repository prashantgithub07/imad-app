// Counter Code
var button = document.gerElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make request to counter end point
    
    
    //cpture the response and store it in variable
    
    
    // Render the variable in the correnct span
    counter = counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
    
};