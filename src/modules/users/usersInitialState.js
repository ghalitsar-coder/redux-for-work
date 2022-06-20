export const getDataUsersInitialState = {
  getDataUsersFetch: false,
  getDataUsersParams: {
    page: 1,
    limit: 5,
    total: 0,
  },
  getDataUsersResponse: {},
  getDataUsersError: "",
};
export const getDetailUsersInitialState = {
  getDetailUserFetch: false,
  getDetailUserParams: {},
  getDetailUserResponse: {},
  getDetailUserError: "",
};
// PROMO_SET_REQUEST_PARAMS
export const postDataUserInitialState = {
  postDataUserFetch: false,
  postDataUserParams: {},
  postDataUserResponse: {},
  postDataUserError: "",
};
export const deleteDataUserInitialState = {
  deleteDataUserFetch: false,
  deleteDataUserParams: {},
  deleteDataUserResponse: {},
  deleteDataUserError: "",
};
export const updateDataUserInitialState = {
  updateDataUserFetch: false,
  updateDataUserParams: {},
  updateDataUserResponse: {},
  updateDataUserError: "",
};

export const masterInitialState = {
  form: {},
  pagination: {},
};

export const modalInitialState = {
  userModalOpen: false,
  userModalClose: true,
};
