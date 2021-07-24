import React from "react";

const Modal = (props) => {
  return (
    <div id="popup" onClick={props.toggleModal}>
      <div className="popup_back"></div>
      <div className="popup_inner">
        <div className="popup">
          <div className="popup_left"></div>
          <div className="popup_right">
            <h4>Balanced Set-Up:Light&Packable</h4>
            <span className="maru">2021-06-19{props.id}</span>
            <p className="maru">
              /{props.title} /{props.desc2[2]}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              esse quidem doloribus alias ullam facilis ab ex incidunt quos
              asperiores fuga harum mollitia obcaecati nesciunt consequuntur
              autem magni, suscipit voluptas. */}
            </p>
            <span className="close" onClick={props.toggleModal}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
