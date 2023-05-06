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
                [ 
                  'projects/docs-site/navbar/title-and-logo',
                  'projects/docs-site/navbar/adding-items',
                  'projects/docs-site/navbar/adding-links',
                  'projects/docs-site/navbar/search-bar',
                ],
              ],
            },
            {
              type: 'category',
              label: 'Sidebar',
              link:
              {
                type: 'doc',
                id: 'projects/docs-site/sidebar/sidebar',
              },
              items: 
              [
                [ 
                  'projects/docs-site/sidebar/adding-categories',
                  'projects/docs-site/sidebar/adding-links',
                  'projects/docs-site/sidebar/adding-items',
                  'projects/docs-site/sidebar/multiple-sidebars',
                ],
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'TCET Linux',
          link: 
          {
            type: 'doc',
            id: 'projects/tcet-linux/about-tcet-linux',
          },
          items: 
          [
            'projects/tcet-linux/getting-started',
            {
              type: 'category',
              label: 'ISO Profile',
              link:
              {
                type: 'doc',
                id: 'projects/tcet-linux/iso-profile/iso-profile',
              },
              items: 
              [
                [ 
                  'projects/tcet-linux/iso-profile/rootfs',
                  'projects/tcet-linux/iso-profile/bootloaders',
                  'projects/tcet-linux/iso-profile/scripts',
                ],
              ],
            },
          ],
        },
      ],
    }
  ],
}

module.exports = sidebars;
