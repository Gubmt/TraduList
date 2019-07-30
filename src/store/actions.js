export function requestTraduList(){
    return{
        type: 'REQUEST_TRADU_LIST'
    }
}

export function searchTranslations(search){
    return{
        type: 'SEARCH_TRADU_LIST',
        search,
    }
}

export function handleModal(status){
    return {
        type: 'HANDLE_MODAL',
        status,
    }
}

export function handleModalItem(status){
    return {
        type: 'HANDLE_MODAL_ITEM',
        status,
    }
}

export function handleModalEdit(status){
    return {
        type: 'HANDLE_MODAL_EDIT',
        status,
    }
}

export function handleModalAll(status){
    return {
        type: 'HANDLE_MODAL_ALL',
        status,
    }
}

