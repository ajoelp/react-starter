import React from 'react';
import {Todos} from "../types/Todos";

interface TodoProps extends Todos{}

export default class TodoList extends React.Component<TodoProps> {
    render(){
        return (
            <div data-testid="list">
                {this.props.todos.map((todo, index) => (
                    <p key={`${todo}-${index}`}>{todo}</p>
                ))}
            </div>
        );
    }
}

