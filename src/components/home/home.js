import "./home.css";
import Bubles from "../bubles/bubles";
import Miro from "../../assets/miro.png";
import React, { useState, useRef, useEffect } from "react";

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();
  const lineOneRef = useRef();
  const lineTwoRef = useRef();
  const lineThreeRef = useRef();
  const linkRef = useRef();

  const toggleNav = () => {
    setNavOpen(!navOpen);
    navRef.current.classList.toggle("nav-open");
    lineOneRef.current.classList.toggle("line-cross");
    lineTwoRef.current.classList.toggle("line-fade-out");
    lineThreeRef.current.classList.toggle("line-cross");
    linkRef.current.classList.toggle("fade-in");
  };

  useEffect(() => {
    if (navOpen) {
      document
        .querySelector(".background-container")
        .classList.add("blur-background");
    } else {
      document
        .querySelector(".background-container")
        .classList.remove("blur-background");
    }
  }, [navOpen]);

  return (
    <div className="App">
      <nav ref={navRef}>
        <div className="menu-btn" onClick={toggleNav}>
          <div className="line line--1" ref={lineOneRef}></div>
          <div className="line line--2" ref={lineTwoRef}></div>
          <div className="line line--3" ref={lineThreeRef}></div>
        </div>

        <div
          className="nav-links"
          style={{ paddingLeft: "3rem", paddingRight: "3.5rem" }}
          ref={linkRef}
        >
          <a className="link">Próximas fechas</a>
          <a className="link">Registro fotográfico</a>
          <a className="link">Necesito inspiración</a>
          <a className="link">FAQS</a>
        </div>
      </nav>

      <div className="background-container">
        <div className="background-1">
          {/* arriba a la derecha */}
          <Bubles izq={32} scale={0.4} rotate={70} color="#00ff00" />
          {/* abajo a la derecha */}
          <Bubles
            izq={32}
            rotate={192}
            arriba={37}
            scale={0.4}
            color="#00ff00"
          />
          {/* abajo a la izq */}
          <Bubles
            arriba={39}
            izq={-2}
            className="buble3"
            scale={0.4}
            color="#00ff00"
          />
          {/* medio a la izq */}
          <Bubles
            arriba={17}
            izq={-4}
            rotate={90}
            className="buble4"
            scale={0.4}
            color="#00ff00"
          />
          {/* medio a la derecha */}
          <Bubles
            izq={32}
            arriba={18}
            rotate={22}
            className="buble5"
            scale={0.4}
            color="#00ff00"
          />
          {/* arriba al medio */}
          <Bubles
            izq={15}
            arriba={9}
            rotate={45}
            className="buble6"
            scale={0.4}
            color="#00ff00"
          />
          {/* arriba a la izq */}
          <Bubles className="buble7" scale={0.4} color="#00ff00" />
          {/* arriba al medio mas arriba */}
          <Bubles
            izq={15}
            arriba={-7}
            rotate={335}
            className="buble7"
            scale={0.4}
            color="#00ff00"
          />

          {/* medio abajo */}

          <Bubles
            arriba={29}
            izq={12}
            className="buble8"
            scale={0.4}
            color="#00ff00"
          />
          {/* medio abajo */}

          <Bubles
            arriba={45}
            izq={15}
            rotate={175}
            className="buble9"
            scale={0.4}
            color="#00ff00"
          />
        </div>
        <div className="glass-box">
          <h1>¡Hola!</h1>
          <h1>Bienvenidx a la experiencia</h1>
          <img src={Miro} alt="Miro" className="miro" />{" "}
          <button className="my-button">¡QUIERO SUMARME!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;