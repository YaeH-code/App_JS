
********************Challenge 1 :***********************************

En tant qu’institutrice en cp je souhaiter developper un jeux pour permettre aux élèves d’apprendre en s’amusant 
Developper un algo qui va permettre de reconnaitre si un mot est un palindrome ou pas. 
Pour cela créer une fonction palindrome()  qui renverra vrai si le mot est un palindrome ou faux si le mot n’est pas un palindrome.

Vous pourrez tester votre fonction dans la console
console.log(palindrome(’Salut’)) // false
console.log(palindrome(’été’)) // true
console.log(palindrome(’ ressasser’)) // true


Quelques pistes vous pouvez utiliser des fonctions suivantes :
split
reverse
join
toUpperCase

1. creer une fonction qui renvoie vrai si c'est un palindrome
split()
reverse()
join()
toUpperCase()

function palindrome(mot){
  let monMot = mot.split('')
   console.log(monMot)
   monMot.reverse()
   console.log(monMot)
   let reverseMot = monMot.join('')
   console.log(reverseMot)
  return monMot.toUpperCase() == reverseMot.toUpperCase()
}
palindrome("salut")

const motValeur = document.getElementById("mot") //input id='mot'
const validForm = document.getElementById("valider") //button id='valider'
const resultat = document.getElementById("resultat")

validForm.onclick = function(){
  let MotValueInput = motValeur.value
  if(palindrome(MotValueInput)){
    resultat.innerHTML = `le mot : ${MotValueInput} est bien un palindrome`
  }else{
    resultat.innerHTML = `le mot : ${MotValueInput} n'est pas un palindrome`
  }
}

function palindrome(mot){
  let monMot = mot.split('').reverse().join('')
  return mot.toUpperCase() == monMot.toUpperCase() //return permet de rendre true or false
}
palindrome("salut")

*******************Challenge 2*****************

En tant que formatrice Afpa je dispose d'un tableau avec le nom des stagiaires et leurs notes que vous trouverez ci-dessous.

Je vous demande de créer un algorithme qui permettra de calculer la moyenne de chacun des stagiaires.

Quelques pistes :

Ajouter à l’objet  une propriété que vous pouvez appeler moyenne qui contiendra la moyenne des notes pour chaque stagiaire.

Ensuite récupérer et afficher le stagiaire avec la meilleure moyenne

Et enfin, récupèrer et afficher le top 3 des trois meilleurs stagiaires.
En position 1 le meilleure en 2 le second et en 3 le troisième.


const stagiairesAfpa = [
    {
        name: 'Tao',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Esteban',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Marinche',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Mendoza',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Zia',
        notes: [18, 17, 18, 19, 12]
    }
]