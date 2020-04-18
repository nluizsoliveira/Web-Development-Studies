# Overview técnico de Javascript
- Linguagem feita originalmente para os browsers, que são **Runtine Environments (Ambiente de execução)**
- Cada browser possui sua própria **JS Engine (Ou interpretador javascript)**. 
- Não pode ter sua estrutura original modificada pois isso quebraria sites legados. 
- Mas recebe constantemente atualizações (**ES6/ECMAscript2015**) por instituições de padronização (**ECMA**)

## JS Engine
- ES engine transforma o código .js em código de máquina e o executa.
- A própria engine é quem se comunica com a CPU e executa o código de máquina.
-  O processo é chamado de **interpretação**, logo JS é **interpretado**. 
- É diferente da **compilação**, onde o compilador (ex: GCC) apenas compila o código para código de máquina, que deve ser executado posteriormente pelo próprio usuário.
- Exemplos de JS engines: Chackra(Edge) SpiderMonkey(Firefox) e **V8(Google Chrome)**.

## Runtime Environment
- Acrescentam às engines um ambiente com scripts, bibliotecas e APIS úteis ao seu contexto. 
- O **browser** implementa um runtime environment para **clientes**, e acrescenta por exemplo funções de manipulação do DOM/HTML (`document.getElementById()`)
- **Node** é um runtime environment para **servidores**, e acrescenta por exemplo funções de acesso aos arquivos do sistema (`fs.readfile()`)

<img src = 'https://camo.githubusercontent.com/7050b63d87a44796381e1684311794d66e33efbd/68747470733a2f2f692e696d6775722e636f6d2f5137624444676a2e706e67'>

Node usa o **V8 do Chrome** como engine

<img src = 'https://camo.githubusercontent.com/99fd5fab1deb6d9a2c613ee55882502f85f86cc9/68747470733a2f2f692e696d6775722e636f6d2f4f657862456b732e706e67'>

## ECMA, ES6, ECMAScript2015
- Sigla para European Computer Manufacturers Association
- Instituição altamente respeitada que já padronizou outras linguagens como o `C#`
- Lançam periodicamente novas versões do `ECMAScript`
- Versões demoram um pouco para serem implementadas, o que abre espaço para ferramentas como o `Babel.js`, que transpilam código de especificação nova para o dito `Vanila.js`
- A **ECMAScript2015 ou ES6** é a versão que utilizaremos, por ter sido implementada na grande maioria dos browsers sem necessidade de transpilação. 

<img src = 'https://miro.medium.com/max/1534/1*7RxGAl4LXmd8jNy86yi5kg.png'>


Funções mais úteis do ES6 <a href = 'https://ponyfoo.com/articles/javascript-developer-survey-results'>de acordo com 5000 programadores</a>:
<img src = 'https://i.imgur.com/okcvuos.png'>
# Codando em JS 
No momento, o conteúdo será focado em **JS para browsers**. Haverá uma aula de Node, com foco em servidores. 

## Como utilizar: 
Criar um arquivo `main.js` e incluir ao final do `<body> </body>` uma referência ao mesmo:
```html
<script src="./main.js"> </script>
```
## Declaração de variáveis
Os comandos `var`, `let` e `const` permitem declarar variáveis. 
- `var`: **Legado**. Seu escopo é:
    - A função a qual pertence 
        ```js
        function usaVar(){
            var my_var_1 = 1

            if(my_var_1 == 1){
                var my_var_2 = 2
            }

            console.log(my_var_1,my_var_2) 
        }
        usaVar() //imprime 1 2 
        ```
- `let`: **ES6: Melhor prática**. Seu escopo é:
    -  Bloco, instrução ou expressão na qual ela é usada. 
        ```js
        function usaLet(){
            let my_let_1 = 1

            if(my_let_1 == 1){
                let my_let_2 = 2
            }

            console.log(my_let_1,my_let_2)
        }

        usaLet() //Lança erro my_let_2 is not defined
        ```

- `const`: **ES6: Melhor prática para valores constantes**, pois é imutável¹. Seu escopo é:
    -  O mesmo do let.  

    ```js
    let a = 'a'
    const b = 'b'

    a = 'c' //Permite mudança
    b = 'c' //TypeError: Assignment to constant variable.
    ```
    - ¹ [EXTRA] const em objetos imutabiliza apenas sua referência e não conteúdo. Object.freeze imutabiliza um objeto, mas objetos podem tem outros objetos como atributos, o que só imutabiliza as referências dos objetos da "primeira camada". É necessário aplicar Object.freeze recursivamente para criar objetos verdadeiramente <a href = 'https://stackoverflow.com/questions/34776846/how-to-freeze-nested-objects-in-javascript'>este artigo </a>
## Tipagem
Possui **tipagem dinâmica**: 
- Não é possível declarar o tipo da variável
- O tipo é atribuído automaticamente 
- É possível modificar o tipo da variável 
- O comando `typeof()` permite descobrir o tipo atual de uma variável. 

