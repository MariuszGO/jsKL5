function wyswietl() {   
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
 //   alert("Imię: " + imie + "\nNazwisko: " + nazwisko + "\nEmail: " + email);
    document.getElementById("demo").innerHTML = "Imię: " + imie + "<br>Nazwisko: " + nazwisko + "<br>Email: " + email;
}