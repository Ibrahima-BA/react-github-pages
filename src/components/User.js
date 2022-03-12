import React from "react";
import "./User.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpeg" alt="" />
      <h1 className="user__name">Ibrahima BA</h1>
      <p className="user__profession">Technicien en Electronique</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 62 rue des Vanniers 31270 Villeneuve Tolosane
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33370368414">0670368414</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:iba@2evt.fr">iba@2evt.fr</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance : 14 Octobre 1982
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance : Dondou - Sénégal
        </p>
      </div>
    </div>
  );
}

export default User;
