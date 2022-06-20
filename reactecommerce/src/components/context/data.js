import React from "react";

export const ContextData = React.createContext(null)
export function Context(props) {
    const [cartState, setCartState] = React.useState([])

    function handleChange(e) {
        setCartState(e.target.value)
    }

    return(
        <ContextData.Provider value = {{cartState, setCartState}}>
            {props.children}
        </ContextData.Provider>
    )
}