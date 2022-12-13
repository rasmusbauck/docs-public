import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
// import * from "@docusaurus/plugin-content-docs"

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container lp-container">
        <div className="landing-page">
          <div className="information">
            <h1 className="hero__title">
              Dokumentasjon <br />for dataplattformen Saga
            </h1>
            <p>
              På disse sidene finner du:
            </p>
            <ul>
              <li><a href="/google-cloud-platform">Hva Saga er og hvordan du kommer i gang</a></li>
              <li><a href="/utvikling-paa-saga">Utvikling på Saga</a></li>
              <li><a href="/bigquery">Analyse i BigQuery</a></li>
              <li><a href="/eksempler">Eksempler du kan gjenbruke</a></li>
              <li><a href="/utforsking-av-persondata">Hvordan du utforsker persondata</a></li>
              <li><a href="/hvordan-bygge-pipelines-i-saga">Hvordan du bygger pipelines</a></li>
            </ul>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary"
                style={{ textTransform: 'uppercase' }}
                to="/intro">
                Utforsk dokumentasjonen
              </Link>
            </div>
          </div>
          <div className='landing-page-figure'> 
            <img className="landing-page-figure-img" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
