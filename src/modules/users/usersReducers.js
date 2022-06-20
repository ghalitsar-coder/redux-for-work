import * as CONST from "./usersConstants";
import * as STATE from "./usersInitialState";

const intialState = {
  ...STATE.getDataUsersInitialState,
  ...STATE.getDetailUsersInitialState,
  ...STATE.postDataUserInitialState,
  ...STATE.deleteDataUserInitialState,
  ...STATE.updateDataUserInitialState,
  ...STATE.masterInitialState,
  action: "",
};

export const usersReducers = (state = intialState, action) => {
  const { type, payload } = action;
  const actions = {
    [CONST.GET_DATA_USERS]: () => ({
      ...state,
      getDataUsersFetch: true,
      action: type,
    }),
    [CONST.GET_DATA_USERS_SUCCESS]: () => ({
      ...state,
      getDataUsersFetch: false,
      getDataUsersResponse: payload,
      action: type,
    }),
    [CONST.GET_DATA_USERS_FAILED]: () => ({
      ...state,
      getDataUsersFetch: false,
      getDataUsersError: payload,
      action: type,
    }),
    [CONST.GET_DETAIL_DATA_USER]: () => ({
      ...state,
      getDetailUserFetch: true,
      getDetailUserParams: payload,
      action: type,
    }),
    [CONST.GET_DETAIL_DATA_USER_SUCCESS]: () => ({
      ...state,
      getDetailUserFetch: false,
      getDetailUserResponse: payload,
      action: type,
    }),
    [CONST.GET_DETAIL_DATA_USER_FAILED]: () => ({
      ...state,
      getDataUsersFetch: false,
      getDataUsersError: payload,
      action: type,
    }),
    [CONST.POST_DATA_USER]: () => ({
      ...state,
      postDataUserFetch: true,
      postDataUserParams: payload,
      action: type,
    }),
    [CONST.POST_DATA_USER_SUCCESS]: () => ({
      ...state,
      postDataUserFetch: false,
      postDataUserResponse: payload,
      action: type,
    }),
    [CONST.POST_DATA_USER_FAILED]: () => ({
      ...state,
      postDataUserFetch: false,
      postDataUserError: payload,
      action: type,
    }),
    [CONST.DELETE_DATA_USER]: () => ({
      ...state,
      deleteDataUserFetch: true,
      deleteDataUserParams: payload,
      action: type,
    }),
    [CONST.DELETE_DATA_USER_SUCCESS]: () => ({
      ...state,
      deleteDataUserFetch: false,
      deleteDataUserResponse: payload,
      action: type,
    }),
    [CONST.DELETE_DATA_USER_FAILED]: () => ({
      ...state,
      deleteDataUserFetch: false,
      deleteDataUserError: payload,
      action: type,
    }),
    [CONST.UPDATE_DATA_USER]: () => ({
      ...state,
      updateDataUserFetch: true,
      updateDataUserParams: payload,
      action: type,
    }),
    [CONST.UPDATE_DATA_USER_SUCCESS]: () => ({
      ...state,
      updateDataUserFetch: false,
      updateDataUserResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_DATA_USER_FAILED]: () => ({
      ...state,
      updateDataUserFetch: false,
      updateDataUserError: payload,
      action: type,
    }),

    // * Another ACTION
    [CONST.USER_SET_FORM]: () => ({
      ...state,
      form: {
        ...state.form,
        ...payload,
      },
      action: type,
    }),
    [CONST.CLEAR_USER_FORM]: () => ({
      ...state,
      form: {},
      action: type,
    }),
    [CONST.SET_OPEN_MODAL]: () => ({
      ...state,
      userOpenModal: true,
      userCloseModal: false,
      action: type,
    }),
    [CONST.SET_CLOSE_MODAL]: () => ({
      ...state,
      userCloseModal: true,
      userOpenModal: false,
      action: type,
    }),
    [CONST.USER_SET_REQUEST_PARAMS]: () => ({
      ...state,
      getDataUsersParams: {
        ...state.getDataUsersParams,
        ...payload,
      },
      action: type,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
