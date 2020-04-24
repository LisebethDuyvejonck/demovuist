import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Vuist from "../components/vuist"
import style from "./vuistje.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Je hebt een vuistje gekregen" />
      <Vuist />
      <Content {...pageContext} />
      <p className={style.note}>
        {pageContext.from} heeft jou dit vuistje gegeven.
        <br />
        Je kan ook <Link to="/create">jouw eigen vuistjes uitdelen</Link> als je
        wil.
      </p>
    </Layout>
  )
}
