import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';



const CardsDetails = () => {

  const [data,setData] =useState([]);
  // console.log(data);

        const {id} = useParams();
//    console.log(id);

  const history = useNavigate();

      const dispatch = useDispatch();

    const getdata = useSelector((state) => state.cartreducer.carts);
    //console.log(getdata);

    const compare =  ()=> {
      let comparedata = getdata.filter((e)=> {
        return e.id == id
      });
      setData(comparedata);
    }

    const dlt = (id)=> {
      dispatch(DLT(id));
      history("/");

  }


    useEffect(()=> {
      compare();
    },[id])

  return (
    <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

      <section className='container mt-3'>
    <div className='iteamsdetails'>
      {
        data.map((ele)=>{
          return(
            <>
              
              <div className='items_img'>
        <img src='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' />
      </div>
      <div className='details'>
    <Table>
    <tr>
      <td>
      <p><strong>Product Name</strong> : {ele.name}</p>
      <p><strong>Price</strong> : {ele.price}</p>
      <p><strong>Quantity Left</strong> :{ele.stock}</p>
      <p><strong>Category</strong> : {ele.category}</p>
      <p><strong>Created Date</strong> :{ele.createDate}</p>
      <p><button type="button" class="btn btn-danger" onClick={()=>dlt(ele.id)}>Remove</button></p>
    {/*  <p><strong>Remove : </strong><span> <i className="fas-fa-trash"  style={{color:"red", fontSize:20, cursor:"pointer"}}></i> </span> </p> */}
    <p> <strong>Total</strong> :300 </p>
    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#11"}}>
<span style={{fontSize:24}}>-</span>
<span style={{fontSize:22}}>{ele.qnty}</span>
<span style={{fontSize:24}}>+</span>
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
