import React, { useCallback, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import { connect, useDispatch } from "react-redux";
import {
  userSetForm,
  setCloseModal as setCloseModalProps,
  postDataUser as postDataUserProps,
} from "../../modules/users/usersActions";
import { TextInput } from "../index";
import { notification } from "../../utils/NotificationToast";

const ModalComp = (props) => {
  const { handleClick, toggleModal, form, setCloseModal, postDataUser } = props;
  const options = [
    { value: "gwenborough", label: "Gwenborough" },
    { value: "Wisokyburgh", label: "Wisokyburgh" },
    { value: "McKenziehaven", label: "McKenziehaven" },
    { value: "South Elvis", label: "South Elvis" },
    { value: "Howemouth", label: "Howemouth" },
    { value: "Aliyaview", label: "Aliyaview" },
  ];

  const dispatch = useDispatch();
  const fillForm = useCallback(
    (keyField, value) => {
      if (keyField === "address") {
        dispatch(userSetForm({ [keyField]: value }));
      } else {
        dispatch(userSetForm({ [keyField]: value }));
      }
    },
    [dispatch]
  );

  const handleSubmit = (e) => {
    const formLoad = [
      "name",
      "email",
      "username",
      "address",
      "phone",
      "website",
      "company",
    ];
    console.log(formLoad.includes(Object.keys(form)));
    console.log(Object.keys(form));
    if (formLoad.length === Object.keys(form).length) {
      const postData = {
        ...form,
        address: { city: form.address.value },
      };
      console.log("POST DATA->", postData);
      postDataUser(postData);
      setCloseModal();
    } else {
      notification({ type: "error", text: "Something went wrong!" });
    }
  };

  return (
    <Modal
      size="lg"
      centered
      isOpen={toggleModal}
      toggle={handleClick}
      onExit={() => setCloseModal()}
    >
      <ModalHeader className="shadow-none" toggle={handleClick}>
        Post Data User!
      </ModalHeader>

      <ModalBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  className={"shadow-none"}
                  placeholder="Your Email..."
                  type="email"
                  onChange={(e) => fillForm("email", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id={"name"}
                  name={"name"}
                  className={"shadow-none"}
                  placeholder={"Name..."}
                  type={"text"}
                  onChange={(e) => fillForm("name", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  className={"shadow-none"}
                  placeholder="Username..."
                  type="text"
                  onChange={(e) => fillForm("username", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  className={"shadow-none"}
                  placeholder="phone..."
                  type="text"
                  onChange={(e) => fillForm("phone", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="website">website</Label>
                <Input
                  id="website"
                  name="website"
                  className={"shadow-none"}
                  placeholder="website..."
                  type="text"
                  onChange={(e) => fillForm("website", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="company">company</Label>
                <Input
                  id="company"
                  name="company"
                  className={"shadow-none"}
                  placeholder="company..."
                  type="text"
                  onChange={(e) => fillForm("company", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Select
                  id="address"
                  value={form?.address}
                  name="address"
                  options={options}
                  onChange={(e) => fillForm("address", e)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="shadow-none" color="primary" onClick={handleSubmit}>
          Okay
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  form: state.users.form,
});

const mapDispatchToProps = {
  setCloseModal: (payload) => setCloseModalProps(payload),
  postDataUser: (payload) => postDataUserProps(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp);
