let selectElement = document.querySelector('#exampleFormControlSelect1');
selectElement.onchange = function(event){
    let valueSelected = event.target.value;
    let liElements = document.querySelectorAll('li');
    //======
    for(let i = 0; i < liElements.length; i++) {
        liElements[i].classList.remove('active-item')
    }
    // =======
    if(valueSelected === 'even') {
        for(let i = 0; i < liElements.length; i++) {
            if(i%2 === 1) {
                liElements[i].classList.add('active-item')
            }
        }
    } else if (valueSelected == 'odd') {
        for(let i = 0; i < liElements.length; i++) {
            if(i%2 === 0) {
                liElements[i].classList.add('active-item')
            }
        }
    } else if(valueSelected == 'reset') {
        for(let i = 0; i < liElements.length; i++) {
            liElements[i].classList.remove('active-item')
        }
    } else {
        liElements[+valueSelected - 1].classList.add('active-item')
    }
}

