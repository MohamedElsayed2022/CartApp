import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {  useDispatch, useSelector } from 'react-redux';
import { ClearAll, DeleteFromCart } from './cart-toolkit/cartSlice';
import Footer from './footer/Footer';
import '../component/footer/Footer.css'
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Cart() {
  const dispatch =useDispatch()
  const cart = useSelector(state=>state.cart)
  const tot_price = cart.reduce((acc , product)=>{
     acc += product.price * product.quantity
     return acc
  },0)
  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#343a40", // تغيير لون الخلفية
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
     // تأثير box-shadow
  };
  return (
   <>
   <div className='bg-dark  'style={{containerStyle , height:"320vh"}}>
   <Container className='py-5 mt-4 ' >
   <div class="row row-cols-2 ">
    <div class="w-50"> 
      <h1 className='bg-success text-center p-2 text-light rounded mt-3' >Total Price : {tot_price.toFixed(2)} $</h1>
    </div>
    <div class="w-50">
      <Button variant='danger text-center w-100 mt-3 p-2 ' style={{ fontSize:"30px" , fontWeight:"bold" }} onClick={()=>dispatch(ClearAll())}>Delete</Button>
    </div>
   </div>

    <Table striped bordered hover responsive variant="dark" className='mt-1'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
             <tr key={product.id}>
             <td>{product.id}</td>
             <td>{product.title}</td>
             <td>{product.price} $</td>
             <td><img style={{width:"70px", height:"70px"}} src={product.image} alt=""/></td>
             <td>{product.quantity} </td>
             <td>
              <Button variant='danger' 
              onClick={()=>dispatch(DeleteFromCart(product))}
              >Delete</Button>
             </td>
           </tr>
         
        ))}
       
      </tbody>
    </Table>
   </Container>
  
   </div>
  
   
    
   </>
  )
}

export default Cart
