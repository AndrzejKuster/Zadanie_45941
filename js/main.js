console.log('Warszat zapisu z walidacją formularza');

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeCheckbox = document.getElementById(`all-agree`);

const validate = (event) => {
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === ``) {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz imie i nazwisko!";

        errors.appendChild(liError);
        console.log('Wpisz imie i nazwisko!');
    }

    if (txtEmail.value.trim() === ``) {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz email!";

        errors.appendChild(liError);
        console.log('Wpisz email!');
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Adres email musi zawierać @!";

        errors.appendChild(liError);
        console.log('Wpisz w email @!');
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Nie wyraziłeś zgody 1!";

        errors.appendChild(liError);
        console.log('Zaznacz zgodę 1!');
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }


    console.log(txtName);
    console.log(txtEmail);
    console.log(`validate()`);
}

const allAgree = () => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    
    agree1.checked=event.target.checked;
    agree2.checked=event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;


    console.log(event.target.checked);
}


console.log(newsletterForm);

newsletterForm.addEventListener('submit', validate);
allAgreeCheckbox.addEventListener('change', allAgree);