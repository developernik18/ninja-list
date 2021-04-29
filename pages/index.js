import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className={styles.container}>

        <h1 className={styles.title}>Just a homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolores eum error odit cupiditate assumenda soluta recusandae iure. Possimus eaque maxime id nobis, beatae quaerat. Adipisci ut vitae qui quis.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolores eum error odit cupiditate assumenda soluta recusandae iure. Possimus eaque maxime id nobis, beatae quaerat. Adipisci ut vitae qui quis.</p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a> 
        </Link>

      </div>
    </>
    )
}
