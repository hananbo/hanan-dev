// @flow
import React from 'react';
import styles from '../Sidebar/Author/Author.module.scss';

const Bio = () => (
  <p className={styles['author__subtitle']}>Father, Husband, Geek, Full Stack Developer, Team Lead. Currently working on making it easier to show real estate for rent at <a href="https://showdigs.com" target="_blank">Showdigs</a>
      <p>
          On my free time, building & maintaining <a href="https://willpayfor.com" target="_blank">willpayfor.com</a> - a platform and community for sharing ideas worth paying for
      </p>
  </p>
);

export default Bio;
