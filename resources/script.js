const form = document.getElementById("form")
const mail = document.getElementById("email")
const error = document.getElementById("error")

form.addEventListener('submit', function(event){

    event.preventDefault()
    const email = document.getElementById("email")

   
        if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            email.style.border = '1px solid #FF4343'
            email.style.borderRadius = '8px'
            error.style.display = 'flex'
            error.innerHTML = 'Check your email please'
        }
        if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            email.style.border = ''
            email.style.borderRadius = ''
            error.style.display = 'none'
            errorMsg.innerHTML = ''
        }
})