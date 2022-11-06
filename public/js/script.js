// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
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

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// Toggle position same as mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked= false   
}