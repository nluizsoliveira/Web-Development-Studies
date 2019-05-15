# HTML
**H**yper**T**ext **M**arkup **L**anguage é a linguagem de marcação das páginas web. A criação de códigos em HTML exige somente um editor de texto e um navegador. Basta criar o documento com extensão .html, utilizar a sintaxe correta e abrí-lo via Browser. Páginas HTML são essencialmente estáticas e sem grande personalização de estilo. Para deixá-las estilizadas e dinâmicas é necessário o uso de **CSS** e **JavaScript**, respectivamente. As principais referências de HTML estão disponíveis em: 
* https://www.w3schools.com/ 
* https://developer.mozilla.org/en-US/docs/Web/HTML

O funcionamento de uma página HTML depende do uso de **tags**, marcadores entre <> que indicam ao navegador como o conteúdo alí delimitado deve se comportar e ser gerado. A maioria das  tags possui abertura (**<nome_da_tag>**) e fechamento (**</nome_da_tag>**). Há exceções que se auto-fecham e não precisam de fechamento explícito. Neste caso, a sintaxe é apenas **<nome_da_tag>**. Via de regra, **toda tag que não é auto-fechada tem marca de fechamento**.

Por exemplo, a tag que marca o início do HTML é:

```HTML
    <html>
    </html>
```
Já imagens são auto fechadas:

```HTML
    <img src = "./caminho_ou_url_da_imagem">
```
Existem mais de 100 tags que definem o atual HTML5. Entretanto, poucas delas são essenciais e definem a estrutura-base de tóda página HTML. Muitos editores geram automaticamente o seguinte código, tal sua importância:  
```HTML
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
```HTML
        <link href="./main.css" rel="stylesheet">
```
Indica que no caminho **href** = ./main.css há um documento a ser incluído, e seu atributo **ref** indica que trata-se de um stylesheet. Pode haver múltiplos links por documento. 
________________________________________
* ##### ```<meta>```
Passa meta-informações sobre o **funcionamento da página** ao navegador. Permite, por exemplo, indicar que a página possuirá padrão de escrita (charset) **unicode** e não ascii, que seria o padrão-base, como em: 
```HTML
         <meta charset="UTF-8">
```
Também é possível indicar tags (No contexto de palavras-chave, e não html) relacionadas a SEO(Search Engine Optimization), permitindo que motores de busca cataloguem melhor e consequentemente deem prioridade à página em seu serviço.

```HTML
<meta name = "keywords" content = "HTML,CSS,Tags">
<meta name = "description" content = "Resumo de HTML">
<meta name = "author" content = "Nelson Luiz Oliveira">
```
Indica ao navegador que a página de Nelson Luiz de Oliveira trata sobre resumo de HTML e cobre os tópicos HTML, CSS e Tags.
________________________________________
* ##### ```<style> </style>```
Permite a inserção de código de estilo (CSS, por exemplo) diretamente no HTML. Por exemplo:

```HTML
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
```HTML
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

```HTML
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

```HTML
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

```HTML
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
```HTML
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

```HTML
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

```HTML
<html>HTML
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

```HTML
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
 
 ```HTML
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
 
 ```HTML
 <p>Nelson é estudante do <abbr title = "Institutos de Ciências Matemáticas e Computação">ICMC</abbr></p>
 ```
<p>Nelson é estudante do <abbr title = "Institutos de Ciências Matemáticas e Computação">ICMC</abbr></p>
  
________________________________________
* ##### ```<b> </b>```
**b** vem de bold. Destaca palavras **importantes** do texto. 
```HTML
<p>A palavra mais importante da frase é <b>esta</b></p>
```
<p>A palavra mais importante da frase é <b>esta</b></p>

________________________________________
* ##### ```<br>```
Tag de quebra de linha.

```HTML
<p> Linha um <br> Linha dois</p>
```
<p> Linha um <br> Linha dois</p>

________________________________________
* ##### ```<data> </data>```
Permite inserção de dados que serão lidos por computadores (Ex: Código de barras)
```HTML
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
```HTML
<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>
```

