import React, { useState } from "react"

import style from "./shareUrl.module.css"

const ShareUrl = ({ value }) => {
  const [copyText, setCopyText] = useState("Copy")

  const copyToClipboard = () => {
    const el = document.createElement("textarea")
    el.value = value
    el.setAttribute(`readonly`, ``)
    el.style.position = `absolute`
    el.style.left = `-9999px`
    document.body.appendChild(el)
    el.select()
    document.execCommand(`copy`)
    document.body.removeChild(el)
  }

  const handleCopy = async () => {
    copyToClipboard()
    await delay(300)
    setCopyText("Copied")
    await delay(2500)
    setCopyText("Copy")
  }

  const delay = duration =>
    new Promise(resolve => setTimeout(resolve, duration))

  return (
    <div className={style.container}>
      <p className={style.label}>Deel jouw vuistje uit met deze link:</p>
      <code className={style.code}>{value}</code>
      <button className={style.copy} onClick={handleCopy}>
        {copyText}
      </button>
    </div>
  )
}

export default ShareUrl
