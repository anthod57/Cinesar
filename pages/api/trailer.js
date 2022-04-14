import { server } from "../../config";
import axios from "axios";

export default async function handler(req, res) {
  const data = await axios(`${server}/${req.query.id}/videos?api_key=${process.env.API_KEY}&language=fr-FR`);
  const key = data.data.results[0].key;
  res.status(200).json(key);
}
