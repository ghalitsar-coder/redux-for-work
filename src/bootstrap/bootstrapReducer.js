import * as CONST from "./bootstrapConstants";
import * as STATE from "./bootstrapInitialState";

const initialState = {
  ...STATE.getPaginationInitialState,
  action: "",
};

export const bootstrapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const actions = {
    [CONST.GET_PAGINATION]: () => ({
      ...state,
      pagination: payload,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
// [CONST.GET_PAGINATION]: () => ({
//     ...state,
//     pagination: payload,
//   }),
