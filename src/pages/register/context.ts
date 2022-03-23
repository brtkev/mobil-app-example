import { createContext } from "react"

export type userProps = {
  phone? : string, country?: string, name?: string, lastName?: string, 
  email?: string, password? : string, 
  securityQ1?: string, securityQ2?: string, securityA1?: string, securityA2?: string,
  pin? : string
}
export type contextProps = {
  userData : userProps, 
  updateData : (data : userProps) => void
} 

const defaultParams = {
  userData : {},
  updateData : (data: userProps) => {data}
}
const RegisterContext = createContext<contextProps>(defaultParams);
export default RegisterContext;