<p>O <dfn id = "def-dns">DNS</dfn> é a sigla em inglês para Domain Name System (Sistema de Nomes e Domínios, em português), responsável por descodificar os nomes dos domínios dos sites que as pessoas digitam nos navegadores web em números IP.</p>

________________________________________
* ##### ```<time> </time>```
Maneira que dá semântica ao representar tempo. 
```HTML
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

```HTML
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

```HTML
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=r1LNxYYrLTM">
</iframe>
```
________________________________________
### Conteúdo integrado
* ##### ```<embed> </embed>```
Embed permite o uso de conteúdos de **sites externos** na página. Por exemplo, é possível incorporar vídeos do youtube já com as configuraçõe ideais, utilizando o código gerado por share->embed da própria plataforma. 

```HTML
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
```HTML
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


**POST** - Envia uma entidade e requisita que o servidor aceitá-la como subordinada do recurso identificado pela URI. **Create**.


**PUT** - **Cria ou atualiza** uma uma informação identificada na URL.Put “coloca” uma página numa determinada URL. Se a página já existir naquela URL ela é substituída. Se não houver página, ela é criada e passa a ser a que foi enviada no PUT. PUT é uma operação limitada que simplesmente coloca uma página numa localidade. **Na prática, put é utilizado para atualizar, visto que post atende melhor às necessidades de criação**.


DELETE - **Deleta** um recurso identificado na URL. 
________________________________________
* ##### ```<form></form>```
Indica o início de um formulário. Enviam e solicitam informações ao servidor por meio de requisições. Possui os atributos **```action = ""```** indica qual url será atingida pela requisição.  **```method = "metodo_escolhido"```** indica qual requisição será feita. Por padrão, **a requisição enviada é a GET, mas é possível requisitar outras por meio do parâmetro method**. Por exemplo, para requisitar DELETE, usa-se: ```<form action = "" method = "DELETE">```.

* ##### ```<label></label>```
Camada que precede um input. Indica ao usuário que tipo de informação ele deve fornecer pelo input. Possui como atributos **```for = "id_do_input_que_precede"```**, que indica qual input o label deve preceder. 
* ##### ```<input>```
Caixa de entrada por onde o usuário preenche as informações que serão enviadas ao servidor via requisições. Possui como atributos, fora o **id**, **```type = "tipo_de_input"**```**, onde é especificado o tipo do input (Texto, número, senha, e-mail, etc) e **```name = "nome_do_input"```**, que será associado ao valor definido pelo usuário no envio da requisição. **```value = "valor_do_input"```** define o valor do input, que representa coisas diferentes a depender do tipo do input. Da referência em w3schools: 

```
For "button", "reset", and "submit" - it defines the text on the button
For "text", "password", and "hidden" - it defines the initial (default) value of the input field
For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
```

Formulários devem possuir lemento com ```type = submit``` ao final, . Por exemplo: 

```HTML
<input type = "submit" value = "Save">
```
Responsável por submeter os dados do formulário ao servidor com o método correto. 

```HTML
<form action = "#" method = "GET">
    <label for = "GET-name">Name: </label>
    <input id = "GET-name" type = "text" name = "name">
    
    <input type = "submit" value = "Save">
</form>
```

A URI inicialmente tem o seguinte formato: 

<img src = "https://i.imgur.com/SQ4oWEG.png">
    
E, após preencher o campo e enviar, a URI é modificada: 

<img src = "https://i.imgur.com/RTKQy8H.png">
<img src = "https://i.imgur.com/8Hprdj3.png">

O formulário enviou o parâmetro meu_nome associado à variável nome ao servidor (O ```?``` na URL indica passagem de parâmetros)via URL. **PUT  e DELETE também utilizam a url para passagem de parametros**

Já **POST envia a requisição diretamente ao servidor, sem passagem de parâmetros via url**.

```HTML
<form action = "#" method = "POST">
    <label for = "GET-name">Name: </label>
    <input id = "GET-name" type = "text" name = "name">
    
    <input type = "submit" value = "Save">
</form>
```
<img src = "https://i.imgur.com/SQ4oWEG.png">
<img src = "https://i.imgur.com/RTKQy8H.png">
<img src = "https://i.imgur.com/J6Sabfl.png">


