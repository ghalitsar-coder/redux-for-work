import * as CONST from "./usersConstants";

// * GET DATA USERS
export const getDataUsers = (payload = {}) => ({
  type: CONST.GET_DATA_USERS,
  payload,
});

export const getDataUsersSuccess = (payload) => ({
  type: CONST.GET_DATA_USERS_SUCCESS,
  payload,
});
export const getDataUsersFailed = (payload) => ({
  type: CONST.GET_DATA_USERS_FAILED,
  payload,
});

// * GET DETAIL DATA USERS
export const getDetailDataUser = (payload = {}) => ({
  type: CONST.GET_DETAIL_DATA_USER,
  payload,
});

export const getDetailDataUserSuccess = (payload) => ({
  type: CONST.GET_DETAIL_DATA_USER_SUCCESS,
  payload,
});
export const getDetailDataUserFailed = (payload) => ({
  type: CONST.GET_DETAIL_DATA_USER_FAILED,
  payload,
});

// * POST DATA USERS
export const postDataUser = (payload) => ({
  type: CONST.POST_DATA_USER,
  payload,
});

export const postDataUserSuccess = (payload) => ({
  type: CONST.POST_DATA_USER_SUCCESS,
  payload,
});
export const postDataUserFailed = (payload) => ({
  type: CONST.POST_DATA_USER_FAILED,
  payload,
});

// * DELETE DATA USER
export const deleteDataUser = (payload) => ({
  type: CONST.DELETE_DATA_USER,
  payload,
});

export const deleteDataUserSuccess = (payload) => ({
  type: CONST.DELETE_DATA_USER_SUCCESS,
  payload,
});
export const deleteDataUserFailed = (payload) => ({
  type: CONST.DELETE_DATA_USER_FAILED,
  payload,
});

// * UPDATE DATA USER
export const updateDataUser = (payload) => ({
  type: CONST.UPDATE_DATA_USER,
  payload,
});

export const updateDataUserSuccess = (payload) => ({
  type: CONST.UPDATE_DATA_USER_SUCCESS,
  payload,
});
export const updateDataUserFailed = (payload) => ({
  type: CONST.UPDATE_DATA_USER_FAILED,
  payload,
});

// * ANOTHER ACTION

export const userSetForm = (payload) => ({
  type: CONST.USER_SET_FORM,
  payload,
});

export const clearForm = (payload) => ({
  type: CONST.CLEAR_USER_FORM,
  payload,
});

export const setOpenModal = (payload) => ({
  type: CONST.SET_OPEN_MODAL,
  payload,
});
export const setCloseModal = (payload) => ({
  type: CONST.SET_CLOSE_MODAL,
  payload,
});

export const getDataUserSetRequestParams = (payload) => ({
  type: CONST.USER_SET_REQUEST_PARAMS,
  payload,
});
