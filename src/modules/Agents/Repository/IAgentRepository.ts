import { Agent } from "../Entities/Agent";
import { Interests } from "../Entities/Interests";
import { Skills } from "../Entities/Skills";

interface CreateAgent{
  name: string
  email: string
  password: string
  id?: string
  image_profile?:string
}

interface EditAgent{
  id:string 
  name?: string
  email?: string
  description?: string
  interests?: string[]
  skills?:string[]
}
interface ResponseAgent{
  id: string
  name:string
  email: string
  description: string
  skills:string[]
  interests: string[]
}

interface IAgentRepository{
  
  create({name,email,password,}:CreateAgent): Promise<Agent>

  list(): Promise<Agent[]>
  
  deactivate({ id }): Promise<Agent>
  
  activate({email}):Promise<void>

  edit({id, description,email,name,skills,interests}:EditAgent): Promise<ResponseAgent>

  findByEmail({ email }): Promise<Agent>

  findById({ id }): Promise<Agent>
  
  findByName({ name }): Promise<Agent>
  
  findBySkill({skill}):Promise<Agent[]>
  
  findByInterest({interest}):Promise<Agent[]>
} 
export {IAgentRepository,CreateAgent,EditAgent,ResponseAgent} 