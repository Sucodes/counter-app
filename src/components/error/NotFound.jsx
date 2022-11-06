import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../error/NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.error}>
      <h1>Oops! Something went wrong</h1>
      <Link to='/'>Go Back</Link>
    </section>
  )
}

export default NotFound;
