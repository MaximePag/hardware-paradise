function addBasket(button){
    // récupération de la quantité
    let quantity = button.parentElement.parentElement.children[1].value;
    console.log(quantity);
    // récupération du prix
    let price = button.parentElement.parentElement.parentElement.children[3].children[0].innerText;
    console.log(price);
    // récupération de le référence
    let ref = button.parentElement.parentElement.parentElement.children[2].children[0].innerText;
    console.log(ref);
    // récupération de le description
    let desc = button.parentElement.parentElement.parentElement.children[1].innerText;
    console.log(desc);
    // récupération du titre
    let title = button.parentElement.parentElement.parentElement.children[0].innerText;
    console.log(title);
    // récupération de l'image
    let img = button.parentElement.parentElement.parentElement.parentElement.children[0];
    console.log(img);
}