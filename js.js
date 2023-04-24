let sendButton = document.querySelector('.send');
console.log(sendButton)

sendButton.onclick = function() {
    let minutes = document.querySelector('.minutes')
    let paragraph = document.querySelector('.labelText');
    let jumps = Math.floor(minutes.value / 10) * 3
    paragraph.textContent = 'За ' + minutes.value + ' минут в соцсетях полагается ' + jumps + ' прыжков.';
    console.log('За ' + minutes.value + ' минут в соцсетях полагается ' + jumps + ' прыжков.');
};