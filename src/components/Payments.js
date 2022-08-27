import React from 'react'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as yup from "yup";
import KErrorMessage from './KErrorMessage';
import "./Payments.scss";



const validationSchema = yup.object({
  name: yup.string().required("Name is required !").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field !"),
  phone: yup.number().min(1000000, "Not a valid phone number").max(100000000000, "Not a valid phone number").
    required("Phone is required !"),
  billing: yup.string().required("Billing Address is required !"),
  delivery: yup.string().required("Delivery Address is required !"),
  date: yup.date().required("Date is required !")
})

function Payments() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Enter Your Payment Details</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", phone: "", billing: "", delivery: "", date: "" }} onSubmit={(values) => {
          console.log(values);
        }}>
        <Form className='hello'>
          <label className='hello1'>Name * </label> <br />
          <Field className='hello2' name="name" type="text" />
          <KErrorMessage name="name" />
          <br />
          <label className='hello1'>Phone No * </label>   <br />
          <Field className='hello2' name="phone" type="number" />
          <KErrorMessage name="phone" />
          <br />
          <label className='hello1'>Billing Address * </label> <br />
          <Field className='hello2' name="billing" type="text" />
          <KErrorMessage name="billing" />
          <br />
          <label className='hello1'>Delivery Address * </label> <br />
          <Field className='hello2' name="delivery" type="text" />
          <KErrorMessage name="delivery" />
          <br />
          <label className='hello1'>Date * </label> <br />
          <Field className='hello2' name="date" type="date" />
          <KErrorMessage name="date" />
          <br />
          <button className='hello3' type='submit'>Submit</button>
        </Form>
      </Formik>

    </div>
  )
}

export default Payments

const createdDate = 1661570715398;

var date = new Date(createdDate); // create Date object

const formattedDate = date.toString();

console.log(formattedDate);