import React from "react"

const Modal = () => (
  <div className="modal">
    <div className="modal_layer"></div>
    <div className="modal_container">
      <div className="modal_content">
        <span className="modal_close" onClick={ closeModal } onKeyDown={ closeModal } role="presentation"></span>
        <span className="modal_prev"></span>
        <span className="modal_next"></span>
        <div class="modal_info">
          <img src="/kubki/okazjonalne/okazjonalne_0002_02.jpg" alt="test" />
          <h5>Derby dla Górnika</h5>
        </div>
      </div>
    </div>
  </div>
)
export default Modal

export const closeModal = () => {
  document.querySelector('.modal .modal_layer').style.opacity = 0;
  document.querySelector('.modal .modal_layer').style.visibility = 'hidden';
  document.querySelector('.modal .modal_container').style.opacity = 0;
  document.querySelector('.modal .modal_container').style.visibility = 'hidden';
}