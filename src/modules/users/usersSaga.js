import { takeLatest, call, put, select } from "redux-saga/effects";
import * as CONST from "./usersConstants";
import * as API from "./usersApis";
import { RESPONSE_STATUS } from "../../constants/responseStatus";
import {
  deleteDataUserFailed,
  deleteDataUserSuccess,
  getDataUserSetRequestParams,
  getDataUsersFailed,
  getDataUsersSuccess,
  getDetailDataUserFailed,
  getDetailDataUserSuccess,
  postDataUserFailed,
  postDataUserSuccess,
} from "./usersActions";
import { notification } from "../../utils/NotificationToast";

function* getDataUsers(params) {
  const { type, payload } = params;

  try {
    console.log(params);
    const { limit, page, ...filter } = yield select(
      (state) => state.users.getDataUsersParams
    );
    const body = {
      limit: limit,
      offset: (page - 1) * limit,
      ...filter,
    };
    const response = yield call(API.getDataUsersAPI, {
      accessToken: "",
      data: payload,
    });
    if (response.status !== RESPONSE_STATUS.SUCCESS) {
      yield put(getDataUsersFailed(response.data));
    }
    yield put(getDataUserSetRequestParams({ total: response.data.length }));
    yield put(getDataUsersSuccess(response.data));
    notification({ type: "success", text: "Data berhasil dimuat" });
  } catch (err) {
    console.log(err);
    notification({ type: "error", text: err.message });
  }
}

function* postDataUser(params) {
  const { type, payload } = params;
  try {
    // console.log("THIS INSIDE PARAMS ->", params);
    const response = yield call(API.postDataUserAPI, { data: payload });
    if (response.status !== RESPONSE_STATUS.CREATED) {
      console.log(response);
      yield put(postDataUserFailed(response.data));
      notification({ type: "error", text: "POST DATA IS FAILED" });
    }
    yield put(postDataUserSuccess(response.data));
    notification({ type: "success", text: "Data berhasil dibuat" });
  } catch (err) {
    console.log(err);
    notification({ type: "error", text: err.message });
  }
}

function* getDetailUser(params) {
  const { type, payload } = params;
  try {
    // const { accessToken } = yield select((state) => state.session.token);
    const response = yield call(API.getDetailUserAPI, {
      accessToken: "",
      data: payload,
    });
    if (response.status !== RESPONSE_STATUS.SUCCESS) {
      yield put(getDetailDataUserFailed(response.data));
    }
    yield put(getDetailDataUserSuccess(response.data));
    notification({ type: "success", message: "Data detail berhasil dimuat" });
  } catch (err) {
    console.log(err);
    notification({ type: "error", message: err.message });
  }
}

function* deleteDataUser(params) {
  const { type, payload } = params;
  console.log("PARAMS ->", params);
  try {
    const response = yield call(API.deleteDataUserAPI, { data: payload });
    if (response.status !== RESPONSE_STATUS.SUCCESS) {
      yield put(deleteDataUserFailed(response.data));
    }
    yield put(deleteDataUserSuccess(response.data));
  } catch (err) {
    console.log(err.message);
    notification({ type: "error", text: err.message });
  }
}

export default [
  takeLatest(CONST.GET_DATA_USERS, getDataUsers),
  takeLatest(CONST.GET_DETAIL_DATA_USER, getDetailUser),
  takeLatest(CONST.POST_DATA_USER, postDataUser),
  takeLatest(CONST.DELETE_DATA_USER, deleteDataUser),
];
