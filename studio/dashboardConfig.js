export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edf9c2fc8317c84a5b17433',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vwe5b97w',
                  apiId: '8a8ea6e9-a22c-45ed-b719-160ab3b5a828'
                },
                {
                  buildHookId: '5edf9c2fe1d021c7e7bf228e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f16g57m5',
                  apiId: 'ce048167-e631-4948-93df-c988d2ef9265'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/udiWix/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f16g57m5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
