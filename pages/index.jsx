import Head from 'next/head'
import styles from '@/styles/Personal.module.css'
import Link from 'next/link'

export default  function Home() {

 return (
   <>
     <Head>
       <title>Mostrar Datos</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <header className={styles.Contenedor}>
       <h1>Tablas Disponibles</h1>
     </header>
     <main>
       <div>
         <Link href={"/mostrar1"}>
           <div className={styles.tarjeta}>
             <span className={styles.text}>Tabla 1</span>
           </div>
         </Link>
         <Link href={"/mostrar2"}>
           <div className={styles.tarjeta}>
             <span className={styles.text}>Tabla 2</span>
           </div>
         </Link>
       </div>
     </main>
   </>
 );
}
