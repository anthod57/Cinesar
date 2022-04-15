import { server } from "../../config";
import axios from "axios";
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if(!req.query.from) res.status(500).send();

    await axios(`${server}/${req.query.from}?api_key=${process.env.API_KEY}&language=fr-FR&page=1`).then( (response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send();
    });
}
