/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import style from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.grid}>{children}</main>
      <a href="https://devine.be?ref=vuistje" className={style.footer}>
        Devine - Development 4 - 2020
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