________________________________________
* ##### ```<datalist></datalist>```
Cria uma lista de seleção. 
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="./main.css" rel="stylesheet">
    </head>
    <body>

        <form action = "#" method = "GET">
            <input list = "browsers" name = "choice"/>
            <datalist id = "browsers">
                <option value = "Chrome">
                <option value = "Firefox">
                <option value = "Opera">
                <option value = "Safari">
            </datalist>
            <button type = "submit">Enviar</button>
        </form>
    </body>
</html>

```

<img src = "https://i.imgur.com/JySTjwf.png">

________________________________________
* ##### ```<fieldset></fieldset>, <legend></legend>, <label></label>```
**fieldset** Cria uma subseção que ajuda a dividir informação

**legend** Indica o nome de uma subseção 

**label** Amarra a descrição do campo ao campo em sí por seu id, permitindo, por exemplo, que o clicke no label conte como um click no campo. 

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="./main.css" rel="stylesheet">
    </head>
    <body>
        <form action = "#" method = "GET">
                <fieldset>
                    <input type = "text" name = "nome" placeholder = "Digite seu Nome">
                    <legend>Estado Civil: </legend>
                    <input name = "issolteiro"type = "radio" id = "Solteiro">
                    <label for = "Solteiro">Solteiro</label>
                    <input name = "iscasado" type = "radio" id = "Casado">
                    <label for = "Casado">Casado</label>
                    <input name = "isnamorando" type = "radio" id = "Namorando">
                    <label for = "Namorando">Em Relacionamento Sério</label>
                    <button type = "submit">Enviar</button>
                </fieldset>
        </form>
    </body>
</html>
```

<img src = "https://i.imgur.com/A7KaaVL.png">

________________________________________
* ##### ```<select></select>```
Alternativa ao Datalist, que não dá sugestões enquanto o usuário digita.  Mais usual. 
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="./main.css" rel="stylesheet">
    </head>
    <body>
        <form action = "#" method = "GET">
            <input type=text list=browsers>
                <datalist id=browsers>
                <option value="Firefox">
                <option value="IE">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
                                    <button type = "submit">Enviar</button>

            </datalist>
        </form>
    </body>
</html>
```
<img src = "https://i.imgur.com/cbmH04w.png">

________________________________________
### Form Completo: 

```HTML
<!DOCTYPE html>
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
    <h1>Register</h1>

    <form>
        <label for = "first_name">First Name:</label>
        <input name = "first_name" id = "first_name" type ="text" placeholder ="Jhon"required>

        <label for = "last_name">Last Name:</lavel>
        <input name = "last_name" id ="last_name" type = "text" placeholder = "Smith" required>

        <div>

        <label for = "male">Male: </label>
        <input name = "gender" id = "male" type = "radio" value = "male" required>

        <label for = "female">Female: </label>
        <input name = "gender" id = "female" type = "radio" value = "female" required>

        <label for = "other">Other: </label>
        <input name = "gender" id = "other" type = "radio" value = "other" required>
        </div>


        <div>

        <label for="email">E-mail: </label>
        <input name = "email" id = "email" type = "email" placeholder = "Your e-mail" required>
        <label for = "password">Password: </label>
        <input name = "password" id = "password" type = "password" placeholder = "Your password" pattern =".{5,10}" required>
        </div> 

        <div>Birthday:
        <select name="birth-month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select> 


        <select name="birth-day">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
  </select>



        <select name="birth-year" required>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option val ue="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
            <option value="1949">1949</option>
            <option value="1948">1948</option>
            <option value="1947">1947</option>
            <option value="1946">1946</option>
            <option value="1945">1945</option>
            <option value="1944">1944</option>
            <option value="1943">1943</option>
            <option value="1942">1942</option>
            <option value="1941">1941</option>
            <option value="1940">1940</option>
            <option value="1939">1939</option>
            <option value="1938">1938</option>
            <option value="1937">1937</option>
            <option value="1936">1936</option>
            <option value="1935">1935</option>
            <option value="1934">1934</option>
            <option value="1933">1933</option>
            <option value="1932">1932</option>
            <option value="1931">1931</option>
            <option value="1930">1930</option>
            <option value="1929">1929</option>
            <option value="1928">1928</option>
            <option value="1927">1927</option>
            <option value="1926">1926</option>
            <option value="1925">1925</option>
            <option value="1924">1924</option>
            <option value="1923">1923</option>
            <option value="1922">1922</option>
            <option value="1921">1921</option>
            <option value="1920">1920</option>
            <option value="1919">1919</option>
            <option value="1918">1918</option>
            <option value="1917">1917</option>
            <option value="1916">1916</option>
            <option value="1915">1915</option>
            <option value="1914">1914</option>
            <option value="1913">1913</option>
            <option value="1912">1912</option>
            <option value="1911">1911</option>
            <option value="1910">1910</option>
            <option value="1909">1909</option>
            <option value="1908">1908</option>
            <option value="1907">1907</option>
            <option value="1906">1906</option>
            <option value="1905">1905</option>
        </select>
        </div>

        <div>
        <label for = "terms">I agree to the terms and conditions</label>
        <input name = "terms" id = "terms" type = "checkbox" required>
        </div>

        <div>
        <button>Submit</button>
        </div>
    </form>
