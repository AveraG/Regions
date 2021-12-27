import React from "react";
import Button from "./Shared/Button/Button";
import "./world-traveler.scss";

function App() {
  return (
    <div className="world-traveler-container">
      <h1 className="world-traveler-header">World Traveler</h1>
      <div className="london-container">
        <div className="london-button-container">
          <span className="london-color-block" />
          <Button text={"International"} />
        </div>
        <img
          src={require("./Shared/Images/london-img.jpg")}
          alt="london storefront"
          className="london-image"
        />
        <div className="london-text-container">
          <Button
            text={"REGISTER NOW"}
            gray={true}
            className="registration-btn"
          />
          <h2 className="london-title">London, England</h2>
          <h3 className="date">APRIL 15, 2020</h3>
          <p className="london-text">
            Ut placet, inquam tum dicere exorsus est laborum et via procedat
            oratio quaerimus igitur, quid et caritatem, quae sine causa? quae
            fuerit causa, mox videro; interea hoc epicurus in culpa, qui
            blanditiis praesentium voluptatum adipiscendarum causa aut officiis
            debitis aut fugit, sed uti oratione perpetua.
          </p>
        </div>
      </div>
      <div className="atlanta-singapore-container">
        <div className="atlanta-container">
          <div className="atlanta-button-container">
            <span className="atlanta-color-block" />
            <Button text={"Domestic"} />
          </div>
          <img
            src={require("./Shared/Images/atlanta-img.png")}
            alt="Atlanta skyline"
            className="atlanta-image"
          />
          <div className="atlanta-text-container">
            <div className="button-container">
              <Button
                text={"REGISTER NOW"}
                gray={true}
                className="registration-btn"
              />
            </div>
            <h2 className="atlanta-title">Atlanta, GA</h2>
            <h3 className="date">MARCH 10,2019</h3>
            <p className="atlanta-text">
              Torquatos nostros? quos tu paulo ante cum soluta nobis est.
            </p>
          </div>
        </div>
        <div className="singapore-container">
          <div className="singapore-button-container">
            <span className="singapore-color-block" />
            <Button text={"International"} />
          </div>
          <img
            src={require("./Shared/Images/singapore-img.jpg")}
            alt="Singapore skyline"
            className="singapore-image"
          />
          <div className="singapore-text-container">
            <div className="button-container">
              <Button
                text={"REGISTER NOW"}
                gray={true}
                className="registration-btn"
              />
            </div>
            <h2 className="singapore-title">Singapore</h2>
            <h3 className="date">FEBRUARY 15, 2020</h3>
            <p className="singapore-text">
              Primum igitur, inquit, sic agam, ut aliquid ex eo delectu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
