/*function calcula(){
    var dados = document.getElementById("formulario");
    var salario = parseFloat(document.getElementById("salario").value);
    var percentual = parseFloat(document.getElementById("percentual").value);
    var aumento = 0;
    var salario_final = 0;

    aumento = (salario * percentual) / 100;
    salario_final = salario + aumento;

    for(i = 0;i<dados.elements.length;i++){
        if(dados.elements[i].type == 'text' && dados.elements[i].value == ''){
            alert('O '+dados.elements[i].alt+' é obrigatório.');
            dados.elements[i].focus();
            return false;
        }else if(dados.elements[i].type == 'text' && isNaN(dados.elements[i].value)){
            alert('O '+dados.elements[i].alt+' não é um número.');
            dados.elements[i].focus();
            return false;
        }
    }

    document.getElementById("percentual_aplicado").innerHTML = "Total do Reajuste em %: "+percentual;
    document.getElementById("aumento").innerHTML = "Valor do aumento em R$: "+aumento;
    document.getElementById("novo").innerHTML = "Novo salário em R$: "+salario_final;

    return true;
}

function sair(){
    return 0;
}*/
$(document).ready(function(){
    $("#reajustar").click(function(){
        $("form input").each(function(){
            if($(this).val() == ""){
                $(this).css({
                    "border": "1px solid #F00",
                    "padding": "2px"
                });
                $(this).focus();
                return false;
            }else {
                var salario = parseFloat($("#salario").val());
                var percentual = parseFloat($("#percentual").val());
                var aumento = 0;
                var salario_final = 0;

                aumento = (salario * percentual) / 100;
                salario_final = salario + aumento;

                $("#percentual_aplicado").text("Total do Reajuste em %: "+percentual);
                $("#aumento").text("Valor do aumento em R$: "+aumento);
                $("#novo").text("Novo salário em R$: "+salario_final);

                return true;
            }
        })
    })
})