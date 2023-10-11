import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'TCET Linux',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Arch Linux based Linux distribution built for enhancing college infrastructure 
        and promoting Linux in software engineering education.
      </>
    ),
  },
  {
    title: 'Activity Dekho',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AICTE 100 points calculator that allows you to automate the creation of your AICTE diary.
      </>
    ),
  },
  {
    title: 'Resume Screener',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FAANGM like ATS which uses AI to analyse your resume and give you recommendations on how to 
        improve.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
