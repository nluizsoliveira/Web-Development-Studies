Este material tem como premissa o conhecimento prévio de outra linguagem de programação, bem como familiarização com lógica de programação, algoritmos, memória, POO, estruturas,  funções e outros conceitos básicos comuns a diversas outras linguagens de programação. Se propõe a ser um material de transição ao javascript, e não de introdução a programação como um todo.   

# Javascript
Linguagem de programação interpretada de alto nível <a href = "https://stackoverflow.com/questions/32476680/what-does-it-mean-that-javascript-is-dynamic">dinâmica</a>, <a href = "https://stackoverflow.com/questions/964910/is-javascript-an-untyped-language">fracamente tipada</a>,
<a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-based_vs._prototype-based_languages">prototype-based</a>, 
<a href = "https://www.red-gate.com/simple-talk/dotnet/asp-net/javascript-single-threaded/">single-thread</a> 
e <a href = "https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95">multiparadigma</a>

## Tipagem em Javascript
Javascript possui **tipagem dinâmica**. Não é necessário especificar o tipo da variável antes de declará-la, e é possível modificá-lo com atribuição de conteúdos de outros tipos à mesma : 

```javascript
var numero = 5;
console.log(numero);
var numero = "bom dia"
console.log(numero);
```

É uma sintaxe válida em Javascript, que retorna: 

```
5
bom dia
```

Mesmo dinâmicos e não explícitos, o **tipo de dado que uma variável carrega existe em javascript**. A função **```typeof()```** retorna o tipo de dado de uma variável: 

```javascript
var numero = 5;
console.log(typeof(numero));
var numero = "bom dia";
console.log(typeof(numero));
```

retorna: 

```
number
string
```

### Tipos de dados de variáveis em Javascript:
- **string**: texto, normalmente representado entre aspas simples ou aspas duplas; 
    ```javascript
    var ex = "bom dia"
    ```
- **number**: numero;
    ```javascript
    var ex = 2
    ```
- **boolean**: true ou false. 
    ```javascript
    var ex = false
    ```
- **null**: Representa a referência a um endereço de memória inválida/inexistente. Ou seja, a ausência de um objeto. 
    ```javascript
    var ex = null
    ```

    **IMPORTANTE**: Por razões históricas, ```typeof(null)``` retorna ```object```. Este é um bug do ECMAscript que não foi corrigido por motivos de retro-compatibilidade. 

- **undefined**: Representa que uma variável não teve seu valor atribuído. Funções sem retorno definido normalmente também retornam undefined. 
    ```javascript
    var ex;
    console.log(typeof(ex))
    ```
    returna undefined. 

### Consequências da Tipagem Dinâmica

- O operador binário ```+``` adquire mais de um comportamento em javascript. Caso ambos os operandos sejam **number**, ocorre de fato a **soma** entre os elementos. Caso contrário, a situação depende do tipo de cada operador. No geral, em operações com **strings**, + realiza **concatenação**: 

```js
var a = 1
var b = 2
var c = "3"
var d = "quatro"
var e = null
var f = true
var g = undefined

console.log("number 1 + number 2 = "+ (a+b))
console.log("number 1 + string '3' = " + (a+c))
console.log("number 1 + string 'quatro' = " + (a+d))
console.log("number 1 + null = " + (a+e))
console.log("number 1 + true = "+ (a+f))
console.log("number 1 + undefined = "+ (a+g))
console.log("string '3' + string 'quatro' = " + (c+d))
console.log("string 'quatro' + true = " + (d + true))
console.log("false + false = "+ (false + false))
console.log("true + false = " + (true + false))
console.log("true + undefined = " + (true + undefined))
```

retorna

```
number 1 + number 2 = 3
number 1 + string '3' = 13
number 1 + string 'quatro' = 1quatro
number 1 + null = 1
number 1 + true = 2
number 1 + undefined = NaN
string '3' + string 'quatro' = 3quatro
string 'quatro' + true = quatrotrue
false + false = 0
true + false = 1
true + undefined = NaN
```


## Objetos em Javascript
Em JS, quase tudo é um Object, exceto os tipos primitivos. Ainda assim, alguns tipos primitivos como Booleans, Numbers e Strings podem ser transformados em primitivos por meio de **New**. **ENTRETANTO, ESTA É UMA SINTAXE NÃO RECOMENDADA, DEVIDO A SEU FUNCIONAMENTO CONTRA-INTUITIVO**.  

```js
var my_number = 3; 
var my_object_number = new Number(3);

var my_object ={
  number: 3
}

function increments_number(numero){
      numero = numero + 1; 
}

function increments_object(number){
  number.number++;
}

increments_number(my_number);
increments_number(my_object_number);
increments_object(my_object);

console.log("primitive number =  3, which increased by a function  = " + my_number);
console.log("object Number =  3 , which increased by a function = " + my_object_number)
console.log("prop number of a hardcoded object = 3, which increased by a function = " + my_object.number)
```

imprime

```
primitive number =  3, which increased by a function  = 3
object Number =  3 , which increased by a function = 3
prop number of a hardcoded object = 3, which increased by a function = 4
```

Em suma, o funcionamento esperado é alcançado via a criação de um novo objeto. 

### Criando um novo objeto em javascript

Objetos são declarados entre chaves ```{}```. Seus atributos, com a sintaxe ```nome do elemento: elemento```. Cada elemento é separado por uma vírgula, exceto o último.  Métodos podem ser elementos de objetos, sendo declaradas com ```nomeDaFuncao: function(){}``` . 

Elementos do objeto, fora dele próprio, são acessados com ```objeto.nomeDoElemento```. Elementos do objeto internos a ele são acessados com ```this.nomeDoElemento```(Como em funções internas ao mesmo). 
```javascript
var aluno = {
    nome: "Nelson",
    idade: 20,
    saudacao: function(){
      console.log("Este aluno se chama " + this.nome + " e possui " + this.idade + " anos");
    }
}

aluno.saudacao()
```

retorna 
```
Este aluno se chama Nelson e possui 20 anos
```
