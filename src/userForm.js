import React from "react"
//import { useNavigate } from "react-router-dom"
import { Switch, Button, Form, Input, message, Select, Upload } from "antd"
import { PlusOutlined } from '@ant-design/icons';

//import "./SignUpForm.css"
import "./App.css"

const SignUpForm = () => {
  //const navigate = useNavigate()

  return (
    <div className="SignUpForm">
      <header className="App-header">
        {/* <h1 className="sign-up-title">News App</h1> */}
        <Form
          className="sign-up-form"
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 15 }}
          onFinish={(values) => {
            console.log({ values })
            message.success("form filled sucsessfully")
            //navigate("./NewPage")

            //  history.push("/newpage")
          }}
          onFinishFailed={(error) => {
            console.log({ error })
          }}
        >
          <Form.Item
            name="campusName"
            label="Campus Name"
            rules={[
              {
                required: true,
                message: "Please Enter Campus Name",
              },
              {
                whitespace: true,
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Campus Name" />
          </Form.Item>

          <Form.Item
            name="communityName"
            label="Community Name"
            rules={[
              {
                required: true,
                message: "Please Enter Community Name",
              },
              {
                whitespace: true,
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Community Name" />
          </Form.Item>

         

        

        

          <Form.Item name="communityType" label="Community Type">
            <Select placeholder="Select Community Type">
              <Select.Option value="official">Official</Select.Option>
              <Select.Option value="unofficial">Unofficial</Select.Option>
            </Select>
          </Form.Item>


        
        <Form.Item label="Community Status" valuePropName="approved">
          <Switch />
        </Form.Item>

        <Form.Item label="Profile Photo" valuePropName="profilePhoto" >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        {/* cover photo */}
        <Form.Item label="Cover Photo" valuePropName="coverPhoto" >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

          <Form.Item wrapperCol={{ span: 25 }}>
            <Button block type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default SignUpForm
