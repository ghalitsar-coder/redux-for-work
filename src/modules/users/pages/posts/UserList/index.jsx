import React, { useCallback, useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { TableColumn } from "./TableColumn";
import { connect } from "react-redux";
import {
  getDataUsers as getDataUsersProps,
  setOpenModal as setOpenModalProps,
  clearForm as clearFormProps,
  getDataUserSetRequestParams as getDataUserSetRequestParamsProps,
} from "../../../usersActions";
import { usePrevious } from "../../../../../utils/Commons";
import {
  CLEAR_USER_FORM,
  GET_DATA_USERS_SUCCESS,
  POST_DATA_USER_SUCCESS,
  SET_CLOSE_MODAL,
} from "../../../usersConstants";
import { notification } from "../../../../../utils/NotificationToast";
import ReactLoading from "react-loading";
import { Modal } from "../../../../../components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../../../../components";
import { getPagination as handleOnChangePagination } from "../../../../../bootstrap/bootstrapActions";

const optionsValue = [
  { value: "5", display: "5" },
  { value: "10", display: "10" },
  { value: "15", display: "15" },
];

const optionsSelect = {
  placeholder: "Select",
  value: [{ value: "15", display: "15" }],
  searchBy: "value",
  clearable: false,
  searchable: false,
  separator: false,
  handle: true,
  addPlaceholder: "",
  labelField: "display",
  valueField: "value",
  color: "#00aae7",
  keepSelectedInList: true,
  closeOnSelect: true,
  dropdownPosition: "bottom",
  direction: "ltr",
  dropdownHeight: "300px",
  multiple: false,
  dropdownGap: 0,
};

const Users = (props) => {
  const {
    getDataUsers,
    userAction,
    getDataUserResponse,
    getDataUserIsFetching,
    setOpenModal,
    clearForm,
    userOpenModal,
    getDataUserSetRequestParams,
    getDataUsersParams,
    pagination,
    getPagination,
  } = props;
  const [users, setUsers] = useState([]);
  const prevAction = usePrevious(userAction);
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setOpenModal();

    setToggleModal(!toggleModal);
  };

  const handleViewUser = (row) => {
    navigate(`/user/detail/${row.role}/${row.id}`);
  };

  const fetchUser = useCallback(() => {
    getDataUsers();
  }, [getDataUsers]);

  const handleOnChangeParam = (_pagination) => {
    console.log("LOAD OF _pagination ->", _pagination);
    getDataUserSetRequestParams(_pagination);
    fetchUser();
  };

  useEffect(() => {
    getPagination({ ...pagination, ...getDataUsersParams });
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (prevAction !== userAction) {
      switch (userAction) {
        case GET_DATA_USERS_SUCCESS:
          setUsers(getDataUserResponse);
          break;
        case SET_CLOSE_MODAL:
          notification({ type: "success", text: "Form User Cleared!" });
          clearForm();
          break;
        case POST_DATA_USER_SUCCESS:
          fetchUser();
          break;
        default:
          break;
      }
    }
  }, [prevAction, userAction]);

  console.log("DOES INFINITE LOOP ?");
  return (
    <div className="w-75 mx-auto my-5">
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <CardTitle tag="h5">Data Users</CardTitle>
          <Button className="shadow-none" onClick={openModal}>
            Add User
          </Button>
        </CardHeader>
        <CardBody>
          <BootstrapTable
            bootstrap4
            keyField="id"
            columns={TableColumn({
              handleViewUser,
              offset: (getDataUsersParams.page - 1) * getDataUsersParams.limit,
            })}
            data={users}
            condensed
            responsive
            hover
            striped
            bordered={false}
            remote={{
              sort: false,
            }}
            noDataIndication={
              getDataUserIsFetching ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <ReactLoading
                    type="bars"
                    color="#3C44B1"
                    height="100px"
                    width="100px"
                  />
                </div>
              ) : (
                "Data Tidak Ditemukan"
              )
            }
          />
          <Pagination
            optionsSelect={optionsSelect}
            optionsValue={optionsValue}
            onSelect={handleOnChangeParam}
            totalRecords={getDataUsersParams?.total || 0}
          />
        </CardBody>
      </Card>
      {userOpenModal && (
        <Modal handleClick={openModal} toggleModal={toggleModal} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  getDataUserResponse: state.users.getDataUsersResponse,
  getDataUsersParams: state.users.getDataUsersParams,
  getDataUserIsFetching: state.users.getDataUsersFetch,
  userAction: state.users.action,
  userOpenModal: state.users.userOpenModal,
  pagination: state.bootstrap.pagination,
});

const mapDispatchToProps = {
  getDataUsers: (payload) => getDataUsersProps(payload),
  setOpenModal: (payload) => setOpenModalProps(payload),
  clearForm: (payload) => clearFormProps(payload),
  getDataUserSetRequestParams: (payload) =>
    getDataUserSetRequestParamsProps(payload),
  getPagination: (payload) => handleOnChangePagination(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
