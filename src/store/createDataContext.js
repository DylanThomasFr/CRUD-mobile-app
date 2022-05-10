import {createContext, useReducer} from "react"

export default (reducer, actions, initialState) => {
    const Context = createContext(initialState)

    const Provider = (props) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        let boundActions = {}
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        const newState = {
            ...state,
            ...boundActions
        }

        return (
            <Context.Provider value={newState}>
                {props.children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}