import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            disabled: false,
            error: false,
            errorMessage: '',
        }
    }

    inputChangeHandler(e) {
        this.setState({ input: e.target.value })
    }

    inputKeyupHandler(e) {
        if (e.keyCode === 13) this.clickButtonHandler(e)
    }

    async clickButtonHandler(e) {

        let {
            state: { input, disabled, errorMessage },
            props: { addTodo },
        } = this

        input = input.trim()

        if (input === '') {
            this.setState({ errorMessage: 'Поле не может быть пустым' })
            return
        }

        try {
            this.setState({ disabled: true, error: false })
            await addTodo({
                    id: Date.now().toString(),
                    title: input,
                    done: false,
            })
            this.setState({ disabled: false, input: '', errorMessage: '' })
        }
        catch (e) {
            console.error(e)
            this.setState({ disabled: false, error: true })
        }
    }

    render() {
        const { disabled, input, errorMessage } = this.state
        return (
            <div className="add-todo__container">
                <input type="text"
                       name="input"
                       className="add-todo__input"
                       maxLength="90"
                       value={input}
                       onChange={::this.inputChangeHandler}
                       onKeyUp={::this.inputKeyupHandler}
                       placeholder="Enter todo..."
                       disabled={disabled} />
                <span className="add-todo__input-error">{errorMessage}</span>
                <button className="add-todo__btn" onClick={::this.clickButtonHandler}> Add Todo </button>
            </div>
        )
    }
}