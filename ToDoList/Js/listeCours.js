let myList = new Array();
myList = [];
for(let i=0; i<myList.length; i++){
  myList[i] = myList[i].toUpperCase();
}

function displayList(){
  let divMaListe = document.getElementById('myList');
  totalItems();

  if(myList == ''){
    divMaListe.innerHTML = '';
  }else{
    let html = "<ul>";
    for(let i=0; i<myList.length; i++){
      html += '<li><i class="fa-regular fa-trash-can" title="deleate" onClick="deleate(\'' + myList[i] +
          '\')" id=' + i + '></i>' + myList[i] + '</li>';
    }
    html+= '</ul>'
    divMaListe.innerHTML = html;
  }
}

function totalItems() {
  let text = "Ma liste contient " + myList.length + " produits";
  document.getElementById('totalNum').textContent = text;
}

function addItems(){
  let item = prompt("Entrez le nom de produit");
  item = item.toUpperCase();
  if(item !== ''){
  myList.push(item);
  displayList();
  }
}

function deleate(element){
  let index = myList.indexOf(element);

  if(index == -1) {
    console.log("l'elément " + element + " est in trouvable");
    return;
  }
  myList.splice(index, 1);
  totalItems();
  displayList();
}

function clearList(){
  myList = [];
  displayList();
  alert('la liste de cours a bien été vidée !');
}