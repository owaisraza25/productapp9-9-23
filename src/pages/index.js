

"use client";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Form, Upload, Input, Button, Card } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Card";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function Home() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts([...json]);
      });
  }, []);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let obj = {
      category: values.Category,
      discription: values.desc,
      image: values.image,
      price: values.price,
      title: values.title
    };
    setProducts([...products,obj])
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please enter product name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please enter price!",
              whitespace: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please enter category!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="desc"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter Description!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please enter category!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="image"
          rules={[
            {
              required: true,
              message: "Please enter Description!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
     
     
        <Form.Item label=" " colon={false}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>



      <div className=" flex flex-wrap gap-x-5 justify-center gap-y-5">
        {products.map((value, ind) => {
          console.log(products)
          return( <ProductCard
            title={value.title}
            disc={value.discription} 
            image={value.image} 
            price={value.price}
            Category={value.Category}
           
          />);
        })}

        <ProductCard />
      </div>
    </div>
  );
}