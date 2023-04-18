import { SignUpValidation } from '@/utils/validations'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    try {
        await SignUpValidation.validate(req.body)
        res.status(201).send({
            message: 'ok', data: {
                userData: {
                    username: req.body.username,
                    email: req.body.email,
                    status: 201
                },
                token: "18ae4dd1e3db1d49a738226169e3b099325c79a0"
            }
        })
    } catch (error: any) {
        console.log(error.errors)
        res.status(401).send({ message: 'error', data: [error.errors] })
    }

}