</body>
</html>

```

Cria o seguinte forms: 

<img src = "https://i.imgur.com/Pi5CZkL.png">

**Como visto, get mostra a senha digitada! NÃO SE PODE USAR GET PARA CAMPOS QUE ENVOLVAM DADOS SIGILOSOS! Usar post**. 

________________________________________
### Elementos interativos **Terminar após concluir curso de JS, não faz sentido usar com html puro** 

* ##### ```<details></details>, <summary></summary>```
Possuem valor semântico, inserindo mais detalhes a um elemento inserido no HTML. 

```HTML
<details>
        <summary>Documentos necessários</summary>
        <p> Foto 3x4, RG e CPF</p>
</details>
```

<!DOCTYPE html>
<html>
<details>
        <summary>Documentos necessários</summary>
        <p> Foto 3x4, RG e CPF</p>
</details>

</html>

### SEO
Search Engine Optimization. Ajuda a classificar sites quanto a motores de busca, aumentando sua posição na busca orgânica (Não paga). O uso da **semântica correta** melhora o SEO. Destacam-se, entre boas práticas:

- Declarar **key-words** na tag ```<meta name = "keywords" content = "palavr_chave1, palavra_chave2, palavra_chave3```.
- Utilizar no site elementos semânicos que mostrem que de fato o conteúdo das tags está sendo exposto, principalmente em tags ```<h1> , <h2>```.
- Utilizar o atributo ```<meta name = "descripton" content = "descrição breve da página">```que gera os pequenos textos descritivos nas buscas do google.
- Formatar corretamente o HTML. Tags mal formatadas, abertas e não fechadas, etc geram uma DOMs incorretas que não são bem processadas por search-engines. 
-  Não usar frames e flash-player. 
- URLs curtas, organizadas e que façam sentido com as palavras chave da página
- Utilizar traços - e não underlines_ na url do site
- Ter conteúdo do site citado/compartilhado em outros sites e redes sociais
- Cadastrar a empresa no google meu negócio
- Portabilidade e Segurança de Informação
- Utilizar imagens otimizadas (Remasterizar imagens externamente e não por css/js, diminuindo peso e tamanho da pagina)
- Utilizar atributo alt da imagem 
- Bom uso da tag ```<title></title>```
- Utilizar a tag robots
- Indicar url canonica em caso de dominio duplicados 
- Utilizar ferramentas de SEO checker https://chrome.google.com/webstore/detail/seo-peek/lkkpfhgjmocgneajknedjhodkjkkclod e https://chrome.google.com/webstore/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef e https://validator.w3.org/

