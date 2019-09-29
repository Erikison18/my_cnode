function details(state={
    loading: true,
    data: {
        reply_count: 0,
        replies: [],
        author: {
            loginname: '',
            avatar_url: '',
        },
        create_at: '',
        good: true,
    }
}, action) {
    switch (action.type) {
        case 'DETAILS_UPDATE':
            return {
                loading: true,
                data: state.data,
            }
        case 'DETAILS_UPDATE_SUCC':
            return {
                loading: false,
                data: action.data.data,
            }
        case 'DETAILS_UPDATE_ERR':
            return {
                loading: false,
                data: {
                    reply_count: 0,
                    replies: [],
                    author: {
                        loginname: '',
                        avatar_url: '',
                    },
                    create_at: '',
                    good: true,
                },
            }
        default:
            return state
    }
}

export default details