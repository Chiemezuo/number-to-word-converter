$form = document.querySelector('#form')
$div = document.querySelector('#display-area')

$form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`https://number-to-word-converter-api.onrender.com/?number=${$form.number.value}`, {
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => $div.textContent = data.message)
    $form.number.value = ''
})