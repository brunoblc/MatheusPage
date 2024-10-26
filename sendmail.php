<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados enviados via POST e sanitiza
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $comment = htmlspecialchars(trim($_POST['comment']));

    // Define o destinatário e o assunto do e-mail
    $to = "brunoluiz_2210@hotmail.com";
    $subject = "Novo contato recebido no site";

    // Monta a mensagem do e-mail
    $message = "Nome: $name\n";
    $message .= "Email: $email\n";
    $message .= "Telefone: $phone\n";
    $message .= "Mensagem:\n$comment\n";

    // Configura os cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envia o e-mail e retorna o status
    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
