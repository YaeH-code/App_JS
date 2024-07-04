var input = document.getElementById('myInput')
var txt1 = document.getElementById('message1')
var txt2 = document.getElementById('message2')
var answer = document.getElementById('resultat')
var wordReverse =[]

function palindrome(){
  let letters = []
  let word = input.value 
    word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //normaliser les alphabets
    letters = word.toUpperCase().split('')
    txt1.innerHTML = letters
    wordReverse = letters.reverse()
    txt2.innerHTML = wordReverse
    if(txt1.innerHTML == txt2.innerHTML){
      answer.innerHTML = word + ' est un palindrome'
    }else{
      answer.innerHTML = word + ' n\'est pas un palindrome'
    }
}

function clickEvent(){
  document.getElementById('validation').addEventListener('click', palindrome)
}

document.getElementById('myInput').addEventListener('keypress', function (e) 
{
  if (e.key === 'Enter') 
  {
    e.preventDefault();
    document.getElementById("validation").click();
  }
});
