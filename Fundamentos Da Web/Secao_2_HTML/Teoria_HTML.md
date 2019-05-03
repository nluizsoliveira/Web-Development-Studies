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
Indica ao navegador que a página de Nelson Luiz de Oliveira trata sobre resumo de HTML e cobre os tópicos HTML, CSS e Tags. 
* ##### ```<style> </style>```
Permite a inserção de código de estilo (CSS, por exemplo) diretamente no HTML. Por exemplo:

```
<html lang="en">
    <head>
       <style type="text/css">
            body {
              color:red;
            }
        </style>
    </head>
    <body>
        <p>Meu paragrafo<p>
    </body>
</html>
```
Faz com que todo parágrafo do HTML fique vermelho.Teste em https://www.w3schools.com/code/tryit.asp?filename=G3ONPJCNKFUX 

**Não é indicado fazer alterações de estilo diretamente no HTML**. Um arquivo CSS separado deve ser utilizado. 

_______________________________________
### Respostas de requisições HTTP
Toda a comunicação entre computador e servidor é feita por requisições do protocolo HTTP. 
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

________________________________________
### Atributos
Variáveis específicas de cada tag que permitem modificar seu comportamento. A tag
* ##### ```<input>```
Cria uma área de input na página. Mas um input, por sí só, é muito **genérico**. Inputs tem, por exemplo, tipo, obrigatoriedade e restrição de resposta. Cada um destes é representado por um **atributo**, e cada atributo possui **valores possíveis** pré-estabelecidos que definem seu comportamento.
Todos os atributos e seus respectivos valores possíveis de cada tag podem ser encontrado na documentação da mesma. No caso, https://www.tutorialspoint.com/html/html_input_tag.htm
* **type** estabelece o **tipo** do input. Pode ser, por exemplo:
    * text
    * email
    * number
    * password
```
<html>
    <head>
    </head>
    <body>
        <input type = "text">
        <input type="password">
        <button type = submit>Enviar</button>
    </body>
</html>
```

* **required** estabelece que o input deve ser respondido ao se clickar em um botão de submissão com atributo submit.

```
<html>
    <head>
    </head>
    <body>
        <input type = "text" required>
        <input type="password" required>
        <button type = submit>Enviar</button>
    </body>
</html>
```
Agora, submit só funciona se todos os campos forem preechidos.

Outros atributos importantíssimos são **id** e **class**, que classificam individualmente ou em grupo as tags e permitem que o **css** e **javascript** identifiquem quais elementos devem modificar. 


### Doctype e comentários
**Comentários** são observações que facilitam o entendimento do código. Não aparecem na página e são ignorados pelo navegador durante sua montagem. Em HTML, comentários são inicializados por ```!<--``` e finalizados por ```-->```.

```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- Cria uma barra de progresso. Value guarda o valor preenchido da barra, e max o seu valor máximo. -->
        <!-- Teste em  https://www.w3schools.com/code/tryit.asp?filename=G3OP9YAG18UH -->
        <progress id="health" value="100" max="100"></progress>
    </body>
</html>
```
O elemento ```<!DOCTYPE html>```, no passado, passava ao navegador uma série de parâmetros que ajudavam-no a processar a página como HTML. Entretanto no HTML5 a tag foi simplificada, e agora define que a versão do HTML é a 5. 

### Separação de conteúdos (Web Semântica)
É possível preencher todo o conteúdo da páginas com tags genéricas, como o ```<p>```. Entretanto, a estruturação da página seguindo **boas práticas de Web Semântica** (movimento colaborativo para **organizar a informação de maneira legível para computadores e máquinas**) é essencial para seu processamento por ferramentas externas.


É comum que blogs ou sites de notícias possuam conteúdo em forma de artigos. Mais ainda, fornecer informações sobre o autor de algum conteúdo. Disponibilizar o artigo dentro da tag **```<article> </article>```**, assim como informações do autor dentro da tag **```<address> </address>```** permite que o conteúdo seja melhor classificado por motores de busca, por exemplo. Caso não se refira ao autor de um artigo, e sim do website como um todo, deve ser colocada dentro do **```<footer> </footer:```**, outra tag característica que reúne informações chave do website. Por exemplo: 

