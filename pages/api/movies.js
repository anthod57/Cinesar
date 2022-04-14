import { server } from "../../config";
import axios from "axios";

export default async function handler(req, res) {
    if(!req.query.from) res.status(500).send("Error");

    const data = await axios(`${server}/${req.query.from}?api_key=${process.env.API_KEY}&language=fr-FR&page=1`);

    res.status(200).json(data.data);
}
