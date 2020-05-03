import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"
import Modal  from "../components/modal"

const GlassElemPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO
      title={ "Szkło - " + data.glass.nodes[0].title + " - kubki Górnik Zabrze" }
      description={ data.glass.nodes[0].title + " - pozycja z kategorii " 
      + data.glass.nodes[0].acf.kategoria_szklo.post_title +
      " - dodana " +  data.glass.nodes[0].acf.data_dodania + " - Oglądaj!" } />
    <Breadcrumbs 
      name={ data.glass.nodes[0].title }
      parent={ '/szklo/'+data.glass.nodes[0].acf.kategoria_szklo.post_name } 
      parent_name={ data.glass.nodes[0].acf.kategoria_szklo.post_title } />
    <h2 className="site_title"
    dangerouslySetInnerHTML={{__html: data.glass.nodes[0].title }}>
    </h2>
    <h3 className="glass_info">
      Data dodania: <span>{ data.glass.nodes[0].acf.data_dodania }</span>
    </h3>
    <h3 className="glass_info">
      Kategoria: <span>{ data.glass.nodes[0].acf.kategoria_szklo.post_title }</span>
    </h3>
    <div className="glass_images">
      <img src={ data.glass.nodes[0].acf.zdjecie_glowne } data-src={ data.glass.nodes[0].acf.zdjecie_glowne } alt={ "Szkło " + data.glass.nodes[0].acf.kategoria_szklo.post_title + " " + data.glass.nodes[0].title + " nr 1" } className="img item item0" onClick={ ()=>{ openModal(0)} } onKeyDown={ ()=>{ openModal(0)} } role="presentation" />
      <img src={ data.glass.nodes[0].acf.zdjecie_drugie } data-src={ data.glass.nodes[0].acf.zdjecie_drugie } alt={ "Szkło " + data.glass.nodes[0].acf.kategoria_szklo.post_title + " " + data.glass.nodes[0].title + " nr 2" } className="img item item1" onClick={ ()=>{ openModal(1)} } onKeyDown={ ()=>{ openModal(1)} } role="presentation" />
    </div>
    <Modal />
  </Layout>
)

export default GlassElemPage;

export const Query = graphql`
  query glassElemQuery($glass_id: Int) {
    glass: allWordpressWpSzklo(filter: {wordpress_id: {eq: $glass_id}}) {
      nodes {
        acf {
          data_dodania
          zdjecie_drugie
          zdjecie_glowne
          kategoria_szklo {
            post_title
            post_name
          }
        }
        title
        slug
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