```
<html>
    <head>
    </head>
    <body>
        <article>
            <p>A estruturação da página seguindo boas práticas de Web Semântica é essencial para seu processamento por ferramentas externas.</p>
        <address> Autor: W3C Semantic Web<a mailto="contact@w3">contact@w3</a>. </address>
        </article>

        <footer>
            <address> Autor: Nelson Oliveira <a mailto="nelson.luiz.oliveira@usp.br">nelson.luiz.oliveira@usp.br</a>. </address>
        </footer>
    </body>
</html>
```
* ##### Títulos:
São definidos pela letra h seguida de um número que indica sua relevância na página. É recomendado apenas um ```<h1>``` por página, bem como evitar abusos de ```<h2>```;
```
<h1>Título h1</h1>
<h2>Título h2</h2>
<h3>Título h3</h3>
<h4>Título h4</h4>
<h5>Título h5</h5>
<h6>Título h6</h6>

```
<html>
    <body>
<h1>Título h1</h1>
<h2>Título h2</h2>
<h3>Título h3</h3>
<h4>Título h4</h4>
<h5>Título h5</h5>
<h6>Título h6</h6>
    </body>
 </html>
 
 * ##### ```<nav> </nav>```
Menu de navegação. Representa uma seção da página que aponta para outras páginas ou área da páginas. É a partir de navs que motores de busca geram susessões do site do primeiro resultado de busca. É utilizado em conjunto de listas.

```
<html>
  <head>
  </head>
  <body>
      <nav>
          <ul>
            <li><a href="url_para_pagina_inicial">Página inicial</a></li>
            <li><a href="url_para_sobre">Sobre</a></li>
            <li><a href="url_para_contato">Contato</a></li>
          </ul>
        </nav>
    </body>
</html>

```

<head>
</head>
<body>
<nav>
<ul>
<li><a href="url_para_pagina_inicial">Página inicial</a></li>
<li><a href="url_para_sobre">Sobre</a></li>
<li><a href="url_para_contato">Contato</a></li>
</ul>
</nav>
</body>
</html>

 * ##### ```<hr> ```
Marca mudança de significado semântico. Pode ser utiliada em barras horizontais que separam conteúdos, por exemplo, para que passem a ter, além de significado visual, semântico para motores de busca. 




### Conteúdo Textual
 * ##### ```<div> </div>```
Caixa vazia sem formatação, utilizada para agrupá-los em um mesmo conteiner editável por CSS.

```
<html>
    <head>
    </head>
    <body>
    <div id = "album_de_fotos">
        <img src = "link_ou_path_da_imagem">
        <img src = "link_ou_path_da_imagem">
        <img src = "link_ou_path_da_imagem">
        <img src = "link_ou_path_da_imagem">
    </div>
        <img src = "imagem_qualquer_fora_do_album">
    </body>
</html>
```
Permitiria tratar conjuntamente todas as imagens dentro de "album_de_fotos". A div transcende a classe **cria um elemento** em torno das imagens, que por sí só **possui as mesmas propriedades de outro elemento html qualquer (margem, tamanho relativo, padding, etc)**. 

No exemplo, inserir uma borda em imagens da mesma classe faria com que todas ficassem com borda entre sí. Criar uma div em torno delas, e então inserir a borda, criaria uma borda em torno das imagens **como se fossem um só elemento**. 

 * ##### ```<dl> </dl>, <dt> </dt> e <dd> </dd>```
Definem listas de termos dentro de um site. 
**dl** vem de definition list; lista de definições.
**dt** vem de definition term, termo a ser definido
**dd** vem de definition description, a descrição de fato do termo

```
<p>Harry Potter Spells:</p>

<dl>
    <dt>Wingardium Leviosa</dt>
    <dd>Levitates objects.</dd>

    <dt>Alohomora</dt>
    <dd>Opens door locks.</dd>

    <dt>Lumos</dt>
    <dd>Creates Light.</dd>
</dl>
```

