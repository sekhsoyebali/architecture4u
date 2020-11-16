<?php
// variable setting
$name = $_REQUEST['name']
$email = $_REQUEST['email']
$message = $_REQUEST['message']

// check input field
if (empty($name) || empty($email) || empty($message)){
    echo "Please fill all the fields";
}
else{
    mail("sakibali30082005@gmail.com", "Message to Architcture", $message, "From: $name <$email>");
    echo "<script type='text/javascript'>alert('Your Message Sent Successfully.');
    window.history.log(-1);
    </script>";
}
?>