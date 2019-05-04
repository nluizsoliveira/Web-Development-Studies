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
________________________________________
### ```<head> </head>```
Delimita o cabeçalho da página. O conteúdo do **head não aparece diretamente na página**, sendo destinado a **especificações e configurações** que auxiliam o navegador. As tags que compõe o head são: 
* ##### ```<title> </title>```
Indica o título da página, que aparece na aba do navegador.
________________________________________
* ##### ```<base>``` 
Define URL base do documento, o que facilita a atribuição de urls via href . **É única, não é possível ter mais de uma base no mesmo documento**.
________________________________________
* ##### ```<link>```
Utilizada para incluir recursos no documento. Por exemplo, 
```
        <link href="./main.css" rel="stylesheet">
```
Indica que no caminho **href** = ./main.css há um documento a ser incluído, e seu atributo **ref** indica que trata-se de um stylesheet. Pode haver múltiplos links por documento. 
________________________________________
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
________________________________________
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

________________________________________
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
________________________________________
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
________________________________________
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
________________________________________
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

________________________________________
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

________________________________________
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

 ________________________________________
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
 
 ________________________________________
* ##### ```<pre> </pre>```
 Respeita a formatação do conteúdo pré formatado. 
 
 ```
 <pre> texto    pre   formatado</pre>
 <p> texto      não    pre    formatado </p>

```
Espaços e tabs são respeitados por ```<pre>```, ao contrario de outras entradas de texto comuns. 

 <pre>texto  pre  formatado</pre>
 <p>texto  não  pre  formatado<p>
    
________________________________________
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
  
________________________________________
* ##### ```<b> </b>```
**b** vem de bold. Destaca palavras **importantes** do texto. 
```
<p>A palavra mais importante da frase é <b>esta</b></p>
```
<p>A palavra mais importante da frase é <b>esta</b></p>

________________________________________
* ##### ```<br>```
Tag de quebra de linha.

```
<p> Linha um <br> Linha dois</p>
```
<p> Linha um <br> Linha dois</p>

________________________________________
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

________________________________________
* ##### ```<dfn> </dfn>```
Permite criar definição de um termo e que buscadores identifiquem seu site como provedor de uma definição ao mesmo. 
```
<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>
```

<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>

________________________________________
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

________________________________________
### Imagem e Multimídia
* ##### ```<map> </map> e <area></area>```
Map define uma imagem como um **mapa**, e area define subareas deste mapa com base em coordenadas definidas da mesma. Com isto, é possível executar ações específicas ao se clickar sobre uma parte pre-delimitada de uma imagem. 

```
<html lang="en">
    <head>
        
    </head>
    <body>
        <img src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg" alt="" usemap="#Map" />
        <map name="Map" id="Map">
            <area alt="Dog's nose" title="Dog's nose" href="https://www.youtube.com/watch?v=Gf4k0VgCQjg" shape="rect" coords="98,77,136,109" />
            <area alt="Dog's pawn" title="Dog's pawn" href="https://www.mnn.com/family/pets/stories/18-things-you-didnt-know-about-dog-paws" shape="rect" coords="205,364,248,410" />
        </map>
    </body>
</html>
```

O site http://imagemap-generator.dariodomi.de/ automatiza o processo, permitindo criar múltiplas áreas de maneira e devolvendo o código HTML já com as mesmas mapeadas.

**Coloque o código acima em um .html e tente clickar no nariz do cachorro ;)**

________________________________________
* ##### ```<video> </video> e <iframe> </iframe>```
Insere um vídeo na página. Para vídeos no youtube. utilizar iframe. 

```
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=r1LNxYYrLTM">
</iframe>
```
________________________________________
### Conteúdo integrado
* ##### ```<embed> </embed>```
Embed permite o uso de conteúdos de **sites externos** na página. Por exemplo, é possível incorporar vídeos do youtube já com as configuraçõe ideais, utilizando o código gerado por share->embed da própria plataforma. 

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/r1LNxYYrLTM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
(Código não funciona no github, testar em meio externo).
________________________________________
### Elementos tabulados
* ##### ```<table></table>,<thead></thead>, <tbody></tbody>, <tr></tr>, <th></th>, <td></td>, ```
Permitem a criação de tabelas.
**thead** é o elemento semantico que indica que a **tr** que contém trata-se da primeira linha da tabela. 
**th** indica um elemento da linha pertencente ao **thead**. O **número** de **th** no thead indica **quantas colunas** haverá na tabela. Além disso, elementos th são automaticamente **centralizados e colocados em negrito**.
**tbody** indica o corpo da tabela, isto é, da segunda linha em diante. 
**tr** indica uma linha (table row). O **numero** de **tr** no tbody indica **quantas linhas**, além da linha head, a tabela possuirá. 
**td** é um elemento da linha. O número de tds por linha **deve respeitar o número de ths da tabela**. (Isto é, cada linha deve ter um número de elementos igual ao número de colunas da tabela definido no cabeçalho). 
```
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Type</th>
                <th>Evolves into</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png"></td>
                <td>Bulbasaur</td>
                <td>Grass/Poison</td>

                <td><a href="http://pokemon.wikia.com/wiki/Ivysaur">Ivysaur</a></td>

            </tr>

            <tr>
                <td><img src="http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charma"></td>
                <td>Charmander</td>
                <td>Fire</td>
                <td><a href="http://pokemon.wikia.com/wiki/Charmeleon">Charmeleon</a></td>
            </tr>

            <tr>
                <td><img src="http://img1.wikia.nocookie.net/__cb20140328191525/pokemon/images/thumb/3/39/007Squirtle.png/200px-007Squirtle.pngType"></td>
                <td>Squirtle</td>
                <td>Water</td>
                <td><a href="http://pokemon.wikia.com/wiki/Wartotle">Wartotle</a></td>
            </tr>

        </tbody>

    </table>
    
</body>
</html>
```
Gera a tabela

