function subscribe(){
    const buttonElement = document.querySelector('.jsSubscribe');

    if(buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
    } else{
        buttonElement.innerHTML = 'Subscribe';
    }
}