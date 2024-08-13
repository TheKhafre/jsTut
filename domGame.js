function subscribe(){
    const buttonElement = document.querySelector('.jsSubscribe');

    if(buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('isSubscribed');
    } else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('isSubscribed')
    }
}