function sendEmail() {
  let contact_name = document.getElementById('contact_name').value
  let contact_email = document.getElementById('contact_email').value
  let contact_message = document.getElementById('contact_message').value
  Email.send({
    Host : "smtp.gmail.com",
    Username : "contact.atreides@gmail.com",
    Password : "SAGAM2021!",
    // To use a secure token and hide our credentials (work in progress)
    // SecureToken : "ff879221-d2c2-4687-aef5-21e455cc5de5 ",
    To : 'contact.atreides@gmail.com',
    From : "contact.atreides@gmail.com",
    Subject: `New contact from ${contact_name}`,
    Body: `<html>Contact from: ${contact_email}<br><br>${contact_message}</html>`
  }).then(alert("Thank you!")
  );
}
