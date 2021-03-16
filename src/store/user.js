import { produce } from 'immer'
const initState = {
    loading: false,
    data: {}
}
function user(state = initState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'success':
                draft.data = action.payload
                console.log(draft == state, 'draft')
                break;
            default:
                return state
        }
    })

}

export default user;