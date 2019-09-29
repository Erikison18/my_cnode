function list(state={
    loading: true,
    data: [],
}, action) {
    switch (action.type) {
        case 'LIST_UPDATE':
            return {
                loading: true,
                data: state.data,
            }
        case 'LIST_UPDATE_SUCC':
            return {
                loading: false,
                data: action.data.data,
            }
        case 'LIST_UPDATE_ERR':
            return {
                loading: false,
                data: [],
            }
        default:
            return state
    }
}

export default list