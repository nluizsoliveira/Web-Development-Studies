//library.js
var my_a = 3;
var my_b = 4;

function library_print(a,b){
    c = a + b;
    console.log(c);
    return c;
}
//module.expots.nome_como_sera_exportado = nome_da_variável_no_módulo
module.exports.any_name_a = my_a; //posso usar qualquer nome 
module.exports.my_b = my_b;       //posso usar mesmo nome
module.exports.library_prints = library_print; //posso exportar funcoes