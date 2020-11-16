function send(event) {
    event.preventDefault();           
    Email.send({
      name:document.getElementById('name').value,    
      Host : "smtp.gmail.com",
      Username : "Mandeep",
      Password : "soyebcoder786",
      To : "codewithsoyeb@gmail.com",
      From : document.getElementById('email').value,
      Subject : document.getElementById('subject').value,
      Body : document.getElementById('message').value
      }).then(function(response){ 
       if (response == 'OK') {              
           alert("Mail sent succeessfully");
        } else {
            throw new Error("Error: " + response.statusText);
        } 
     });

}  