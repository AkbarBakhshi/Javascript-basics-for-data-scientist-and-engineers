// 0 - Adding Comments
// 1 - log to console

// console.log('welcome here')

// 2 - variables and constants

const number = 12
console.log('number = ', number)
let number1 = 14
console.log('initial number1 = ', number1)

number1 = number * 2 // Check the console
console.log('final number1 = ', number1)

// 3 - target elements
// 3.1 - by Id
let subscribeButton = document.getElementById('my-form-button')
console.log(subscribeButton)

// 3.2 - by class name
const contactSubmitButton = document.getElementsByClassName('btn')
console.log(contactSubmitButton)

// 3.3 - query selector
subscribeButton = document.querySelector('#my-form-button') 
console.log(subscribeButton)

const work = document.querySelector('section#work h3')
console.log(work)

add20()

// 4 - functions
function add20() {
    number1 += 20
}
console.log(number1)

// 5 - callback function with event listeners
subscribeButton.addEventListener('mouseover', () => {
    console.log('hover')
    subscribeButton.style.color = 'white'
})

// 6 - Style using javascript
subscribeButton.style.marginLeft = '10px'

// 7 - A Small Challenge
// Go to https://www.latenightcoders.club/community/topics/48625

// =======================//
// click on the navbar brand and change the color to blue and then back to white as you click again
// ======================//