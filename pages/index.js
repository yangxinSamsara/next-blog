import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import Link from 'next/link'
import Date from '../components/date'
import cn from 'classnames'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={cn([utilStyles.headingLg, 'text-violet-600'])}>Blog</h2>
        <ul className={cn([utilStyles.list, 'flex flex-col lg:flex-row'])}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} border border-violet-400 rounded`} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <Alert type='success'>
        <h2>alert success</h2>
      </Alert>
      <Alert type='error'>
        <h2>alert error</h2>
      </Alert>
    </Layout>
  )
}
