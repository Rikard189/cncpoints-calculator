var numeroCaso;
var quadrant;
var values = {};

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
  showGraph();
});

$(".cuadrante2").click(function(){
  quadrant = 2;
  showGraph();
});

$(".cuadrante3").click(function(){
  quadrant = 3;
  showGraph();
});

$(".cuadrante4").click(function(){
  quadrant = 4;
  showGraph();
});


function showGraph(){
  $(".paso2").hide();
  $(".lastTitle").text("Caso #" + numeroCaso + " | Cuadrante #" + quadrant);
  if (numeroCaso == 1) {
    if (quadrant == 1) {
      $(".graph").attr("src", "img/caso1/cuadrante1.png")
    } else if (quadrant == 2) {
      $(".graph").attr("src", "img/caso1/cuadrante2.png")

    } else if (quadrant == 3) {
      $(".graph").attr("src", "img/caso1/cuadrante3.png")

    } else {
      $(".graph").attr("src", "img/caso1/cuadrante4.png")

    }
  } 
  else {
    if (quadrant == 1) {
      $(".graph").attr("src", "img/caso2/cuadrante1.png")

    } else if (quadrant == 2) {
      $(".graph").attr("src", "img/caso2/cuadrante2.png")

    } else if (quadrant == 3) {
      $(".graph").attr("src", "img/caso2/cuadrante3.png")

    } else {
      $(".graph").attr("src", "img/caso2/cuadrante4.png")

    }
  }
  $(".paso3").show();

}

class Formula {
  constructor(radius, alpha) {
    this.radius = radius;
    this.alpha = alpha;
  }

  get resultado1(){
    return this.radius * Math.cos(this.alpha);
  }

  get resultado2(){
    return this.radius - this.resultado1;
  }

  get resultado3(){
    return this.resultado2/Math.tan(this.alpha)
  }

  get resultado4(){
    return (this.radius * Math.sin(this.alpha)) - this.resultado3;
  }
}

$('.form').submit(function() {
    // get all the inputs into an array.
    var $inputs = $('.form :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    var formula = new Formula(values["radio"], values["alpha"]);
    console.log(values);
    console.log(formula);
    $('.form').hide();

    $('#result').show();
    $(".result1").text("1: " + formula.resultado1);
    $(".result2").text("2: " + formula.resultado2);
    $(".result3").text("3: " + formula.resultado3);
    $(".result4").text("4: " + formula.resultado4);

    return false;

});
