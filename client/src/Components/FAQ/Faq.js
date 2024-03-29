import React, { useState , useEffect } from "react";
import "./Faq.css";
import Header from "../Header/Header";
import FaqcardItems from "./FaqcardItems";
import Footer from "../Footer/Footer";
import axios from 'axios';
import Loader from '../Loader/Loader'

const Faq = () => {

  const [fetchfaqdata , setFetchFaqdata] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    // axios.get("https://nishchayphotographyapi.onrender.com/faqquestion")
    axios.get("https://nishchayphotographyapi.onrender.com/faqquestion")
    .then((res) => {
      setFetchFaqdata(res.data);
      console.log(res.data);
      setLoading(true)
    }).then((err) => {
      console.log(err);
    })

  }, [])
  

  return (
    <>
    <Header />
      <div className="faq-section container-fluid">    
        <div className="faq-title-section container">
          <hr></hr>
          <h1>Frequently Asked Question.</h1>
          <hr style={{backgroundColor:"#b55467"}}></hr>
        </div>
        <div className=" question-answer-section container">
          { loading ?
          fetchfaqdata.map((items) => {
            return (
              <FaqcardItems items={items} key ={items.id}/>
            );
          }) : <Loader/>}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Faq;
