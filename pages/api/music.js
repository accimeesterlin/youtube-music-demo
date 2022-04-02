// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';


export default async function handler(req, res) {
    try {
        const { data } = await axios("https://openwhyd.org/adrien?format=json");
        console.log("Data: ", data)
        return res.status(200).json({ response: [...data] })

    } catch (error) {
        return res.status(500).json({ error: error?.response?.data })
    }
}
