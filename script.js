/*Lucas de graaf
  applicatieonwikkeling niv 4, Da Vinci college Gorinchem
*/






const Kprijs = 9;	//hierbij geef je aan wat de prijs is.
const Mprijs = 10;
const Gprijs = 13;


var small = prompt("Hoeveel small pizza's wilt u?");	/*deze var vraagt doormiddel van
                                                      een prompt hoeveel small pizzas de klant wilt.*/
var medium = prompt("Hoeveel medium pizza's wilt u?");
var large = prompt("Hoeveel large pizza's wilt u?");
var smallprice = small*Kprijs;
var mediumprice = medium*Mprijs;
var largeprice = large*Gprijs;
var totalprice = smallprice+mediumprice+largeprice;		//hier word het totaal bedrag uitgerekent.




/* hier komt het antwoord te staan voor welke prijs oeveel pizzas*/
document.write("U heeft gekozen voor"," ", small," ", "small pizza(s).", " ","€", smallprice, ",-");
document.write("<br><br>");		//"<br><br>" staat voor  dubbel ENTER.
document.write("U heeft gekozen voor"," ", medium," ", "medium pizza(s).", " ","€", mediumprice, ",-");
document.write("<br><br>");
document.write("U heeft gekozen voor"," ", large," ", "large pizza(s).", " ","€", largeprice, ",-");
document.write("<br><br>", "Het totaal bedrag is €", totalprice,",-")
