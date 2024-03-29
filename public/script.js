
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const flower = document.querySelector('input').value.toLowerCase()
    try {
        const response = await fetch(`https://flower-description-api.onrender.com/api/${flower}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('#about').style.display = 'flex'
        document.querySelector('img').src = data.picture
        document.querySelector('#about').innerText = data.description
    } catch (error) {
        console.log(error)
        document.querySelector('#about').innerText = error.message
    }
}