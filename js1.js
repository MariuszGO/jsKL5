


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

form.addEventListener('input', function(event) {
  
  event.preventDefault();

  
 // const imie = document.getElementById('imief').value;
  const nazwisko = document.getElementById('nazwiskof').value;
  const wiek = document.getElementById('wiekf').value;

    wyjscief.innerHTML = `Imię: ${imief.value} <br /> Nazwisko:${nazwisko} <br>Wiek: ${wiek} <br> email: ${emailf.value}`;
    
});


const inputElement = document.getElementById('imief');
inputElement.addEventListener('input', function() {
const regex = new RegExp('^[a-zA-Z]+$');
const str = imief.value;

if(regex.test(str)){
    informacja.innerHTML = '';
} else {
    informacja.innerHTML = 'Pole może zawierać tylko litery!';
    informacja.style.color = 'red';
} 

console.log(regex.test(str));


    if (this.value.length < 3) {
      blad.innerHTML = 'Pole musi zawierać co najmniej 3 znaki!';
      blad.style.color = 'red';
      console.log('Pole musi zawierać co najmniej 5 znaków!');
    } else {
      blad.innerHTML = '';
        console.log('OK');
    }
});