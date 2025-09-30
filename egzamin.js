function oblicz() {

    let iloscrat= document.getElementById("iloscrat").value;

    let r = document.getElementById("checkbox1").checked;
    let j = document.getElementById("checkbox2").checked;

    let  suma =0;
    console.log(r);
    console.log(iloscrat);

    if(r && j) {
        suma = 8000;
    }else if(r && !j) {
        suma = 5000;
    }else if(!r && j) {
        suma = 3000;
    }else {
        suma = 0;
    }
    document.getElementById("wynik").innerHTML = "Wynik: " + suma;

    let rata = suma / iloscrat;
    document.getElementById("rata1").innerHTML = "Rata: " + rata.toFixed(2);

    miasto = document.getElementById("select1").value;
    document.getElementById("miasto1").innerHTML = "Miasto: " + miasto;

}
