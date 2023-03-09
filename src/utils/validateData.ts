import { ReactNode } from "react"
import { responseToBool } from "./responseToBool"

export const getContent = (isLoading: boolean, data: any, components: ReactNode[]) => {
  if(isLoading) return components[0]
  if(!isLoading && responseToBool(data!.Response)) return components[1]
  if(!isLoading && !responseToBool(data!.Response)) return components[2]
}