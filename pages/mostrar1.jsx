import Head from "next/head";
import styles from "@/styles/Personal.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Tabla from "@/Componentes/Tabla";
import { variables } from "@/Storage/ip";

export default function Home() {
  const [Cambio, setCambio] = useState(false);
  const Valor = useRef([]);
  const columnas = ["Id", "Nombre", "Apellido", "Correo", "Genero"];

  useEffect(() => {
    async function fetchData() {
      const rest = await fetch(
        "http://" + variables[0].ip + "/api/consultar_user"
      );
      const data = await rest.json();
      Valor.current = data.data;
    }
    const interval = setInterval(() => {
      fetchData();
      setCambio((Cambio) => !Cambio);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Datos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.Contenedor}>
        <h1>Tabla User</h1>
      </header>
      <main className={styles.Contenedor}>
        <div>
          {Valor.current.length === 0 ? (
            <div>Sin datos</div>
          ) : (
            <Tabla Valor={Valor.current} Head={columnas} />
          )}
        </div>
      </main>
      <Link href={"/"}>
        <div className={styles.tarjeta}>
          <span className={styles.text}>Menu</span>
        </div>
      </Link>
    </>
  );
}
