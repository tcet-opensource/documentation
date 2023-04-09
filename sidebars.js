// TCET Open Source Doc Site Sidebar Configuration

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.
  
  The Doc site's sidebar config is defined below and should be followed by maintainers 
  while adding another project.

 */

// @ts-check

//** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

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
        title: 'TCET Open Source Projects',
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
          ],
        },
      ],
    }
  ],
}

module.exports = sidebars;
