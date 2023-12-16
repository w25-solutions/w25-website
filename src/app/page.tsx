import styles from './page.module.scss';
import Head from "next/head";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>W25 - Discover the Future, Build the Now</title>
        </Head>
        <header>
          <div className={styles.wrapper}>
            <div>
              <div>
                <b>W25</b>
              </div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </header>
        <main>
          <div className={styles.cta}>
            <h2>Discover the Future, Build the Now</h2>
            <p>
              At our company, our mission is to revolutionize how individuals and businesses interact with technology.
            </p>
            <p>
              We are dedicated to creating innovative products that automate and optimize tasks, enhancing efficiency and productivity. Our vision is to set the standard for automation and optimization, both personally and professionally.
            </p>
            <p>
              Our commitment to innovation, customer-centric design, and efficiency drives us to empower businesses and improve the quality of life. We value sustainability, adaptability, collaboration, integrity, and maintain a global perspective in all we do.
            </p>
          </div>
        </main>
        <footer>
          <p>
            💡 🚀
          </p>
        </footer>
      </div>
  )
}
