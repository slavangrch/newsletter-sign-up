const btn = document.querySelector('.btn');
const form = document.getElementById('form');
const email = document.getElementById('email');

email.addEventListener('click', () => {
    form.classList.remove('error-state');
    email.value = '';
})

btn.addEventListener('click', (event) => {
    checkInput(email.value);
    if (checkInput(email.value)) {
        localStorage.setItem('savedEmail', email.value);
    }
})

function checkInput(email) {
    let isValid = false;
    const re =  /\S+@\S+\.\S+/;
    console.log(re.test(email.trim()));
    if (re.test(email.trim())) {
        isValid = true;
    }
    if (!isValid) {
        event.preventDefault();
        form.classList.add('error-state');
        console.log('wrong input');
    } else {

        console.log('right');
    }
    return isValid;
}