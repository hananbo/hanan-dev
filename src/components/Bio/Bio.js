// @flow
import React from 'react';
import styles from '../Sidebar/Author/Author.module.scss';

const Bio = () => (
  <p className={styles['author__subtitle']}>
      Father, Husband, Geek, Full Stack Developer, Team Lead. Currently working on making it easier to show real estate for rent at <a href="https://showdigs.com" rel="noopener" target="_blank">Showdigs</a>
  </p>
);

export default Bio;
