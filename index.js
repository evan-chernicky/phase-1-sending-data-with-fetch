// Add your code here

function submitData (inputName, inputEmail) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail
        })
    })
    .then(response => response.json())
    .then(obj => {
        document.body.innerHTML = obj[ "id" ]

    })
    .catch(function (error) {
        document.body.innerHTML = 'Unauthorized Access'
    })
}

submitData('Evan', 'echernicky@gmail.com')