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
    return this.size + "," + this.crust + "," + this.topping + "," + this.number ;
}
var sizePrice,crustPrice,toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size,crust,toppings){ 
    if(size==="Small"){
        sizePrice = 4,000;
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
            else if(toppings==="black-olive"){
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
        
    else if(size==="Medium"){
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
            else if(toppings==="black-olive"){
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
    }
    else if(sizePrice==="Large"){
        sizePrice = 9,000;
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
            else if(toppings==="black-olive"){
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
    }
    var pricing = (sizePrice + toppingsPrice + crustPrice) * amount;
    console.log("pricing: "+pricing);
    totalPrice.push(pricing);
    console.log(totalPrice);
    for(var i=0;i<totalPrice.length;i++){
        sumTotal+=totalPrice[i];
        console.log("sum "+sumTotal);
    }
    return (sizePrice + toppingsPrice + crustPrice) * amount;
}

// UI LOGIC CODE
// var pizzaSize,pizzaCrust,pizzaToppings,comments,amount;
// $(document).ready(function(){
//     $("#order").click(function(event){
//         event.preventDefault();
//         alert("Please enter a new order, if this was your last... select deliver or reservation to proceed to checkout");
//         pizzaSize = $("#size").val();
//         console.log(pizzaSize);
//         pizzaCrust = $("#crust").val();
//         console.log(pizzaCrust);
//         pizzaToppings = $("#toppings").val();
//         console.log(pizzaToppings);
//         comments = $("#comment").val();
//         console.log(comments);
//         amount = $("#num").val();
//         console.log(amount);
        
//         var newOrder = new Orders(pizzaSize,pizzaCrust,pizzaToppings,amount,comments);
//         // console.log(newOrder);

//         $("ol#ordered").append('<li><span>'+ newOrder.fullOrder() +'</span></li>');
//         $("ol#prices").append('<li><span>'+ "cost: " + price(pizzaSize,pizzaCrust,pizzaToppings) + "$" +'</span></li>');
//         resetInputs();
//     });
//     $("#checkout").click(function(){
//         $(".hidden").show();
//         $("h4#total").append(" "+ sumTotal + "$.");
//     });
//     $("#chooseDeliver").click(function(event){
//         event.preventDefault();
//         alert("Delivery charge is 15$ charged after reception of pizza.")
//         $("#deliver").show();
//         $("#chooseReservation").hide();
//     });
//     $("#chooseReservation").click(function(event){
//         event.preventDefault();
//         alert("5$ Reservation charges will be added to your bill at the restaurant.")
//         $("#reserve").show();
//         $("#chooseDeliver").hide();
//     });
//     $("#submitDeliver").click(function(event){
//         event.preventDefault();
//         alert("your order will be delivered to your location");
//         $("#checkout").show();
//     });
//     $("#submitRes").click(function(event){
//         event.preventDefault();
//         alert("your table has been reserved.");
//         $("#checkout").show();
//     });
// });