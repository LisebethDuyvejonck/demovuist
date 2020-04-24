import { Link } from "gatsby"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <header>
      <h1 className={style.container}>
        <Link className={style.titel} to="/">
          {data.site.siteMetadata.title}
        </Link>
        <p className={style.subtitel}> {data.site.siteMetadata.description}</p>
      </h1>
    </header>
  )
}

export default Header
