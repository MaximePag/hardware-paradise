
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
function addToBasket(button) {
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
    let modalFooter = document.getElementById('modalFooter');
    let modalTotal = document.getElementById('modalTotal');

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

    let sum = price * quantity;
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

    for(let i = 1; i <= 5; i++){
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        selectElement.append(option);
    }
    let divider = document.createElement('hr');
    divider.style.width = '100%';
    divider.style.border = '1px grey solid';

    modalBody.append(divImg, divDesc, divPrice, divider);
    divDesc.append(titleElement, refElement, descElement);
    divPrice.append(priceElement, selectPara, selectElement);

    let total = totalPriceSum();
    modalTotal.innerText = total;

}