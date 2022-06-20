import * as CONST from "./bootstrapConstants";
export const getPagination = (payload) => ({
  type: CONST.GET_PAGINATION,
  payload,
});
