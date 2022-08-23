import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.scss";



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
      <Card.Img variant="top" src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg" style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> {data.price}
          <br />
          <strong>Quantity:</strong> {data.stock} items left
          <br />
          <strong>Created Date:</strong> {data.createDate}
          <br />
          <strong>Category:</strong> {data.category}
      
        </Card.Text>
        <div className='button_div d-flex justify-content-center'>
        <Button variant="primary" className='col-lg-12'>Add to Cart</Button>
        </div>
        </Card.Body>
    </Card>

      ))}</div>
    </div>
  )
}

export default Cards