
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    async removeButtonHandler() {
        const { item, removeItem } = this.props
        await removeItem(item.id)
    }

    async changeStatusItemHandler() {
        const { editItem, item } = this.props
        await editItem({
                id: item.id,
                done: !item.done,
        })
    }

    render() {
        const {item, removeItem, editItem} = this.props

        return <li className="todo-list__item" key={item.id}>
            <input className="todo-list__item-checkbox" type="checkbox" defaultChecked={item.done} onClick={::this.changeStatusItemHandler}/>
            <div className="todo-list__item-name">
                <Link className="todo-list__item-link" to={`/todos/${item.id}`}> {item.title} </Link>
            </div>
            <button onClick={::this.removeButtonHandler}>X</button>
        </li>
    }
}