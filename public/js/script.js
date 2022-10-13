// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger Menu
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Form Submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbx-9zXTxzG14J6UypEH4bxckxO1YBNMZyks02nesaexbY0aqm2u9dP5BykwQpWqm8kpFA/exec'
const form = document.forms['contact-form']

const alert = document.querySelector('#my-alert')
const btnSend = document.querySelector('#btn-send')
const btnLoading = document.querySelector('#btn-loading')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // show/hide button
    btnSend.classList.toggle('hidden')
    btnLoading.classList.toggle('hidden')

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // show/hide
            alert.classList.toggle('hidden')
            btnSend.classList.toggle('hidden')
            btnLoading.classList.toggle('hidden')
            // reset form
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

// close alert
alert.addEventListener('click', function(){
    alert.classList.toggle('hidden')
})