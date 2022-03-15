let input = document.getElementById('calcuation-result')

document.querySelectorAll('.section .button, .section .result').forEach(element => {
    element.addEventListener('click', function(event) {
        let buttonValue = event.target.getAttribute('value');

    if(buttonValue === 'C') {
        input.value = ''
    } else if (buttonValue === '=') {

        if(!input.value.length) {
            alert('Please input for calculation')
        } else if (eval(input.value) == Infinity) {
            alert('Please check inputed data')
        } else {
            input.value = eval(input.value)
        }
    
    } else {
        input.value += event.target.getAttribute('value')
    }
    })
})