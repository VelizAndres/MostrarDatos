import styles from "@/styles/Personal.module.css";
const Tabla = ({ Valor, Head }) => {
  const celdas = (obj) => {
    let valores = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        valores.push(
          <td key={obj["Id"] + obj[key]} className={styles.celda}>
            {obj[key]}
          </td>
        );
      }
    }
    return valores;
  };

  const Listar = Valor.map((item) => <tr key={item.Id}>{celdas(item)}</tr>);
  const Headers = Head.map((item) => <td key={item} className={styles.celda}>{item}</td>);

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>{Headers}</tr>
      </thead>
      <tbody>{Listar}</tbody>
    </table>
  );
};

export default Tabla;