As ferramentas de SEO checker funcionam apenas em páginas HTTP/HTTPS, ou seja, páginas online e não files locais. Entretanto, se esta página estivesse online
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
    </head>
    <body>
        <p>Seja bem vindo ao Estacionamento 24H<p>
        <p>Franquia de estacionamentos para carros e motos espalhadas por todo o brasil<p>
    
    </body>
</html>
```
Teria SEO muito inferior a esta. 
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Site Estacionamento</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name = "description" content = "Estacionamento 24h - Franquia de Estacionamento">
        <meta name = "keywords" content = "Estacionamento, 24H, carros, motos">
        <META NAME = "ROBOTS" CONTENT = "INDEX, FOLLOW">
        <link href="./main.css" rel="stylesheet">
    </head>
    <body>
        <h1>Seja bem vindo ao Estacionamento 24H</h1>
        <h2>Franquia de estacionamentos para carros e motos espalhadas por todo o brasil</h2>
    
    </body>
</html>
```
________________________________________
### Web Sockets
Protocolo de comunicação **full duplex** baseado no protocolo **TCP**. Full duplex significa que a via tem comunicação de **ida e volta**. Permite estabelecer conexões longas entre cliente e servidor, ao contrário da **via http que é curta**. O http é muito bom em realizar conexões curtas e rápidas, mas em algumas situações é interessante o uso de conexões longas, como, por exemplo **permitir a existência de servidores ativos e passivos, e não apenas passivos**. A porta utilizada por padrão é a **80**. Conecta **o server-side com o client-side através do Javascript**, ou qualquer outra linguagem com suporte a web-sockets.

________________________________________
### SVG e Canvas 

<table style="width: 94%; margin-left: calc(1%); margin-right: calc(5%);"><thead><tr><th style="width: 52.5865%;">SVG<br></th><th style="width: 47.2437%;">HTML Canvas<br></th></tr></thead><tbody><tr><td style="width: 52.5865%;">SVG possui melhor escalabilidade. Pode ser impresso em alta qualidade com qualquer resolução.></td><td style="width: 47.2437%;">Canvas possui baixa escalabilidade.<br></td></tr><tr><td style="width: 52.5865%;">SVG dá melhor performance para um número pequenos de objetos ou tela grande<br></td><td style="width: 47.2437%;">Canvas dá melhor performance com grande número de objetos ou telas pequenas<br></td></tr><tr><td style="width: 52.5865%;">SVG pode ser modificado por Script ou CSS<br></td><td style="width: 47.2437%;">Canvas pode ser modificado apenas por script<br></td></tr><tr><td>SVG é baseado em vetores e composto por formas<br></td><td>Canvas é baseado em raster e composto de pixels.<br></td></tr></tbody></table>

FONTE: https://www.tutorialspoint.com/What-is-the-difference-between-SVG-and-HTML5-Canvas

**Scalable Vector Graphics** é um padrão do W3C para gráficos vetoriais para a web baseado em XML. Possui como vantagem o fato de renderizar conteúdo por uma fórmula matemática, que é constantemente re-calculada pelo browser do cliente, o que permite uma imagem limpa e sem serrilhados, não importa o zoom dado.
* ##### ```<svg></svg>```
É um container para gráficos em SVG. Permite desenhar imagens vetoriais na tela. A dimensões passadas como parâmetros de **width** e **height** definem a sub-área da tela onde o svg será desenhado. 


```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Site Estacionamento</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <svg width = "500" height = "500">
            <circle cx = "200" cy = "200" r = "100" stroke = "green" stroke-width = "4" fill = "yellow"/>
        </svg>
    </body>
</html>
```
Desenha um círculo em um espaço de 500x500 com centro em x = 200, y = 200, raio = 100 de linha verde e borda de linha 4, com preenchimento amarelo. Ver em  https://www.w3schools.com/code/tryit.asp?filename=G3S8BCAT7TNR. 

Há diversas formas prontas já implementadas, e é possível criar formas novas via definição de pontos. Ver https://www.w3schools.com/graphics/svg_examples.asp




