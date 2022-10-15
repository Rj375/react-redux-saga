import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSearch } from "../redux/productAction"
import { Link } from "react-router-dom";

const Header = () => {
  // const [user, setUser] = useState({
  //    username: "", password: ""
  // })
  // const [isdata, setIsdata] = useState(false)
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(productSearch(event.target.value))
  }

  // const color = useRef()

  // const handleChange = (name, value) => {

  //   //  user[name] = value;
  //   //  setUser({username: user.username, password: user.password})
  //    let formData = Object.assign({}, user);

  //   formData[name] = value;

  //    setUser(formData)
  //     console.log(name, value)
  // }
  //  // let clear = {
  //   //   username: '',
  //   //   password: ''
  //   // }

  // const handleClick = () => {

  //   setIsdata(true)

  //   color.current.focus()

  //   //  setUser(clear)
  // }

  // console.log("redux data",result)
  return (
    <div className="header">
      <Link to="/">
        <h1 style={{ float: "left", margin: "0", padding: "30px", color: "black"}}>
          Sasto Saman
        </h1>
      </Link>
      <div className="search-box">
        <input type="text" onChange={handleChange} placeholder="Search Product"/>
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img src={require("../assets/add_to_cart.png")} alt="add to cart" />
        </div>
      </Link>

      {/* <input type="text" ref={color} value={user.username} name='username' onChange={(e) => handleChange(e.target.name, e.target.value)}/>
        <input type="password" value={user.password} name='password' onChange={(e) => handleChange(e.target.name, e.target.value)}/>
     

      <button onClick={handleClick}>Click Me</button>

      {!isdata ? ''
      :
      <>
        <h1>{user.username}</h1>
        <h1>{user.password}</h1>
        </>  
    } */}
    </div>
  );
};

export default Header;