### ```number```
Armazenam números, sejam eles inteiros ou floats.

```js
var inteiro = 1
var float = 1.5

console.log(typeof(inteiro), typeof(float)) //number number
```
### ```string```
Armazenam qualquer coisa entre parênteses simples ou duplos como string. 
```js
let my_string = 'olá mundo'
console.log(typeof(my_string)) //string
```

### Construção de Strings: 

- **PRÉ-ES6**

    Usava-se a sintaxe de **interpolação**, com o **operador +** aglutinando as sub-strings em uma só. 

    ```js
    let name = 'Nelson'
    let born = 1998
    let today = 2020
    let apresentacao = "Oi, me chamo " + name + " e tenho " + (today-born) + " anos"

    console.log(apresentacao)
    //Oi, me chamo Nelson e tenho 22 anos
    ```
- **ES6**
    
    Usa **template literals**, declaradas entre crases **` `**  e operador **${}** para adicionar o retorno de qualquer código em javascript à string.

    ```js
    let name = 'Nelson'
    let born = 1998
    let today = 2020
    let apresentacao = `Ola, me chamo ${name} e tenho ${today-born} anos.`

    console.log(apresentacao)
    //Ola, me chamo Nelson e tenho 22 anos.
    ```
###  ```boolean```
Armazenam veracidade de expressões. Podem ser
- **true**, que equivale a **1**
- **false**, que equivale a **0**
    ```js
    let verdadeiro = true
    console.log(verdadeiro, typeof(verdadeiro))
    //true boolean
    ```
São normalmente utilizadas em conjunto a outros operadores lógicos: 
- `||` representa OR
- `&&` representa AND 
- `!` representa NOT

<img src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Truth_table_for_AND%2C_OR%2C_and_NOT.png'>

```js
let verdadeiro = true
let falso = false

console.log('!v', !verdadeiro)
console.log('!f', !falso)

console.log('v&&v: ', verdadeiro && verdadeiro)
console.log('v&&f: ',verdadeiro && falso)
console.log('f&&f: ', falso && falso)

console.log('v||v: ', verdadeiro || verdadeiro)
console.log('v||f: ',verdadeiro || falso)
console.log('f||f: ', falso || falso)
```
Imprime
```js
!v false
!f true

v&&v:  true
v&&f:  false
f&&f:  false

v||v:  true
v||f:  true
f||f:  false
```

- `==` verifica se os operadores tem mesmo valor, independente do tipo. 
- `===` verifica se os operadores tem o mesmo valor e tipo. 

```js
console.log(1 == '1')      //true
console.log(1 === '1')     //false
console.log(1===1)         //true

console.log(true == 1)     //true
console.log(true === 1)    //false
console.log(true === true) //true
```


### `undefined`
Representa o acesso a uma variável existente mas não inicializada.

```js
let nao_inicializada

console.log(nao_inicializada, typeof(nao_inicializada)) // undefined undefined
```

### ```null``` 
**NÃO É TIPO!** é apenas o estado de um objeto que propositalmente não tem conteúdo. 

```js
a = null
console.log(a, typeof(a))
//null object
```


**Tudo em JS que não é um dos tipos primitivos acima listados é objeto. Isto será estudado mais a frente.**

## Funções:

- **PRE-ES6: FUNÇÕES VIA DECLARAÇÃO**

    Apresentam comportamento de **hoisting**, permitindo que sua chamada seja feita antes mesmo de sua definição (ver código abaixo)

    ```js
    ola()

    function ola (){
            console.log("oi");
    }

    /* SAÍDA: 
    *
    * oi
    *
    */ 
    ```

    Além disso, permite re-declarações de funções
        
    ```js
    imprime()

    function imprime(){
        console.log(2)
    }

    function imprime (){
        console.log(1)
    }

    /* SAÍDA: 
    *
    * 1
    *  
    */. 
    ```

    O código acima **não gera nenhum erro no console,** imprimindo 1.

**PRE-ES6: FUNÇÕES VIA EXPRESSÃO**

- **Não** apresentam comportamento de hoisting
-  Força que chamadas de funções sejam obrigatoriamente feitas após sua inicialização
- **Lança erros caso se tente fazer o contrário.** 

    ```js
    ola()

    let ola = function(){
        console.log("oi")
    }

    /* SAÍDA: 
    *
    * Uncaught ReferenceError: Cannot access 'ola' before initialization
    *   at <anonymous>:1:1
    */
    ```

    Além disso: 
    - Faz com que receba mesmo escopo de **let** ou **const** 
    -  **Lança erros em tentativa de declaração duplicada:** 

        ```js
        let teste = function (){
            console.log(1)
        }

        let teste = function (){
            console.log(2)
        }

        teste()

        /* SAÍDA
        *
        * Uncaught SyntaxError: Identifier 'teste' has already been declared
        *
        */
        ```
