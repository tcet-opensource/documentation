---
sidebar_position: 1
title: Navbar
id: navbar
sidebar_label: Navbar
description: A tutorial on Navbar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

A detailed overview on using navbars in our Documentation Website.


The **Navbar** in our [**TCET Open Source**](https://opensource.tcetmumbai.in/) is a responsive navigation bar that provides easy access to different sections of our documentation website. It is typically located at the top of the page and contains links to important pages such as the Home page, Documentation, Blog, and Search function.


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

### Adding items

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

    ```js title="docusaurus.config.js" {8-12} showLineNumbers
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


### Adding href to our Github repo:

1. Navigating to the `themeConfig` object in our Docusaurus configuration file.

2. Locating the `navbar` object within the `themeConfig` object.

3. Finding the `items` array within the `navbar` object.

4. Locating the object within the `items` array that has the `href` property.

    ```js title="docusaurus.config.js" {5-7} showLineNumbers
    themeConfig: {
        navbar: {
            items: [
                {
                    href: 'https://github.com/your-organization/your-repo',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
    },

5. Replacing the value of the href property with the URL of our organization's GitHub repo.

     ```js title="docusaurus.config.js" {5-7} showLineNumbers
    themeConfig: {
        navbar: {
            items: [
                {
                    href: 'https://github.com/tcet-opensource/documentation',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
    },
    ```

    :::info 
    We added the `position:'right'` to our `href` object because we wanted the link to be displayed on the right side of the `navbar`.
    :::

<br />

### Adding a search bar

We are continuously working on improving our website to provide the best user experience. As part of this effort, we will be adding a **search bar functionality** in the near future. 

This feature will make it easy for users to access the documentations and blogs on our website. Thank you for your patience and support as we strive to make our website more user-friendly and professional.

> **Here are the steps we plan to take to implement this functionality:**

1. Installing the `@docusaurus/plugin-search-local` package:

    ```bash
    npm install --save-dev @docusaurus/plugin-search-local
    ```
2. Adding the plugin to our `docusaurus.config.js` file:

    ```js title="docusaurus.config.js" {3-15} showLineNumbers
    module.exports = {
        // ...
        plugins: [
            [
                '@docusaurus/plugin-search-local',
                {
                    indexDocs: true, // Whether to index docs pages
                    indexBlog: true, // Whether to index blog pages
                    indexPages: true, // Whether to index static pages
                    docsRouteBasePath: '/docs', // Base path for the docs route
                    blogRouteBasePath: '/blog', // Base path for the blog route
                    language: ['en'], // Supported languages
                },
            ],
        ],
        // ...
        };
    ```

3. Adding the search bar to the navbar in our `themeConfig` file:

    ```js title="docusaurus.config.js" {10-11} showLineNumbers
    module.exports = {
        // ...
        themeConfig: {
            // ...
            navbar: {
                // ...
                items: [
                    // ...
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
        },
        // ...
    };
    ```

4. Building our site:

    ```bash
    npm run build
    ```

5. Running our site:

    ```bash
    npm run start
    ```



## Congratulations 🎊

Following these steps and points, we were able to create a beautiful and interactive navbar . It's final structure looks something like this:

import heroImg from "./navbar-1.png";

<img src={heroImg} />

<br />
<br />

_With this, we are pleased to announce that the **navbar feature has been successfully added to the our organizations's website**. You may have noticed that the navbar has a number of helpful links and features that make it simple to navigate the documentation._

We are convinced that by including search capabilities in the navbar, our users will reach the documentation and blog entries even more easily.

<br />


import Admonition from '@theme/Admonition';

<Admonition type="info" icon="📢" title="Annoucement">
    <br />
    <p>
        We're excited to share that the next page of our project documentation will include a detailed overview of the sidebars that we'll be incorporating. We believe that this will greatly enhance the user experience and make navigating our documentation even easier. <i><b>Stay tuned for more updates!</b></i>
    </p>
</Admonition>





