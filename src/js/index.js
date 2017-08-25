import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import Main from './main'
import store from './store'
import * as actions from './store/constants'
import DatabaseProvider from './libs/database'
import '../stylus/index.styl'
// import styled from 'styled-components'

const Database = new DatabaseProvider()

const getInfo = async function() {
    const data = await Database.getTodoListFromLS()
    if (data) {
        store.dispatch({
            type: actions.getTodoList,
            payload: data
        })
    }
}

getInfo()

const render = (Component) => {
    ReactDom.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    )
}

render(Main)




