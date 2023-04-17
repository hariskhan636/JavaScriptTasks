document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('btn2')
    btn.addEventListener('click', button2Clicked)
})

document.addEventListener('click',function(e){
    if(e.target.id=='dynamic-btn'){
        alert()
    }
})

function buttonClicked(){
    alert("Button clicked")
    var btn1 = document.getElementsByClassName("btn")[0]
    btn1.style.backgroundColor = 'red'
    btn1.style.color = 'yellow'
}

button2Clicked = () => {

    var btnHTML = `<button class="btn" id="dynamic-btn">Click Me</button>`
    document.getElementById('dynamic').innerHTML = btnHTML

    // setTimeout(() => {
    //     var btn = document.getElementById('dynamic-btn')
    //     btn.addEventListener('click', function(){
    //         alert()
    // })
    // }, 100);
}

var obj = JSON.parse('some data in json')
var products = obj.data; //path of required data

function showProducts(){

    document.getElementsByClassName('modal-back')[0].style.display = 'block'

    var table = document.getElementById('product-data')

    var rows= ''

    products.forEach(function(product,index){
        rows+= 
        `
            <tr>
                <td>${product.sku}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button class='edit' onclick="editProduct(${index})">Edit</button>
                </td>
            </tr>
        `
    })

    table.innerHTML = rows
}

function editProduct(index){
    var prod = products(index)

    document.getElementById('prodIndex').value = index
    document.getElementById('sku').value = prod.sku
    document.getElementById('name').value = prod.name
    document.getElementById('price').value = prod.price

    document.getElementsByClassName('modal-back')[1].style.display = 'block'
}

function saveProduct(index){

    document.getElementsByClassName('modal-back')[1].style.display = 'none'

    index = document.getElementById('prodIndex').value
    var prod = products[index]

    prod.sku = document.getElementById('sku').value
    prod.name = document.getElementById('name').value
    prod.price = document.getElementById('price').value

    products[index] = prod

    showProducts()
}



