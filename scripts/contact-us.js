let contactContainer = document.querySelector("contact__container");
console.log(contactContainer)

let form = document.createElement("form");
form.setAttribute("action", "");
form.setAttribute("method", "post");
contactContainer.appendChild(form);
