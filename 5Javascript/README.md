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

## Lição de casa:
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
# Objetos
Tudo que não é um tipo primitivo (`string`, `number`, `boolean` ou `undefined`) é um **Objeto**.
- 0: **container** com atributos e métodos
- 1: Emula comporamento semelhante à **referência**, o que não existe de fato pois **javascript não tem ponteiros**.
- 2: Emula passagem via referencia para funções
- 3: Reuso de código com **classes**

## 0. 'Containers com atributos e métodos' :  Instanciando objeto
- Objetos são instanciados entre chaves `{}`.
- Cada elemento deve ser declarado no formato `key:value`
- Todos os elementos, menos o último, são terminados em `,`

    ```js
    let pitty = {
        especie: 'cao',
        nasceu: 2004,
        viva_ate: 2020,

        calcula_idade: function(){
            return this.viva_ate - this.nasceu
        }
    }
    ```
- Imprimir um objeto imprime seus **métodos** (Funções) e **atributos** (variáveis ou outros objetos):
    ```js
    console.log(pitty)
    ```

    imprime

    ```js
    {
        especie: 'cao',
        nasceu: 2004,
        viva_ate: 2020,
        calcula_idade: [Function: calcula_idade]
    }
    ```
- Para acessar um atributo, utiliza-se o operador ponto `.attribute`
    ```js
    console.log(pitty.especie)
    // Imprime cao
    ```
- Para executar um método, utiliza-se a sintaxe `.method()`
    ```js
    console.log(pitty.calcula_idade())
    //imprime 16
    ```


## 1 : Emular uma referência
- Utilizando tipos primitivos:
    ```js
    let a = 'a'
    let a_copy = a

    console.log(a, a_copy)

    a = 'b'

    console.log(a, a_copy)
    ```

    imprime

    ```
    a a
    b a
    ```

- Utilizando objetos:
    ```js
    let a = {char: 'a'}
    let a_copy = a

    console.log(a, a_copy)

    a.char = 'b'

    console.log(a, a_copy)
    ```

    imprime

    ```js
    { char: 'a' } { char: 'a' }
    { char: 'b' } { char: 'b' }
    ```

## 2: Emular passagem via referência
- Variáveis primitivas
    ```js
    let numero1 = 1
    let numero2 = 2

    let modifica_numero = function (numero1, numero2) {
        numero1 = numero2
    }

    modifica_numero(numero1, numero2)
    console.log(numero1)
    ```

    ```
    1
    ```

- Objetos:

    ```js
    let numero1 = {content: 1}
    let numero2 = {content: 2}

    let modifica_numero = function(numero1, numero2){
        numero1.content = numero2.content
    }

    modifica_numero(numero1, numero2)
    console.log(numero1)
    ```

    ```js
    { content: 2 }
    ```

## Reuso de código: Classes
Seria **muito trabalhoso** criar um objeto manualmente para cada animal novo. É possível utilizar **classes funcionais** ou **classes** para solucionar o problema:

### Classes funcionais:
- Maneira como se faziam classes ANTES do ES6
- A classe é feita como uma função
- Atributos e métodos são inicializados com `this.attr = `
- Instância é criada com `inst = new Class(arg1, arg2, ...)`
```js
let Animal = function(especie,nome, nasceu, viveu_ate){
    this.nome = nome
    this.especie = especie
    this.nasceu = nasceu
    this.viveu_ate = viveu_ate

    this.calcula_idade = function(){
        return this.viveu_ate -  this.nasceu
    }

    this.idade = this.calcula_idade()
 }

 pitty = new Animal ('cão', 'pitty', 2006, 2020)
 pitty = new Animal ('passaro', 'preciosa', 2015, 2020)

 console.log(pitty)
```
Imprime

```js
Animal {
  nome: 'pitty',
  especie: 'cão',
  nasceu: 2006,
  viveu_ate: 2020,
  calcula_idade: [Function],
  idade: 14
}
Animal {
  nome: 'preciosa',
  especie: 'passaro',
  nasceu: 2015,
  viveu_ate: 2020,
  calcula_idade: [Function],
  idade: 5
}
```


### ```this```

Em Javascript, o `this` é uma variavel especial, que muda dependendo de qual função está sendo executada nesse momento. O propósito do `this` é permitir que métodos de objetos possam acessar informações do objeto. Por exemplo, dentro de um construtor de uma classe, o `this` tem o valor do objeto que esta sendo criado, e dentro de um método de uma classe, o `this` tem o valor do objeto que chamou o método:

```javascript
class Person {
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greet () {
		console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
	}
}

const jose = new Person("jose", "almeida");
console.log(jose.firstName, jose.lastName); // jose almeida
console.log(jose.speak()); // Hello, my name is jose almeida
```

Acima, temos dois exemplos de usos diferentes do `this`: em um construtor e em um método. Porêm, infelizmente o comportamento do `this` no javascript não é tão simples quanto se parece. Veja o exemplo abaixo:

```javascript
class Fruit {
	constructor (fruitType) {
		this.fruitType = fruitType;
	}

	greet () {
		console.log('*greeting ' + this.fruitType + ' noises*');
	}
}
const apple = new Fruit('apple');
apple.greet(); // *greeting apple noises*

const greetFunction = apple.greet;
greetFunction(); // TypeError!!!
```

Isso acontece porque o valor do `this` toda execução da função `greet`, e depende de varios fatores externos pra determinar qual valor de fato ele vai receber (nesse caso, o `this` recebe `null`).

Por sorte, existe uma regrinha que cobre 90% dos casos. Quando você chama uma função a partir de um objeto, o valor do `this` é esse objeto. Por exemplo, se fizermos `pessoa.falar()`, podemos ver que a função `falar` foi chamada a partir do objeto `pessoa`, logo o valor do `this` vai ser esse objeto `pessoa`.

### Arrow functions

Arrow functions são só uma forma diferente de se criar funções. Elas tem a seguinte sintaxe:

```javascript
const functionName = (arg1, arg2) => {
	/* normal function code */
	return someValue;
}
```

Se a função não tiver argumentos, podemos colocar parentesis vazios. Exemplo:
```javascript
const functionName = () => {
	/* normal function code */
	return someValue;
}
```

Se a função for pequena o suficiente, é possvel substituir as chaves da arrow function por uma expressao, que sera o retorno da funcao. Exemplo:

```javascript
const functionName = (arg1, arg2) => arg1 + arg2 // will always return arg1 + arg2.
```


#### Mas Por que Arrow Funtions?

Ela serem mais suscintas é visto como vantagem pela comunidade, mas não só a única. Elas tambem interagem com o `this`.

Ao inves de uma `arrow function` calcular o valor do this toda vez que ela for executada, ela calcula esse valor apenas quando ela é criada, e mantem ele constante.


isso pode ajudar a consertar um problema que ja encontramos. Veja:

```javascript
class Fruit {
	constructor (fruitType) {
		this.fruitType = fruitType;
	}

	greet = () => {
		console.log('*greeting ' + this.fruitType + ' noises*');
	}
}
const apple = new Fruit('apple');
apple.greet(); // *greeting apple noises*

const greetFunction = apple.greet;
greetFunction(); // *greeting apple noises*
```

Ao inves de recebermos um erro pelo valor do this, temos o comportamento esperado.

`arrow functions` são, portanto, preferiveis, pois não usam o `this` de forma quase imprevisivel.
