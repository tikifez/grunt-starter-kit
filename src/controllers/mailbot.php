<?php
if($_POST['message'] && $_POST['name'] && $_POST['email']) {
  $to      = 'xris@tikidream.com';
  $subject = 'Hell\'s Heart Contact';
  $message = $_POST['name'] . "\r\n" . $_POST['email'] . "\r\n\r\n" .$_POST['message'];
  $headers = 'From: webmaster@hellsheartmovie.com' . "\r\n" .
      'Reply-To: webmaster@hellsheartmovie.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);
}
?>
