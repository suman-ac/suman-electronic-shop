import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';



function Header() {

    const [price,setPrice] = useState(0);
   // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);

    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id)=> {
        dispatch(DLT(id))

    }

    const total = ()=> {
        let price = 0;
        getdata.map((ele,k)=> {
            price = ele.price + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }} ></i>
                    </Badge>

                </Container>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Product Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                                getdata.map((e)=> {
                                    return (
                                        <>
                                        <tr>
                                            <td>
                                           <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                           <img src='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' style={{width:"5rem",height:"5rem"}} />
                                           </NavLink>
                                            </td>
                                            <td>
                                                <p>{e.name}</p>
                                                <p>Price: {e.price}</p>
                                                <p>Quantity: {e.stock}</p>
                                            </td>
                                            <td>
                                                  <p  onClick={()=>dlt(e.id)}>  <button>Delete me </button> </p>
                                        
        
                                                </td>
                                            
                                        </tr>
                                        
                                        </>
                                    )
                                }
                            )}


                                <p className="text-center">Total: {price} </p>
                                    </tbody>


                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close small close'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontsize: 22 }}>Your cart is empty</p>
                                <img src="./cart.png" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />

                            </div>

                    }




                </Menu>
            </Navbar>
        </>
    )
}

export default Header