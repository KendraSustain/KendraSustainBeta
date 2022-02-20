import React from 'react'
import styles from './index.module.css'

const Spinner = (props) => {
  return <div className={styles.loader} style={props.style} ></div>
}

export default Spinner
