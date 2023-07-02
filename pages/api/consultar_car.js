import { getCarros } from "@/Storage/consultar";

export default async function Carros(req, res) {
  try{
    if (req.method === "GET")
    {
      const data = await getCarros();
      res.status(200).json({data})
    }
  }
  catch (error)
  {
    console.log("Error", error)
    res.status(500).json({error})
  }  
}
