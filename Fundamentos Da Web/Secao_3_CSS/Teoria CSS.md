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

(TERMINAR ÁREA DE BOX MODEL, INCOMPLETA NO MOMENTO)                           
