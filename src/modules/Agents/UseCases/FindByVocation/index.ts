import { AgentRepository } from "../../Repository/AgentRepository";
import { FindByVocationController } from "./FindByVocationController";
import { FindByVocationUseCase } from "./FindByVocationUseCase";

const agentRepository = new AgentRepository()
const findByVocationUseCase = new FindByVocationUseCase(agentRepository)
const findByVocationController = new FindByVocationController(findByVocationUseCase)

export{findByVocationController}