import { server } from "../../config";
import axios from "axios";

export default async function handler(req, res) {
  await axios.get(`${server}/${req.query.id}/videos?api_key=${process.env.API_KEY}&language=fr-FR`).then((response) => {
    res.status(200).json(response.data.results[0].key);
  }).catch((error) => {
    
    res.status(500).send();
  });
}
