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

function Formula(alpha, radius) {
  this.results = {};
  this.results["result1"] = radius * Math.cos(alpha);
  this.results["result2"] = radius - this.results["result1"];
  this.results["result3"] = this.results["result2"]/Math.tan(alpha);
  this.results["result4"] = (radius * Math.sin(alpha)) - this.results["result3"];
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
    console.log(formula);
    $('.form').hide();

    $('#result').show();
    $(".result1").text("1: " + formula.results["result1"]);
    $(".result2").text("2: " + formula.results["result2"]);
    $(".result3").text("3: " + formula.results["result3"]);
    $(".result4").text("4: " + formula.results["result4"]);

    return false;

});
