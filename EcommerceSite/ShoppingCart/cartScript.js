var ps4num = document.getElementById("qty1");
var nSwitchnum = document.getElementById("qty");
var subTotal = document.getElementById("subtotal");
var ps_cart = document.getElementById("psquan");
var ns_cart = document.getElementById("nSquan");
var stdShip = document.getElementById("std");
var expShip = document.getElementById("exp");
var gwrap = document.getElementById("gyes");
var insur = document.getElementById("insyes");
var insurNo = document.getElementById("insno");
var button = document.getElementById("generate");
var prom = document.getElementById("promo");
var getTax = document.getElementById("tax");
var getTotal = document.getElementById("total");
var promAmount = 0;
var one = ps4num.value;
var two = nSwitchnum.value;
var psTotal = one * 499;
var nSwTotal = two * 399;
var shp = 0;
var ins = 0;
var gntCount = 0;
var gift = 0;
var tax = 0;
var total = 0;
ps4num.addEventListener("input", add);
nSwitchnum.addEventListener("input", add);

function add() {
    one = ps4num.value;
    two = nSwitchnum.value;
    psTotal = one * 499;
    nSwTotal = two * 399;
    if (stdShip.checked == true) {
        var shp = 4.99;
    }
    else {
        var shp = 19.99;
    }
       if((nSwitchnum<0) && (ps4num<0)){
       shp = 0;
        sub = 0;
        tax = 0;
        total = 0;
           gift = 0;
    }
    
    if (gwrap.checked == true) {
        var gift = 9.99;
    }
    else {
        var gift = 0;
    }
    var sub = subTotal.innerHTML =  psTotal + nSwTotal + shp + gift;
    if (insur.checked == true) {
        ins = sub * 0.1;
    }
    else {
        ins = 0;
    }
    document.getElementById("insurcalc").innerHTML = ins;
    if (gntCount > 0) {
        promAmount = 50;
    }
    else {
        promAmount = 0;
    }
    prom.innerHTML =  promAmount;
    
    if (sub>0){
        
        var tax = getTax.innerHTML =  (sub+psTotal+nSwTotal+shp+gift+ins-50)*0.13;
    }
    else{
        tax = 0;
    }
    
    if(sub>0){
        var total = getTotal.innerHTML = sub + tax - promAmount;
    }else{
        total = 0;
    }
   
 
    
}





ps4num.addEventListener("input", PsCartValue);
nSwitchnum.addEventListener("input", NsCartValue);

function PsCartValue() {
    var ps_item = ps4num.value;
    ps_cart.innerHTML = ps_item;
}

function NsCartValue() {
    var ns_item = nSwitchnum.value;
    ns_cart.innerHTML = ns_item;
}
(function () {
    function PromoGen() {
        this.length = 8;
        this.timestamp = +new Date;
        var _getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.generate = function () {
            var ts = this.timestamp.toString();
            var parts = ts.split("").reverse();
            var id = "";
            for (var i = 0; i < this.length; ++i) {
                var index = _getRandomInt(0, parts.length - 1);
                id += parts[index];
            }
            return id;
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.querySelector("#generate")
            , output = document.querySelector("#output");
        btn.addEventListener("click", function () {
            var generator = new PromoGen();
            output.innerHTML = generator.generate();
        }, false);
    });
    gntCount++;
})();