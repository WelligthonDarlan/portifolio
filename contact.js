const scriptURL = 'https://script.google.com/macros/s/AKfycbwt1BVl4FQL2JR0sQMACNKcqtjTyErDG6zxDE7IZFFrykRyQHxcRx6UYu92VLUIMQkLeg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})