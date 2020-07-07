window.onload = () => {
    let loader = document.getElementsByClassName('loader')[0];
    setTimeout(() => {
        loader.classList.add('invisible'); 
    }, 1000);
}