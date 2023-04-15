---
sidebar_position: 1
title: Navbar
id: navbar
sidebar_label: Navbar
description: A tutorial on Navbar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

A basic tutorial on using navbars in the Docs site.

## Features

**Creating a navbar is useful to:**

- **Navigation**:   Navbars help users navigate through the website easily by providing links to important pages such as the home page, documentation, blog, and contact page. This ensures that users can find the information they need quickly, improving their user experience.

- **Branding**: Navbars can also be used to showcase the brand of the website. By including a logo or brand name in the navbar, users can easily recognize the website and associate it with the brand.

- **Mobile Responsiveness**: Docusaurus comes with built-in responsive navbar, which means it automatically adjusts its layout to fit different screen sizes, making it easy to use on mobile devices.

- **Customization**: Navbars in Docusaurus are highly customizable, so you can change the colors, layout, and content to suit your specific needs. This allows you to create a unique user experience that aligns with your brand and messaging.


## Using Navbars
### Adding title and logo of the website
 
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
    :::note
    In our case we had the logo of our website at `/img/logo.png`
    :::

5. Save the `docusaurus.config.js` file.

6. Run `yarn start` or `npm start` to see the changes reflected in your local development environment.

<br />

### Adding items in the Navbar 

To add the labels of the Docs and Blog items in the navbar, we will need to modify the `items` array within the `navbar` object in the `themeConfig` object in your `docusaurus.config.js` file.

Here's how we made those changes:

1. Opening the `docusaurus.config.js` file in our project's root directory.

2. Locating the `themeConfig` object within the file. It should be defined as follows:

    ```js title="docusaurus.config.js"
        themeConfig: {
        // Your theme configuration goes here
        },
    ```

3. Finding the `navbar` property within the `themeConfig` object. This property contains configuration options for the navbar.

    ```js title="docusaurus.config.js" {8-12} showLineNumbers
    navbar: {
        // Other navbar properties go here
        title: 'TCET Open Source',
        logo: {
            alt: 'TCET Open Source Logo',
            src: 'img/logo.png',
        },
        items: [
            {
                // Other navbar properties go here
            },
        ],
        // Other navbar properties go here
    },
    ```

4. Locating the `items` property within the navbar object. This property is an array of objects that define the links in the navbar.

5. To add the `Docs` label to the `navbar`, we need to create a new object in the `items` array with the following properties:

    ```jsx title="docusaurus.config.js" {8-12} showLineNumbers
    {
        type: 'doc',
        docId: 'about-tcetopensource',
        sidebarId: 'docs',
        position: 'left',
        label: 'Docs',
    },
    ```

6.  To add the `Blog` label to the `navbar`, we need to create a new object in the `items` array with the following properties:

    ```jsx title="docusaurus.config.js" {8-12} showLineNumbers
    {
      to: '/blog',
      label: 'Blog',
      position: 'left',
    },
    ```
7. Saving the changes to our `docusaurus.config.js` file.


