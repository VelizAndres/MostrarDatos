import { dataBase } from "./bd";

export const getUser = async () => {
  try {
    if(dataBase.state === "disconnected")
    {
      dataBase.connect();
      console.log("Conectado");
    }
    return await new Promise((resolve, reject) => {
      dataBase.query("SELECT * FROM usuarios", (err, data) =>
        err ? reject(err) : resolve(data)
      );
    });
  } catch (error) {
    console.log("Script 1", error);
    return [];
  }
};

export const getCarros = async () => {
  try {
    if(dataBase.state === "disconnected")
    {
      dataBase.connect();
      console.log("Conectado");
    }
    return await new Promise((resolve, reject) => {
      dataBase.query("SELECT * FROM carros", (err, data) =>
        err ? reject(err) : resolve(data)
      );
    });
  } catch (error) {
    console.log("Script 2", error);
    return [];
  }
};

