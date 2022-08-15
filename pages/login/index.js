import React from 'react'
import TextField from "@mui/material/TextField";
import Image from "next/image"
import logo from "../../assests/Instagram.jpeg"
import Button from "@mui/material/Button";
import Link from 'next/link'
import {Carousel} from "react-responsive-carousel"
import bg1 from "../../assests/bg1.jpg"
import bg2 from "../../assests/bg2.jpg"
import bg3 from "../../assests/bg3.jpg"
import bg4 from "../../assests/bg4.jpg"
import bg5 from "../../assests/bg5.jpg"

function index() {
  return (
    <div className="login-container">
      <div className="insta-mob-bg">
        <div className="carousel">
         <Carousel
           autoPlay
           centerMode
           interval={2000} 
           infiniteLoop 
           showArrows={false}
           showThumbs={false}
           showIndicators={false}
           showStatus={false}
           transitionTime={3} >
             <Image src={bg1}/>
             <Image src={bg2}/>
             <Image src={bg3}/>
             <Image src={bg4}/>
             <Image src={bg5}/>
         </Carousel>
         </div>
      </div>
      <div>
      <div className="login-card">
        <Image src={logo} />
        <TextField
          id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <span style={{color:"blue", cursor:"pointer"}}>Forget Password ?</span>
        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
        >
          Login
        </Button>
      </div>
      <div className="bottom-card">
        Don't have an account ?{" "}
        <Link href='/signup'>
          <span style={{ color: "blueviolet"}}>Signup</span>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default index