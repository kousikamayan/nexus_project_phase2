import React, { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
    const [state,setState]=useState(false)
    const[formData,setFormData]=useState({
        username:"",
        email:"",
        subject:"",
        message:""
    
      })
    
      const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    
      }
      const sendmessage=async()=>{
        console.log("send message executed",formData);
        let responseData;
        await fetch('http://localhost:4000/sendmessage',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(formData),
        
        }).then((response)=>response.json()).then((data)=>responseData=data)
    
        if(responseData.success){
          localStorage.setItem("auth-token",responseData.token);
          window.location.replace("/");
        }
        else{
          alert(responseData.errors)
        }
    
      }
  return (
    <section className=' py-5'>
        <div className="container-xxl">
            <div className='text-center wow fadeInUp  section-title'>
                <h2 className=''>Contact Us</h2>
                <p className=' mb-5'>Consulting  Us  For Any Query Related Your Business</p>
            </div>
            <div className="row g-4">

                <div className="col-md-6 wow faeInUp">
                <iframe className='position-relative rounded w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131228785!2d80.04419819043575!3d13.047473316234447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719461005968!5m2!1sen!2sin"style={{minHeight:"250px", border:"0" }}  allowfullscreen="" aria-hidden="false" frameborder="0" tabIndex="0"></iframe>
                    

                </div>
                <div className="col-md-6 " >
                    <div className="wow fadeInUp p-3 rounded-3 " style={{background:"#B4E380"}}>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="name" name='username' value={formData.username} onChange={changeHandler} className='form-control'id='name' placeholder='Your Name' />
                                        <label htmlFor="name" className='text-secondary'>Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-floating">
                                        <input type="email" name='email' value={formData.email} onChange={changeHandler} className='form-control'id='email' placeholder='Your Email' />
                                        <label htmlFor="email"className='text-secondary'>Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating">
                                        <input type="subject" name='subject' value={formData.subject} onChange={changeHandler} className='form-control'id='subject' placeholder='Subject' />
                                        <label htmlFor="subject"className='text-secondary'>Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating">
                                        <textarea id="message" name='message' type="message" value={formData.message} onChange={changeHandler} className='form-control' placeholder='Leave a message here'></textarea>
                                        <label htmlFor="message"style={{minheight:"150px"}} className='text-secondary' >Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className='btn btn-secondary w-100 py-3 'style={{color:"#ffff", fontWeight:"600", fontSize:"15px"} } onClick={()=>{sendmessage()}}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactUs