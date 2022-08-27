

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';



const CardsDetails = () => {

  const [data, setData] = useState([]);
  // console.log(data);
  const [productCount, setProductCount] = useState(1)

  const { id } = useParams();
  //    console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");

  }

  const decreaseProduct = () => {
    setProductCount(productCount - 1)
  }
  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((ele) => {
                return (
                  <>

                    <div className='items_img'>
                      <img src='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Product Name</strong> : {ele.name}</p>
                            <p><strong>Price</strong> : Rs.{ele.price.toLocaleString('en').slice(1, 10)}</p>
                            <p><strong>Quantity </strong> :{productCount}</p>
                            <div className='category_section'>
                              <div><strong>Category:</strong></div>
                              <div className="categoryInnerSection">{ele.category.map((items) => (
                                <div className='categoryExamples'>{items}</div>
                              ))}</div>
                            </div>

                            <p><button type="button" class="btn btn-danger" onClick={() => dlt(ele.id)}>Remove</button></p>
                            <p> <strong>Total</strong> :Rs.{Number(ele.price?.slice(1, 10)) * Number(productCount)} </p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 90, cursor: "pointer", background: "#ddd", color: "#11" }}>
                              <span style={{ fontSize: 24 }} onClick={(e) => setProductCount(productCount > 1 ? productCount - 1 : 1)}>-</span>
                              <span style={{ fontSize: 18 }}>{productCount}</span>
                              <span style={{ fontSize: 24 }} onClick={(e) => setProductCount(productCount + 1)}>+</span>
                            </div>
                          </td>
                        </tr>
                      </Table>
                    </div>


                  </>

                )
              })
            }

          </div>
        </section>
      </div>

    </>



  )
}


export default CardsDetails

