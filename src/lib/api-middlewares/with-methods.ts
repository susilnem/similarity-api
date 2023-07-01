import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

export function withMethods(handler: NextApiHandler, methods: string[]) {
    return async function (req: NextApiRequest, res: NextApiResponse) {
        if (!req.method || !methods.includes(req.method)) {
            res.setHeader("Allow", methods)
            return res.status(405).end(`Method ${req.method} Not Allowed`)
        }
        
        return handler(req, res)
    }
}