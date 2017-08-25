import React, { Component } from 'react'
import TodoItem from './todoItem'


export default class extends Component {
    constructor(props) {
        super(props)
        this.state= {
            edit: false,
            disabled: false,
            title: this.props.item
        }
    }

    getItems() {
        const { todoList, removeItem, editItem } = this.props
        return todoList.length
            ? todoList.map(item => {
                return <TodoItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    editItem={editItem} />
            })
            : <div className="todo-list__empty">
                Список пуст
            </div>
    }

    render() {
        return (
            <div className="todo-list__container">
                <h3>Your todo's list</h3>
                <ul>
                    { ::this.getItems() }
                </ul>
            </div>
        )
    }
}
