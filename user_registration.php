<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$name = $obj['name'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM UserRegistrationTable WHERE name='$name'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $nameExistMSG = 'اسم المستخدم موجود .. الرجاء المحاوله مرة أخرى';
 
 // Converting the message into JSON format.
$nameExistJson = json_encode($nameExistMSG);
 
// Echo the message.
 echo $nameExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into UserRegistrationTable (name,email,password) values ('$name','$email','$password')";
$Sql_Query2 = "insert login (email,password) values ('$email','$password')";
 
 if(mysqli_query($con,$Sql_Query) && mysqli_query($con,$Sql_Query2) ){
 
 // If the record inserted successfully then show the message.
$MSG = ' تم تسجيل الدخول بنجاح ' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);
?>