// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaProcessActivationStateType } from './zgwnu-bonita-process-activation-state.type'
import { ZgwnuBonitaProcessConfigurationStateType } from './zgwnu-bonita-process-configuration-state.type'
import { ZgwnuBonitaProcessDefinitionDataInterface } from './zgwnu-bonita-process-definition-data.interface'
import { ZgwnuBonitaUtils } from '../../rest-api/zgwnu-bonita-utils'

export class ZgwnuBonitaProcessDefinition {

  constructor(data?: ZgwnuBonitaProcessDefinitionDataInterface) 
  {
    const utils = new ZgwnuBonitaUtils()

    if (data) {
      this.id = data.id
      this.icon = data.icon
      this.displayDescription = data.displayDescription
      this.deploymentDate = data.deploymentDate
      this.description = data.description
      this.activationState = data.activationState
      this.name = data.name
      this.deployedBy = data.deployedBy
      this.displayName = data.displayName
      this.actorinitiatorid = data.actorinitiatorid
      this.last_update_date = utils.getDateValue(data.last_update_date)
      this.configurationState = data.configurationState
      this.version = data.version
    }
  }

  id: string // "the identifier of the process definition (long)",
  icon: string // "icon path (string)",
  displayDescription: string // "the human readable activity description (string)",
  deploymentDate: Date // "the date when the process definition was deployed (date)",
  description: string // "the process description (string)",
  activationState: ZgwnuBonitaProcessActivationStateType // "the state of the process definition (ENABLED or DISABLED)",
  name: string // "the process name (string)",
  deployedBy: string // "the id of the user who deployed the process (integer)",
  displayName: string // "the human readable process description (string)",
  actorinitiatorid: string // "the id of the actor that can initiate cases of the process",
  last_update_date: Date // "the date when the process definition was last updated (date)",
  configurationState: ZgwnuBonitaProcessConfigurationStateType // "the configuration state of the process (UNRESOLVED or RESOLVED)",
  version: string // "the version of the process (string)"
}