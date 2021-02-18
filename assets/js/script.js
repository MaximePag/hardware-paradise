// Fonction permettant de récupérer tous les prix dans le panier et les additionner pour afficher le total

//Déclaration de la fonction
function totalPriceSum() {

    //On stocke dans la variable allPrices tous les éléments HTML dont la classe est product_price ce qui donne un tableau
    let allPrices = document.getElementsByClassName('product_price');

    //On déclare une variable total qu'on initialise à 0.00 avec l'objet Number() pour être sur que le type soit un int ou float.
    let total = Number(0.00); 

    //On fait une boucle for qui parcoure la lougueur du tableau allPrices
    for (let i = 0; i < allPrices.length; i++) { 

        //On stocke à chaque tour de boucle dans la variable price le texte qu'il y a dans un élément du tableau et on le convertit
        let price = Number(allPrices[i].innerText); 

         //On assigne et on additionne à la variable total le prix
        total += price;
    }

    //On retourne le total de la fonction et on garde deux chiffres apres la virgule avec .toFixed(2)
    return total.toFixed(2); 
}


//Déclaration de la fonction qui permet de calculer la somme d'un prix d'un produit avec comme paramètre price et quantity
function priceSum(price, quantity) {

    //On déclare la variable sum et on multiplie les deux paramètres price et quantity
    let sum = price * quantity;

    //On retourne le résultat de la fonction
    return sum;
}


//Déclaration de la fonction qui permet d'ajouter un produit dans le panier avec comme paramètre button, qui est l'élément HTML button
function addToBasket(button) {

    //Si la valeur de button est à true cela affiche une alerte Sinon ça continue la fonction
    if (button.value == 'true'){
        alert('Vous avez déjà ajouté ce produit dans le panier.');
    }
    else{

        //On met la valeur du button à false
        button.value = 'false';


        //Explication de la récupération des données pour les variables en dessous
        //Exemple : récuperer le prix
        //Code : button.parentElement.parentElement.children[3].children[0].innerText;

//                                      <div class="card">
//                                          <img src="assets/img/ssd.jpg" class="card-img-top" alt="SSD">
//               deuxième parentElement --->    <div class="card-body">
//                                                  <h5 class="card-title">SSD SanDisk 1 To</h5>
//                                                  <p class="card-text">SSD performant de la marque SanDisk avec une capacité de 1 To</p>
//     quatrième enfant (children.Index 3)          <p class="card-text">Ref : <span>ssd001</span></p>
//                  du deuxième parentElement --->  <p class="card-text">Prix : <span>109.99</span> €</p>
//                    premier parentElement --->    <div class="input-group mb-3">
//                                                      <div class="input-group-prepend">
//                                                          <label class="input-group-text" for="qty">Quantité</label>
//                                                      </div>
//                                                      <select class="custom-select" id="qty">
//                                                          <option selected value="1">1</option>
//                                                          <option value="2">2</option>
//                                                          <option value="3">3</option>
//                                                          <option value="4">4</option>
//                                                          <option value="5">5</option>
//                                                      </select>
//                                     button --->    <button class="btn btn-success mx-auto" onclick="addToBasket(this)">Ajouter au panier <i class="fas fa-cart-arrow-down"></i></button>
//                                                  </div>
//                                              </div>
//                                          </div>
//                                      </div>


        // On déclare une variable 
        let quantity = button.parentElement.children[1].value;
        console.log(quantity);
        // récupération du prix
        let price = button.parentElement.parentElement.children[3].children[0].innerText;
        console.log(price);
        // récupération de le référence
        let ref = button.parentElement.parentElement.children[2].children[0].innerText;
        console.log(ref);
        // récupération de le description
        let desc = button.parentElement.parentElement.children[1].innerText;
        console.log(desc);
        // récupération du titre
        let title = button.parentElement.parentElement.children[0].innerText;
        console.log(title);
        // récupération de l'image
        let img = button.parentElement.parentElement.parentElement.children[0].src;
        console.log(img);

        let modalBody = document.getElementById('modalBody');
        let modalTotal = document.getElementById('modalTotal');


        //On créé un élément HTML et on le stocke dans une variable
        let row = document.createElement('div');
        //On ajoute les classes que l'on veux à l'élément
        row.classList.add('row');

        let divImg = document.createElement('div');
        divImg.classList.add('col-2');

        //On créé un élément HTML imgElement et on le stocke dans une variable
        let imgElement = document.createElement('img');

        //On défini la source de l'élément HTML imgElement avec la variable img qui contient le chemin de l'image préalablement récupéré
        imgElement.src = img;

        //On ajoute comme enfant imgElement à divImg
        divImg.append(imgElement);

        let divDesc = document.createElement('div');
        divDesc.classList.add('col-7');

        //On créé un élément HTML h5 que l'on stocke dans titleElement
        let titleElement = document.createElement('h5');

        //On écrit dans l'élément titleElement le titre du produit préalablement récupéré.
        titleElement.innerText = title;

        let refElement = document.createElement('p');
        refElement.innerText = ref;

        let descElement = document.createElement('p');
        descElement.innerText = desc;

        let divPrice = document.createElement('div');
        divPrice.classList.add('col-3');

        let sum = priceSum(price, quantity);

        let priceElement = document.createElement('p');
        let priceSpan = document.createElement('span');
        priceSpan.classList.add('product_price');
        priceSpan.innerText = sum.toFixed(2);
        priceElement.insertAdjacentHTML('afterbegin', 'Prix : ');
        priceElement.append(priceSpan);
        priceElement.insertAdjacentHTML('beforeend', ' €');

        let selectElement = document.createElement('select');
        let selectPara = document.createElement('p');
        selectPara.innerText = 'Quantité :';

        let option = document.createElement('option');
        option.value = quantity;
        option.innerText = quantity;
        option.setAttribute('selected', '');
        option.setAttribute('disabled', '');
        selectElement.append(option);

        for (let i = 1; i <= 5; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.innerText = i;
            selectElement.append(option);
        }
        selectElement.addEventListener('change', () => {
            quantity = selectElement.value;
            let sum = priceSum(price, quantity);
            priceSpan.innerText = sum.toFixed(2);
            let total = totalPriceSum();
            modalTotal.innerText = total;
        })

        let deleteElement = document.createElement('button');
        deleteElement.classList.add('btn', 'btn-danger', 'mb-2');
        deleteElement.innerText = 'Supprimer';
        deleteElement.addEventListener('click', () => {
            deleteElement.parentElement.parentElement.innerText = '';
            let total = totalPriceSum();
            modalTotal.innerText = total;
            button.value = 'false';
        });

        let emptyBasket = document.getElementById('emptyBasket');
        emptyBasket.addEventListener('click', () => {
            let modalBody = document.getElementById('modalBody');
            let modalTotal = document.getElementById('modalTotal');
            modalBody.innerText = '';
            modalTotal.innerText = '0.00';
            button.value = 'false';
        });

        let divider = document.createElement('hr');
        divider.style.width = '100%';
        divider.style.border = '1px grey solid';

        modalBody.append(row);
        row.append(divImg, divDesc, divPrice, deleteElement, divider);
        divDesc.append(titleElement, refElement, descElement);
        divPrice.append(priceElement, deleteElement, selectPara, selectElement);

        let total = totalPriceSum();
        modalTotal.innerText = total;
        button.value = 'true';
    }
}

