---
title: Multiple Sidebars
id: multiple-sidebars
sidebar_label: Multiple Sidebars
description: A detailed overview of creating multiple sidebars in Sidebar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

### Adding multiple sidebars in our website

Adding multiple sidebars in our website allowed us to better organize our content and improve the navigation experience for our users. We created different [**categories**](adding-categories) in the sidebars for different sections of our website and added them to the appropriate pages.

**Here's a step-by-step guide on how the multiple sidebars were added to our [TCET Open Source](https://opensource.tcetmumbai.in/)  website.**

1. Locating the `sidebars.js` file in our project's root directory.

2. We already have our **sidebar** ready from the previous page. [See here](adding-items#adding-and-organizing-items-in-sidebar-categories)

    ```jsx title="sidebars.js" {13-14} showLineNumbers
    // Other sidebar properties
    type: 'category',
    label: 'Projects',
    link: 
    {
        type: 'generated-index',
        title: 'Project Docs',
        description: 'Official Documentation of all TCET Open Source projects',
        keywords: ['documentation, open-source'],
    },
    collapsed: false,
    items:  [
        'projects/docs-site/about-docs',
        'projects/tcet-linux/about-tcet-linux',
    ],
    // Other sidebar properties
    ```
### Adding nested categories

3. For creating multiple sidebars, we chose to categorize `Docs Site` in our `Projects` category such  that all the **children categories** of the category `Docs Site` stays inside it. 

    **Here's how we added a nested category in our `sidebars.js` file.**

    1. We needed to update the `projects/docs-site/about-docs` in the category of `Docs Site` such that whenever someone clicks on the `Docs Site` link, the [**About Docs**](../about-docs.md) section should be displayed.

    2. To do this we will have to add a new `category` labelled **'Docs Site'** in the `items` of the predefined category `Projects` and we have to link this doc's default page to [**About Docs**](../about-docs.md) page as mentioned in the earlier step.

        ```jsx title="sidebars.js" {19-27} showLineNumbers
        const sidebars = 
        {
            docs: 
            [
                'about-tcetopensource',
                {
                    type: 'category',
                    label: 'Projects',
                    link: 
                    {
                        type: 'generated-index',
                        title: 'Project Docs',
                        description: 'Official Documentation of all TCET Open Source projects',
                        keywords: ['documentation, open-source'],
                    },
                    collapsed: false,
                    items:  
                    [
                        {
                            type: 'category',
                            label: 'Docs Site',
                            link:
                            {
                                type: 'doc',
                                id: 'projects/docs-site/about-docs',
                            },
                        },
                    ],
                    // Other sidebar properties
                },
            ],
            // Other sidebar properties
        }
        module.exports = sidebars;
        ```

    _After following the steps mentioned above, we were able to create a nested category in our website's **Sidebar**._

:::tip 
Before moving forward to the next step, make sure you have referred the  basics of **adding items** in a sidebar category. [**See here**](adding-items)
:::


### Adding nested items in nested categories

4. Next, we had to define different categories in `items` of our newly defined category **Docs Site**.

    ```jsx title="sidebars.js" {27-46} showLineNumbers
    const sidebars = 
    {
        docs: 
        [
            'about-tcetopensource',
            {
                type: 'category',
                label: 'Projects',
                link: 
                {
                    type: 'generated-index',
                    title: 'Project Docs',
                    description: 'Official Documentation of all TCET Open Source projects',
                    keywords: ['documentation, open-source'],
                },
                collapsed: false,
                items:  
                [
                    {
                        type: 'category',
                        label: 'Docs Site',
                        link:
                        {
                            type: 'doc',
                            id: 'projects/docs-site/about-docs',
                        },
                        items: 
                        [
                            'projects/docs-site/getting-started',
                            {
                                type: 'category',
                                label: 'Navbar',
                                link:
                                {
                                    type: 'doc',
                                    id: 'projects/docs-site/navbar/navbar',
                                },
                                items: 
                                [ 
                                    'projects/docs-site/navbar/title-and-logo',
                                    'projects/docs-site/navbar/adding-items',
                                    'projects/docs-site/navbar/adding-links',
                                    'projects/docs-site/navbar/search-bar',
                                ],
                            },
                        ],
                    },
                ],
                // Other sidebar properties
            },
        ],
        // Other sidebar properties
    }
    module.exports = sidebars;
    ```   

    :::info
    If you look carefully at the highlighted codeblock above, you will notice that there is another category defined in the `items` array of the category `Docs Site`. This is because the **parent** category `Navbar` has various **child** `items` inside it. 
        - Getting Started
        - Navbar
            - Title and Logo
            - Items
            - Links
            - Search Bar

    **If you have any doubts in adding nested categories in items, [see here](#adding-nested-categories)**
    :::

<br />

    
5. Similarly for defining a new nested `category` in our sidebar, we referred **[Step 3-4](#adding-nested-categories)** for creating and adding **new categories and items** in our [**TCET Open Source**](https://opensource.tcetmumbai.in/) website's sidebar.
    
<br />

## Congratulations 🎊

_This marks the end of the project documentation on configuring the sidebar of [**TCET Open Source**](https://opensource.tcetmumbai.in/) website using the `sidebar.js` file._

**Here's a snapshot of how our sidebar looks after meeting all the requirements.**

import heroImg from "./assets/sidebar.png";

<img src={heroImg} style={{ border: "2px solid gray", display: "block", margin: "0 auto" }} />

<br />

:::info
In the upcoming section, we will delve into the process of configuring the `docusaurus.config.js` file, which is crucial for seamlessly integrating our previously created [**sidebar**](sidebar.md) with the [**navbar**](../navbar/navbar.md) of our website built using Docusaurus.

<i><b>Stay tuned for more updates!</b></i>
:::




    
    