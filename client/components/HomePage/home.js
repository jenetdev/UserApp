"use client";
import { Form } from "informed";
import { Col, Button } from "reactstrap";
import TextInput from "../TextInput";
import "./home.css";
import useLogin from "./useLogin";

const HomePageComponent = () => {
  const { handleSubmit } = useLogin();
  return (
    <div className="centeredd_div">
      <Col sm="16" md={{ size: 4, offset: 4 }}>
        <div>
          <h2 className="centeredd_div">Login</h2>
          <Form onSubmit={handleSubmit}>
            <TextInput
              name="email"
              field="email"
              label="User Name"
              validateOn="submit"
            />
            <TextInput
              name="password"
              type="password"
              field="password"
              label="Password"
              validateOn="submit"
            />
            <Button type="submit" color="primary">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </div>
  );
};

export default HomePageComponent;
