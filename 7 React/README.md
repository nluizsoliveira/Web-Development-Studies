
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
**Elementos React são imutáveis**. Não é possível modificar seus elementos filhos ou atributos diretamente. São como um frame de um filme em um determinado ponto da UI. As única maneiras de atualizar a UI são chamando `ReactDOM.render()` novamente (O que é uma má prática) ou utilizando **estados**. 

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

- Exemplo: Criando relógio funcional chamando `ReactDOM.render()` múltiplas vezes:

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

## Estados e ciclo de vida
### Componentes de classe
Antes dos componentes funcionais e hooks, utilizava-se componentes de classe. O suporte a elas não será removido, e é importante estudá-las pois por muito tempo `this.state` foi a única maneira de se gerenciar estados. 

Um componente de classe consiste deve: 
- Estender `React.Component`:
- Implementar um método `constructor()` que a passe `props` ao construtor da classe pai (`React.Component`) e define variáveis internas
- Implementar uma função `render()` que retorna o JSX

Exemplo: Componente que mostra horário em que foi criado (estático) utilizando classes 

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


const element = <Clock/>

ReactDOM.render(
  element,
  document.getElementById('root')
)  

```

### Adicionando estado a uma classe
1. Criar um atributo `this.state` no construtor, que conterá a variável de estado. Esta variável pode ser de qualquer tipo básico (string, número, vetor e mesmo dicionário). 
2. Acessar variável a partir de `this.state`

Exemplo: Armazenando a data em um estado (no momento, ainda estático):

```js
class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }

  render(){
    return(
      <p>It's {this.state.date.toLocaleTimeString()}</p>
    )
  }
}

const element = <Clock/>
ReactDOM.render(
  element, 
  document.getElementById('root')
);
```

Apenas adicionar um estado não basta para que o relógio se atualize. É necessário implementar métodos que se usem do **ciclo de vida** dos componentes React para que isso ocorra. 

Além disso, estados **não devem ser modificados diretamente**. É utilizado o método `setState()` para isso, que atualiza o conteúdo atual de `this.State`. 

### Ciclo de vida de componentes
É importante que um componente seja liberado após sua utilização terminar.
. **mounting** é o termo utilizado para quando o componente é renderizado no DOM pela primeira vez
. **unmounting**, quando é removido.

É possível definir o que ocorrerá quando um componente montar e desmontar utilizando os métodos `componentDidMount()` e `componentWillUnmount()`, chamados **métodos de ciclo de vida**.

São estes os locais ideais para settar um timer que gerenciará o componente dinâmico do relógio. 

**Exemplo: Relógio funcional utilizando estados e o ciclo de vida do compontent**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount(){
    // timerID keeps track of the setInterval event so it's possible to kill it
    // when component unmounts. 
    this.timerID = setInterval(
      // An arrow function is required for associating .this with setInterval scope, allowing
      // a call for .setState. Binding would be required otherwise. 
      ()=>this.updateTime(), 
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateTime(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <p>It's {this.state.date.toLocaleTimeString()}</p>
    )
  }
}

const element = <Clock/>
ReactDOM.render(
  element, 
  document.getElementById('root')
);
```

### Mais sobre setState: 
- Sempre que `setState` é chamado, React invoca `render()` atualizando a UI da página. 
- Não se deve atualizar o estado de um componente diretamente. Isso porque `render` não será chamado. 
- `state` e `props` podem ser atualizados assincronamente. Não é recomendado confiar em seus valores para o cálculo do próximo estado. Para resolver isso, o ideal é que se utilize uma função, que receberá como argumentos `state` e `props` atualizados. 
  ```js
  // Permite condição de corrida
  this.setState({
    counter: this.state.counter + this.props.increment,
  });

  // Evita condição de corrida
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  ```
- Caso seja um dicionário, `setState` atualiza apenas os campos passados, mantendo os outros intactos. Isso significa que não se trata de uma subscrição, e sim uma mescla. 
- O estato de um componente **é acessível somente a ele próprio**. Componentes pais e filhos não conseguem discernir se seus componentes filhos/pais tem estado ou mesmo acessá-lo. 
  - É possível passar estados de maneira top-down por `props`. Componentes filhos podem ter como propriedade o `state` de seus pais.

