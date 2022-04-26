let contactContainer = document.getElementById("contact__container");

let form = document.createElement("form");
form.setAttribute("action", "");
form.setAttribute("method", "post");
form.classList.add("contact__form")
contactContainer.appendChild(form);

let heading = document.createElement('h2')
heading.innerHTML = "Contact Us"
heading.classList.add("contact__heading")
contactContainer.appendChild(heading);

let nameLabel = document.createElement('label');
nameLabel.innerHTML = "Name";
nameLabel.classList.add("contact__name")
contactContainer.appendChild(nameLabel);

let inputEl = document.createElement ('input');
inputEl.setAttribute("type", "text");
inputEl.setAttribute("name", "names");
contactContainer.appendChild(inputEl);

let emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email";
emailLabel.classList.add("contact__email")
contactContainer.appendChild(emailLabel);

let emailEl = document.createElement('input')
emailEl.setAttribute("type", "text");
emailEl.setAttribute("name", "emails");
contactContainer.appendChild(emailEl);


let messageLabel = document.createElement('label'); 
messageLabel.innerHTML = "Message";
messageLabel.classList.add("contact__message")
contactContainer.appendChild(messageLabel);

let textareaEl = document.createElement('textarea');
textareaEl.setAttribute("name", "messages");
textareaEl.setAttribute("cols", "10");
textareaEl.setAttribute("rows", "5");
contactContainer.appendChild(textareaEl);

let  submitEl = document.createElement('input'); 
submitEl.setAttribute("type", "submit");
submitEl.setAttribute("name", "dsubmit");
submitEl.setAttribute("value", "SUBMIT");
submitEl.classList.add("contact__submit")
contactContainer.appendChild(submitEl);