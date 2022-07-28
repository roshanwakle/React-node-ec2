import styles from "./styles.module.css";
import axios from 'axios'
 import React, { useState,useEffect } from "react";

const Main = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	  });
    const getData = async()=>{
      
      const email=localStorage.getItem("email");
      console.log("email",email);
      const url=`http://localhost:8080/api/users/${email}`;
       await axios.get(url).then((response)=>{
        console.log("url",url);
        console.log("res",response.data);
        setData(response.data);
       }).catch((err)=>{
        console.log(err);
       })
      
    }
useEffect(()=>{
	getData();
},[]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

 
//   console.log(data, ">>>>>>>>>>>>>>>>>>>>");
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>facebook</h1>

        <marquee width="50%">Welcome {data.firstName} {data.lastName} !</marquee>

        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last name</th>
              <th>Email ID</th>
            </tr>
            
                  <tr>
                    <td>{data.firstName}</td>
					<td>{data.lastName}</td>
					<td>{data.email}</td>
                  </tr>
             
          </table>
        </div>
        <div className={styles.right}>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
