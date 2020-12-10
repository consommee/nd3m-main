import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ServicePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card ">
            <Img
              fluid={data.tenkeilogo.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="heading-level-3">
            世界にたった1つの模型に、<br></br>
	        世界でたった1つの人物添景を。<br></br><br></br>
            あなたの模型にふさわしく、<br></br>
	        あなたが描くストーリーに沿った人物をお届けします。
          </h3><br></br>
          <h2 id="heading-level-2">サービス概要</h2>
          <p>
            卒業設計やコンペでの模型製作の中で<br></br>
            「小学校で遊ぶ子供たちの添景が欲しい」「住宅の中での様々な動きに適した添景が欲しい」などなど…思ったことはありませんか？
            <br></br>
            <font color="FF9900">10-keiはそんなあなたの願いを叶えるオリジナル添景作成サービスです。</font>
            <br></br>
            <br></br>
            このサービスを利用するための手順はたったの
            <strong>
              <strong>4つ</strong>
            </strong>{" "}
            。
          </p>
          　　
          <dl>
	        <dd>
				<figure className="kg-card kg-image-card">
				  <dt><u>1. 作りたい添景のポーズを決めて360度さまざまな方向から撮影</u></dt>
				  <Img
					fluid={data.step1photograph.childImageSharp.fluid}
					className="kg-image"
				  />
				</figure>
            </dd>
            
            <dd>
                <figure className="kg-card kg-image-card">
	  			<dt><u>2. データをアップロードし制作を依頼</u></dt>
                  <Img
                    fluid={data.step2upload.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
            </dd>
            
            <dd>
                <figure className="kg-card kg-image-card">
	  			<dt><u>3. 3Dモデルになったデータを確認</u></dt>
                  <Img
                    fluid={data.step33dmodel.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
            </dd>
            
            <dd>
                <figure className="kg-card kg-image-card">
	  			<dt><u>4. 自宅に添景が届く</u></dt>
                  <Img
                    fluid={data.step4reach.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
            </dd>
          </dl>
	 
	  
          <h3 id="heading-level-3">
            <font color="FF9900">あなたが模型で表現したいシーン<br></br>を創るお手伝いをします。</font>
          </h3>
          <h2 id="heading-level-2">どうやって作ってるの？</h2>
          <p>
            アップロードされたデータを元に複数の画像から3Dモデルを生成する技術、フォトグラメトリを行います。<br></br>
	  		そうして生成した3Dモデルを3Dプリンターで出力しています。
          </p>
          <h2 id="heading-level-2">サービス開始時期</h2>
          <p>2021年1月上旬を予定しています。</p>
	      <h2 id="heading-level-2">Contact</h2>
          <p>サービスについてのお問い合わせは右上のTwitterのDMから受付してます。</p>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tenkeilogo: file(relativePath: { eq: "tenkei/tenkei-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    step1photograph: file(relativePath: { eq: "tenkei/step1-photograph.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step2upload: file(relativePath: { eq: "tenkei/step2-upload.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step33dmodel: file(relativePath: { eq: "tenkei/step3-3dmodel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step4reach: file(relativePath: { eq: "tenkei/step4-reach.png" }) {
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
      <ServicePage location={props.location} data={data} {...props} />
    )}
  />
)
