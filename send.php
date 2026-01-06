<?php
if($_SERVER["REQUEST_METHOD"] === "POST"){

  $name    = $_POST['name'];
  $email   = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = "iaafiq25@gmail.com";
  $mail_subject = "New Contact Message: $subject";

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email\r\nReply-To: $email";

  if(mail($to, $mail_subject, $body, $headers)){
    header("Location: index.html?success=1#contact");
  } else {
    header("Location: index.html?error=1#contact");
  }
}
?>
