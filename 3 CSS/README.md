# CSS
**C**ascading **S**tyle **S**heets são folhas de estilo que definem atributos de **aparência** das tags do HTML. Linka-se o arquivo.css ao HTML por
```HTML
      <link href="./main.css" rel="stylesheet">
```
na tag ```<meta></meta>``` do documento. Também é possível estilizar **XML**, **SVG** e **XUL** com CSS. **É desrrecomendado o uso de css inline no HTML**. Mas é possível fazê-lo por meio do atributo **style**. O seguinte trecho de código gera um parágrafo vermelho. 

```HTML
    <html>
      <body>
        <p style = "color:red;">Parágrafo Vermelho</p>
      </body>
     <html>
```
Teste aqui: https://www.w3schools.com/code/tryit.asp?filename=G3WUEF5ARU2E
________________________________________
### DOM, Cascata e Herança
A relação completa entre tags e suas tags filhas, irmãs e parentes é representada pela **Árvore DOM**. **D**ocument **O**bject **M**odel  é uma convenção multiplataforma e independente de linguagem para representação e interação com objetos em documentos HTML, XHTML e XML. 

O **CSS** se utiliza da DOM para configurar o estilo da página. É possível verificar a Árvore dom através do inspecionar elemento do browser, ou em sites especializados como https://software.hixie.ch/utilities/js/live-dom-viewer/

```HTML
<html>
   <section id = "avisos">
      <!--Seção de avisos-->
      <div id = "aviso1">
         <h3>Informações sobre o InterHack</h3>
         Ocorrerá dias <time datetime="2019-06-01 10:00">1 e 2 de Junho</time> o InterHack, Hackathon de 48 horas com primeira fase simultânea no ICMC, EACH e IME (60 participantes em cada) e final com as 12 melhores equipes em São Paulo. Patrocinadores de peso estão envolvidos, e as equipes que se qualificarem para a final, além de mimos tecnológicos, receberão 1 semana de treinamento no dev.camp(). O time vencedor da última fase ainda ganhará uma viagem para um grande centro tecnológico (Seria são carlos, o vale do silício brasileiro?). São equipes de 4 pessoas, e o tema é Melhorando a gestão na universidade por meio da tecnologia. As inscrições começam no dia <time datetime="2019-05-18 10:00">18/05, sábado, às 17h </time>. Mais detalhes sobre o evento serão divulgadas no <a href = "https://interhack.xyz">site do evento </a> e  no <a href = "https://www.facebook.com/events/359956894726618">facebook</a>.
      </div>
      <div id = "aviso2">
         <h3>Inscrições para o dev.boost() abertas</h3>
         Envie seu portfolio até <time datetime="2019-05-08 22:00">22h do dia 8 de Maio </time> pelo <a href = "https://forms.gle/2Ce8gT2nch3KPvQMA">formulário</a> e faça parta do dev.boost(), nossa frente de projetos. Parcerias com Ganesh, PET Computação e Operação Natal confirmadas!
      </div>
   </section>
</html>
```
Gera a seguinte árvore DOM:
<html>
<img src = "https://i.imgur.com/V4eIILJ.png">
</html>

 **Atributos configurados diretamente ao elemento pai são automaticamente também configurados a seus elementos herdeiros, o que configura o efeito cascata**. É possível, por exemplo, configurar toda a fonte de uma paǵina modificando a fonte da tag ```HTML```, que fará com que tal característica seja atribuida a todos os seus herdeiros, ao invés de modificar cada tag do documento manualmente. 
 
 
 É importante notar que a **prioridade de estilo é bottom-top**, no sentido em que **estilos definidos sobre uma tag tem prioridade sobre estilos definidos nas tag que lhe deram origem, e assim sucessivamente**. Ou seja, definir o texto do HTML como azul e h1 como verde manterá h1s como verdes. 
________________________________________  
* ### Seletores
* Universal: Seleciona via ```*{}```. Por exemplo:
```CSS
//no CSS
*{
    color: green;
}
```

e 

```HTML
<html>
   <head>
   </head>
   <body>
     <p>Paragrafo</p>
     <h2>header 2</h2>
   </body>
</html>
```
tem como saída : https://codepen.io/sonneloriginal/pen/ZNWPew
_____________________________________________________________________
* Tags: Selecionadas por ```tag{}```. Por exemplo:

