document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.init("service_5la9ixe"); // EmailJS kullanıcı ID'nizi buraya yazın

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("your_service_id", "your_template_id", templateParams)
        .then(function(response) {
            alert("Mesajınız başarıyla gönderildi!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("Mesaj gönderilemedi.");
        });
});
