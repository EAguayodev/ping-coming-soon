const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if (!emailValue) {
      // say its empty
      email.classList.add('error');
      small.innerText = 'Email cannot be blank';
      small.style.display = 'block';
    } else if (!isvalidEmail(emailValue)) {
      // say its invalid
      email.classList.add('error');
      small.innerText = 'Email is invalid!';
      
    } else {
      // submit it
      email.classList.remove('error');
      email.style.border = 'green';
      email.classList.add('success');
      small.style.display = 'block';
      small.innerText = "You have subscribed";
    }
});

function isvalidateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}