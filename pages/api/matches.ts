import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { leagueType, currentDate } = req.body;

    const headers = {
        'X-Auth-Token': process.env.API_TOKEN
    };

    const response = await axios.get(`https://api.football-data.org/v4/competitions/${leagueType}/matches?dateTo=${currentDate}&dateFrom=${currentDate}`, { headers });
    res.status(200).json(response.data);
}