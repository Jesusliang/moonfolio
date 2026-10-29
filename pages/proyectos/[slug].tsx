import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next/pages'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../../components/ui/Reveal'
import TagList from '../../components/ui/TagList'
import LangSwitch from '../../components/ui/LangSwitch'
import DeviceMockup from '../../components/project/DeviceMockup'
import { nextProject, projectBySlug, projects } from '../../data/projects'
import styles from '../../components/project/ProjectDetail.module.scss'

interface Props {
  slug: string
}

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '')

const ProjectPage: NextPage<Props> = ({ slug }: Props) => {
  const { t } = useTranslation()
  const project = projectBySlug(slug)!
  const next = nextProject(project)
  const key = (field: string) => `projects.${project.id}.${field}`
  const title = t(key('title'))
  const built = t(key('built'), { returnObjects: true }) as string[]
  const metric = t(key('metric'), { defaultValue: '' })

  return (
    <>
      <Head>
        <title>{`${title} — Jesus Liang`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t(key('summary'))} />
        <meta property="og:title" content={`${title} — Jesus Liang`} />
        <meta property="og:description" content={t(key('summary'))} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.top}>
        <div className={`container ${styles.topInner}`}>
          <Link href="/#sky" className={styles.back}>
            <FiArrowLeft aria-hidden /> {t('nav.back')}
          </Link>
          <Link href="/" className="display">
            JESUS LIANG
          </Link>
          <LangSwitch />
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <Reveal>
              <p className={`mono ${styles.category}`}>
                {t(key('category'))} · {project.company}
              </p>
              <h1 className={`display ${styles.title}`}>{title}</h1>
              <p className={styles.summary}>{t(key('summary'))}</p>
            </Reveal>
            <Reveal delay={100}>
              <dl className={styles.meta}>
                <div>
                  <dt>{t('project.role')}</dt>
                  <dd>{t(key('role'))}</dd>
                </div>
                <div>
                  <dt>{t('project.company')}</dt>
                  <dd>{project.company}</dd>
                </div>
                <div>
                  <dt>{t('project.period')}</dt>
                  <dd>{t(key('period'))}</dd>
                </div>
                {metric && (
                  <div>
                    <dt>{t('project.impact')}</dt>
                    <dd className={styles.metric}>{metric}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </section>

        <section className={styles.body}>
          <div className={`container ${styles.mockup}`}>
            <Reveal>
              <DeviceMockup media={project.media} title={title} />
            </Reveal>
          </div>

          <div className={`container ${styles.content}`}>
            <Reveal className={styles.block}>
              <h2 className={`mono ${styles.blockLabel}`}>{t('project.challenge')}</h2>
              <p className={styles.challenge}>{t(key('challenge'))}</p>
            </Reveal>
            <Reveal className={styles.block}>
              <h2 className={`mono ${styles.blockLabel}`}>{t('project.built')}</h2>
              <ol className={styles.built}>
                {built.map((item, i) => (
                  <li key={item}>
                    <span className={`display ${styles.index}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className={styles.block}>
              <h2 className={`mono ${styles.blockLabel}`}>{t('project.stack')}</h2>
              <TagList tags={project.tags} className={styles.tags} />
              {project.links && (
                <ul className={styles.links}>
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <span>{t(`project.links.${link.kind}`)}</span>
                        {hostOf(link.url)}
                        <FiArrowUpRight aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>

        <Link href={`/proyectos/${next.slug}`} className={styles.next}>
          <div className={`container ${styles.nextInner}`}>
            <div>
              <p className={`mono ${styles.nextLabel}`}>{t('project.next')}</p>
              <p className={`display ${styles.nextTitle}`}>{t(`projects.${next.id}.title`)}</p>
            </div>
            <FiArrowRight className={styles.nextArrow} aria-hidden />
          </div>
        </Link>
      </main>
    </>
  )
}

export default ProjectPage

export const getStaticPaths: GetStaticPaths = async ({ locales = ['es'] }) => ({
  paths: locales.flatMap((locale) => projects.map(({ slug }) => ({ params: { slug }, locale }))),
  fallback: false
})

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
  const slug = params?.slug as string
  if (!projectBySlug(slug)) return { notFound: true }
  return {
    props: {
      slug,
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}
