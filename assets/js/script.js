
function totalPriceSum() {
    let allPrices = document.getElementsByClassName('product_price');
    let total = Number(0.00);
    for (let i = 0; i < allPrices.length; i++) {
        let price = Number(allPrices[i].innerText);
        total += price;
        console.log(total);
    }
    return total.toFixed(2);
}
function priceSum(price, quantity) {
    let sum = price * quantity;
    return sum;
}
function addToBasket(button) {
    if (button.value == 'true'){
        alert('Vous avez déjà ajouté ce produit dans le panier.');
    }
    else{
        button.value = 'false';
        // récupération de la quantité
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

        let row = document.createElement('div');
        row.classList.add('row');

        let divImg = document.createElement('div');
        divImg.classList.add('col-2');

        let imgElement = document.createElement('img');
        imgElement.src = img;
        divImg.append(imgElement);

        let divDesc = document.createElement('div');
        divDesc.classList.add('col-7');

        let titleElement = document.createElement('h5');
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
