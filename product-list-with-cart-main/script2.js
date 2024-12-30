const data = [
    {
       "image": {
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50,
       "quantity" : 1
    },
    {
        "image": {
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00,
       "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
        "quantity" : 1

     },
     {
        "image": {
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        "quantity" : 1

     }
]
    const container = document.getElementById('products')
    const panier = document.getElementById('panier')


    data.forEach((item) => {

        const card = document.createElement('div')
        card.classList.add('card', 'p-0', 'col-3', 'm-2')

        const img = document.createElement('img')
        img.classList.add('card-img-top')
        img.src = item.image.desktop

        const card_body = document.createElement('div')
        card_body.classList.add('card-body','p-2')

        const title = document.createElement('h5')
        title.innerText = item.name

        const category = document.createElement('p')
        category.innerText = item.price

        const price = document.createElement('p')
        price.innerText = item.category

        const btn = document.createElement('button')
        btn.classList.add('btn', 'btn-outline-danger', 'p-1')
        btn.innerText = '+'

        const btn2 = document.createElement('button')
        btn2.classList.add('btn', 'btn-outline-danger', 'p-1')
        btn2.innerText = '-'



        card_body.appendChild(title)
        card_body.appendChild(price)
        card_body.appendChild(category)
        card_body.appendChild(btn)
        card_body.appendChild(btn2)


        card.appendChild(img)
        card.appendChild(card_body)

        container.appendChild(card)

        cart = []
        total = 0
        prixtotal = document.getElementById('prixtotal')
        btn.addEventListener('click', function(){
            produitexist = cart.find((element)=>element.name == item.name)
            if(produitexist){
                produitexist.quantity += 1
               
            }else{
                cart.push({name:item.name, quantity:item.quantity, price:item.price})
                    
            }
            total += item.price
            prixtotal.innerHTML = total
            ajouteraupanier()

            

    })
    btn2.addEventListener('click', function(){
        produitexist = cart.find((element)=>element.name == item.name)
        if(produitexist){
            if(produitexist.quantity>1){
                produitexist.quantity -= 1
                total -= item.price
                prixtotal.innerHTML = total
                ajouteraupanier()


            }
           
        }
    })
function nbrproduit(){
    nbr = 0;
    cart.forEach(cartproduct=>{
        nbr += cartproduct.quantity
    })
    document.getElementById('articles').innerHTML = nbr;

}
   
function ajouteraupanier(){
    panier.innerHTML = ''
    cart.forEach((cartproduct, index) =>{
        panier.innerHTML += `
                    <div class='product-cart'>
                        <div class="d-flex d-flex justify-content-between">
                            <h6 class = 'nomproduit'>${cartproduct.name}</h6>
                            <i class="btn-delete fas fa-trash-alt text-danger" id = ${index}></i>
                        </div>
                        <div class="d-flex d-flex justify-content-between">
                            <p class="q text-primary fw-semibold" >X${cartproduct.quantity}</p><hr>
                        </div>
                    </div>
                `
                suppression()
                nbrproduit()
                

    })
}
function suppression(){
    delete_btn = document.querySelectorAll('.fa-trash-alt');
    delete_btn.forEach(btn_delete=>{
        btn_delete.addEventListener('click', function(event){
            id = event.target.id 
            removeItem = cart.splice(id, 1)[0]
            ajouteraupanier()
            nbrproduit()
            total -= removeItem.price * removeItem.quantity
            prixtotal.innerHTML = total
        })
    })
}
       
}) 




