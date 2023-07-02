import { getUser } from "@/Storage/consultar";

export default async function Usuarios(req, res) {
  try{
    if (req.method === "GET")
    {
      const data = await getUser();
      res.status(200).json({data})
    }
  }
  catch (error)
  {
    console.log("Error", error)
    res.status(500).json({error})
  }  
}
