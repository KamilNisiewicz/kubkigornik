import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"
import Modal from "../components/modal"

const LookingPage = ({ data, pageContext }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO 
      title="Poszukuję - kubki Górnik Zabrze"
      description="Poniższa lista zawiera listę kubków i kieliszków, których
      brakuje w kolekcji. Zapraszam do kontaktu!" />
    <Breadcrumbs name="Szukam" parent="" parent_name="" />
    <h2 className="site_title">Szukam ({ data.looking.totalCount })</h2>
    <div className="section_description">
      <p>Poniżej znajdziecie kubki, których brakuje w moich zbiorach.</p>
      <p>
        Jeżeli posiadasz którychś z nich i jesteś skłonny go odsprzedać to
        zachęcam do kontaktu mailowego na adres podany poniżej.
      </p>
      <a href="mailto:tomekkubki@gmail.com" className="mail_to">
        &raquo;&nbsp;tomekkubki@gmail.com&nbsp;&laquo;
      </a>
    </div>
    <div className="looking_container">
    { 
      data.looking.nodes.map(function(elem, index) {
         return (
            <div className={ "item item"+index } key={ elem.wordpress_id } onClick={ ()=>{ openModal(index)} } onKeyDown={ ()=>{ openModal(index)} } role="presentation">
              <img data-src={ elem.acf.zdjecie_szukam } alt={ "Kubek " + elem.title + " - zdjęcie" } className="img lazyload" />
              <div dangerouslySetInnerHTML={{__html: elem.title }} className="title"></div>
            </div>
         )
      })
    }
    </div>
    <div className="pagination">
      { pageContext.currentPage !== 1 && <a href={ "/szukam/" + ((pageContext.currentPage - 1) === 1 ? "" : pageContext.currentPage - 1)} className="pagination_link pagination_prev">{ "<" + (pageContext.currentPage - 1) }</a> }
      { pageContext.currentPage !== pageContext.numPages && <a href={ "/szukam/"+ (pageContext.currentPage + 1)} className="pagination_link pagination_next">{ (pageContext.currentPage + 1) + ">" }</a>}
    </div>
    <Modal />
  </Layout>
)

export default LookingPage;

export const Query = graphql`
  query LookingData($skip: Int, $limit: Int) {
    looking: allWordpressWpSzukam(
        sort: {fields: title}
        limit: $limit
        skip: $skip
    ){
      nodes {
        acf {
          zdjecie_szukam
        }
        wordpress_id
        title
        slug
      }
      totalCount
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`

export const openModal = ( item_id ) => {
  const item = document.querySelector('.item'+item_id);
  const modal = document.querySelector('.modal_info');
  const modal_prev = document.querySelector('.modal_prev');
  const modal_next = document.querySelector('.modal_next');

  let img_src = item.children[0].src;
  let header_text = item.children[1].textContent;

  modal.children[0].src = img_src;
  modal.children[1].textContent = header_text;
  modal_prev.setAttribute("index", parseInt(item_id-1));
  modal_next.setAttribute("index", parseInt(item_id+1));

  document.querySelector('.modal .modal_layer').style.opacity = 0.6;
  document.querySelector('.modal .modal_layer').style.visibility = 'visible';
  document.querySelector('.modal .modal_container').style.opacity = 1;
  document.querySelector('.modal .modal_container').style.visibility = 'visible';
}