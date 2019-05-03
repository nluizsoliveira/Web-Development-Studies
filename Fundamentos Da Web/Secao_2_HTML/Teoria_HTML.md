# HTML
**H**yper**T**ext **M**arkup **L**anguage é a linguagem de marcação das páginas web. A criação de códigos em HTML exige somente um editor de texto e um navegador. Basta editar o documento com extensão .html com a sintaxe correta e abrí-lo via Browser. Páginas HTML são essencialmente estáticas e sem grande personalização de estilo. Para tal, é necessário o uso de **CSS** e **JavaScript**, respectivamente.

O funcionamento de uma página HTML depende do uso de **tags**, marcadores entre <> que indicam ao navegador como o conteúdo alí delimitado deve se comportar e ser gerado. A maioria das  tags possui abertura (**<nome_da_tag>**) e fechamento (**</nome_da_tag>**). Há exceções que se auto-fecham e não precisam de fechamento explícito. Neste caso, a sintaxe é apenas **<nome_da_tag>**. Via de regra, **toda tag que não é auto-fechada tem marca de fechamento**.

Por exemplo, a tag que marca o início do HTML é:

```
    <html>
    </html>
```
Já imagens são auto fechadas:

```
    <img src = "./caminho_ou_url_da_imagem">
```
Existem mais de 100 tags que definem o atual HTML5. Entretanto, poucas delas são essenciais e definem a estrutura-base de tóda página HTML. Muitos editores geram automaticamente o seguinte código, tal sua importância:  
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="./main.css" rel="stylesheet">
        <script src="./main.js"> </script>
    </head>
    <body>
    </body>
</html>
```


## Respostas de requisições HTTP
Na aba de **Network** do inspecionar elemento, são listadas as respostas das requisições HTTP. São agrupadas em 
##### 1xx
Respostas de informação. Por exemplo, quando o navegador solicita o site ao servidor, é enviada uma mensagem ```100: Continue```
##### 2xx
Respostas de sucesso. Indica que requests funcionaram, bem como detalhes sobre seu comportamento. 
##### 3xx
Respostas de redirecionamento. Indica que determinado conteúdo foi retornado de fontes externas. 
##### 4xxx
Respostas de erro de cliente. Recursos que demandam autorização, indisponíveis, com conflito, etc. 
##### 5xx
Respostas de erro do servidor. 

______________________
