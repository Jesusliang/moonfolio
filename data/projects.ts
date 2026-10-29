export type ProjectId = 'ai' | 'pms' | 'booking' | 'checkin' | 'crm' | 'leaderslinked'

export interface ProjectLink {
  kind: 'product' | 'client'
  url: string
}

export type ProjectMedia =
  | { type: 'chat' }
  | { type: 'browser'; poster: string; video?: string }
  | { type: 'phone'; poster: string; video?: string }

export interface Project {
  id: ProjectId
  slug: string
  company: string
  tags: string[]
  media: ProjectMedia
  links?: ProjectLink[]
  /** Shown as a large card in the Sky section of the landing. */
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'ai',
    slug: 'plataforma-omnicanal-ia',
    company: 'Availroom',
    tags: ['Node.js', 'TypeScript', 'OpenAI API', 'WebSockets', 'MongoDB', 'AWS'],
    media: { type: 'chat' },
    featured: true
  },
  {
    id: 'pms',
    slug: 'pms-channel-manager',
    company: 'Availroom',
    tags: ['React', 'Redux', 'Reselect', 'Node.js', 'WebSockets', 'Microservices'],
    media: { type: 'browser', poster: '/images/availroomOs.png', video: '/videos/os-demo.mp4' },
    links: [{ kind: 'product', url: 'https://www.availroom.com/productos/pms-vrms' }],
    featured: true
  },
  {
    id: 'booking',
    slug: 'motor-de-reservas',
    company: 'Availroom',
    tags: ['React', 'TypeScript', 'Webpack', 'GraphQL'],
    media: {
      type: 'browser',
      poster: '/images/bookingWidget.png',
      video: '/videos/booking-demo.mp4'
    },
    links: [
      { kind: 'product', url: 'https://www.availroom.com/productos/motor-de-reservas' },
      { kind: 'client', url: 'https://gestaltur.es/' },
      { kind: 'client', url: 'https://www.elbulin.es/' },
      { kind: 'client', url: 'https://novadesta.eu/' }
    ],
    featured: true
  },
  {
    id: 'checkin',
    slug: 'check-in-domotica',
    company: 'Availroom',
    tags: ['Next.js', 'React', 'TypeScript', 'REST', 'OCR', 'IoT'],
    media: { type: 'phone', poster: '/images/checkin.png', video: '/videos/checkin-demo.mp4' },
    links: [{ kind: 'product', url: 'https://www.availroom.com/productos/app-huesped-availguest' }],
    featured: true
  },
  {
    id: 'crm',
    slug: 'crm-predictivo',
    company: 'Availroom',
    tags: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    media: { type: 'browser', poster: '/images/crm.png' },
    featured: false
  },
  {
    id: 'leaderslinked',
    slug: 'leaders-linked',
    company: 'CESA Management Solutions',
    tags: ['React', 'Webpack', 'jQuery', 'PHP'],
    media: { type: 'browser', poster: '/images/leaderslinked.png' },
    links: [
      { kind: 'product', url: 'https://cesams.com/lms-plataformas-de-gestion-de-la-capacitacion/' }
    ],
    featured: false
  }
]

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const nextProject = (project: Project) =>
  projects[(projects.indexOf(project) + 1) % projects.length]
