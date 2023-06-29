import { ApiKey } from "@prisma/client"
import { ZodIssue } from "zod"

export interface CreateApiData {
    createdApiKey: ApiKey | null
    error: string | ZodIssue[] | null
}

export interface RevokeApiData {
    error: string | ZodIssue[] | null
    sucess: boolean
}