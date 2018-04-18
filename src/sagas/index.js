import { call, put,take } from 'redux-saga/effects'
function *fenth() {
    alert('ssss')
}
export function* helloSaga() {
     while (true){
         const action = yield take("TEST")
         yield* fenth()
     }

}