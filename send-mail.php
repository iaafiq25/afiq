<?php
if(!isset($_POST['email'])) exit;

$to = $_POST['email'];
$from = "iaafiq25@gmail.com";
$subject = "CV | IA Afiq – UI/UX Designer";

$message = "Hello,

Please find my CV attached.

Regards,
IA Afiq
UI / UX Designer
";

$file = "cv.pdf";
$content = chunk_split(base64_encode(file_get_contents($file)));
$uid = md5(uniqid(time()));

$header = "From: IA Afiq <$from>\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";

$body = "--".$uid."\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$body .= $message."\r\n\r\n";

$body .= "--".$uid."\r\n";
$body .= "Content-Type: application/pdf; name=\"cv.pdf\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment; filename=\"cv.pdf\"\r\n\r\n";
$body .= $content."\r\n\r\n";
$body .= "--".$uid."--";

mail($to,$subject,$body,$header);

echo "<script>alert('CV sent successfully');window.location.href='index.html';</script>";
?>
