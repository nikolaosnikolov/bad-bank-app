const toast = (message, condition) => {
    const toast = document.getElementById('snackbar')
    const myCondition = document.getElementById('cond')
    const texting = document.getElementById('text')
    // const tick = document.getElementById('tick')
    // const error = document.getElementById('error')
    texting.textContent = message
    toast.className = 'show'

    // tick.style.setProperty('display', 'none')
    // error.style.setProperty('display', 'none')

    condition
    ? (() => {
        myCondition.innerHTML = `<svg id="tick" xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m17.583 27.625 11.792-11.792-2.083-2.041-9.709 9.75-4.916-4.917-2.042 2ZM20 36.667q-3.417 0-6.458-1.313-3.042-1.312-5.313-3.583t-3.583-5.313Q3.333 23.417 3.333 20q0-3.458 1.313-6.5 1.312-3.042 3.583-5.292t5.313-3.562Q16.583 3.333 20 3.333q3.458 0 6.5 1.313 3.042 1.312 5.292 3.562t3.562 5.292q1.313 3.042 1.313 6.5 0 3.417-1.313 6.458-1.312 3.042-3.562 5.313T26.5 35.354q-3.042 1.313-6.5 1.313Zm0-2.792q5.792 0 9.833-4.042 4.042-4.041 4.042-9.833t-4.042-9.833Q25.792 6.125 20 6.125t-9.833 4.042Q6.125 14.208 6.125 20t4.042 9.833q4.041 4.042 9.833 4.042ZM20 20Z"/></svg>`
        // tick.style.removeProperty('display')
        // error.style.setProperty('display', 'none')
    })()
    : (() => {
        myCondition.innerHTML = `<svg id="error" xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M13.833 28.125 20 21.958l6.167 6.167 1.958-1.958L21.958 20l6.167-6.167-1.958-1.958L20 18.042l-6.167-6.167-1.958 1.958L18.042 20l-6.167 6.167ZM20 36.667q-3.417 0-6.458-1.313-3.042-1.312-5.313-3.583t-3.583-5.313Q3.333 23.417 3.333 20q0-3.458 1.313-6.5 1.312-3.042 3.583-5.292t5.313-3.562Q16.583 3.333 20 3.333q3.458 0 6.5 1.313 3.042 1.312 5.292 3.562t3.562 5.292q1.313 3.042 1.313 6.5 0 3.417-1.313 6.458-1.312 3.042-3.562 5.313T26.5 35.354q-3.042 1.313-6.5 1.313Zm0-2.792q5.792 0 9.833-4.042 4.042-4.041 4.042-9.833t-4.042-9.833Q25.792 6.125 20 6.125t-9.833 4.042Q6.125 14.208 6.125 20t4.042 9.833q4.041 4.042 9.833 4.042ZM20 20Z"/></svg>`
        // error.style.removeProperty('display')
        // tick.style.setProperty('display', 'none')
    })()
    setTimeout(() => {
        toast.className = toast.className.replace("show", "")
    }, 3000)
}

export default toast