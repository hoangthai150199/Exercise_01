const selectElement = document.querySelector('#exampleFormControlSelect1');
selectElement.onchange = function(event){
    const valueSelected = event.target.value;
    const liElements = document.querySelectorAll('li');

    // Reset all item's active
    for(let i = 0; i < liElements.length; i++) {
        liElements[i].classList.remove('active-item')
    }

    for(let i = 0; i < liElements.length; i++) {
        switch (valueSelected) {
            case 'reset':
            case 'select':
                liElements[i].classList.remove('active-item');
                break;
            case 'even':
                if(i%2 !== 0) {
                    liElements[i].classList.add('active-item')
                }
                break;
            case 'odd':
                if(i%2 === 0) {
                    liElements[i].classList.add('active-item');
                }
                break;
            default:
                liElements[+valueSelected - 1].classList.add('active-item');
                break;
        }
    }
}
