// ------------------------------------
// Constants
// ------------------------------------
export const TIME_SHEET_CHANGE_INPUT = 'TIME_SHEET_CHANGE_INPUT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function changeInput(input) {
    return {
        type: TIME_SHEET_CHANGE_INPUT,
        payload: input
    }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: COUNTER_DOUBLE_ASYNC,
                    payload: getState().input
                })
                resolve()
            }, 200)
        })
    }
}

export const actions = {
    changeInput
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [TIME_SHEET_CHANGE_INPUT]: (state, action) => {
        state.input = action.payload;
        return state;
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    input: "",
    days: {
        monday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        tuesday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        wedesday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        thursday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        friday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        saturday: {in: '', lunchOut: '', lunchIn: '', out: ''},
        sunday: {in: '', lunchOut: '', lunchIn: '', out: ''}
    },
}
export default function timeSheetReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    let a =  handler ? handler(state, action) : state;
    return a;
}
