import React, { Component } from 'react';
import TodoItems from "./TodoItems"; //Importa o componente de itens 
import "./ToDolist.css";

class ToDolist extends Component {
    constructor(props){
        super(props);

        
        this.state = {
            items: []   //Array de itens 
        };

        this.addItem = this.addItem.bind(this); //não sei muito bem para que serve, ajudou em escolpo
        this.deleteItem = this.deleteItem.bind(this);  //não sei muito bem para que serve, ajudou em escolpo
    
    }

    addItem(e) {
        if(this._inputElement.value !== ""){ //verifica se a pessoa digitou algo 
            var newItem = {
                text: this._inputElement.value,  //cria um objeto com o conteúdo do input e usa o horário de key
                key: Date.now()
            };

            this.setState((prevState) => { //não entendi prevState e setState
                return{
                    items: prevState.items.concat(newItem)
                }
            });
        }


        this._inputElement.value = ""; //Zera o input que estava digitado

        console.log(this.state.items);

        e.preventDefault(); //impede f5
        
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){ //O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida
            return(item.key !== key) //Seleciona pela key
        });

        this.setState({ //Não entendi o setState
            items: filteredItems 
        })
    }

    render(){
        //onSubmit chama addItem
        //ACHO que ref faz com que o valor digitado seja salvo na variável _inputElement 
        return (
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit = {this.addItem}>  
                        <input ref = {(a) => this._inputElement = a} placeholder = "Digite nova tarefa"></input>
                        <button type = 'submit'>Adicionar</button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items} //Aqui é onde de fato é passado o array ao componente que renderizará os itens
                delete = {this.deleteItem}/>
            </div>
        
        );
    }

}

export default ToDolist;