# HTML
**H**yper**T**ext **M**arkup **L**anguage é a linguagem de marcação das páginas web. A criação de códigos em HTML exige somente um editor de texto e um navegador. Basta criar o documento com extensão .html, utilizar a sintaxe correta e abrí-lo via Browser. Páginas HTML são essencialmente estáticas e sem grande personalização de estilo. Para deixá-las estilizadas e dinâmicas é necessário o uso de **CSS** e **JavaScript**, respectivamente. As principais referências de HTML estão disponíveis em: 
* https://www.w3schools.com/ 
* https://developer.mozilla.org/en-US/docs/Web/HTML

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

### ```<html> </html>```
Indica ao nagevador que trata-se de um documento HTML e engloba todo o resto do código
### ```<head> </head>```
Delimita o cabeçalho da página. O conteúdo do **head não aparece diretamente na página**, sendo destinado a **especificações e configurações** que auxiliam o navegador. As tags que compõe o head são: 
* ##### ```<title> </title>```
Indica o título da página, que aparece na aba do navegador.
* ##### ```<base>``` 
Define URL base do documento, o que facilita a atribuição de urls via href . **É única, não é possível ter mais de uma base no mesmo documento**.
* ##### ```<link>```
Utilizada para incluir recursos no documento. Por exemplo, 
```
        <link href="./main.css" rel="stylesheet">
```
Indica que no caminho **href** = ./main.css há um documento a ser incluído, e seu atributo **ref** indica que trata-se de um stylesheet. Pode haver múltiplos links por documento. 
* ##### ```<meta>```
Passa meta-informações sobre o **funcionamento da página** ao navegador. Permite, por exemplo, indicar que a página possuirá padrão de escrita (charset) **unicode** e não ascii, que seria o padrão-base, como em: 
```
         <meta charset="UTF-8">
```
Também é possível indicar tags (No contexto de palavras-chave, e não html) relacionadas a SEO(Search Engine Optimization), permitindo que motores de busca cataloguem melhor e consequentemente deem prioridade à página em seu serviço.

```
<meta name = "keywords" content = "HTML,CSS,Tags">
<meta name = "description" content = "Resumo de HTML">
<meta name = "author" content = "Nelson Luiz Oliveira">
```
Indica ao navegador que a página de Nelson Luiz de Oliveira, trata sobre resumo de HTML e cobre os tópicos HTML, CSS e Tags. 
* ##### ```<style> </style>```
Permite a inserção de código CSS diretamente no HTML. Por exemplo:

```
<!DOCTYPE html>
<html lang="en">
    <head>
       <style type = 'text/css'>
            p{
                color: blue;
              }
        </style>
    </head>
    <body>
    </body>
</html>
```
fefe

```
##### ```<script>```
##### ```<noscript>```
##### ```<template>```

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
