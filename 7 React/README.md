
# React

## JSX
Sintaxe similar ao XML para Javascript. Permite utilizar lógica(js) e marcação (html) em um único arquivo.
```jsx
const element = <h1>Hello, World!</h1>
```
### Renderização de elementos JSX
Os elementos jsx são a base do React. É possível renderizá-los com `ReactDOM.render`, que recebe 2 argumentos:
- Elemento a ser renderizado
- Referência ao HTMLElement onde o elemento será renderizado

```js
const element = <h1>Hello, World!</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)
```

- Exemplo: JSX pode executar funções e encapsular seu retorno em HTML

```js
import React from 'react';
import ReactDOM from 'react-dom';


function renderName(user){
  return `${user.name} ${user.lastName}`
}

const user = {
  'name': 'nelson',
  'lastName': 'Oliveira'
}

const element = <h1>Hello, {renderName(user)}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)
```

- Exemplo: É possível utilizar estruturas de decisão e repetição juntamente ao jsx. É comum o uso de `map()` para isso.

```js
import React from "react";
import ReactDOM from "react-dom";

const users = [
  { username: "maria", password: "123" },
  { username: "ana", password: "123" },
  { username: "ines", password: "hard" },
];

function warnUser(user) {
  if (user.password === "123") {
    return <h1>User {user.username} has an unsafe password</h1>;
  }
}

function usafePasswordWarner(users) {
  return users.map((user) => {
    return warnUser(user);
  });
}

let elements = usafePasswordWarner(users);

ReactDOM.render(elements, document.getElementById("root"));
```

### Propriedades de elementos em JSX
É possível definir propriedades de elementos utilizando jsx: 
```js
let source =
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const image = <img src={source} alt="funny dog"/>;

ReactDOM.render(image, document.getElementById("root"));
```

```
Warning:

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.
```

## Elementos React

### DOM vs ReactDOM
Ao contrário de elementos do DOM de fato, elementos do React são objetos, o que faz deles computacionalmente mais baratos. ReactDOM é quem atualiza o DOM a partir de elementos React. 

### Atualizando um elemento renderizado
**Elementos React são imutáveis**. Não é possível modificar seus elementos filhos ou atributos. São como um frame de um filme em um determinado ponto da UI. A única maneira de atualizar a UI é chamando `ReactDOM.render()` com novos elementos. 

Na prática, entretanto, `ReactDOM.render()` é chamado apenas uma única vez. Na prática, são utilizados **Estados** para gerenciar componentes que precisam de dinamicidade. 

## Componentes
Permitem dividir a UI em pedaços independentes e re-utilizáveis de código. É possível escrever componentes utilizando classes ou funções. Entretanto, a abordagem com funções é mais moderna e vantajosa. 

```js
import React from "react";
import ReactDOM from "react-dom";

function Welcome(props) {
  return (
    <h1>
      Hello {props.name} {props.surname}!
    </h1>
  );
}

const element = <Welcome name="nelson" surname="oliveira" />;

ReactDOM.render(element, document.getElementById("root"));
```

Deve-se sempre iniciar um componente com letra maiúscula. Componentes personalizados passam os atributos e filhos do componente a um objeto chamado `props`.

```js
import React from "react";
import ReactDOM from "react-dom";

const posts_json = {
  data: [
    {
      id: "1",
      content: "Boa noite, tudo bem?",
    },
    {
      id: "2",
      content: "Tudo ótimo, e contigo?",
    },
    {
      id: "3",
      content: "Também.",
    },
  ],
};

function Post(props) {
  return <p>{props.content}</p>;
}

function Topic(props) {
  return props.posts_json.data.map((post) => {
    return <Post id={post.id} content={post.content} />;
  });
}

const element = <Topic posts_json={posts_json} />;

ReactDOM.render(element, document.getElementById("root"));
```

É importante salientar que **props não devem ser modificados. Componentes devem ser funções puras**. É o state que gerenciará isso. 

- Exemplo: Criando relógio chamando `ReactDOM.render()` múltiplas vezes:

```js
import React from "react";
import ReactDOM from "react-dom";

function Clock(){
  const date = new Date().toLocaleTimeString()
  return <p>Hello! {date}</p>
}

function tick(){
  const element = <Clock/>

  ReactDOM.render(
    element,
    document.getElementById('root')
  )  
}

setInterval(tick, 1000)
```

## Componentes de classes
Para utilizar states sem utilizar hooks, utiliza-se classes. Para passar um componente funcionar para classes:
- Cria-se uma classe que extende `React.Component`:
- Implementa-se uma funções `constructor(props)` que a passa para super e define variáveis internas
- Implementa-se uma função `render()` que retorna o JSX
- `props` passa a ser acessado com `this.props`

```js
import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.date = new Date().toLocaleTimeString()
  }
  render(){
    return <p>Hello! {this.date}</p>
  }
}

function tick(){
  const element = <Clock/>

  ReactDOM.render(
    element,
    document.getElementById('root')
  )  
}
```