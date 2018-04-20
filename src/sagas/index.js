import { call, put,take } from 'redux-saga/effects'
import Fetch from '../request'
function *fetchData(action) {
    const {response, error} = yield call(()=>Fetch('directInvest/projects?page=1','GET'));
    console.log(response)
    yield put({
        type:'FETCH_LIST_DATA_SUCCESS',
        key:action.type,
        data:response
    })
}
export function* helloSaga() {
     while (true){
         const action = yield take("TEST")
         console.log(action)
         yield* fetchData(action)
     }

}