


function wyswietl_wiek(){
    let w = document.getElementById("wiek").value;

    document.getElementById("wynik_wiek").innerHTML =  w ;


}


function wyswietl() {
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    
    document.getElementById("wynik").innerHTML = "Imię: " + imie + ", Nazwisko: " + nazwisko;
}

document.getElementById('wiek').addEventListener("change", wyswietl_wiek);
