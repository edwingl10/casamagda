const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

document.getElementById("contact-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const body = `name: ${name.value}\nemail: ${email.value}\n\n\n${message.value}`;

    window.location.href = `mailto:casamagda37@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body)}`;

    name.value = email.value = subject.value = message.value = "";
});