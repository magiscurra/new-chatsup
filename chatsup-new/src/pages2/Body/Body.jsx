import React, { useState } from "react";
import './Body.css';
import "@fontsource/poppins/400.css";
function Body({ imgSrcArray }) {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleButtons = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="App">
      <div className="input-container">
        <div className="left-container">
          <div className="buttons">
            <button className='btn1'>Find now</button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="input-box">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search friends"
          />
        </div>
      </div>
      <div className="left">
      <div className="container">
        {[...Array(5)].map((_, index) => (
          <div className={`card${index + 1}`} key={index} onClick={() => toggleButtons(index)}>
            <div className="card-content">
            <img className="img" src={imgSrcArray[index]} alt={`Card ${index + 1}`} />
              <div className="content">
                <p className="name">Nickname</p>
                <p className="para">some of the topics are interesting though</p>
                {visibleIndex === index && (
                  <div className="buttons">
                    <button className="btn2" onClick={handleButtonClick}>chat</button>
                    <button className="btn3" onClick={handleButtonClick}>Unfriend</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="right">
      <div className="advertisement">
        <div className="ad1">
          <h1>AD</h1>
        </div>
        <div className="ad2">

        </div>
      </div>
      </div>
    </div>
  );
}

export default Body;