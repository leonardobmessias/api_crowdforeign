import { Mission } from "../Entities/Mission";

interface ICreateMission{
  name: string;
  description: string;
  create_by: string,
  image_profile?: string;

}


interface DTOMissionReposiotry{

  create({name,description,create_by,image_profile}:ICreateMission): Promise<Mission>
  
  list(): Promise<Mission[]>

  find(): Promise<Mission>
  
  edit({data}):Promise<Mission>
}

export {DTOMissionReposiotry, ICreateMission}