## Eventos
As principais diferenças na chamada de eventos em React, em comparação com Js puro, são:
- Eventos devem ser nomeados em camelCase
- Eventos em elementos jsx podem ser diretamente passados como funções, no lugar de strings. 

```js
<button onClick = {sampleFoo}>Click me</button>
```
### Evento de click 
- Exemplo: Botão cujo texto inverte entre 'SIM' ou 'NÃO' a cada click: 
```js
class ToggleButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {isActive: false}
  }

  toggle(){
    this.setState({isActive: !this.state.isActive})
  }

  getToggleString(){
    return this.state.isActive ? 'SIM' : 'NAO'
  }

  render(){
    return <button onClick = {()=>{this.toggle()}}>{this.getToggleString()}</button>
  }
}
```
### Argumentos de eventos
Utilizar arrow function cujo parâmetro é `e`, variável que representa o evento e será passada como último argumento de `foo`
```js
<button onClick={(e) => this.foo(arg, e)}>Botão com argumento</button>
```

## Renderização condicional
Não só elementos JSX, como os próprios componentes podem ser renderizados condicionalmente. A prática é muito comum quando se trata, por exemplo, de páginas com sistema de login, onde um usuário loggado poder ver informações diferentes de um visitante. 

- Exemplo: Simulação de componente que modifica seu conteúdo a partir de um login
```javascript
function GreetsUnlogged(){
    return <p>You're not logged. Please Login</p>
}
function GreetsLogged(){
    return <p>You're logged. Welcome Back!</p>
}

class Greetings extends React.Component{
  render(){
    if(this.props.isLogged){
      return <GreetsLogged/>
    }
    return <GreetsUnlogged/>
  }
}


class Page extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLogged: false}
  }

  login(){
    this.setState({isLogged: true})
  }

  logout(){
    this.setState({isLogged: false})
  }

  getLoginButton(){
    return this.state.isLogged? <button onClick = {()=>{this.logout()}}>logout</button> : 
                                <button onClick = {()=>{this.login()}}>login</button>
  }

  render(){
    return(
      <>
      <Greetings isLogged={this.state.isLogged}/>
      {this.getLoginButton()}
      </>
    )
  }
}

const element = <Page/>
ReactDOM.render(element, document.getElementById('root'))
``` 

O componente acima tem um grande inconveniente: A função `getLoginButton` poderia retornar um componente `<LoginButton`, mas `this.login` e `this.logout` seriam funções de `<Page>`, e não  `<LoginButton>`, o que lançaria um erro. Em suma, o componente filho não conseguiria atualizar o estado de seu componente pai. É possível contornar isso utilizando `props` de maneira sofisticada: 

## Modificando estado de um componente pai a partir de seu filho
Deve-se encapsular `setState` em uma função `wrapper` e passá-la para `props` do componente filho: 

```js
import React from 'react';
import ReactDOM from 'react-dom';

function GreetsUnlogged(){
  return <p>You're not logged. Please Login</p>
}
function GreetsLogged(){
  return <p>You're logged. Welcome Back!</p>
}

class Greetings extends React.Component{
  render(){
    if(this.props.isLogged){
      return <GreetsLogged/>
    }
    return <GreetsUnlogged/>
  }
}

class LoginButton extends React.Component{
  login(){
    console.log(this.props)
    this.props.handler({isLogged: true})
  }

  logout(){
    this.props.handler({isLogged: false})
  }
  
  render(){
    if(this.props.isLogged){
      return <button onClick = {()=>{this.logout()}}>logout</button> 
    }
    return <button onClick = {()=>{this.login()}}>login</button>
  }
}

class Page extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLogged: false}
  }

  handler(newState){
    this.setState(newState)
    console.log(this.state)
  }

  render(){
    return(
      <>
      <Greetings isLogged={this.state.isLogged}/>
      <LoginButton isLogged={this.state.isLogged} handler = {(newState)=>this.handler(newState)}/>
      </>
    )
  }
}

const element = <Page/>
ReactDOM.render(element, document.getElementById('root'))
```