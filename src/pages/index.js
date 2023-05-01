import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import ProjectSection from "../components/ProjectSection";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about-tcetopensource"
          >
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Welcome`} description="TCET Open Source Website">
      <Head>
        <meta property="og:image" content="/img/logo.png" />
      </Head>
      {/* <HomepageHeader /> */}
      {/* <main className="bg-red-400 "> */}
      {/* <HomepageFeatures /> */}
      {/* </main> */}
      <main className="h-full md:pb-20 bg-gradient-to-t to-[#01000A] from-[#261660]">
        <ProjectSection />
      </main>
    </Layout>
  );
}
