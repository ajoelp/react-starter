import React from 'react';
import TodoList from "../components/TodoList";
import { Todos } from "../types";

class TodoScreen extends React.Component {
    input = React.createRef<HTMLInputElement>();

    state: Todos = {
        todos: []
    };

    addItem = (e: React.FormEvent) => {
        e.preventDefault();
        const element = this.input.current;
        if (element) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    element.value
                ]
            });
            element.value = '';
        }
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.input} data-testid="add-item"/>
                <button data-testid="submit-item" onClick={this.addItem}>Add</button>
                <TodoList todos={this.state.todos} />
            </div>
        )
    }

}

export default TodoScreen;