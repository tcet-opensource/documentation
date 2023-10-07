import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Navbar from "../components/Navbar";
import Hero from "../components/HomepageFeatures/Hero";
import UnderDevelopmentProjects from "../components/UnderDevelopmentProjects";
import Teams from "../components/Teams/teams";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
// import styles from "./index.module.css";
import About from "../components/About";
// import "../css/tailwindCustom.css"
import "../css/custom.css"
export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <div className={"font-sans tailwind"} >
      <Head>
        <meta property="og:image" content="/img/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <Hero />
      <main className="">
        {/* <HomepageFeatures /> */}
        <ProjectSection />
        <UnderDevelopmentProjects />
        <About />
        <Teams />
        <Footer/>
      </main>
    </div>
  );
}
