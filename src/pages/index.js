import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Hero from "../components/HomepageFeatures/Hero";
import UnderDevelopmentProjects from "../components/UnderDevelopmentProjects";
import Teams from "../components/Teams/teams";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import styles from "./index.module.css";
import About from "../components/HomepageFeatures/About";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
  // const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <meta property="og:image" content="/img/logo.png" />
      </Head>

      {/* <HomepageFeatures /> */}

      <Hero />
      <main className=" ">
        {/* <HomepageFeatures /> */}
        <ProjectSection />
        <UnderDevelopmentProjects />
        <About />
        <Teams />
        <Footer/>
      </main>
    </>
  );
}
