const API_KEY = 'patZKP7M8W5vm25D0.344fa51e7694cf3a7666a78d55d112be97cce45e54513aed7805e81cc890503e'
const BASE_ID = 'appxSYrZ83jlby5TW'
const TABLE_ID = 'tblLxu9AA4tTa4Klk'


const btn = document.querySelector('#join-btn')
const popupCloseBtn = document.querySelector('#close-popup')
const popupContainer = document.getElementById('popup-container')


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


btn.addEventListener('click', () => {
    const email = document.getElementById('email').value
    if (validateEmail(email)) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${API_KEY}`);
        myHeaders.append("Content-Type", "application/json");

        var data = {
            fields: {
                Email: `${email}`
            }
        }
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, requestOptions)
            .then(response => response.text()).then(popupContainer.classList.remove('none-display'))
            .catch(error => console.log('error', error))
    } else {
        alert("Enter a valid email ID")
    }
})

popupCloseBtn.addEventListener('click', () => {
    popupContainer.classList.add('none-display')
})