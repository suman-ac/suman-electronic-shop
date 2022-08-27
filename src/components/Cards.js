import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import "./style.scss";
import { ADD } from '../redux/actions/action';
import moment from 'moment';
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Cards() {


  const [user,setUser] = useState([]);

  const dispatch = useDispatch();

  const send =(e)=> {
    // console.log(e)
    dispatch(ADD(e));
  }
  // console.log(hashPath,"hashpath")
  const location = useLocation();

  const hashPath = location.hash

  // console.log(hashPath,"hashpath")
  const categorydata = ()=>{
    if(hashPath.includes("category")){
      const data = hashPath.slice(10,30)
      return data;
    }
  }

  const notify = () => toast.success("Product added successfully");
  const categoryData = categorydata()
  // console.log(categoryData)
  // const categoryValue = 

  const fetchData =()=>{
      fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => {
          return response.json();
      }).then((data)=>{
      let gagan = data.data.product;
      // console.log(gagan)
      if(hashPath === "#byprice"){
        gagan = gagan.sort((a, b)=> Number(a.price?.slice(1,10)) - Number(b.price?.slice(1,10)))
      }
      else if(categoryData){
        gagan = gagan?.filter((fullName)=>(fullName?.category?.includes(categoryData)))
        // console.log(gagan)
      }
      // console.log(gagan , categoryData)
      // console.log(gagan?.category?.map((category)=>(category)),"after filter")
      setUser(gagan)
      })
  }
  // console.log(window.location.hash)
  // console.log(user)
  useEffect(()=>{
      fetchData();
  },[hashPath])

  const date = new Date();
  // console.log(date)
  
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Welcome to Suman Electronics Shop </h2>
      <div className='row d-flex justify-content-center align-items-center'>
      {/* {console.log(user)} */}
      {user.map(data => (
      <Card style={{ width: '22rem',border:"none"}} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg" style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> Rs.{Number(data.price?.slice(1,10)).toLocaleString()}
          <br />
          <strong>Stock:</strong> {data.stock}
          <br />
          {/* <strong>Quantity:</strong> {data.stock} items left
          <br /> */}
          <strong>Created Date:</strong> {moment(data?.createDate).format(
                                    "DD-MM-YYYY"
                                    )}
          <br />
          <div className='category_section'>
            <div><strong>Category:</strong></div>
            <div className="categoryInnerSection"> {data.category.map((items)=>(
              <div className='categoryExamples'>{items}</div>
            ))}</div>
          </div>
      
        </Card.Text>
        <div className='button_div d-flex justify-content-center'>
        <Button variant="primary"
        onClick={()=> {send(data); notify()}}
        disabled={data?.stock < 0  ? true : false }
         className='col-lg-12'>Add to Cart</Button>
         <ToastContainer autoClose={1000} />
        </div>
        </Card.Body>
    </Card>

      ))}</div>
    </div>
  )
}

export default Cards