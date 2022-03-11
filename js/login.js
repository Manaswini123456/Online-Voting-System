function cap()
{
    var alphanum = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                   'U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k',
                   'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


const a = alphanum[Math.floor(Math.random()*62)];
const b = alphanum[Math.floor(Math.random()*62)];
const c = alphanum[Math.floor(Math.random()*62)];
const d = alphanum[Math.floor(Math.random()*62)];
const e = alphanum[Math.floor(Math.random()*62)];
const f = alphanum[Math.floor(Math.random()*62)];

const sum = a+b+c+d+e+f;

document.getElementById("capt").value = sum;
}

function validcap()
{
    var string1 = document.getElementById('capt').value;    
    var string2 = document.getElementById('textinput').value;
    
    if(string1===string2)
    {
        alert("Login form is validated Succesfully");
        return true;
    }
    else{
        alert("Please enter a valid captcha");
        return false;
    }

}