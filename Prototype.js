console.group("%c1 --Creating prototype---","color:blue")
// var num = 100.12;
// console.log(typeof(num));
var ekko = { 
    ebeln:1,
    werks:'DE01',
    waers:'CAD',
    showValues:function() {
    return ('Ekko has values ' + 'ebeln :' + this.ebeln + ' ,  werks :' + this.werks + this.waers);
     }
};
var ekpo = {
    ebeln:1,
    werks:'DE01',
    waers:'CAD',
    showValues:function() {
    return ('Ekko has value ' + 'ebeln :' + this.ebeln + ' ,  werks : ' + this.werks + this.waers);
     }
}
//array with objects
var po = [ekko, ekpo];
//array with array-deep structure
var purchaseOrder = [ekko,ekpo,po]
//creating another object as proto
var ponew = Object.create(purchaseOrder);
ponew.newproperty = "Hello";
console.log(ponew);

