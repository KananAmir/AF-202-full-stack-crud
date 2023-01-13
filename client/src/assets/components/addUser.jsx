import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

const AddUser = ({ users, setUsers }) => {
  const onFinish = (values) => {
    // console.log(values);
    let userObj = {
      name: values.name,
      username: values.username,
    };

    axios.post("http://localhost:8080/users/", userObj);
    setUsers([...users, userObj]);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="user"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your company name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="UserName"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
