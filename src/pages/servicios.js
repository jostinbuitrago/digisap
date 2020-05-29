import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiciosPage = () => (
    <Layout>
      <SEO title="Servicios" />
      <h1>Servicios</h1>
      <p>Nuestros servicios</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export default ServiciosPage
  
  