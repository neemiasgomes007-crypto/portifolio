// mock client to return real projects
export const base44 = {
  entities: {
    Project: {
      list: async (order) => {
        // return real projects list
        return Promise.resolve([
          {
            id: '1',
            title: 'Café do Geremias',
            description: 'Site elegante para cafeteria com design moderno e responsivo. Interface intuitiva para apresentação de produtos e cardápio.',
            url: 'https://neemiasgomes007-crypto.github.io/cafedogeremias/',
            // imagens estáticas devem ficar em /public/images
            image_url: '/images/cafe-do-neemias.png',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo']
          },
          {
            id: '2',
            title: 'Starbuck Clone',
            description: 'Clone da interface do Starbucks com animações suaves e design fiel. Demonstração de habilidades em replicar interfaces complexas.',
            url: 'https://neemiasgomes007-crypto.github.io/starbuckneemias/',
            image_url: '/images/capa-starbucks.png',
            tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX']
          },
          {
            id: '3',
            title: 'Site da Rose',
            description: 'Site portfólio moderno com design clean e efeitos visuais elegantes. Hospedado na Vercel com performance otimizada.',
            url: 'https://rose-lime-seven.vercel.app/',
            image_url: 'https://opengraph.githubassets.com/1/neemiasgomes007-crypto/rose-portfolio',
            tags: ['React', 'Next.js', 'Tailwind', 'Vercel']
          }
        ])
      }
    }
  }
}