<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" media="screen" href="main.css">
</head>
<body>
<table border="1">
<thead>
<tr>
<th>Image</th>
<th>Name</th>
<th>Type</th>
<th>Evolves into</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png"></td>
<td>Bulbasaur</td>
<td>Grass/Poison</td>

<td><a href="http://pokemon.wikia.com/wiki/Ivysaur">Ivysaur</a></td>

</tr>

<tr>
<td><img src="http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charma"></td>
<td>Charmander</td>
<td>Fire</td>
<td><a href="http://pokemon.wikia.com/wiki/Charmeleon">Charmeleon</a></td>
</tr>

<tr>
<td><img src="http://img1.wikia.nocookie.net/__cb20140328191525/pokemon/images/thumb/3/39/007Squirtle.png/200px-007Squirtle.pngType"></td>
<td>Squirtle</td>
<td>Water</td>
<td><a href="http://pokemon.wikia.com/wiki/Wartotle">Wartotle</a></td>
</tr>

</tbody>

</table>

</body>
</html>

________________________________________
### URI VS URN VS URL
A URI une o **Protocolo (https://)** a **localização do recurso (URL - github.com.br)** e o **nome do recurso (URN - /nluizsoliveira/)**. É o "link completo". 
________________________________________
### Protocolo HTPP e form

Ler :

* http://gc.blog.br/2007/07/02/post-vs-put-quem-insere-e-quem-altera/
* https://pt.stackoverflow.com/questions/92870/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-post
* https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.1.2
* https://woliveiras.com.br/posts/url-uri-qual-diferenca/
* **https://pt.stackoverflow.com/questions/49322/quais-as-vantagens-de-se-utilizar-os-m%C3%A9todos-http-corretos**

O **protocolo HTTP** é o conjunto de regras e transmissão de dados que permite a máquinas de diferentes configurações se comunicarem, por meio de requisições e respostas entre servidore e cliente. Cada requisição possui papel definido na especificação da linguagem, sendo os mais populares **GET**, **POST**, **PUT** e **DELETE**. Tais requisições **dizem ao navegador o que ele deve fazer com a informação identificada na URL**. Os métodos GET, PUT e DELET são **Idempotentes**, isto é, o efeito de se realizar múltiplas requisições seguidas é o mesmo de se realizar uma só. **POST NÃO É IDEMPOTENTE**. Além disto, em HTML5, <a href = "https://www.w3.org/TR/html5/forms.html#form-submission"> Apenas POST e GET são aceitos como métodos de submissão de formulários </a>


**GET** - Requer ao servidor que transmita a informação identificada na URL ao cliente. Serve **apenas para leitura, não modificando a informação**.


**POST** - Envia uma entidade e requisita que o servidor aceita-a como subordinada do recurso identificado pela URI.


**PUT** - **Cria ou atualiza** uma uma informação identificada na URL.Put “coloca” uma página numa determinada URL. Se a página já existir naquela URL ela é substituída. Se não houver página, ela é criada e passa a ser a que foi enviada no PUT. PUT é uma operação limitada que simplesmente coloca uma página numa localidade 


DELETE - **Deleta** um recurso identificado na URL. 
      
* ##### ```<form></form>```
Indica o início de um formulário. Enviam e solicitam informações ao servidor por meio de requisições. Possui os atributos **```action = ""```** indica qual url será atingida pela requisição.  **```method = "metodo_escolhido"```** indica qual requisição será feita. Por padrão, **a requisição enviada é a GET, mas é possível requisitar outras por meio do parâmetro method**. Por exemplo, para requisitar DELETE, usa-se: ```<form action = "" method = "DELETE">```.

* ##### ```<label></label>```
Camada que precede um input. Indica ao usuário que tipo de informação ele deve fornecer pelo input. Possui como atributos **```for = "id_do_input_que_precede"```**, que indica qual input o label deve preceder. 
* ##### ```<input></input>```
Caixa de entrada por onde o usuário preenche as informações que serão enviadas ao servidor via requisições. Possui como atributos, fora o **id**, **```type = "tipo_de_input"**```**, onde é especificado o tipo do input (Texto, número, senha, e-mail, etc) e **```name = "nome_do_input"```**. **```value = "valor_do_input"```** define o valor do input, que representa coisas diferentes a depender do tipo do input. Da referência em w3schools, 

```
For "button", "reset", and "submit" - it defines the text on the button
For "text", "password", and "hidden" - it defines the initial (default) value of the input field
For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
```

