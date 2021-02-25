import {call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./reducer";
import Api from "../api";

const saga = function* () {
    yield takeLatest(Action.Types.GET_PHOTOS, function* ({data}) {
        try {
            const result = yield call(Api.getPhotos, data)
            if(result.data) {
                yield put(Action.Creators.setPhotos(result.data))
            }
        } catch (e) {
            console.log(e)
        }
    })

    yield takeLatest(Action.Types.SEARCH_PHOTOS, function* (action) {
        try {
            const result = yield call(Api.searchPhotos, action.data)
            if(result.data) {
                yield put(Action.Creators.setSearchResult(result.data))
            }
        } catch (e) {
            console.log(e)
        }

    })
}

export default saga;