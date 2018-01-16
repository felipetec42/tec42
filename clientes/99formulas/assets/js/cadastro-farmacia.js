$(document).ready(function () { 
  var $cnpj = $("#cnpj");
  var $cep = $("#cep");
  var $telefone = $("#telefone");
  $cnpj.mask('00.000.000/0000-00');
  $cep.mask('00000-000');
  $telefone.mask('(00)00000-0000');
});

$(document).ready(function(){
  $("#cep").blur(function(){
    $('input').attr('disabled',true);
    $("#endereco").val("Aguarde...")
    $("#bairro").val("Aguarde...")
    $("#cidade").val("Aguarde...")
    $("#estado").val("Aguarde...")

    consulta = $("#cep").val().replace(/-/g, "");
    console.log(consulta);

    $.getScript("http://www.ctasoftware.com.br/webservice/clienteWebService.php?cep="+consulta+"&formato=javascript", function(){
      endereco=unescape(resultadoCEP.logradouro)
      bairro=unescape(resultadoCEP.bairro)
      cidade=unescape(resultadoCEP.cidade)
      estado=unescape(resultadoCEP.estado)
      
      $("#endereco").val(endereco)
      $("#bairro").val(bairro)
      $("#cidade").val(cidade)
      $("#estado").val(estado)
      $('input').attr('disabled',false);
    });
  });
});

$('#dados-empresa .btn').click(function(){
  $('#dados-empresa').fadeOut();
  $('#endereco-empresa').delay(500).fadeIn();

  $('span').removeClass("active");
  $('#title-endereco-empresa span').addClass("active");

  $('span').addClass("hidden-mobile");
  $('#title-endereco-empresa span').removeClass("hidden-mobile");
})

$('#endereco-empresa .btn-voltar').click(function(){
  $('#dados-empresa').delay(500).fadeIn();
  $('#endereco-empresa').fadeOut();

  $('span').removeClass("active");
  $('#title-dados-empresa span').addClass("active");

  $('span').addClass("hidden-mobile");
  $('#title-dados-empresa span').removeClass("hidden-mobile");
})

$('#endereco-empresa .btn-continuar').click(function(){
  $('#dados-contato').delay(500).fadeIn();
  $('#endereco-empresa').fadeOut();

  $('span').removeClass("active");
  $('#title-dados-contato span').addClass("active");

  $('span').addClass("hidden-mobile");
  $('#title-dados-contato span').removeClass("hidden-mobile");
})

$('#dados-contato .btn-voltar').click(function(){
  $('#dados-contato').fadeOut();
  $('#endereco-empresa').delay(500).fadeIn();

  $('span').removeClass("active");
  $('#title-endereco-empresa span').addClass("active");

  $('span').addClass("hidden-mobile");
  $('#title-endereco-empresa span').removeClass("hidden-mobile");
})
$('#dados-contato .btn-continuar').click(function(){
  $('#cadastro-final').delay(500).fadeIn();
  $('#dados-contato').fadeOut();
  $('#cadastro-col-left').fadeOut();
  $('.nav-cadastro').fadeOut();
  $('#cadastro-col-right').removeClass("col-md-7");
  $('#cadastro-col-right').addClass("col-md-12");
})

// $(document).ready(function(){
// // Mostra e nascondi view-news
// $('a.view-list-item').click(function () {
//     var divname= this.name;
//     $("#"+divname).show("slide", { direction: "left" }, 1000).parent().siblings().hide("slide", { direction: "left" }, 1000);
//   });
// });
