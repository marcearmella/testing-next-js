import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

export default function Home({articles}) {
  return (
    <Layout title='Home'>
      <div className={styles.container}>
        <h1>Learning Next js</h1>
        <Link href='/about'>about</Link>
        <div className={styles.articles}>
          {articles?.length === 0 && <p>There are no articles</p>}
          {articles?.length > 0 && articles.map((article, index) => (
            <article key={index}>
              <img src={article.urlToImage} alt={`Image for the article ${article.title}`}/>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cf9aceca64cb4946a45abf3574feea27');
  const {articles} = await response.json();
  return {
    props: {
      articles
    }
  }
}