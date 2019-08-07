
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
    $("#number").val("");
}
Orders.prototype.fullOrder = function (){
    return this.size + ",and " + this.crust + ",with " + this.toppings + "," + this.number ;
    
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
    
    return (sizePrice + crustPrice + toppingsPrice) * number;
}


// User input Logic
var pizzaSize,pizzaToppings,pizzaCrust,number;
$(document).ready(function(){
    $("#checkout").click(function(event){
        event.preventDefault();
        var deliver = prompt("Deliver or You will Pick it Up")
        if(deliver==="deliver"){
        prompt("Enter Your location")
        alert("your order will be delivered to your location");
        }else{
            prompt("please indicate the time you will pickup your delivery");
            
        }
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
        
        console.log("prices: "+ price(pizzaSize,pizzaCrust,pizzaToppings));
        alert("Here is the Price charged "+ price(pizzaSize,pizzaCrust,pizzaToppings));
        alert("Thank you For choosing Us");
        // totalPrice.push(prices);
        // console.log(totalPrice);
    

        $("#delivery").append('<li><span>'+ "The Pizza You Ordered:" + newOrder.fullOrder() +'</span></li>');
        $("#prices").append('<li><span>'+ "cost: " + price(pizzaSize,pizzaCrust,pizzaToppings) + "Rwf" +'</span></li>');
        resetInputs();
        $("")
    });
});
    