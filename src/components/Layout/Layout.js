// @flow
import type { Node as ReactNode } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  canonical?: string,
};

const Layout = ({
  children, title, description, canonical
}: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en"/>
      <title>{title}</title>
      { canonical && <link rel="canonical" href={canonical}/>}
      <meta name="description" content={description}/>
      <meta property="og:site_name" content={title}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content={title}/>
    </Helmet>
    {children}
  </div>
);

export default Layout;
