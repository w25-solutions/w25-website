import styles from './page.module.scss';
import Button from "@/components/button/button";

export default function Home() {
  return (
      <div className={styles.container}>
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
              <a href="https://k81wwyjyzxu.typeform.com/to/moje9xeW" target="_blank">
                <Button>Orçamento</Button>
              </a>
            </div>
          </div>
        </header>
        <main>
          <div className={styles.cta}>
            <h2>Solucionando desafios Únicos com Softwares Personalizados</h2>
            <p>Sua empresa merece soluções que se encaixem perfeitamente em suas necessidades</p>
          </div>
          <p>Entre em contato pelo e-mail contato@w25.com.br</p>
          <div className={styles.right}>
            <a href="mailto:contato@w25.com.br">
              <Button>Enviar E-mail</Button>
            </a>
            &nbsp;&nbsp;
            <a href="https://k81wwyjyzxu.typeform.com/to/moje9xeW" target="_blank">
              <Button>Solicitar Orçamento</Button>
            </a>
          </div>
        </main>
        <footer>
          <p>
            <a href="/">contato@w25.com.br</a>
          </p>
          <p>
            São José do Rio Preto - SP
          </p>
        </footer>
      </div>
  )
}
