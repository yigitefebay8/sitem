<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "yigittusem2008@gmail.com";  // Buraya alıcı e-posta adresinizi yazın
    $subject = "Yeni Mesaj: " . $name;
    $body = "Gönderen: $name\nE-posta: $email\nMesaj: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi!";
    } else {
        echo "Mesaj gönderilemedi.";
    }
}
?>
