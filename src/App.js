import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '简单输入框',
      type: 'string',
      required: true,
    },
    select1: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
    const a = '123';
    a.map(item => {});
  };
  const fn = () => {};
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
      <>
       
        {/* <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/user/1">user1</Link></li>
          <li> <Link to="/user/2">user2</Link></li>
        </ul>
          <Routes>
            <Route path="/about" element={'about'}></Route>
            <Route path="/user/:id" element={'about'}></Route>
            <Route
              path="/"
              element={<button onClick={fn}>Break the world</button>}
            ></Route>
          </Routes>
        </Router> */}
      </>
    </div>
  );
};

export default Demo;
