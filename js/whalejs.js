/***************************************************************************/
/*                     JavaScript for Bootstrap - Whale with me            */
/*                     Author: Ruyi Xia Ye                                 */
/*                     Version: 1.0                                        */
/*                     Date: February 2023                                 */
/*                     Comments: Lenguajes de Marcas project               */
/***************************************************************************/

function validation() {

    let valid = true;
    let name = document.getElementById('name').value;
    let surnames = document.getElementById('surnames').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let terms = document.getElementById('terms');

    if(name == "" || /^\s+$/.test(name) || /[0-9]/.test(name) || !/[a-zñ]{2,}/i.test(name)) {
        document.getElementById('nameHelp').style.visibility="visible";
        document.getElementById('name').style.borderColor="orange";
        valid = false;
    }

    if(surnames == "" || /^\s+$/.test(surnames) || /[0-9]/.test(surnames) || !/[a-zñ]{2,}/i.test(surnames)) {
        document.getElementById('surnamesHelp').style.visibility="visible";
        document.getElementById('surnames').style.borderColor="orange";
        valid = false;
    }

    if(email=="" || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/i.test(email)) {
        document.getElementById('emailHelp').style.visibility="visible";
        document.getElementById('email').style.borderColor="orange";
        valid = false;
    }

    if(city == 0) {
        document.getElementById('cityHelp').style.visibility="visible";
        document.getElementById('city').style.borderColor="orange";
        valid = false;
    }

    if(!terms.checked) { 
        document.getElementById('termsHelp').style.visibility="visible";
        document.getElementById('terms').style.borderColor="orange";
        valid = false;
    }

    return valid;

}

/*He tenido que quitar la función Reset() del HTML porque esta función me borra lo escrito en un campo al pasar al siguiente, incluso sin haber pulsado el botón submit.*/
function reset(id) {
    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="lightgray";
}