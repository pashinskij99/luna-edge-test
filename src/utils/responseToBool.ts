import { ResponseType } from "@/types/types";

export const responseToBool = (res: ResponseType) => JSON.parse(res.toLocaleLowerCase())
