

function app() {
    let age = document.getElementById("ageElement").value
    document.getElementById("result").innerText = "Вам " + age + " лет";
    document.getElementById("ageElement").value = '';
}

function app() {
    var name = document.getElementById("nameElement").value;
    document.getElementById("result").textContent = "Привет, " + name + "!";
}


var name = prompt("Как вас зовут?")
alert ("Привет" + name )
