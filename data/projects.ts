export type ProjectId = 'rms' | 'ai' | 'pms' | 'booking' | 'checkin' | 'crm' | 'leaderslinked'

export interface ProjectLink {
  kind: 'product' | 'client'
  url: string
}

export type ProjectMedia =
  | { type: 'rms' }
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
    id: 'rms',
    slug: 'revenue-management-ia',
    company: 'Availroom',
    tags: ['TypeScript', 'Node.js', 'Fastify', 'Python', 'PostgreSQL', 'Redis', 'BullMQ'],
    media: { type: 'rms' },
    featured: true
  },
  {
    id: 'ai',
    slug: 'plataforma-omnicanal-ia',
    company: 'Availroom',
    tags: ['Node.js', 'TypeScript', 'OpenAI API', 'RabbitMQ', 'WebSockets', 'PostgreSQL', 'MongoDB'],
    media: { type: 'chat' },
    featured: true
  },
  {
    id: 'pms',
    slug: 'pms-channel-manager',
    company: 'Availroom',
    tags: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'Node.js', 'WebSockets', 'Microservices'],
    media: { type: 'browser', poster: '/images/availroomOs.webp', video: '/videos/os-demo.mp4' },
    links: [{ kind: 'product', url: 'https://www.availroom.com/productos/pms-vrms' }],
    featured: true
  },
  {
    id: 'booking',
    slug: 'motor-de-reservas',
    company: 'Availroom',
    tags: ['Next.js', 'React', 'TypeScript', 'Shadow DOM', 'WordPress SSR', 'GraphQL'],
    media: {
      type: 'browser',
      poster: '/images/bookingWidget.webp',
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
    tags: ['React', 'TypeScript', 'Claude / OpenAI API', 'REST', 'OCR', 'IoT'],
    media: { type: 'phone', poster: '/images/checkin.webp', video: '/videos/checkin-demo.mp4' },
    links: [{ kind: 'product', url: 'https://www.availroom.com/productos/app-huesped-availguest' }],
    featured: false
  },
  {
    id: 'crm',
    slug: 'crm-predictivo',
    company: 'Availroom',
    tags: ['Next.js', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io'],
    media: { type: 'browser', poster: '/images/crm.webp' },
    featured: false
  },
  {
    id: 'leaderslinked',
    slug: 'leaders-linked',
    company: 'CESA Management Solutions',
    tags: ['React', 'Webpack', 'jQuery', 'PHP'],
    media: { type: 'browser', poster: '/images/leaderslinked.webp' },
    links: [
      { kind: 'product', url: 'https://cesams.com/lms-plataformas-de-gestion-de-la-capacitacion/' }
    ],
    featured: false
  }
]

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const nextProject = (project: Project) =>
  projects[(projects.indexOf(project) + 1) % projects.length]
