function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,

        email_id: document.getElementById("email_id").value,

        message: document.getElementById("message").value
    }

    emailjs.send("service_mb7ah3f", "template_4zcgpdc", params ).then(function(res){
        alert("Message sent successfully!" + res.status);
    })
}