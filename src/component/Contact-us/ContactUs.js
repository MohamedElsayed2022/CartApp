// import React from "react";
// import './contact.css'
// import { BiSolidMap } from "react-icons/bi";
// import { AiFillPhone } from 'react-icons/ai'
// import { FaMessage } from 'react-icons/fa6'
// import { Container } from "react-bootstrap";

// function ContactUs() {
//   return (
//     <div>
//         <Container>
//         <section class="mb-5 mt-5">
//         <h2 class="h1-responsive text-light font-weight-bold text-center my-4">
//           Contact us
//         </h2>
//         <p class="text-center w-responsive mx-auto mb-5 text-secondary">
//           Do you have any questions? Please do not hesitate to contact us
//           directly. Our team will come back to you within a matter of hours to
//           help you.
//         </p>

//         <div class="row">
//           <div class="col-md-9 mb-md-0 mb-5">
//             <form
//               id="contact-form"
//               name="contact-form"
//               action="mail.php"
//               method="POST"
//             >
//               <div class="row">
//                 <div class="col-md-6">
//                   <div class="md-form mb-0 ">
//                   <label for="name" class="text-light mb-2 ">
//                       Your name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       class="form-control"
//                     />

//                   </div>
//                 </div>

//                 <div class="col-md-6">
//                   <div class="md-form mb-0">
//                   <label for="email" class="text-light mb-2">
//                       Your email
//                     </label>
//                     <input
//                       type="text"
//                       id="email"
//                       name="email"
//                       class="form-control"
//                     />

//                   </div>
//                 </div>
//               </div>

//               <div class="row">
//                 <div class="col-md-12">
//                   <div class="md-form mb-0 mt-3">
//                   <label for="subject" class="text-light mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       class="form-control"
//                     />

//                   </div>
//                 </div>
//               </div>

//               <div class="row">
//                 <div class="col-md-12">
//                   <div class="md-form mt-3">
//                   <label for="message" class="text-light mb-2">Your message</label>

//                     <textarea
//                       type="text"
//                       id="message"
//                       name="message"
//                       rows="2"
//                       class="form-control md-textarea"
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>
//             </form>

//             <div class="text-center text-md-left mt-3 ">
//               <a
//                 class="btn btn-primary w-100"
//                 onclick="document.getElementById('contact-form').submit();"
//               >
//                 Send
//               </a>
//             </div>
//             <div class="status"></div>
//           </div>

//           <div class="col-md-3 text-center">
//             <ul class="list-unstyled mb-0">
//               <li>
//                 <BiSolidMap className="text-primary" size={40} />
//                 <p className="mt-3 text-light">Toukh , Qalyubia , Egypt</p>
//               </li>

//               <li>
//                  <AiFillPhone className="text-primary" size={40} />
//                 <p className="mt-3 text-light">+20 106 528 4676</p>
//               </li>

//               <li>
//                 <FaMessage className="text-primary" size={40} />
//                 <p className="mt-3 text-light">mohamedsayed33333333@gmail.com</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//         </Container>

//     </div>
//   );
// }

// export default ContactUs;

































import React, { useState } from "react";
import './contact.css'
import { BiSolidMap } from "react-icons/bi";
import { AiFillPhone } from 'react-icons/ai'
import { FaMessage } from 'react-icons/fa6'
import { Container } from "react-bootstrap";
import emailjs from 'emailjs-com'
function ContactUs() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [message , setMessage] = useState("")

  
  function sendEmail (e){
  
    e.preventDefault();
    
    emailjs.sendForm('service_zdn4i18' , 'template_6ej1obf' ,e.target , '_VJqjun_6ZhckyLB-').then((res)=>
      console.log(res)
    ).catch((err)=> console.log(err))
  }
  return (
    <div>
        <Container>
        <section class="mb-5 mt-5">
        <h2 class="h1-responsive text-light font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p class="text-center w-responsive mx-auto mb-5 text-secondary">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
              onSubmit={sendEmail}
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0 ">
                  <label for="name" class="text-light mb-2 ">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e)=>setName(e.target.value)}
                      class="form-control"
                    />

                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                  <label for="email" class="text-light mb-2">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      name="user_email"
                      class="form-control"
                    />

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0 mt-3">
                  <label for="subject" class="text-light mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mt-3">
                  <label for="message" class="text-light mb-2">Your message</label>

                    <textarea
                      type="text"
                      id="message"
                      onChange={(e)=>setMessage(e.target.value)}

                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <div class="text-center text-md-left mt-3 ">
              <input
              type="submit"
                class="btn btn-primary w-100"
                value="Send"
                
                // onclick="document.getElementById('contact-form').submit();"
              />
                
             
            </div>
                  </div>
                </div>
              </div>
            </form>

            
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center mt-3">
            <ul class="list-unstyled mb-0">
              <li>
                <BiSolidMap className="text-primary" size={40} />
                <p className="mt-4 text-light">Toukh , Qalyubia , Egypt</p>
              </li>

              <li>
                 <AiFillPhone className="text-primary" size={40} />
                <p className="mt-4 text-light">+20 106 528 4676</p>
              </li>

              <li>
                <FaMessage className="text-primary" size={40} />
                <p className="mt-4 text-light">mohamedsayed33333333@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
        </Container>

    </div>
  );
}

export default ContactUs;


