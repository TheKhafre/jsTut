function toggled() {
    const myToggle = document.querySelector('.toggler-1');

    if (myToggle.classList.contains('is-toggle')) {
        myToggle.classList.remove('is-toggle');
    } else {
        /*                 removeOn(); */
        myToggle.classList.add('is-toggle')
    }
}

function toggled2() {
    const myToggle2 = document.querySelector('.toggler-2');

    if (myToggle2.classList.contains('is-toggle')) {
        myToggle2.classList.remove('is-toggle');
    } else {
        /*                 removeOn(); */
        myToggle2.classList.add('is-toggle')
    }
}

function toggled3() {
    const myToggle3 = document.querySelector('.toggler-3');

    if (myToggle3.classList.contains('is-toggle')) {
        myToggle3.classList.remove('is-toggle');
    } else {
        /*                 removeOn(); */
        myToggle3.classList.add('is-toggle')
    }
}

/*         function removeOn(){
    const prevButton = document.querySelector('.is-toggle');

    if(prevButton){
        prevButton.classList.remove('.is-toggle');
    }
} */