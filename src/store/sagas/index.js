import axios from 'axios'
import { put, call, all, takeEvery, fork, take } from 'redux-saga/effects'

// put:相当于dispatch
// call:同js中的call,调用函数，传递多个参数
// all：执行多条generator
// takeEvery:监听type，执行第二个参数的函数
// take:等某个action执行完毕后，再执行下面的操作
// fork:无阻塞执行，可取消
const delay = ms => new Promise(resolve => {
    return setTimeout(resolve, ms)
})

function* asyncAdd() {
    console.log('执行', 111);
    yield call(delay, 2000);
    yield put({ type: 'add' })
}

function* getName() {
    try {
        let data = yield call(axios.get, 'https://randomuser.me/api');
        yield put({ type: 'success', payload: data.data })
    } catch (err) {
        console.log(err)
    }
}

function* log() {
    yield call(delay, 2000)
    console.log('----log----')
}
export function* rootSaga() {
    yield all([
        takeEvery('ASYNC_ADD', asyncAdd),
        takeEvery('GET_DATA', getName),
        fork(function* inlinedSagaName() {
            while (true) {
                yield take('ASYNC_ADD')
                yield call(log)
            }
        })
    ])
}