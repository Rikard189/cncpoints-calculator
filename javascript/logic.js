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


function showResultGraph(results, values){
  if (numeroCaso == 1) {
    if (quadrant == 1) {
      $(".graph").attr("src", "img/caso1/c1-result.png");
      $(".x1").text(values["x-point"] - results["result2"]);
      $(".y1").text(values["y-point"] + results["result3"]);
      $(".x2").text(values["x-point"]);
      $(".y2").text(values["y-point"] + results["result4"]);
    } else if (quadrant == 2) {
      $(".graph").attr("src", "img/caso1/c2-result.png");
      $(".x1").text(values["x-point"] - results["result2"]);
      $(".y1").text(values["y-point"] + results["result3"]);
      $(".x2").text(values["x-point"]);
      $(".y2").text(values["y-point"] + results["result4"]);

    } else if (quadrant == 3) {
      $(".graph").attr("src", "img/caso1/c3-result.png");
      $(".x1").text(values["x-point"]);
      $(".y1").text(values["y-point"] - results["result4"]);
      $(".x2").text(values["x-point"] - results["result2"]);
      $(".y2").text(values["y-point"] - results["result3"]);

    } else {
      $(".graph").attr("src", "img/caso1/c4-result.png");
      $(".x1").text(values["x-point"]);
      $(".y1").text(values["y-point"] - results["result4"]);
      $(".x2").text(values["x-point"] - results["result2"]);
      $(".y2").text(values["y-point"] + results["result3"]);

    }
  }
  else {
    if (quadrant == 1) {
      $(".graph").attr("src", "img/caso2/c1-result.png");
      $(".x1").text(values["x-point"] - results["result4"]);
      $(".y1").text(values["y-point"]);
      $(".x2").text(values["x-point"] - results["result3"]);
      $(".y2").text(values["y-point"] - results["result2"]);

    } else if (quadrant == 2) {
      $(".graph").attr("src", "img/caso2/c2-result.png");
      $(".x1").text(values["x-point"] - results["result4"]);
      $(".y1").text(values["y-point"]);
      $(".x2").text(values["x-point"] + results["result3"]);
      $(".y2").text(values["y-point"] - results["result2"]);

    } else if (quadrant == 3) {
      $(".graph").attr("src", "img/caso2/c3-result.png");
      $(".x1").text(values["x-point"] + results["result3"]);
      $(".y1").text(values["y-point"] - results["result2"]);
      $(".x2").text(values["x-point"] - results["result4"]);
      $(".y2").text(values["y-point"]);

    } else {
      $(".graph").attr("src", "img/caso2/c4-result.png");
      $(".x1").text(values["x-point"] - results["result4"]);
      $(".y1").text(values["y-point"]);
      $(".x2").text(values["x-point"] + results["result3"]);
      $(".y2").text(values["y-point"] + results["result2"]);
    }
  }
}

function Formula(alpha, radius, x, y) {
  this.results = {};
  this.results["result1"] = radius * cosDegrees(alpha);
  this.results["result2"] = radius - this.results["result1"];
  this.results["result3"] = this.results["result2"]/tanDegrees(alpha);
  this.results["result4"] = (radius * sinDegrees(alpha)) - this.results["result3"];
}

$('.form').submit(function() {

    var $inputs = $('.form :input');

    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    var formula = new Formula(values["alpha"], values["radio"]);
    console.log(formula);
    $('.form').hide();

    $('#result').show();

    showResultGraph(formula.results, values);


    $(".result1").text("1: " + formula.results["result1"].toFixed(4));
    $(".result2").text("2: " + formula.results["result2"].toFixed(4));
    $(".result3").text("3: " + formula.results["result3"].toFixed(4));
    $(".result4").text("4: " + formula.results["result4"].toFixed(4));

    $(".x1").text(parseFloat($(".x1").text()).toFixed(4));
    $(".x2").text(parseFloat($(".x2").text()).toFixed(4));
    $(".y1").text(parseFloat($(".y1").text()).toFixed(4));
    $(".y2").text(parseFloat($(".y2").text()).toFixed(4));

    return false;

});

function cosDegrees(angle) {return Math.cos(angle/180*Math.PI);};
function sinDegrees(angle) {return Math.sin(angle/180*Math.PI);};
function tanDegrees(angle) {return Math.tan(angle/180*Math.PI);};
