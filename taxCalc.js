function keydownHandler(event){
    if(event.key === 'Enter'){
        calCost();
    }
}

function calCost(){
    const valueElement = document.querySelector('.inputJS');
    let priceUpdate = Number(valueElement.value);

    document.querySelector('.totalOut').innerHTML = '';
    document.querySelector('.error-message').innerHTML = '';

    if(priceUpdate <= 0){
        document.querySelector('.error-message').innerHTML = 'Error: cost cannot be less than $0';

        return;
    }

    if(priceUpdate < 40){
        priceUpdate = priceUpdate + 10;
    }

    document.querySelector('.totalOut').innerHTML = `$${priceUpdate}`
}