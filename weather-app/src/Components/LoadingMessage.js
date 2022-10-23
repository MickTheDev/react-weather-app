import React from 'react'
import styles from './Messages.module.scss'

const LoadingMessage = () => {
  return (
    <div className={styles.loading_wrapper}>Getting weather Details...</div>
  )
}

export default LoadingMessage
