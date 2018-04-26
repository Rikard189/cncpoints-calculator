var numeroCaso;
var quadrant;

$(".caso1").click(function(){
  numeroCaso = 1;
  $(".paso1").hide();
  $(".paso2").show();
});

$(".caso2").click(function(){
  numeroCaso = 2;
  $(".paso1").hide();
  $(".paso2").show();
});

$(".cuadrante1").click(function(){
  quadrant = 1;
  $(".paso2").hide();
});

$(".cuadrante2").click(function(){
  quadrant = 2;
  $(".paso2").hide();
});

$(".cuadrante3").click(function(){
  quadrant = 3;
  $(".paso2").hide();
});

$(".cuadrante4").click(function(){
  quadrant = 4;
  $(".paso2").hide();
});

if (numeroCaso == 1) {
  if (quadrant == 1) {

  } else if (quadrant == 2) {

  } else if (quadrant == 3) {

  } else {

  }
} else {
  if (quadrant == 1) {

  } else if (quadrant == 2) {

  } else if (quadrant == 3) {

  } else {

  }
}

class Formula {
  constructor(r, alpha) {
    this.r = r;
    this.alpha = alpha;
  }

  get resultado1(){
    this.r * Math.cos(this.alpha);
  }

  get resultado2(){
    this.r - this.resultado1();
  }

  get resultado3(){
    this.resultado2/Math.tan(this.alpha)
  }

  get resultado4(){
    (this.r * Math.sin(this.alpha)) - this.resultado3;
  }
}
