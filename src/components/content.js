import React from "react"

import style from "./content.module.css"

const Content = ({ from, to, message }) => {
  return (
    <dl className={style.container}>
      <dt className="visually-hidden">To</dt>
      <dd className={style.to}>{to}</dd>
      <dt className="visually-hidden">Message</dt>
      <dd className={style.message}>{message}</dd>
      <dt className="visually-hidden">From</dt>
      <dd className={style.from}>{from}</dd>
    </dl>
  )
}

export default Content
