import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./IncidenceInfo.scss";
import Header from "../../components/Header/Header";
import IncidenceImage from "../../components/IncidenceImage/IncidenceImage";
import IncidenceDetail from "../../components/IncidenceDetail/IncidenceDetail";
import { Button } from "antd";
import Footer from "../../components/Footer/Footer.jsx";
import TimeLine from "../../assets/Images/Linea-tiempo.png";

const incidence = {
  community: "",
  title: "Humedad en la escalera",
  description:
    "La humedad está generada por filtraciones de las últimas lluvias. Afecta a los pisos intermedios, entre el 3º y 4º piso. Necesidad de raspado, aislamiento y pintura.",
  owner: "Daniel Martí",
  provider: "Fontanería y pintura",
  date: "14/01/2024",
  status: "Registro de incidencia",
  image: "/src/assets/Images/humedadg.jpeg",
};

const IncidenceInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [approved, setApproved] = useState(false);

  const handleApproveClick = () => {
    navigate("/comunidad/incidencias/info/aprobada");

    setApproved(true);
  };

  return (
    <>
      <Header
        title="Pendientes/Humedad en la escalera"
        community="Calle Doctor Moliner, 27"
      />
      <IncidenceImage incidence={incidence} />
      {approved && (
        <div className="time-line-container">
          <img src={TimeLine} alt="linea-tiempo" className="time-line" />
        </div>
      )}
      <IncidenceDetail incidence={incidence} />

      {!approved && (
        <div className="div-btn-aprobar">
          <Button
            className="btn-aprobar"
            type="primary"
            onClick={handleApproveClick}
          >
            Aprobar
          </Button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default IncidenceInfo;
