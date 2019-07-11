import { takeLatest, put, call, takeEvery } from 'redux-saga/effects'
import getRealm from '../services/realm'

async function loadList(){
    const realm = await getRealm()
    return realm.objects('ListTradu')
}

function* getTraduList(){
    try{
        const response = yield call(loadList)
        yield put({type:'SUCCES_REQUEST', data:response})
    }catch(err){
        yield put({type:'FAIL_REQUEST'})
    }
}

export default function* root(){
    yield takeEvery('REQUEST_TRADU_LIST',getTraduList)
    
}