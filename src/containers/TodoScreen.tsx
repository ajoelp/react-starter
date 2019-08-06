import React from 'react';

class TodoScreen extends React.Component {
    input = React.createRef<HTMLInputElement>();

    state = {
        todos: []
    };

    addItem(e: React.FormEvent){
        e.preventDefault();
        const element = this.input.current as HTMLInputElement;
        console.log(element.value);
        this.setState({
            todos: [
                ...this.state.todos,
                element.value
            ]
        })
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.input} data-testid="add-item" />
                <button data-testid="submit-item" onClick={this.addItem}>Add</button>
                <div>
                    {this.state.todos.map(todo => (
                        <p>{todo}</p>
                    ))}
                </div>
            </div>
        )
    }

}

export default TodoScreen;