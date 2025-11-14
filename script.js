function sendMail() {
    let details = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    const serviceID = "service_31mma3e";
    const templateID = "template_1hv74ne";

    emailjs.send(serviceID, templateID, details)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}