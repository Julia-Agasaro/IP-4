// function order(size, crust,toppings,number) {
//     this.pizzaSize = size;
//     this.pizzaCrust = crust;
//     this.pizzaToppings= toppings;
//     this.pizzaNumber= number;

//   }
//   order.prototype.summary = function() {
//     return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaTopping + "," + this.pizzaNumber ;
// };
// $("form").submit(function(event) {
//     var size = $('#size').val();
//     var crust = $('#crust').val();
//     var toppings = $('#topping').val();
//     var number =$('#number').val();
//     var newOrder = new placeOrder(size, crust, toppings ,number);
//     var total = parseInt(size) + parseInt(crust) + parseInt(toppings);
//     // alert(size);
//     // alert(crust);
//     // alert(toppings);
//     alert(total);
//     alert(newOrder.summary());
//     event.preventDefault();
// });
var Orders = function(size,crust,toppings,number){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
function resetInputs(){
    $("#size").val("");
    $("#crust").val("");
    $("#toppings").val("");
    $("#num").val("");
}
Orders.prototype.fullOrder = function (){
    return this.size + "," + this.crust + "," + this.toppings + "," + this.number ;
}
var sizePrice,crustPrice,toppingsPrice;
var totalPrice = [];
function price(size,crust,toppings){ 
    if(size==="small"){
        sizePrice = 4000;
        if(crust==="crispy"){
            crustPrice = 600;
            if (toppings=== "pepperoni"){
                toppingsPrice = 200;
            }
            else if(toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"){
                toppingsPrice = 200;
            }
            else if(toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage"){
                toppingsPrice = 200;
            }
            else if(toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese"){
                toppingsPrice = 200;
            }
            else if(toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple"){
                toppingsPrice = 200;
            }
            else if(toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="stuffed"){
            crustPrice=900;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"|| toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="Pineapple" || toppings==="Spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="gluten-free"){
            crustPrice=1200;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"|| toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="Bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple" || toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
    }   
    else if(size==="medium"){
        sizePrice = 6000;
        if(crust==="crispy"){
            crustPrice = 600;
            if (toppings=== "pepperoni"){
                toppingsPrice = 200;
            }
            else if(toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"){
                toppingsPrice = 200;
            }
            else if(toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage"){
                toppingsPrice = 200;
            }
            else if(toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese"){
                toppingsPrice = 200;
            }
            else if(toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple"){
                toppingsPrice = 200;
            }
            else if(toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="stuffed"){
            crustPrice=900;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"|| toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple" || toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="gluten-free"){
            crustPrice=1,200;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions" || toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple" || toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
    }
    else if(sizePrice==="large"){
        sizePrice = 9000;
        if(crust==="crispy"){
            crustPrice = 600;
            if (toppings=== "pepperoni"){
                toppingsPrice = 200;
            }
            else if(toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"){
                toppingsPrice = 200;
            }
            else if(toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage"){
                toppingsPrice = 200;
            }
            else if(toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese"){
                toppingsPrice = 200;
            }
            else if(toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple"){
                toppingsPrice = 200;
            }
            else if(toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="stuffed"){
            crustPrice=900;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            
            }
            else if(toppings==="onions"|| toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple" || toppings==="spinach"){
                toppingsPrice = 200;
            }
        }
        else if(crust==="gluten-free"){
            crustPrice=1200;
            if (toppings==="pepperoni" || toppings==="mushrooms"){
                toppingsPrice = 200;
            }
            else if(toppings==="onions"|| toppings==="greenpepper"){
                toppingsPrice = 200;
            }
            else if(toppings==="sausage" || toppings==="bacon"){
                toppingsPrice = 200;
            }
            else if(toppings==="extra-cheese" || toppings==="black-olives"){
                toppingsPrice = 200;
            }
            else if(toppings==="pineapple" || toppings==="pinach"){
                toppingsPrice = 200;
            }
        }
    }
    // var prices = (sizePrice + crustPrice + toppingsPrice) * number;
    // console.log("prices: "+prices);
    // totalPrice.push(prices);
    // console.log(totalPrice);
    // // for(var i=0;i<totalPrice.length;i++){
    //     sumTotal+=totalPrice[i];
    //     console.log("sum "+sumTotal);
    // }
    return (sizePrice + crustPrice + toppingsPrice) * number;
}


// User input Logic
var pizzaSize,pizzaToppings,pizzaCrust,number;
$(document).ready(function(){
    $("#checkout").click(function(event){
        event.preventDefault();
        pizzaSize = $("#size").val();
        console.log("size "+pizzaSize);
        pizzaCrust = $("#crust").val();
        console.log("crust "+pizzaCrust);
        pizzaToppings = $("#toppings").val();
        console.log("toppings "+pizzaToppings);
        number = $("#number").val();
        console.log("number "+number);
        var newOrder = new Orders(pizzaSize,pizzaCrust,pizzaToppings,number);
        console.log(newOrder);
        // va prices = (sizePrice + crustPrice + toppingsPrice) * number;
        console.log("prices: "+ price(pizzaSize,pizzaCrust,pizzaToppings));
        // totalPrice.push(prices);
        // console.log(totalPrice);
    

        $("#delivery").append('<li><span>'+ newOrder.fullOrder() +'</span></li>');
        resetInputs();
    });
});
    