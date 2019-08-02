import React, { Component } from 'react';


class TodoItems extends Component{

    constructor (props){
        super(props);

        this.createTasks = this.createTasks.bind(this); 
    }
    createTasks(item){
        return <li 
        onClick = {() => this.delete (item.key)}
        key = {item.key}> {item.text} 
        </li>
    }

    delete(key) {
        this.props.delete(key)
    }

    render(){
        var todoEntries = this.props.entries; //Foi passado no ToDoList
        var listItems = todoEntries.map(this.createTasks); //Não entendi como createTasks pega item de argumento 
        return(
            <ul className = "theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;