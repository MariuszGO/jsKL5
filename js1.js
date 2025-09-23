


function wyswietl_wiek(){
    let w = document.getElementById("wiek").value;

    document.getElementById("wynik_wiek").innerHTML =  w ;


}

document.getElementById('wiek').addEventListener("change", wyswietl_wiek);


function wyswietl() {
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    
    document.getElementById("wynik").innerHTML = "Imię: " + imie + ", Nazwisko: " + nazwisko;
}



const wejscie = document.getElementById('wejscie1');
    const wyjscie = document.getElementById('wyjscie1');

    wejscie.addEventListener('input', function() {
      const tekst = wejscie.value; // Pobranie wartości z pola
      wyjscie.textContent = `Wprowadzono: ${tekst}`; // Wyświetlenie wprowadzonych danych
    });




    const form = document.getElementById('myForm');

form.addEventListener('change', function(event) {
  
  event.preventDefault();

  
  const imie = document.getElementById('imief').value;
  const nazwisko = document.getElementById('nazwiskof').value;
  const wiek = document.getElementById('wiekf').value;

  //console.log("Imię:", imie);
  //console.log("Nazwisko:", nazwisko);
  //console.log("Wiek:", wiek);
    wyjscief.textContent = `Wprowadzono: ${imie} ${nazwisko} ${wiek}`;
    
});