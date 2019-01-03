$(function(){
  //tableau des enchant jaunes violet rouge pour jaune
  let tbEnchantJJ=[88,88,88,68,68,68,48,48,48,28,28,28,28,28,28];
  let tbEnchantJV=[100,100,100,88,88,88,68,68,68,48,48,48,48,48,48];
  let tbEnchantJR=[100,100,100,98,98,98,78,78,78,58,58,58,58,58,58];
//tableau pour violette
  let tbEnchantVJ=[55,55,55,35,35,35,15,15,15,5,5,5,5,5,5];
  let tbEnchantVV=[100,100,100,85,85,85,65,65,65,45,45,45,45,45,45];
  let tbEnchantVR=[100,100,100,95,95,95,75,75,75,55,55,55,55,55,55];
  //tableau pour rouge
  let tbEnchantRJ=[52,52,52,32,32,32,12,12,12,5,5,5,5,5,5];
  let tbEnchantRV=[100,100,100,82,82,82,62,62,62,42,42,42,42,42,42];
  let tbEnchantRR=[100,100,100,92,92,92,72,72,72,52,52,52,52,52,52];
  //allons chercher le boutton


  let go=$('#go');


  //variable utiles.

  let nStuff=0;
  let jUtil=0;
  let vUtil=0;
  let rUtil=0;
  let typeCompteur="";


  //Invoquons rngesus









//automatisons le tout

go.click(function(){

  let couleur=$('#couleur').val();
  let violette=$('#violette').val();
  let rouge=$('#rouge').val();
  let nb=$('#nb').val();
 while (nb>0) {
      let tb=[];
      if (couleur=="jaune"){
        if (violette==0){
          if (rouge==0){
            typeCompteur="jaune";
            tb=tbEnchantJJ;
          }
          if (rouge>0) {
            if (nStuff<=rouge){
              typeCompteur="jaune";
              tb=tbEnchantJJ;
            }
            else {
              typeCompteur="rouge";
              tb=tbEnchantJR;
            }
          }
        }
        if (violette>0){
          if (rouge==0){
            if (nStuff>=violette){
              typeCompteur="violette";
              tb=tbEnchantJV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantJJ;
            }
          }
          if (rouge>0){
            if(nStuff>=rouge){
              typeCompteur="rouge";
              tb=tbEnchantJR;
            }
            else if (nStuff>=violette) {
              typeCompteur="violette";
              tb=tbEnchantJV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantJJ;
            }
          }

        }

      }
      //VIOLET
      else if (couleur=="violet") {
        if (violette==0){
          if (rouge==0){
            typeCompteur="jaune";
            tb=tbEnchantVJ;
          }
          if (rouge>0) {
            if (nStuff<=rouge){
              typeCompteur="jaune";
              tb=tbEnchantVJ;
            }
            else {
              typeCompteur="rouge";
              tb=tbEnchantVR;
            }
          }
        }
        if (violette>0){
          if (rouge==0){
            if (nStuff>=violette){
              typeCompteur="violette";
              tb=tbEnchantVV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantVJ;
            }
          }
          if (rouge>0){
            if(nStuff>=rouge){
              typeCompteur="rouge";
              tb=tbEnchantVR;
            }
            else if (nStuff>=violette) {
              typeCompteur="violette";
              tb=tbEnchantVV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantVJ;
            }
          }

        }
      }
      //ROUGE
      else {
        if (violette==0){
          if (rouge==0){
            typeCompteur="jaune";
            tb=tbEnchantRJ;
          }
          if (rouge>0) {
            if (nStuff<=rouge){
              typeCompteur="jaune";
              tb=tbEnchantRJ;
            }
            else {
              typeCompteur="rouge";
              tb=tbEnchantRR;
            }
          }
        }
        if (violette>0){
          if (rouge==0){
            if (nStuff>=violette){
              typeCompteur="violette";
              tb=tbEnchantRV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantRJ;
            }
          }
          if (rouge>0){
            if(nStuff>=rouge){
              typeCompteur="rouge";
              tb=tbEnchantRR;
            }
            else if (nStuff>=violette) {
              typeCompteur="violette";
              tb=tbEnchantRV;
            }
            else {
              typeCompteur="jaune";
              tb=tbEnchantRJ;
            }
          }

        }
      }
      let nb1=tb[nStuff];
      let nb2=Math.floor((Math.random() * 100) + 1);
      if (nb1>nb2){
          let nb3=Math.floor((Math.random() * 100) + 1);
          if (nb3>89) {
            nStuff=nStuff+2;
          }
          else{
            nStuff++;
          }

      }
      else {
        if (typeCompteur!=="rouge"){
          if (nStuff<10){
            nStuff--;
            if (nStuff<0) {
              nStuff=0;
            }
          }
          else {
            nStuff=10;
          }
        }


      }

      if (typeCompteur=="rouge") {
        rUtil++;
      }
      if (typeCompteur=="violette") {
        vUtil++;
      }
      if (typeCompteur=="jaune"){
        jUtil++;
      }


    if (nStuff==15 || nStuff==16){
      nb--;
      nStuff=0;
    }
  }

console.log("pierres jaunes"+jUtil);
console.log("pierres violette"+vUtil);
console.log("pierres Rouge"+rUtil);


//affichage du resultat
if (jUtil!==0) {

  $('#rjaune').html(jUtil+" pierres jaunes utilisées.");
}
else {
  $('#rjaune').html(" ");
}

if (vUtil!==0) {

  $('#rviolet').html(vUtil+" pierres violettes utilisées. Donc beaucoup d'euros.");
}
else {
  $('#rviolet').html(" ");
}

if (rUtil!==0) {

  $('#rrouge').html(rUtil+" pierres rouges utilisées. Avous tu n'en as jamais vu autant.");
}
else {
  $('#rrouge').html(" ");
}

//reset
nStuff=0;
jUtil=0;
vUtil=0;
rUtil=0;
typeCompteur="";

});




});
