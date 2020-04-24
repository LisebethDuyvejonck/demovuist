import React from "react"

import Layout from "../components/layout"
import Form from "../components/form"
import Vuist from "../components/vuist"
import SEO from "../components/seo"

const CreatePage = () => (
  <Layout>
    <SEO title="Home" />
    <Form/>
    <Vuist height={15}/>
  </Layout>
)

export default CreatePage