<p>Harry Potter Spells:</p>
<html>
<dl>
    <dt>Wingardium Leviosa</dt>
    <dd>Levitates objects.</dd>

   <dt>Alohomora</dt>
   <dd>Opens door locks.</dd>

   <dt>Lumos</dt>
   <dd>Creates Light.</dd>
</dl>
</html>

 * ##### ```<ol> </ol>  <ul> </ul> e <li> </li>```
 **ol** vem de ordered list
 **ul** vem de unordered list
 **li** vem de list item
 
 ```
<p>Lists:</p>
<ol>Ordered List
    <li> List item</li>
    <li> List item</li>
    <li> List item</li>
</ol>

<ul>Unordered List
    <li> List item</li>
    <li> List item</li>
    <li> List item</li>
</ul>

```

<p>Lists:</p>
<ol>Ordered List
    <li> List item</li>
    <li> List item</li>
    <li> List item</li>
</ol>

<ul>Unordered List
    <li> List item</li>
    <li> List item</li>
    <li> List item</li>
</ul>
 
 * ##### ```<pre> </pre>```
 Respeita a formatação do conteúdo pré formatado. 
 
 ```
 <pre> texto    pre   formatado</pre>
 <p> texto      não    pre    formatado </p>

```
Espaços e tabs são respeitados por ```<pre>```, ao contrario de outras entradas de texto comuns. 

 <pre>texto  pre  formatado</pre>
 <p>texto  não  pre  formatado<p>
    
### Elementos Semânticos
 * ##### ```<a> </a>```
 Insere link.
 
 ```
    <a href = "www.google.com">Google</a>
 ```
 <a href = "www.google.com">Google</a>

 * ##### ```<abbr> </abbr>```
Dá significado semântico à abreviação, fazendo com que buscadores associem sua sigla ao termo completo. Também mostra abreviação ao passar mouse por cima da sigla.  
 
 ```
 <p>Nelson é estudante do <abbr title = "Institutos de Ciências Matemáticas e Computação">ICMC</abbr></p>
 ```
<p>Nelson é estudante do <abbr title = "Institutos de Ciências Matemáticas e Computação">ICMC</abbr></p>
  
* ##### ```<b> </b>```
**b** vem de bold. Destaca palavras **importantes** do texto. 
```
<p>A palavra mais importante da frase é <b>esta</b></p>
```
<p>A palavra mais importante da frase é <b>esta</b></p>

* ##### ```<br>```
Tag de quebra de linha.

```
<p> Linha um <br> Linha dois</p>
```
<p> Linha um <br> Linha dois</p>

* ##### ```<data> </data>```
Permite inserção de dados que serão lidos por computadores (Ex: Código de barras)
```
<ul>
    <li> <data value = "123123123"> Produto 1</data></li>
    <li> <data value = "14234323"> Produto 2</data></li>
    <li> <data value = "534345123"> Produto 3</data></li>
</ul>
```
<ul>
    <li> <data value = "123123123"> Produto 1</data></li>
    <li> <data value = "14234323"> Produto 2</data></li>
    <li> <data value = "534345123"> Produto 3</data></li>
</ul>

Ao salvar o arquivo.html e abrí-lo no navegador, inspecionando o elemento, é possível ver os valores associados no campo data (Não funciona no Github)

* ##### ```<dfn> </dfn>```
Permite criar definição de um termo e que buscadores identifiquem seu site como provedor de uma definição ao mesmo. 
```
<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>
```

<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>

* ##### ```<time> </time>```
Maneira que dá semântica ao representar tempo. 
```
<article>
    <p>O evento ocorreu <time datetime="2019-05-03 19:00">3 de Maio</time>.</p>
    <p>Data de publicação:  <time pubdate>2019-05-03</time>.</p>
</article>
``` 

<article>
    <p>O evento ocorreu <time datetime="2019-05-03 19:00">3 de Maio</time>.</p>
    <p>Data de publicação:  <time pubdate>2019-05-03</time>.</p>
</article>

### Imagem e Multimídia

