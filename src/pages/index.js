import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Digisap</h1>
    <p>Nueva pagina de Digisap con Gatsby.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Página 2</Link> <br />
    <Link to="/using-typescript/">Typescript"</Link>
  </Layout>
)

export default IndexPage
