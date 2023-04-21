---
sidebar_position: 1
title: Title and Logo in Navbar
id: title-and-logo
sidebar_label: Title and Logo
description: A detailed overview of adding title and logo in Navbar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

## Using Navbars
### Adding title and logo
 
To change the value of the `title` and `logo` in the navbar function, we need to edit the `themeConfig` object in the `docusaurus.config.js` file of our project.

Here's a step-by-step guide on how we made those changes:

1. Opening the `docusaurus.config.js` file in our project's root directory.

2. Locating the `themeConfig` object within the file. It should be defined as follows:

    ```js title="docusaurus.config.js"
    themeConfig: {
    // Your theme configuration goes here
    },
    ```
3. To change the title of the navbar, we located the `title` property within the `navbar` object, and updated its value to the desired title:

    ```js title="docusaurus.config.js" {3} showLineNumbers
    navbar: {
        // Other navbar properties go here
        title: 'TCET Open Source',
        // Other navbar properties go here
    },
    ```

4. To change the logo of the navbar, we located the `logo` object within the `navbar` object, and updated its `src` and `alt` properties to the desired logo image and alt text:

    ```js title="docusaurus.config.js" {3-5} showLineNumbers
    navbar: {
        // Other navbar properties go here
        logo: {
            alt: 'TCET Open Source Logo',
            src: 'img/logo.png',
        },
        // Other navbar properties go here
    },
    ```
    :::info
    In our case we had the logo of our website at `/img/logo.png`
    :::

5. Save the `docusaurus.config.js` file.

6. Run `yarn start` or `npm start` to see the changes reflected in your local development environment.

<br />

With the [**title and logo**](title-and-logo) completed, it's time we move onto [**adding items to our navbar**](adding-items).
