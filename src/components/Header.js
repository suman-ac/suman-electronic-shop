import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, NavDropdown } from 'react-bootstrap';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import "./Payments.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Header() {

    const [price,setPrice] = useState(0);
   // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

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
    const notify = () => toast("Product removed successfully");
    // const total = ()=> {
    //     let price = 0;
    //     getdata.map((ele,k)=> {
    //         const price = ele?.price?.slice(1,10)
    //         // console.log(price)
    //         const totalPrice =+ Number(price)
    //         // console.log(totalPrice)
    //         // price = ele.price + Number(price);
    //         // console.log(ele.price , price)
    //     });
    //     setPrice(totalPrice);
    // };

    const total = ()=> {
        let price = 0;
        getdata.map((ele,k)=> {
            const priceInNumber = Number(ele?.price?.slice(1,10)) 
            // console.log(priceInNumber)
            price = priceInNumber + price;
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    const navigate = useNavigate();

    const navigateToPayments =() => {
        navigate('/payments')
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    {/* <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink> */}
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                        <NavDropdown title="Filter Products" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#byprice">By Price</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#bycategory">
                            By Category
                        </NavDropdown.Item> */}
                        <DropdownSubmenu href="#action/3.7" title="By Category">
                            <NavDropdown.Item href="#category/electronic">Electronic</NavDropdown.Item>
                            <NavDropdown.Item href="#category/watch">Watch</NavDropdown.Item>
                            <NavDropdown.Item href="#category/keyboard">Keyboard</NavDropdown.Item>
                            <NavDropdown.Item href="#category/laptop">Laptop</NavDropdown.Item>
                            <NavDropdown.Item href="#category/mobile">Mobile</NavDropdown.Item>
                            <NavDropdown.Item href="#category/headseat">Headset</NavDropdown.Item>

                        </DropdownSubmenu>
                        <NavDropdown.Item href="#bydate">By Date</NavDropdown.Item>
                    </NavDropdown>
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
                                                <p>Price: Rs.{e.price?.slice(1,10)}</p>
                                                <p>Quantity: {e.stock}</p>
                                            </td>
                                            <td>
                                                <p  onClick={()=>{dlt(e.id);notify()}}>  
                                                 <button type="button" class="btn btn-danger">Remove</button> 
                                                </p>
                                                <ToastContainer autoClose={100} />
                                            </td>
                                            
                                        </tr>
                                        
                                        </>
                                    )
                                }
                            )}

                                
                                <p className="text-center" ><strong>TotalPrice:</strong>Rs.{price} </p>
                                <p className="text-center" ><strong>Total Amount:</strong>{getdata?.length}</p>
                              <button type="button" className="btn btn-success" style={{marginLeft:"7px"}}
                               onClick={() => { navigateToPayments(); handleClose();}}>Checkout</button>
                        
                                    </tbody>


                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close small close'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontsize: 22 }}>Your cart is empty</p>
                                <img src="./cart.png" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                                <br />
                                <button type="button" className="btn btn-success" style={{marginLeft:"7px"}} disabled
                               >Checkout</button>

                            </div>

                    }




                </Menu>
            </Navbar>
        </>
    )
}

export default Header