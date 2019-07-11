const INITIAL_STATE = {
    data:[],
    search:'',
    error: false
}

export default function translations(state = INITIAL_STATE, action){
    switch(action.type){

        case 'SUCCES_REQUEST':
            return{data: action.data}

        case 'FAIL_REQUEST':
            return{data:[], error: true}

        case 'SEARCH_TRADU_LIST':
            return{data: action.search}

        default: 
            return state
    }
}

