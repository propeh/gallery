import {call, put, all, takeLatest} from 'redux-saga/effects';
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
        yield put(Action.Creators.setSearchResult({}))
        try {
            const result = yield call(Api.searchPhotos, action.data)
            if(result.data) {
                yield put(Action.Creators.setSearchResult(result.data))
            }
        } catch (e) {
            console.log(e)
        }

    })

    yield takeLatest(Action.Types.GET_TOPICS, function* (action) {
        try {
            const result = yield call(Api.getTopics, action.data)
            console.log(result.data)
            if(result.data) {
                yield put(Action.Creators.setTopics(result.data))
            }
        } catch (e) {
            console.log(e)
        }
    })

    yield takeLatest(Action.Types.GET_TOPIC_BY_SLUG, function* (action) {
        try {
            const [topicResult, topicPhotosResult] = yield all([ call(Api.getTopicBySlug, action.data.slug, action.data), call(Api.getTopicPhotos, action.data.slug, action.data)])

            if(topicResult.data && topicPhotosResult.data) {
                yield put(Action.Creators.setTopicBySlug({
                    topicBySlug: topicResult.data,
                    topicPhotos: topicPhotosResult.data
                }))
            }
        } catch (e) {
            console.log(e)
        }
    })
}

export default saga;