```CSS
//no CSS
h4{
    font-style: italic;
}
```

e 

```HTML
<html>
   <head>
   </head>
   <body>
      <h4>Header 1 </h4>
      <p>Parágrafo</p>
      <h4>Header 2 </h4>
      <h4>Header 3</h4>
   </body>
</html>
```
tem como saída : https://codepen.io/sonneloriginal/pen/EzKMjJ
_____________________________________________________________________

* Classes: Selecionadas por ```.classe{}```. Por exemplo:

```CSS
//no CSS
h4{
    font-style: italic;
}

.headerImpar{
    color: blue
}
```

e 

```HTML
<html>
   <head>
   </head>
   <body>
      <h4 class = 'headerImpar'>Header 4 </h4>
      <p>Parágrafo</p>
      <h4>Header 4 </h4>
      <h4 class = 'headerImpar'>Header 4</h4>
   </body>
</html>
```
tem como saída : https://codepen.io/sonneloriginal/pen/OYNqMg

_____________________________________________________________________

* IDs: Selecionadas por ```#id{}```. Por exemplo:

```CSS
//no CSS
h4{
    font-style: italic;
}

.headerImpar{
    color: blue
}

#headerTres{
  color: red;
  font-size: 30px;
}
```

e 

```HTML
<html>
   <head>
   </head>
   <body>
      <h4 class = 'headerImpar'>Header 4 </h4>
      <p>Parágrafo</p>
      <h4>Header 4 </h4>
      <h4 class = 'headerImpar' id = "headerTres">Header 4</h4>
   </body>
</html>
```
tem como saída : https://codepen.io/sonneloriginal/pen/JqXzRj

_____________________________________________________________________

* Atributo: Selecionadas por ```[]atributo{}```. Por exemplo:

```CSS
//no css
[disabled]{
  font-size: 20px;
}
```

 ```HTML
<html>
  <p disabled>Paragrafo Desaibilitado</p>
  <p> Paragrafo Habilitado</p>
  
  <button disabled>Botao desabilitado</button>
  <button>Botao Habilitado</button>
</html>
```

Tem como saída: https://codepen.io/sonneloriginal/pen/EzKMQx
_____________________________________________________________
* **Atributo Específico: Selecionadas por ```[atributo="valordoatributo"]{}```. Por exemplo:**

```CSS
[type = "text"]{
  background-color: green;
}

```

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

Tem como saída: https://codepen.io/sonneloriginal/pen/KLzELY
_____________________________________________________________
### Propriedades de fonte e texto: 

* **font-size**
Modifica o tamanho do texto. Cada tag tem um tamanho padrão específico. h1's, por exemplo, 16 pixels. ```font-size: 100%``` setta o tamanho atual a uma porcentagem do padrão. Também é possível diretamente settar o tamanho, como em  ```font-size: 20px```.  **em** é a unidade de medida recomendada para font-size, e representa a proporção em relação ao tamanho padrão da fonte. (1em = 100%, 2em = 200%, etc).


* **font-weight**
Permite modificar a espessura do texto. ```font-weight: bold```deixa o texto em negrito, e ```font-weight: normal``` volta o texto à espessura padrõa.

* **text-align** 
Especifica o alinhamento do texto. ```text-align: center``` o centraliza. É possível utilizar **center, right, justify, left e inherit**.

* **text-transform** 
Muda a formatação do texto. ```text-transform: uppercase``` e ```text-transform: lowercase``` são exemplos de uso. 

* **color**
Modifica a cor do texto. ```color: red``` muda a cor do texto para vermelho. 

* **text-ident**
Dá o tamanho da identação do texto. Permite o uso de tabs, que por padrão são zeradas no HTML
Mais exemplos em https://www.w3schools.com/css/css_text.asp

_________________________________________________
### Cores em CSS
Há **três** maneiras de se especificar  cor em css: **nome**, **hexadecimal** e **rgb**.

<img src= "https://i.imgur.com/jSoEyVf.png">
 Retirado de: https://www.quackit.com/css/css_color_codes.cfm
      
