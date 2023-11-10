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
      collapsed: true,
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
                  'projects/docs-site/sidebar/adding-categories',
                  'projects/docs-site/sidebar/adding-links',
                  'projects/docs-site/sidebar/adding-items',
                  'projects/docs-site/sidebar/multiple-sidebars',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'T&P Site',
          link: 
          {
            type: 'doc',
            id: 'projects/tnp-website/about-tnp-website',
          },
          items: 
          [
            'projects/tnp-website/directory-structure',
            'projects/tnp-website/getting-started',
            {
              type: 'category',
              label: 'Frontend Components',
              link:
              {
                type: 'doc',
                id: 'projects/tnp-website/frontend-components/tech-stacks',
              },
              items: 
              [
                'projects/tnp-website/frontend-components/header',
                'projects/tnp-website/frontend-components/hero',
                'projects/tnp-website/frontend-components/training',
                'projects/tnp-website/frontend-components/attendance-chart',
                'projects/tnp-website/frontend-components/placement',
                'projects/tnp-website/frontend-components/top-placed-students',
                'projects/tnp-website/frontend-components/placed-students',
                'projects/tnp-website/frontend-components/student-award',
                'projects/tnp-website/frontend-components/testimonials',
                'projects/tnp-website/frontend-components/internships',
                'projects/tnp-website/frontend-components/industry-interaction',
                'projects/tnp-website/frontend-components/event-page',
                'projects/tnp-website/frontend-components/companies',
                'projects/tnp-website/frontend-components/top-recruiters',
                'projects/tnp-website/frontend-components/about-us',
                'projects/tnp-website/frontend-components/footer',
              ],
            },    
          ],
        },
        {
          type: 'category',
          label: 'Fill My Cycle Website',
          link: 
          {
            type: 'doc',
            id: 'projects/fmc-website/about-fmc-website',
          },
          items: 
          [
            'projects/fmc-website/getting-started',
            {
              type: 'category',
              label: 'Components',
              link:
              {
                type: 'doc',
                id: 'projects/fmc-website/components/tech-stacks',
              },
              items: 
              [
                'projects/fmc-website/components/header-help',
                'projects/fmc-website/components/defining-cycle',
                'projects/fmc-website/components/displaying-cycle',
                'projects/fmc-website/components/cycle-result',
                'projects/fmc-website/components/button-instructions',
                'projects/fmc-website/components/footer',
              ],
            },
            {
              type: 'category',
              label:  'Mathematical Logic',
              link:
              {
                type: 'doc',
                id: 'projects/fmc-website/mathematical-logic/scripts',
              },
              items:
              [
                'projects/fmc-website/mathematical-logic/calculation',
                'projects/fmc-website/mathematical-logic/checker',
                'projects/fmc-website/mathematical-logic/average',
                'projects/fmc-website/mathematical-logic/perform',
                'projects/fmc-website/mathematical-logic/table-updater',
                'projects/fmc-website/mathematical-logic/table-row-updater',
                'projects/fmc-website/mathematical-logic/input-handler',
                'projects/fmc-website/mathematical-logic/table-calculator',
                'projects/fmc-website/mathematical-logic/table-manager',
                'projects/fmc-website/mathematical-logic/table-transformation',
                'projects/fmc-website/mathematical-logic/page-interaction',
              ],
            },    
          ],
        },
        {
          type: 'category',
          label: 'Resume Screener Website',
          link: 
          {
            type: 'doc',
            id: 'projects/resume-screener-website/about-resume-screener-website',
          },
          items: 
          [
            'projects/resume-screener-website/getting-started',
            {
              type: 'category',
              label: 'Frontend Components',
              link:
              {
                type: 'doc',
                id: 'projects/resume-screener-website/frontend-components/tech-stacks',
              },
              items: 
              [
                'projects/resume-screener-website/frontend-components/header',
                'projects/resume-screener-website/frontend-components/hero',
                'projects/resume-screener-website/frontend-components/about-us',
                'projects/resume-screener-website/frontend-components/guideline',
                'projects/resume-screener-website/frontend-components/ats-resume-template',
                'projects/resume-screener-website/frontend-components/ats-resume-test-scan',
                'projects/resume-screener-website/frontend-components/card',
                'projects/resume-screener-website/frontend-components/footer',
              ],
            },    
          ],
        },
        {
          type: 'category',
          label: 'TCET Linux Website',
          link: 
          {
            type: 'doc',
            id: 'projects/tcet-linux-website/about-tcet-linux-website',
          },
          items: 
          [
            'projects/tcet-linux-website/getting-started',
            {
              type: 'category',
              label: 'Frontend Components',
              link:
              {
                type: 'doc',
                id: 'projects/tcet-linux-website/frontend-components/tech-stacks',
              },
              items: 
              [
                'projects/tcet-linux-website/frontend-components/navbar',
                'projects/tcet-linux-website/frontend-components/footer',
                'projects/tcet-linux-website/frontend-components/copy-to-clipboard',
                'projects/tcet-linux-website/frontend-components/download-section',
                'projects/tcet-linux-website/frontend-components/hero',
                'projects/tcet-linux-website/frontend-components/installation-steps',
                'projects/tcet-linux-website/frontend-components/verify-downloads', 
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
            'projects/tcet-linux/about-tcet-linux',
            'projects/tcet-linux/idea-behind-creating-tcet-linux',
            'projects/tcet-linux/variants-releases',
            {
              type: 'category',
              label: 'Installation Steps',
              link:
              {
                type: 'doc',
                id: 'projects/tcet-linux/installation/requirements-download-verify',
              },
              items: 
              [
                'projects/tcet-linux/installation/installation-in-drive',
                'projects/tcet-linux/installation/installation-in-vm',
                'projects/tcet-linux/installation/installation-steps',
                'projects/tcet-linux/installation/troubleshoot-installation',
              ],
            },
            {
              type: 'category',
              label: 'Guides',
              link:
              {
                type: 'doc',
                id: 'projects/tcet-linux/guides/getting-started',
              },
              items: 
              [
                'projects/tcet-linux/guides/install-remove-update-package',
                'projects/tcet-linux/guides/alias-commands',
                'projects/tcet-linux/guides/system-maintenance',
		'projects/tcet-linux/guides/yay',
                {
                  type: 'category',
                  label: 'Application',
                  link:
                  {
                    type: 'doc',
                    id: 'projects/tcet-linux/guides/application/getting-started-with-application',
                  },
                  items: 
                  [
                    'projects/tcet-linux/guides/application/welcome-app',
                    'projects/tcet-linux/guides/application/troubleshoot-application',
                  ],
                },
              ],
            },
            'projects/tcet-linux/contribute-tcet-linux',
            'projects/tcet-linux/resources',
            // {
            //   type: 'category',
            //   label: 'ISO Profile',
            //   link:
            //   {
            //     type: 'doc',
            //     id: 'projects/tcet-linux/iso-profile/iso-profile',
            //   },
            //   items: 
            //   [
            //     'projects/tcet-linux/iso-profile/rootfs',
            //     'projects/tcet-linux/iso-profile/bootloaders',
            //     'projects/tcet-linux/iso-profile/scripts',
            //   ],
            // },

            /*As rootfs, bootloaders and scripts aren't documented
            the above category is commented out and replaced
            with the route below.
            
            Once the above files are completed, uncomment the above routes
            and delete the route below*/

            'projects/tcet-linux/iso-profile/iso-profile',
            'projects/tcet-linux/references-credits',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      link: 
      {
        type: 'generated-index',
        title: 'Resources',
        description: 'Resources created by the Organization to understand our workflow.',
        keywords: ['organization, resources'],
      },
      collapsed: true,
      items: 
      [
        {
          type: 'category',
          label: 'Workflows',
          link: 
          {
            type: 'generated-index',
            title: 'Workflows',
            description: 'Workflows are practiced within an Organization to ensure that all contributions done are as per a given set of practices to have quality code and proper communication with the maintainers. All contributions are welcome in TCET Open Source as long as the workflows are followed: from coding practices of every project to pushing changes on GitHub. Our Organization follows the below mentioned workflows whether you are a part of our Teams or contributing from outside the Organization and expect everyone to follow the same.',
            keywords: ['organization, workflow'],
          },
          items: 
          [
            'resources/workflows/internal-workflow/internal-workflow',
            'resources/workflows/external-workflow/external-workflow',
          ],
        },
      ],
    }
  ],
}

module.exports = sidebars;
