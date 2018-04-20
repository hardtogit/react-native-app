let initialNavState={}
function Index(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'FETCH_LIST_DATA_SUCCESS':
            nextState={
                [action.key]:action.data
            };
            break;
        case 'Logout':

            break;
        default:
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
export default Index