O hexadecimal começa em ```#```, e em o formado rrggbb, ou seja, os primeiros dois dígitos correspondem ao vermelho em hexadecimal, os dos seguintes, verde e os últimos azul (0 a f, ou seja, 0 a 255 em cada atributo). RGB faz o mesmo, mas com o formato ```rgb(rr,gg,bb)```

A seguinte extensão permite armazenar a cor de qualquer área de uma webpage: https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp

_________________________________________________
### Box Model e posicionamento
Área em torno de todo objeto, dividida em **padding, border e margin**.

* padding: Área entre o elemento e a borda.
* margin: Área entre a borda e o fim do elemento. 
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/W3C_box_model.svg/1280px-W3C_box_model.svg.png">

É importante notar que ao se atribuir, por exemplo, ```margin: 10px```, este atributo será modificado em **todas as dimensões da imagem**. Ou seja, margin-top, margin-right, margin-bottom e margin-left são settadas a 10. É possível modificá-los individualmente. 

```
padding: 50px 30px 20px 10px;
```

é equivalente a 

```
padding-top: 50px;
padding-right: 30px;
padding-bottom: 20px;
padding-left: 10px;
```

e gera 

<img src = "https://i.imgur.com/kCmIQLB.png">


Por padrão, a largura (**width**) de um elemento ocupa o tamanho todo de seu elemento pai. A altura (**height**) varia de acordo com o padrão do elemento, e se ajusta automaticamente. Por exemplo, criar uma ```<div>``` com dois parágrafos dentro e modificar o código para que a mesma div tenha três parágrafos a fará crescer em altura automaticamente. É possível modificá-los manualmente, por exemplo: 

```css
elemento{
width: 300px;
padding: 100px;
}
```

**O TAMANHO DA BOX MODEL NÃO INCLUI A MARGEM**. Um elemento com width de 300px e borda de 10px não ocupará 290px e 10 de margin, e sim 300px e 10px de margin. 


**float** permite que objetos flutuem, e **clear** impedem que objetos flutuem em torno do objeto em questão. 

É possível manipular a posição de objetos a partir de **absolute** e **relative**. O objeto pai deve ter o atributo ```position: relative```, e o objeto filho a ser modificado, ```position: absolute```, assim é possível utilizar os atributor ```top```, ```bottom```, ```left``` e ```right``` que automaticamente farão o posicionamento em torno do elemento diretamente pai com posição relativa. 

_________________________________________________
### Media Queries

Permite adaptar o comportamento do CSS às características do dispositivo que se usa do sistema.

```css
@media(condição){
      codigo css das mudanças
}
```

A condição pode,por exemplo, ser o tamanho da tela. 

```css
@media screen (max-width: 500px){
      body{
            background-color: red;
           }
} 

```
Faz com que a cor do fundo do corpo fique vermelha em telas menores de 500px.


http://stephen.io/mediaqueries/  e https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ Apresentam diversos tamanhos padrão de telas de dispositivo. Por exemplo:

```
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}
```
Condiciona o css ao tamanho padrão do galaxy S5.

_________________________________________________
### hover
Permite atribuir características de css a elementos em estado de passagem de mouse 
```html
<html>
<style>
.tooltip {  
    position: relative; /*Permite que a dica dentro da div seja manipulada com position relative */
    display: inline-block;
}

.tooltiptext {
    visibility: hidden; /* Setta o texto como inicialmente invisível*/
    width: 120px;
    background-color: lightgrey;
    color: black;
    text-align: center;
    border-radius: 6px; /*bordas arredondadas dão o formato de balão*/
    padding: 5px 0;
    position: absolute; /*manipula posição da dica*/
    top: -5px;
    left: 105%;
}
.tooltip:hover .tooltiptext {/*hover indica passagem de mouse. tolltiptexts dentro de tooltips que estiverem com mouse passando tem o css alterado*/
    visibility: visible;
}
</style>

<body>

    <div class="tooltip">Passe o mouse
      <span class="tooltiptext">Tooltip text</span>
    </div>

</body>
</html>
```

Cria um texto que, ao ter ativado o estado hover (mouse acima), gera uma caixa com dica.

