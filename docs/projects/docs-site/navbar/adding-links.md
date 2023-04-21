---
sidebar_position: 1
title: Links in Navbar
id: adding-links
sidebar_label: Links
description: A detailed overview of adding href links in Navbar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

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

With the [**links**](adding-links) in place, we then move forward to create the [**search bar**](search-bar) for our navbar.