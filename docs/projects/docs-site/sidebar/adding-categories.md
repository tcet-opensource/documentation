---
title: Category in Sidebars
id: adding-categories
sidebar_label: Category
description: A detailed overview of creating categories in Sidebar of TCET Open Source Website
keywords: [tcet, open-source, software]
---

### Adding categories in sidebars

To add the category of the Docs and Blog items in the `sidebar`, we modified the `sidebar.js` file in the root directory of our project.

**Here's how we made those changes:**

1. Opening the `sidebars.js` file in our projects's root directory.

2. To add a new category, we first created an array `docs`, in which we created an object with the `type` property set to `'category'`, the `label` prperty set to the name of the `'category'`.

    ```jsx title="sidebars.js" {6} showLineNumbers
    const sidebars = 
    {
        docs: 
        [
            {
                type: 'category',
                label: 'Category',
                // Other sidebar properties
            },
        ],
        // Other sidebar properties
    }
    module.exports = sidebars;
    ```

3. Adding the different categories and labels in our `sidebars.js` file.

    ```jsx title="sidebars.js" {6-7,10-11} showLineNumbers
    const sidebars = 
    {
        docs: 
        [
            {
                type: 'category',
                label: 'Projects',
            },
        ],
        // Other sidebar properties
    }
    module.exports = sidebars;
    ```


With this we were able to add different **categories** in our website's sidebars.


_After completing the sidebar categories of [**TCET Open Source**](https://opensource.tcetmumbai.in/) website, we then shifted our focus to review and [**organize the items**](adding-items) within each category._