_________________________________________________
### Opacidade
A "quarta cor" **alpha** define a opacidade de uma imagem. Pode ser alterada por ```opacity: value``` ou ```filter: alpha(opacity = value)```. Por exemplo: 

```html
<html>
<style>
.opaca{
    opacity: 0.5;
}
</style>

<body>
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxQuTbadn0kHrxmlkWL5zfxx_bKsu89HYGuTKMxVoLEy3wVRU">
    <img class = "opaca" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxQuTbadn0kHrxmlkWL5zfxx_bKsu89HYGuTKMxVoLEy3wVRU">

</body>
</html>
```

gera https://www.w3schools.com/code/tryit.asp?filename=G42EA0HJIZQU

Exemplo de uso de hover com opacidade em uma galeria:

```
<html>
<head>
<meta charset="utf-8">
<style>
div.img {  /*Cria o card da div de imagem e setta a borda inicialmente como cinza*/
    margin: 5px;
    border: 1px solid lightgrey;
    float: left;
    width: 180px;
}
div.img:hover {
    border: 2px solid grey; /*Escurece e aumenta a borda com a passagem do mouse*/
}
div.img img { /*Ajusta a imagem à div e aplica semitransparencia*/
    width: 100%;
    height: auto;
    opacity: 0.8;
}
 
div.img:hover img { /*Retira semitransparencia*/
    opacity: 1;
}
div.desc { /*personaliza a descrição da imagem*/
    padding: 15px;
    text-align: center;
}
</style>
</head>
<body>

<div class="img">
    <img src="https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg?cs=srgb&dl=apple-blur-bright-588587.jpg&fm=jpg" alt="Maçã bonita" width="300" height="200">
  </a>
  <div class="desc">Maçã Vermelha</div>
</div>

<div class="img">
    <!--<a target="_blank" href="paleta.png"> -->
    <img src="https://images.pexels.com/photos/63286/green-apples-green-apple-fruit-63286.jpeg?cs=srgb&dl=apples-fruit-green-63286.jpg&fm=jpg" alt="Maçã verde" width="300" height="200">
  </a>
  <div class="desc">Maçã Verde</div>
</div>


</body>
</html>
```

Teste aqui: https://www.w3schools.com/code/tryit.asp?filename=G42EQJJ2I34I

**Também é possível definir a opacidade de uma cor usando-se rgba. ```rgba(r,g,b,a)```
_________________________________________________
### Menus de navegação

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
        <style>
            body{       /*Permite que a lista fique no canto esquerdo da página sem mdificações de espaço de body*/
                margin: 0;
                padding: 0;
            }
            ul {       
            list-style-type: none; /*Retira padrão de formatação de elementos de lista (Bolinhas, espaçamento)*/
            margin: 0;
            padding: 0;
            overflow: hidden;   /*https://www.w3schools.com/cssref/playit.asp?filename=playcss_overflow&preval=hidden */
            background-color: rgb(94, 92, 88);
            }

            li {
            float: left; /*Move aos elementos da navbar para a esquerda*/
            }

            li a {
            display: block; /*https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-block-98480c987950 */
            color: white;
            text-align: center; /*Centraliza o texto na div individual de cada caixa com opção */
            padding: 14px 16px;
            text-decoration: none;
            }

            li a:hover:not(.active) {
            background-color: rgb(44, 61, 57); /*Cor do elemento não atual com hover*/
            }

            .active {
            background-color :#5DC8AE; /*Cor do elemento atual*/
            }
        </style>
        </head>
        <body>
        
            <nav> <!--Menu de Navegação (Home, Sobre, Frentes de Desenvolvimento, Portfolio, Equipe e Contato)-->
                <ul>
                    <li><a class = "active" href = "index.html">Home</a></li>
                    <li><a href = "sobre.html">Sobre nós</a></li>
                    <li><a href = "frentes.html">Frentes de Desenvolvimento</a></li>
                    <li><a href = "portfolio.html">Portfolio</a></li>
                    <li><a href = "equipe.html">Equipe</a></li>
                    <li><a href = "contato.html">Contato</a></li>
                </ul>
            </nav>
        
        </body>
</html>
```
Link: https://www.w3schools.com/code/tryit.asp?filename=G42FYPPRZ1S3
