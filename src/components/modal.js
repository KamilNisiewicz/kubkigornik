import React from "react"

const Modal = () => (
  <div className="modal">
    <div className="modal_layer"></div>
    <div className="modal_container">
      <div className="modal_content">
        <span className="modal_close" onClick={ closeModal } onKeyDown={ closeModal } role="presentation"></span>
        <span className="modal_prev" onClick={ prev } onKeyDown={ prev } role="presentation"></span>
        <span className="modal_next" onClick={ next } onKeyDown={ next } role="presentation"></span>
        <div className="modal_info">
          <img src="" alt="" />
          <h5>Górnik</h5>
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
  document.querySelector('.modal .modal_prev').setAttribute('index', '');
  document.querySelector('.modal .modal_next').setAttribute('index', '');
}

export const prev = () => {
  setModal('.modal_prev')
}

export const next = () => {
  setModal('.modal_next')
}

export const setModal = (element) =>{
  let current_item_index_elem = document.querySelector(element);
  let modal = document.querySelector('.modal_info');
  let modal_prev = document.querySelector('.modal_prev');
  let modal_next = document.querySelector('.modal_next');
  let img_elems = document.querySelectorAll('.item');
  let site_title = document.querySelector('.site_title').textContent;

  let img_elems_max_count = img_elems.length - 1;
  let img_src = "";
  let modal_header_text = "";

  let current_index = parseInt(current_item_index_elem.getAttribute('index'));
  let current_index_prev = parseInt(current_index-1);
  let current_index_next = parseInt(current_index+1);

  if(current_index === -1){
    current_index = img_elems_max_count;
    current_index_prev = img_elems_max_count - 1;
    current_index_next = 0;
  }

  if(current_index > img_elems_max_count){
    current_index = 0;
    current_index_prev = img_elems_max_count;
    current_index_next = 1;
  }

  if(typeof img_elems[current_index].children[0] !== 'undefined'){
    img_src = img_elems[current_index].children[0].getAttribute('data-src');
    modal_header_text = img_elems[current_index].children[1].textContent;
  }else{
    img_src = img_elems[current_index].src;
    modal_header_text = site_title + " " + (current_index+1);
  }

  modal.children[0].src = img_src;
  modal.children[1].textContent = modal_header_text;
  modal_prev.setAttribute("index", current_index_prev);
  modal_next.setAttribute("index", current_index_next);
}