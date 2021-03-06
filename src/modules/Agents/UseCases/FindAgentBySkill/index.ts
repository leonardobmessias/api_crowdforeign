import { AgentRepository } from "../../Repository/AgentRepository";
import { FindAgentBySkillController } from "./FindAgentBySkillController";
import { FindAgentBySkillUseCase } from "./FindAgentBySkillUseCase";

const agentRepository = new AgentRepository()
const findAgentBySkillUseCase = new FindAgentBySkillUseCase(agentRepository)
const findAgentBySkillController = new FindAgentBySkillController(findAgentBySkillUseCase)

export{findAgentBySkillController}