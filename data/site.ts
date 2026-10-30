export const site = {
  name: 'Jesus Liang',
  email: 'mail@jesusliang.com',
  linkedin: 'https://linkedin.com/in/jesus-liang',
  resume: {
    es: '/files/jesusliang_desarrollador.pdf',
    en: '/files/jesusliang_developer.pdf'
  } as Record<string, string>
}

export const resumeFor = (locale?: string) => site.resume[locale ?? 'es'] ?? site.resume.es

export const ogImageFor = (locale?: string) =>
  `https://jesusliang.com/images/og-${locale === 'en' ? 'en' : 'es'}.png`
