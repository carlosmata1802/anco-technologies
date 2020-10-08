window.onload = () => {
    let loader = document.getElementsByClassName('loader')[0];
    setTimeout(() => {
        loader.classList.add('invisible');
    }, 800);
}

async function onSubmit(e) {
    e.preventDefault();
    const { name, company, phone, email, message } = e.target;

    const data = {
        name: name.value,
        company: company.value,
        phone: phone.value,
        email: email.value,
        message: message.value
    }

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let url = 'https://2svplln58k.execute-api.us-east-1.amazonaws.com/dev/sendEmail';
    console.log(data)

    const response = await fetch(url, options).then(x => x.json());
    console.log(response)

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});