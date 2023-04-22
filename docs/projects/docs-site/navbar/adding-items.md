---
title: Items in Navbar
id: adding-items
sidebar_label: Items
description: A detailed overview of adding items in Navbar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

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

<br />

_Now that we had [**added items to our navbar**](adding-items), the next step was to start [**adding links**](adding-links) to connect our pages._