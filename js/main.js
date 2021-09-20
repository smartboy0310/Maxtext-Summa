//Select element
var elForm = document.querySelector('.form');
var elInputText = document.querySelector('.form__input-text');
var elInputNumber = document.querySelector('.form__input-number');
var elResultText = document.querySelector('.result-text');
var elResultNumber = document.querySelector('.result-number');

//Additional variables
var maxText = " ";
var summa = 0;
// Functions
function MaxWord (text) {
   maxText = text[0];
   for (var inputArrys of text) {
      if(maxText.length < inputArrys.length) {
         maxText = inputArrys;
      }
   }
}

function Summa (numbers) {
   for (var inputNumbers of numbers){
      summa = summa + Number(inputNumbers);
   }
   
}
//Listing form
elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();
   var inputText = elInputText.value.trim().split(' ');
   var inputNumber = elInputNumber.value.trim().split(' ');
   MaxWord(inputText);
   Summa(inputNumber);
   elResultText.textContent ="Bu matn ichidagi eng uzun so'z:  " + "'" + maxText + "' ;";
   elResultNumber.textContent = "Kiritilgan sonlar yig'indisi: summa = " + summa + ";";
})