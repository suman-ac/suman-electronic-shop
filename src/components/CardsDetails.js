import React from 'react'
import Table from 'react-bootstrap/Table';

function CardsDetails() {
  return (
    <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

      <section className='container mt-3'>
    <div className='iteamsdetails'>
      <div className='items_img'>
        <img src='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' />
      </div>
      <div className='details'>
    <Table>
    <tr>
      <td>
      <p><strong>Product Name</strong> : Dell XPS 13</p>
      <p><strong>Price</strong> : $1300</p>
      <p><strong>Quantity Left</strong> : 9</p>
      <p><strong>Category</strong> : Electronic Laptop</p>
      <p><strong>Created Date</strong> : 1661073816827</p>
    {/*  <p><strong>Remove : </strong><span> <i className="fas-fa-trash"  style={{color:"red", fontSize:20, cursor:"pointer"}}></i> </span> </p> */}
      </td>
    </tr>
    </Table>
      </div>
    </div>

      </section>
    </div>
    
    </>
    
  )
}

export default CardsDetails