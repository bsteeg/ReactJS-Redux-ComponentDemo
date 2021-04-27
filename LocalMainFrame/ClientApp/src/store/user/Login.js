"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreators = void 0;
// export to ui
exports.actionCreators = {
    toggleRememberMe: function () { return ({ type: 'TOGGLE_REMEMBERME' }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return { rememberMe: false };
    }
    var action = incomingAction;
    switch (action.type) {
        case 'TOGGLE_REMEMBERME':
            return { rememberMe: !state.rememberMe };
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=Login.js.map