* ##### ```<canvas></canvas>```
Elemento inserido do HTML5. Ao contrário do Canvas, que é um padrão utilizado em múltiplas plataformas, canvas é um elemento típico do HTML. Não é vetorial, e sim composto de bitmap. É exclusivamente editado por Javascript ou outra linguagem de script. 

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Site Estacionamento</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

        <canvas id = "myCanvas" width = "200" height = "100" style = "border:1px solid black;">
        </canvas>

        <button onclick = "desenhar();">Desenha Reta</button>
        <script type = "text/javascript">
            function desenhar(){
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                ctx.moveTo(0,0);
                ctx.lineTo(200,100);
                ctx.stroke();
            }    
        </script>
    </body>
</html>
```
Cria um canvas que possui inicialmente um retângulo 200x100. É definida uma função que desenha sua diagonal, que é chamada quadno o botão é clickado. Teste aqui: https://www.w3schools.com/code/tryit.asp?filename=G3S9594JV9G5
________________________________________
### Web Local Storage
HTML5 permite armazenar dados no cliente do usuário sem o uso de Cookies. localStorage armazena dados que ficam guardados no browser mesmo após o término da sessão. sessionStorage armazena dados que são eliminados ao final da sessão. É possível acessar o web storage via: Inspecionar elemento -> application -> Local Storage  ou Session Storage--> file. Se houver botão de atualizar, atualizar.

```HTML
<!DOCTYPE html>
<html>
<head>
	<title></title>
    <script type="text/javascript">
        function hasStorage(){
            if (typeof(Storage) !== "undefined") {
                return true;
            } else {
                alert('Navegador sem suporte a Web Storage')
                return false;
			}
        }
		function ler(){
            if(hasStorage()){
            document.getElementById("localstorage").innerHTML = localStorage.getItem("var1");
            document.getElementById("sessionstorage").innerHTML = sessionStorage.getItem("var2");
    
        }
        }
		function save(){
            if(hasStorage()){
                localStorage.setItem("var1", "Variáveis salvas em local storage resistem mesmo após encerrada a sessão.");
				sessionStorage.setItem("var2", "Variáveis salvas em session storage não. Entre e saia do navegador e teste!");
				alert('Item salvo com sucesso')	
			}
		}
	</script>
</head>
<body>
	<p id="resultado">É possível acessar o web storage via: Inspecionar elemento -> application -> Local Storage  ou Session Storage--> file. Se houver botão de atualizar, atualizar.</p>
    <p id="localstorage"></p>
    <p id = "sessionstorage"></p>
    <button onclick="save()">Salvar</button>
	<button onclick="ler()">Ler</button>

</body>
</html>
```
____________________________________
### Google Maps
É possível inserir mapas do google na página utilizando a url do **Google Maps API** . É importante notar que para utilizar o serviço **é necessária uma api-key, que gera cobranças de acordo com o fluxo na ferramenta**. A maneira chamada correta da API do Maps é ```<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"type="text/javascript"></script>```.


O atributo ```ROADMAP``` em ```mapTypeId: google.maps.MapTypeId.ROADMAP``` pode ser modificado, o que cria diferentes tipos de mapa.
```HTML
ROADMAP (normal, default 2D map)
SATELLITE (photographic map)
HYBRID (photographic map + roads and city names)
TERRAIN (map with mountains, rivers, etc.)
```
O atributo ```zoom``` muda o zoom inicial do mapa.É necessário alterar manualmente o atributo ```LatLng```, para que se adeque ao endereço físico do local. O tamanho do mapa é definido no ``` style="width:800px;height:800px">``` do HTML.

```HTML
<!DOCTYPE html>
<html>
<head>
	<script src="https://maps.googleapis.com/maps/api/js?callback=myMap"></script>
	<script type="text/javascript">
		function myMap() {
		    var mapOptions = {
		        center: new google.maps.LatLng(-22.007066, -47.8948632),
		        zoom: 10,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    }
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}
	</script>
</head>

<body onload="myMap();">

	<h1>Mapa do ICMC</h1>

	<div id="map" style="width:800px;height:800px">

</body>
<html>
```

