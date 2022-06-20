import { all } from "redux-saga/effects";
import usersSaga from "../modules/users/usersSaga";

function* allSagas() {
  yield all([...usersSaga]);
}
export default allSagas;
