import { getByDisplayValue } from "@testing-library/react";
import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Cards() {

  const [user,setUser] = useState([]);

  const fetchData =()=>{
      fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => {
          return response.json();
      }).then((data)=>{
      let gagan = data.data.product
          setUser(gagan)
      })
  }


  useEffect(()=>{
      fetchData();
  },[])
  
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Welcome to Suman Electronics Shop </h2>
      <div className='row d-flex justify-content-center align-items-center'>

      {user.map(data => (
      <Card style={{ width: '22rem',border:"none"}} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg" style={{height:"16rem"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          data.price 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      ))}</div>
    </div>
  )
}

export default Cards