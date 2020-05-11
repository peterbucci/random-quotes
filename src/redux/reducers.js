const ADD_AUTHOR = "ADD_AUTHOR"
const ADD_QUOTES = "ADD_QUOTES"

const authorReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_AUTHOR:
            return {
                ...state,
                [action.author]: []
            }
        case ADD_QUOTES:
            return {
                ...state,
                [action.author]: [
                    ...state[action.author],
                    ...action.quotes
                ]
            }
        default:
            return state
    }
}

export default authorReducer