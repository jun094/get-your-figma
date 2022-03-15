import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    const body = req.body;

    console.log(body);

    try {
        // const auth = new google.auth.GoogleAuth({
        //     credentials: {
        //         client_email: process.env.GOOGLE_CLIENT_EMAIL,
        //         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        //     },
        //     scopes: [
        //         'https://www.googleapis.com/auth/drive',
        //         'https://www.googleapis.com/auth/drive.file',
        //         'https://www.googleapis.com/auth/spreadsheets',
        //     ],
        // });

        // const sheets = google.sheets({
        //     auth,
        //     version: 'v4',
        // });

        // const response = await sheets.spreadsheets.values.append({
        //     spreadsheetId: process.env.GOOGLE_SHEET_ID,
        //     range: 'A1:E1',
        //     valueInputOption: 'USER_ENTERED',
        //     requestBody: {
        //         values: [[body.node_id, body.name, body.ko, body.en, body.ja]],
        //     },
        // });

        // console.log('response', response);

        return res.status(201).json({
            data: process.env,
        });
    } catch (e: any) {
        return res.status(e.code).send({
            message: 'asdfasdfasdf',
        });
    }
}
