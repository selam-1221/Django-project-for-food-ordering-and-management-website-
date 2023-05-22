var name1 = document.querySelector("#name1");
var size = document.querySelector("#size");
var price = document.querySelector("#price");
var bill = document.querySelector("#total");
var rm =document.querySelector("#rm");

function shoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    console.log('orders:', orders); // debug statement
    var total = localStorage.getItem('total');
    console.log('total:', total); // debug statement
    var cartSize = orders.length;
    
    name1.innerHTML = '<h3>Name</h3>';
    size.innerHTML = '<h3>Size</h3>';
    price.innerHTML ='<h3>Price</h3>';
    rm.innerHTML  = '<h3><br></h3>';


    for (let i=0; i < cartSize; i++) {
        //let newLi = document.createElement('li');
        //newLi.innerHTML = orders[i][0] + ' ' + orders[i][1] + ':' + orders[i][2] + '$ ' + '<div class="del" onclick="removePizza(' + i + ')">x</div>';
       // pcart.appendChild(newLi);
        rm.innerHTML  +='<h6><button class="btn-danger" onclick="removeItem(' + i + ')">x</button></h6>';
        name1.innerHTML += '<h4>' + orders[i][0] + '</h4>'
        size.innerHTML += '<h4>' + orders[i][1] + '</h4>'
        price.innerHTML += '<h4>' + orders[i][2] + '</h4>'
        
        
      }
      
    bill.innerHTML = 'Total:' + total + ' $';  
    
   }
   shoppingCart();

   function removeItem(n)
   {
    console.log("removePizza function called with index:", n);
    var orders =JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    console.log('new total:', total); // debug statement
    orders.splice(n, 1);
    //updating number of items in shopping cart
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    shoppingCart();
   }
  // Ajax 
   var note = document.querySelector('#message');
   function order() {
    var msg = note.value;
    var orders = localStorage.getItem('orders');
    var total = localStorage.getItem('total');

    console.log('Message:', msg);
    console.log('Orders:', orders);
    console.log('bill:', total);


    var ur = '/food/order';
    var orderData = {};
    orderData['orders'] = orders;
    orderData['note'] = msg;
    orderData['bill'] = total;
    $.ajax({
        url: ur,
        type: "POST",
        data: orderData,
        success: function(data) {
            console.log('Order request success:', data);
            window.location.replace('/food/success');
            localStorage.setItem('orders', JSON.stringify([]));
            localStorage.setItem('total',0);
        },
        error: function(xhr, status, error) {
            console.log('Order request error:', error);
        }
    });
}
