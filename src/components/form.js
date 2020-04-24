import React from "react"

import style from "./form.module.css"

const Form = () => {
  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="to" className={style.wrapper}>
        <span className={style.label}>Aan:</span>
        <input
          type="text"
          id="to"
          name="to"
          placeholder="Een vuistje voor..."
          className={style.text}
        />
      </label>
      <label htmlFor="message" className={style.wrapper}>
        <span className={style.label}>Een vuistje omdat:</span>
        <textarea
          rows="5"
          id="message"
          name="message"
          className={style.area}
        ></textarea>
      </label>
      <label htmlFor="from" className={style.wrapper}>
        <span className={style.label}>Van:</span>
        <input
          type="text"
          id="from"
          name="from"
          className={style.text}
          placeholder="Uw liefste..."
        />
      </label>
      <input
        type="submit"
        value="Maak een link voor dit vuistje"
        className={style.button}
      />
    </form>
  )
}

export default Form
