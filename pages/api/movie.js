import { server } from "../../config";
import axios from "axios";

export default async function handler(req, res) {
    if(!req.query.id) res.status(500).send();
    await axios(`${server}/${req.query.id}?api_key=${process.env.API_KEY}&language=fr-FR&page=1`).then( (response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send();
    });
}
