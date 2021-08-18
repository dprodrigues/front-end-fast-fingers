import { createContext, useContext, useReducer } from "react";

const initialState = {
    loggedIn: false,
    selectedLanguage: undefined,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGGED_IN_VALUE": {
            return { ...state, loggedIn: action.payload.loggedIn };
        }

        case "SET_SELECTED_LANGUAGE": {
            return {
                ...state,
                selectedLanguage: action.payload.selectedLanguage,
            };
        }

        default: {
            return state;
        }
    }
};

const Context = createContext(undefined);

const GeneralProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

const useGeneral = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("useGeneral must be used within a useGeneral");
    }

    return context;
};

export { GeneralProvider, useGeneral };
