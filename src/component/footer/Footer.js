import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="container-fluid " style={{marginBottom:"-32px"}}>
      <footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <BsFacebook size={30} />
      </a>

      <a class="btn btn-outline-light btn-floating m-1" target="-blank" href="https://www.linkedin.com/in/mohamed-elsayed-a89311247/" role="button"
        >
                    <AiFillLinkedin size={30} />

        </a>

      <a class="btn btn-outline-light btn-floating m-1" target="-blank" href="https://github.com/MohamedElsayed2022?tab=repositories" role="button"
        >
                    <AiFillGithub size={30} />

        </a>

      
    </section>
  </div>

  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
    © 2023 Copyright :
    <a class="text-white text-decoration-none" href="">MohamedElsayed</a>
  </div>
</footer>
      </div>
    </>
  );
}

export default Footer;
