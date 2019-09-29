function user(state={
    data:{
        avatar_url: '',
        create_at: '',
        loginname: '',
        score: '',
        recent_topics: [],
        recent_replies: [],
    },
    loading: true,
}, action) {
    switch (action.type) {
        case 'USER_UPDATE':
            return {
                loading: true,
                data: state.data,
            }
        case 'USER_UPDATE_SUCC':
            return {
                loading: false,
                data: action.data.data,
            }
        case 'USER_UPDATE_ERR':
            return {
                loading: false,
                data: {
                    avatar_url: '',
                    create_at: '',
                    loginname: '',
                    score: '',
                    recent_topics: [],
                    recent_replies: [],
                },
            }
        default:
            return state
    }
}

export default user