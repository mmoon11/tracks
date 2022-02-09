import React, {useReducer} from 'react';

// reducer: function; actions: object; defaultValue: value or state
export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    // component that takes {children} as props
    // reducer function: function with all the cases
    // loop through actions object
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    };
    // Provider is component that makes data availalbe to everything else
    // Context is object that is used to get access to information for child component
    return {Context: Context, Provider: Provider}
};