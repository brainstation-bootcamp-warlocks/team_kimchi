let contactContainer = document.getElementById("contact__container");

let form = document.createElement("form");
form.setAttribute("action", "");
form.setAttribute("method", "post");
contactContainer.appendChild(form);

let heading = document.createElement('h2')
heading.innerHTML = "Contact Us"
contactContainer.appendChild(heading);

let line = document.createElement('hr');
contactContainer.appendChild(line);

let linebreak1 = document.createElement('br');
contactContainer.appendChild(linebreak1);

let nameLabel = document.createElement('label');
nameLabel.innerHTML = "Name :";
contactContainer.appendChild(nameLabel);

let inputEl = document.createElement ('input');
inputEl.setAttribute("type", "text");
inputEl.setAttribute("name", "names");
contactContainer.appendChild(inputEl);

let linebreak2 = document.createElement('br');
contactContainer.appendChild(linebreak2);

let emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email :";
contactContainer.appendChild(emailLabel);

let emailEl = document.createElement('input')
emailEl.setAttribute("type", "text");
emailEl.setAttribute("name", "emails");
contactContainer.appendChild(emailEl);

let linebreak3 = document.createElement('br');
contactContainer.appendChild(linebreak3);

let messageLabel = document.createElement('label'); 
messageLabel.innerHTML = "Message : ";
contactContainer.appendChild(messageLabel);

let textareaEl = document.createElement('textarea');
textareaEl.setAttribute("name", "messages");
contactContainer.appendChild(textareaEl);

let linebreak4 = document.createElement('br');
contactContainer.appendChild(linebreak4);

let  submitEl = document.createElement('input'); 
submitEl.setAttribute("type", "submit");
submitEl.setAttribute("name", "dsubmit");
submitEl.setAttribute("value", "Submit");
contactContainer.appendChild(submitEl);