Há ainda as **Arrow Functions** que serão ensinadas na aula de **Javascript assíncrono**

## Manipulando o HTML
Tome como base o seguinte HTML `main.html` e CSS `main.css`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
        <div id = 'dummy'>Div qualquer</div>
        <script src="./main.js"> </script>
    </body>
</html>
``` 
```css
.azul{
    color: blue
}
```

<img src = 'https://i.imgur.com/lQCHPMk.png'>

### 1. Pegar referência a um elemento: 
- Selecionar **elementos** via Id com ```document.getElementById```

    ```js
    let virtual_div = document.getElementById('dummy')
    ```

### 2. Alterar o conteúdo de um elemento
- 2.1: Alterar o texto com ```.innerText```

    ```js
    virtual_div.innerText = 'Div manipulada'
    ```

    <img src = 'https://i.imgur.com/XFVRE6k.png'>

- 2.2: Alterar o HTML interno do elemento com ```.innerHTML```

    ```js
    virtual_div.innerHTML = '<h1>Ex div: Hoje titulo</h1>'
    ```
    <img src = 'https://i.imgur.com/vqzuf3n.png'>

- 2.3: Deletar o elemento com `.remove()`

    ```js
        virtual_div.remove()
    ```

    <img src = 'https://i.imgur.com/d0YPNbN.png'>

- 2.4: Alterar o css com `.style['propriedade'] = argumento`

    ```js
    virtual_div.style['color'] = 'red'
    ```

    <img src = 'https://i.imgur.com/Wo21CTH.png'>

- 2.5: Adicionar classe com `.classList.add('classe')`

    ```js
    virtual_div.classList.add('azul')
    ```

    <img src = 'https://i.imgur.com/EbyNiXQ.png'>

- 2.6: Remover classe com `.classList.remove('classe')`

    ```js
    virtual_div.classList.remove('azul')
    ```

    <img src = 'https://i.imgur.com/lQCHPMk.png'>

### 3. Criar um elemento novo e Inseri-lo no HTML
- O comando `document.createElement('html_tag')` cria um elemento html virtual (`HTMLElement`), recebendo como argumento uma string com o nome de uma tag. 
- O comando `.appendChild(HTMLElement)` quando aplicado em um `HTMLElement` insere nele o elemento argumento. 
    ```js
    let virtual_div = document.getElementById('dummy')

    let novo_paragrafo = document.createElement('p')
    novo_paragrafo.innerText = 'Paragrafo novinho em folha'

    virtual_div.appendChild(novo_paragrafo)
    ```

    <img src = 'https://i.imgur.com/RwOk8rd.png'>

## Utilizando Botões para chamar javascript iterativamente
Normalmente, o Javascript chamado ao final do HTML roda uma vez só. Entretanto, é possível por meio de **eventos** chamar funções definidas no Javascript com determinadas iterações do usuários. A maneira mais fácil de fazer isso é usando **Botões**:
- 1: Crie um botão com propriedade `onclick = my_function()`
    ```html
    <button onclick = 'my_function()'>Click Me!</button>
    ```

    <img src = 'https://i.imgur.com/l98yu0l.png'>

- 2:  Defina no `main.js` a função e seu comportamento esperado: 

    ```js
    let my_function = function(){
    alert('voce clickou!')
    }
    ```
- 3: Clicke no botão

    <img src = 'https://i.imgur.com/GA8ptAe.png'>

## Recuperando informações digitadas no HTML

Suponha a existência de um input no HTML com um id `meu_input` e um botão ligado a uma função `recupera_texto`

```html
<input id = 'meu_input' type = 'text'>
<button onclick = 'recupera_texto()'>Recuperar texto</button>
```

No qual o usuário digitou ```'Texto Digitado'```

<img src = 'https://i.imgur.com/RHeXjO4.png'>

- 1: Crie a função recupera_texto em `main.js`
- 2: Pegue a referência ao `HTMLElement` do input com `document.getElementById()`
- 3: Recupere o texto com `.value`
- 4: Solte um popup com o texto recuperado
    ```js
    let recupera_texto = function(){
        let doc_input = document.getElementById('meu_input') //1
        let texto = doc_input.value //2
        alert(texto) //3
    }
    ```

    <img src = 'https://i.imgur.com/Pqd48Or.png'>

# Lição de casa:
Crie uma TodoList apenas com JS nativo. 
- O botão deve adicionar um novo elemento à lista
- Desafio: Ao invés de adicionar apenas um novo parágrafo, adicione um parágrafo e um botão de deletar. O botão deve deletar apenas o parágrafo ao qual foi criado junto. 
```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>        
        <input id = 'meu_input' type = 'text'>
        <button onclick = ''>Click</button>
        
        <script src="./main.js"> </script>
    </body>
</html>
```
