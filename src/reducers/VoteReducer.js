const initialState = {
    lemongrab: 0,
    finn: 0,
    jake: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_LEMONGRAB':
            console.log("vote Lemongrab" )
            return Object.assign({}, state, {
                lemongrab: state.lemongrab + 1
            })
        case 'VOTE_FINN':
            console.log("vote Finn" )
            return Object.assign({}, state, {
                finn: state.finn + 1
            })
        case 'VOTE_JAKE':
            console.log("vote Jake" )
            return Object.assign({}, state, {
                jake: state.jake + 1
            })
        default:
            return state
    }
}
