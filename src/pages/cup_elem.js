import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"
import Modal from "../components/modal"

const CupElemPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO
      title={ "Kubek - " + data.cup.nodes[0].title + " - kubki Górnik Zabrze" }
      description={ data.cup.nodes[0].title + " - pozycja z kategorii " 
      + data.cup.nodes[0].acf.kategoria.post_title +
      " - dodany " +  data.cup.nodes[0].acf.data_dodania + " - Oglądaj!" }
       />
    <Breadcrumbs 
      name={ data.cup.nodes[0].title }
      parent={ '/kubki/'+data.cup.nodes[0].acf.kategoria.post_name } 
      parent_name={ data.cup.nodes[0].acf.kategoria.post_title } />
    <h2 className="site_title"
    dangerouslySetInnerHTML={{__html: data.cup.nodes[0].title }}>
    </h2>
    <h3 className="cup_info">
      Data dodania: <span>{ data.cup.nodes[0].acf.data_dodania }</span>
    </h3>
    <h3 className="cup_info">
      Kategoria: <span>{ data.cup.nodes[0].acf.kategoria.post_title }</span>
    </h3>
    <div className="cup_images">
      <img src={ data.cup.nodes[0].acf.zdjecie_drugie } data-src={ data.cup.nodes[0].acf.zdjecie_drugie } alt={ 'Kubek zdjęcie nr 2' + data.cup.nodes[0].title } className="img item item0" onClick={ ()=>{ openModal(0)} } onKeyDown={ ()=>{ openModal(0)} } role="presentation" />
      <img src={ data.cup.nodes[0].acf.zdjecie_glowne } data-src={ data.cup.nodes[0].acf.zdjecie_glowne } alt={ 'Kubek zdjęcie nr 1' + data.cup.nodes[0].title } className="img item item1" onClick={ ()=>{ openModal(1)} } onKeyDown={ ()=>{ openModal(1)} } role="presentation" />
      <img src={ data.cup.nodes[0].acf.zdjecie_trzecie } data-src={ data.cup.nodes[0].acf.zdjecie_trzecie } alt={ 'Kubek zdjęcie nr 3' + data.cup.nodes[0].title } className="img item item2" onClick={ ()=>{ openModal(2)} } onKeyDown={ ()=>{ openModal(2)} } role="presentation" />
    </div>
    <Modal />
  </Layout>
)

export default CupElemPage;

export const Query = graphql`
  query CupElemQuery($cup_id: Int) {
    cup: allWordpressWpKubki(filter: {wordpress_id: {eq: $cup_id}}) {
      nodes {
        acf {
          data_dodania
          zdjecie_drugie
          zdjecie_glowne
          zdjecie_trzecie
          kategoria {
            post_title
            post_name
          }
        }
        slug
        title
        wordpress_id
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`

const openModal = ( item_id ) => {
  let item = document.querySelector('.item'+item_id);
  let modal = document.querySelector('.modal_info');
  let modal_prev = document.querySelector('.modal_prev');
  let modal_next = document.querySelector('.modal_next');

  let modal_header_text = document.querySelector('.site_title').textContent;
  modal_header_text += " "+(item_id+1);

  modal.children[0].src = item.src;
  modal.children[1].textContent = modal_header_text;
  modal_prev.setAttribute("index", parseInt(item_id-1));
  modal_next.setAttribute("index", parseInt(item_id+1));

  document.querySelector('.modal .modal_layer').style.opacity = 0.6;
  document.querySelector('.modal .modal_layer').style.visibility = 'visible';
  document.querySelector('.modal .modal_container').style.opacity = 1;
  document.querySelector('.modal .modal_container').style.visibility = 'visible';
}