function validation(){
    /*var x= document.forms["fform"]["username"].value;*/
    /*var x= fform.username.value;
    var lenx= x.length;
    var y= fform.password.value;
    var leny= y.length;
    var z=fform.Confrim_Password.value; 
    var a= fform.email.value;
    var atpos=a.indexOf("@"); 
    var dotpos=a.lastIndexOf(".");
    if(x== "" || lenx<6 || x== null){
        alert("Username:Enter more than 6 characters");
        return false;
    }
    if(y== "" || leny<6){
        alert("Password:Enter more than 6 characters");
        return false;
    }
    if(z!=y){
        alert("Password and Confrim Password should be the same");
        return false;
    }
    if(atpos<3 || dotpos<atpos+3 || dotpos<a.length(3)){
        alert("Not a valid email id"); 
        return false;
    }
    else{
        alert("Congragulations! you have submited successfully");
        return false;
    }*/
    // Perform authentication and obtain the token
    const token = "1234"; // Replace with the actual token received from the server

    // Store the token securely in local storage
    localStorage.setItem('token', token);

    // Redirect to the restricted page upon successful login
    window.location.href = 'welcome.html';


    /*function fetchData() {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
        const apiUrl = 'http://127.0.0.1:8000/api/login/';

        // Make an AJAX request using the Fetch API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the data and update the HTML content
                const contentDiv = document.getElementById('content');
                contentDiv.innerHTML = data.content; // Assuming the API returns content in a 'content' field
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Call the fetchData function when the page loads
    window.onload = fetchData;*/

    
}
