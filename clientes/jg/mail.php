<?php
$nome = utf8_decode($_POST["nome"]);
$email = $_POST["email"];
$assunto = utf8_decode($_POST["assunto"]);
$mensagem = utf8_decode($_POST["mensagem"]);
$formcontent=" Nome: $nome \n Email: $email  \n Assunto: $assunto \n Mensagem: $mensagem";
$recipient = "gi_giova@hotmail.com";
$subject = "JG Chocolates";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo("<script type='text/javascript'> alert('Email encaminhado com sucesso!'); location.href='home.html';</script>");
?>