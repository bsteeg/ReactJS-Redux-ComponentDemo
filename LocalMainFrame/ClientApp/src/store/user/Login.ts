import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface LoginState {
    rememberMe: boolean;
}

// actions
export interface ToggleRememberMeAction { type: 'TOGGLE_REMEMBERME' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ToggleRememberMeAction;

// export to ui
export const actionCreators = {
    toggleRememberMe: () => ({ type: 'TOGGLE_REMEMBERME' } as ToggleRememberMeAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer: Reducer<LoginState> = (state: LoginState | undefined, incomingAction: Action): LoginState => {
    if (state === undefined) {
        return { rememberMe: false };
    }
    

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'TOGGLE_REMEMBERME':
            console.log(!state.rememberMe );
            return { rememberMe: !state.rememberMe };
        default:
            return state;
    }
};