<?php
$nome = utf8_decode($_POST["nome"]);
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$assunto = utf8_decode($_POST["assunto"]);
$mensagem = utf8_decode($_POST["mensagem"]);
$formcontent=" Nome: $nome \n Email: $email  \n Telefone: $telefone  \nAssunto: $assunto \n Mensagem: $mensagem";
$recipient = "wellington@fiquebemseguros.com.br";
$subject = "Contato Site";
$mailheader = "From: contato@fiquebemseguros.com.br \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo("<script type='text/javascript'> alert('Email encaminhado com sucesso!'); location.href='index.html';</script>");
?>