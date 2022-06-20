import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { usePrevious } from "../../../../../utils/Commons";
import { notification } from "../../../../../utils/NotificationToast";
import {
  getDetailDataUser as getDetailDataUserProps,
  deleteDataUser as deleteDataUserProps,
} from "../../../usersActions";
import {
  DELETE_DATA_USER_SUCCESS,
  GET_DETAIL_DATA_USER_SUCCESS,
} from "../../../usersConstants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const keyTabMenu = {
  detail: "detail",
  // discount: "discount",
  fileUser: "fileUser",
};

const menus = {
  // discount: [
  //   { key: keyTabMenu.detail, label: "Promo Detail" },
  //   { key: keyTabMenu.discount, label: "Promo Discount" },
  // ],
  admin: [{ key: keyTabMenu.detail, label: "Promo Admin" }],
  user: [{ key: keyTabMenu.detail, label: "Promo User" }],
};

const categories = {
  admin: "Admin",
  user: "User",
};
const havePromoId = (value) =>
  typeof value === "number" || typeof value === "string";

const UserDetail = (props) => {
  const {
    getDetailDataUser,
    userAction,
    getDetailUserResponse,
    deleteDataUser,
  } = props;
  const { role, userId } = useParams();
  const [user, setUser] = useState({});
  const prevAction = usePrevious(userAction);
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(keyTabMenu.detail);
  const handleDetailUser = () => {
    getDetailDataUser(userId);
  };

  const handleDeleteUser = () => {
    console.log(userId);
    deleteDataUser(userId);
  };

  const handleChangeMenu = (menu) => {
    if (menu === keyTabMenu.fileMemo && !havePromoId()) return;
    setCurrentMenu(menu);
  };

  useEffect(() => {
    handleDetailUser();
  }, []);

  useEffect(() => {
    if (prevAction !== userAction) {
      switch (userAction) {
        case GET_DETAIL_DATA_USER_SUCCESS:
          setUser(getDetailUserResponse);
          break;
        case DELETE_DATA_USER_SUCCESS:
          notification({ type: "success", text: "User deleted successfully" });
          navigate("/");
          break;
        default:
          break;
      }
    }
  }, [userAction, prevAction]);

  console.log("DOES INFINITY LOOPS ?");
  return (
    <Row className="w-75 mx-auto my-5">
      <Card body>
        <Card>
          <CardHeader className="bg-transparent">
            <CardSubtitle className="text-muted fs-6 fw-normal">
              INFORMASI DATA
            </CardSubtitle>
            <CardTitle className=" fw-bold fs-6 ">Promo</CardTitle>
          </CardHeader>
          <CardBody className="py-0 ">
            <Row>
              <Col sm={3} className="bg-light">
                <Nav>
                  {menus[role].map((menu) => (
                    <NavItem key={menu.key}>
                      <NavLink
                        className="text-dark"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleChangeMenu(menu.key);
                        }}
                      >
                        <h6>{menu.label}</h6>
                        <ChevronRightIcon />
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}></Col>
            </Row>
          </CardBody>
          <CardFooter className="bg-transparent d-flex justify-content-between">
            <Button className="shadow-none" onClick={() => navigate("/")}>
              Kembali
            </Button>
            <Button
              className="shadow-none bg-danger"
              onClick={handleDeleteUser}
            >
              Delete User
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  // detailUser:
  userAction: state.users.action,
  getDetailUserResponse: state.users.getDetailUserResponse,
});
const mapDispatchToProps = {
  getDetailDataUser: (payload) => getDetailDataUserProps(payload),
  deleteDataUser: (payload) => deleteDataUserProps(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
