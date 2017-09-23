// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaProcessActivationStateType } from './zgwnu-bonita-process-activation-state.type'
import { ZgwnuBonitaProcessConfigurationStateType } from './zgwnu-bonita-process-configuration-state.type'

export interface ZgwnuBonitaProcessDefinitionDataInterface {
    id: string // "the identifier of the process definition (long)",
    icon: string // "icon path (string)",
    displayDescription: string // "the human readable activity description (string)",
    deploymentDate: string // "the date when the process definition was deployed (date)",
    description: string // "the process description (string)",
    activationState: ZgwnuBonitaProcessActivationStateType // "the state of the process definition (ENABLED or DISABLED)",
    name: string // "the process name (string)",
    deployedBy: string // "the id of the user who deployed the process (integer)",
    displayName: string // "the human readable process description (string)",
    actorinitiatorid: string // "the id of the actor that can initiate cases of the process",
    last_update_date: string // "the date when the process definition was last updated (date)",
    configurationState: ZgwnuBonitaProcessConfigurationStateType // "the configuration state of the process (UNRESOLVED or RESOLVED)",
    version: string // "the version of the process (string)"
}