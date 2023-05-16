import React, { useState } from 'react';
import { Select, Upload, Switch, Table, Form, Input, Button, Card, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MyTable = () => {
  const [data, setData] = useState([
    { key: '1', campusName: 'John Doe', communityName: 32, communityType: '123 Main St' },
    { key: '2', campusName: 'Jane Smith', communityName: 45, communityType: '456 Elm St' },
  ]);

  const [form] = Form.useForm();

  //for Switch
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleAdd = () => {
    form.validateFields().then((values) => {
        const profilePhotoUrl = values.profilePhoto ? URL.createObjectURL(values.profilePhoto[0]) : '';
        const coverPhotoUrl = values.coverPhoto ? URL.createObjectURL(values.coverPhoto[0]) : '';
    

      const newData = {
        key: (data.length + 1).toString(),
        ...values,
        profilePhoto: profilePhotoUrl,
        coverPhoto: coverPhotoUrl
      };
      setData([...data, newData]);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: 'campusName',
      dataIndex: 'campusName',
    },
    {
      title: 'communityName',
      dataIndex: 'communityName',
    },
    {
      title: 'communityType',
      dataIndex: 'communityType',
    },
    {
        title: 'communityStatus',
        dataIndex: 'communityStatus',
      },
      {
        title: 'Profile Photo',
        dataIndex: 'profilePhoto',
        render: (text) => (
          <img src={text} alt="Profile" style={{ width: '50px', height: '50px' }} />
        ),
      },
      {
        title: 'Cover Photo',
        dataIndex: 'coverPhoto',
        render: (text) => (
          <img src={text} alt="Cover" style={{ width: '50px', height: '50px' }} />
        ),
      },
      {
        title: 'Actions',
        dataIndex: '',
        key: 'x',
        render: () => (
          <div>
            <Button type="primary" style={{ marginRight: '5px' }}>View</Button>
            <Button type="primary" style={{ marginRight: '5px' }}>Update</Button>
            <Button type="primary" danger>Delete</Button>
          </div>
        ),
      },
  ];

  return (
    <>

<Row gutter={16}>
    <Col span={6}>
      <Card title="Form" bordered={false}>
      <Form form={form} onFinish={handleAdd}>

        <Form.Item name="campusName" label="Campus Name" rules={[{ required: true }, {
                whitespace: true,
              },]}>
          <Input />
        </Form.Item>

        <Form.Item name="communityName" label="Community Name" rules={[{ required: true }, {
                whitespace: true,
              },]}>
          <Input />
        </Form.Item>

        <Form.Item name="communityType" label="Community Type">
            <Select placeholder="Select Community Type">
              <Select.Option value="official">Official</Select.Option>
              <Select.Option value="unofficial">Unofficial</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="communityStatus" label="Community Status" value="approved" valuePropName="approved">
          <Switch checkedChildren="approved" unCheckedChildren="unapproved" onChange={onChange}/>
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
      </Card>
    </Col>
    <Col span={18}>
      <Card title="Table" bordered={false}>
      <Table dataSource={data} columns={columns} />
      </Card>
    </Col>
    
  </Row>


     

      
    </>
  );
};

export default MyTable;
