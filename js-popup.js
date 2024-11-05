const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');
const agreeButton = document.getElementById('agreeButton');

function setCookie(name, value, days)
{
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

    const cookie = name + "=" + value + ";" + expires +";path=/";
    document.cookie = cookie;
}

function getCookie(name) 
{
    const cookieName = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}


function showPopup() 
{
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

if (!getCookie('popupAgreed')) 
{
    showPopup();
}

agreeButton.addEventListener('click', function() 
{
    popup.style.display = 'none';
    overlay.style.display = 'none';
    setCookie('popupAgreed', 'true', 30);
});
