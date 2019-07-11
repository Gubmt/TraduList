const INITIAL_STATE = {
    modal: false,
    modalRemAll: false,
    modalEdit: false,
    modalRemItems: false,
    modalSearch: false,
}

export default function modais(state = INITIAL_STATE, action){
    switch(action.type){
        case 'HANDLE_MODAL': 
            return{
                ...state,
                modal: action.status
            }
        case 'HANDLE_MODAL_ITEM': 
            return{
                ...state,
                modalRemItems: action.status
            }
        case 'HANDLE_MODAL_EDIT': 
            return{
                ...state,
                modalEdit: action.status
            }
        case 'HANDLE_MODAL_ALL': 
            return{
                ...state,
                modalRemAll: action.status
            }
        case 'HANDLE_MODAL_SEARCH': 
            return{
                ...state,
                modalSearch: action.status
            }
        default: 
            return state
    }
}

