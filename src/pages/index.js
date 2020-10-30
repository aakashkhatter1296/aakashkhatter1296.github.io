import React from "react"
// import reset styles and global styles
import "./styles/normalize.css"
import "./styles/globalStyles.scss"
// import styles for index file
import styles from "./styles/index.module.scss"

export default function Home() {
  return (
    <div className={styles.comingSoonContainer}>
      <h1>Something big coming soon!</h1>
    </div>
  )
}
