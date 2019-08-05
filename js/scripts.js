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
console.log(function);