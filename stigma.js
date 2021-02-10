$(function(){
  //tableau des enchant jaunes violet rouge pour jaune
  let txreussite=[100, 95, 90, 80, 70, 60, 50, 40, 30, 20, 20, 20];
  let evtxreussite=[100, 95, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30];
  let nodown=[5, 5, 5, 10, 10, 16, 20, 20, 20, 100, 20, 20 ]
  let crit=[13, 13, 13, 8, 8, 5, 5, 5, 3, 1, 1, 1]
  let supercrit=[5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0 ]

  

  let stigmago=$('#stigmago');
  let event=$('#event');


  //variable utiles.



  //Invoquons rngesus









//automatisons le tout

stigmago.click(function(){

if (event.val()){
  var txActuel=evtxreussite;
  console.log(txActuel);
}
else {
  var txActuel=txreussite;
  console.log(txActuel);
}
let pierreutil=0

  for (let i=0; i<6; i++){
    let stigma=0

    while (stigma<12) {
      pierreutil++
      console.log(stigma);
      let roll = Math.floor((Math.random() * 100) + 1);
      if (roll>txActuel[stigma]){
        // aie
        let roll = Math.floor((Math.random() * 100) + 1);
        if (roll<nodown[stigma]){
          // mega aie
          stigma--;
        }
      }
      else {
        let roll = Math.floor((Math.random() * 100) + 1);
        if (roll>crit[stigma]){
          stigma++;
        }
        else {
          let roll = Math.floor((Math.random() * 100) + 1);
          if (roll>supercrit[stigma]){
            stigma= stigma+2;
          }
          else {
            stigma=stigma+3;
          }
        }

      }
    }



  }

  $('#stigresult').html(pierreutil+" pierres utilisées")

});




});
