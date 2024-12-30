plus = document.getElementsByClassName('fa-plus-circle');
moin = document.getElementsByClassName('fa-minus-circle')
ajouter = document.getElementsByClassName('ajout');
quantity = document.getElementsByClassName('quantity');
panier = document.getElementById('panier');
nomproduit = document.getElementsByClassName('card-text');
price = document.getElementsByClassName('price')
prixtotal = document.getElementById('prixtotal');
articles = document.getElementById('articles');


window.onload = function(){


totalArticle = []
elements = []
for(let i = 0; i<nomproduit.length; i++){

    ajouter[i].addEventListener('click', function(){
        plus[i].style.display = 'flex';
        moin[i].style.display = 'flex';
        quantity[i].style.display = 'flex';
        quantity[i].innerHTML = '1';
        ajouter[i].style.display = 'none';

        

        panier.innerHTML += `
        <div class='product-cart'>
            <div class="d-flex d-flex justify-content-between">
                <h6>${nomproduit[i].innerHTML}</h6>
                <i class="btn-delete fas fa-trash-alt text-danger" data-valeur=${i}></i>
            </div>
            <p class="q text-primary fw-semibold" id = ${i}>x1</p><hr>
        </div>

        `

        product_div = document.getElementsByClassName('product-cart')
        btn_delete = Array.from(document.getElementsByClassName('btn-delete'));

        
        
        btn_delete.forEach((btn) => {
            btn.addEventListener('click', function() {
                productDiv = btn.parentNode.parentNode 
                id = btn.dataset.valeur
                quantity[id].innerHTML = 0
                totalF(id)
                totalE(id)
                
                plus[id].style.display = 'none';
                moin[id].style.display = 'none';
                quantity[id].style.display = 'none';
                ajouter[id].style.display = 'flex';
                
                panier.removeChild(productDiv); 

                
            });
        });




       
        totalF(i)
        totalE(i)

        

        plus[i].addEventListener('click', function(){
            var q = Number(quantity[i].innerHTML);
            q += 1;
            quantity[i].innerHTML = q
            document.getElementById(`${i}`).innerHTML =  'x' + q 
            totalF(i)
            totalE(i)
            
        })


        moin[i].addEventListener('click', function(){
            var q = Number(quantity[i].innerHTML);
            if(q>0){
                q -= 1;
            }else{
                q = 0
            }
            quantity[i].innerHTML = q
            document.getElementById(`${i}`).innerHTML =  'x' + q 
            // panier.getElementsByClassName('q')[i].innerHTML = 'x' + q

            totalF(i)
            totalE(i)

        })
    })
}

}
function totalF(i){
    totalArticle[i] = Number(quantity[i].innerHTML) * Number(price[i].innerHTML)
    prixtotal.innerHTML = totalArticle.reduce((totalA, valeur) => totalA + valeur)
}
function totalE(i){
    elements[i] = Number(quantity[i].innerHTML)
    articles.innerHTML = elements.reduce((totalA, valeur) => totalA + valeur)
}







