import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="10-Kei-logo"
            />
            <figcaption>Regular image</figcaption>
          </figure>

          <h3 id="heading-level-3">
	      世界にたった1つの模型に、世界でたった1つの人物添景を。<br></br>
          あなたの模型にふさわしく、あなたが描くストーリーに沿った人物をお届けします。
	  	  </h3>
	  
	      <h2 id="heading-level-2">
	      サービス概要
	      <h2>
	      
	      <p>
	      卒業設計やコンペでの模型製作の中で<br></br>
	     「小学校で遊ぶ子供たちの添景が欲しい」「住宅の中での様々な動きに適した添景が欲しい」などなど…思ったことはありませんか？<br></br>
	  	  10-Keiはそんなあなたの願いを叶えるオリジナル添景作成サービスです。<br></br>
	      <br></br>
	      このサービスを利用するための手順はたったの<strong><strong>4つ</strong></strong>{" "}。
	  	  </p>
	  
	  　　<dl>
            <dt>1. 作りたい添景のポーズを決めて360度さまざまな方向から撮影</dt>
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.smallPic.childImageSharp.fluid}
                    className="step1-photograph"
                  />
                  <figcaption>Regular image</figcaption>
                </figure>
              </p>
            </dd>
            <dt>2. データをアップロードし制作を依頼</dt>
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.smallPic.childImageSharp.fluid}
                    className="step2-upload"
                  />
                  <figcaption>Regular image</figcaption>
                </figure>
              </p>
            </dd>
            <dt>3. 3Dモデルになったデータを確認</dt>
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.smallPic.childImageSharp.fluid}
                    className="step3-3dmodel"
                  />
                  <figcaption>Regular image</figcaption>
                </figure>
              </p>
            </dd>
	        <dt>4. 自宅に添景が届く>/dt>
	 　　　　 <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.smallPic.childImageSharp.fluid}
                    className="step4-reach"
                  />
                  <figcaption>Regular image</figcaption>
                </figure>
              </p>
            </dd>
	  　　<dl>
	  
	     <h3 id="heading-level-3">
	     あなたが模型で表現したいシーンを創るお手伝いをします。
	     <h3>
	  
	     <h2 id="heading-level-2">
	     どうやって作ってるの？
	     <h2>
	     <p>
	     アップロードされたデータを元にフォトグラメトリを行い3Dモデルを作成し、3Dプリンターで出力します。
	     </p>
	  
	     <h2 id="heading-level-2">
	     サービス開始時期
	     <h2>
	     <p>
	     2021年1月上旬を予定
	     </p>
	  
	  	  
	  
          {/* <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p> */}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    10-Kei-logo: file(relativePath: { eq: "10-Kei/10-Kei-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step1-photograph: file(relativePath: { eq: "10-Kei/step1-photograph.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
	step2-upload: file(relativePath: { eq: "10-Kei/step2-upload.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
	step3-3dmodel: file(relativePath: { eq: "10-Kei/step3-3dmodel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
	step4-reach file(relativePath: { eq: "10-Kei/step4-reach.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
