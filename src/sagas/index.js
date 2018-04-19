import { call, put,take } from 'redux-saga/effects'
import Fetch from '../request'
function *fenth() {
    const {response, error} = yield call(()=>Fetch('directInvest/projects?page=1','GET'));
    alert(JSON.stringify(response))
}
export function* helloSaga() {
     while (true){
         const action = yield take("TEST")
         yield* fenth()
     }

}