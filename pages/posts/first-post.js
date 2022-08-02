import { useState } from 'react'
// Link 客户端导航 比a标签导航更快 里面嵌套a链接 可以添加属性
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
export default function FirstPost() {
  let [count, setCount] = useState(0)
  return (
    <Layout>
      <Head>
        <title>post page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />

      <main>
        <h1 onClick={() => setCount(count + 1)}>first post{count}</h1>
        <h2>
          <Link href='/'>
            <a>Back to home with Link</a>
          </Link>
        </h2>
        <a href='/'>a链接回到首页</a>
        <br />
        <div>
          img:
          <img src='/vercel.svg' alt='image' />
        </div>
        <div>
          Image:
          <Image src='/vercel.svg' height={64} width={283} alt='image' />
        </div>
      </main>
    </Layout>
  )
}
