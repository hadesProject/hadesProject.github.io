let gbase = 0
let gtrack = 0
function add() {
    if (gbase == 0) {
        gbase = 1;
        alert("Produto adicionado ao carrinho");
    } else {
        alert("O produto já está no carrinho!");
    } 
    
    if (gbase + gtrack != 0) {
        document.getElementById('cart-window').style.display='block';
        } else {
            document.getElementById('cart-window').style.display='none';
        }
}

function remove1() {
    gbase = 0
    if (gbase + gtrack != 0) {
        document.getElementById('cart-window').style.display='block';
        } else {
            document.getElementById('cart-window').style.display='none';
        }

}