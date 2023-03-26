import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { GraphQLClient,gql } from 'graphql-request'

const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clfplfp1a0pt301ur3v4weli0/master")

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     
    </main>
  )
}
