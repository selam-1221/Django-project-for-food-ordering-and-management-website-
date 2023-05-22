var pcart = document.querySelector('#pcart');
var ptotal = document.querySelector('#ptotal');


// add pizza
   function addPizza(pid){
       // get pizza name
        var pizzaId  ='#piz' + pid;
        var name = document.querySelector(pizzaId).innerHTML;
        var radio ='pizza' + pid;
        var pri = document.getElementsByName(radio);
        var size,price;
        if(pri[0].checked) {
            price = pri[0].value;
            size='M';
        }

           
        else{
            price=pri[1].value;
            size='L';

        }
        var orders = JSON.parse(localStorage.getItem('orders'));
        var total = localStorage.getItem('total');
        var cartSize = orders.length;

        // saving item and total in local storage
        orders[cartSize] = [name,size,price];
        localStorage.setItem('orders', JSON.stringify(orders));
       
        total = Number(total) + Number(price);
        localStorage.setItem('total',total);

        //updating number of items in shopping cart
        var cart = document.querySelector("#cart");
        cart.innerHTML = orders.length;

        var newLi = document.createElement('li');
        newLi.innerHTML = name + ' ' + size + ':' + price + ' $ ' + '<div class="del" onclick="removePizza('+ cartSize +')">x </div>';
        pcart.appendChild(newLi);
    
      
   }

   function pshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    pcart.innerHTML= '';
    for (let i=0; i < cartSize; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = orders[i][0] + ' ' + orders[i][1] + ':' + orders[i][2] + '$ ' + '<div class="del" onclick="removePizza(' + i + ')">x</div>';
        pcart.appendChild(newLi);
      }
      
    ptotal.innerHTML = 'Total:' + total + ' $';  
    
   }
   pshoppingCart();

   function removePizza(n)
   {
    console.log("removePizza function called with index:", n);
    var orders =JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);
    //updating number of items in shopping cart
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    pshoppingCart();
   }