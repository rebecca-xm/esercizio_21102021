const cart = [];

function myCart() {
    let myItem = prompt("Aggiungi un prodtto nel carrello:");
    if (myItem == null || myItem == " ") {
        alert("Non hai aggiungo alcun prodotto")

    } if (cart.includes(myItem) == true) {
        alert(myItem + " è già presente nel tuo carrello") 
    
    } else {
        alert("Aggiunto: " + myItem)
        cart.push(myItem);
    }
    console.log(cart)
}