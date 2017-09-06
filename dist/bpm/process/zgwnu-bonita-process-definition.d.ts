import { ZgwnuBonitaProcessActivationStateType } from './zgwnu-bonita-process-activation-state.type';
import { ZgwnuBonitaProcessConfigurationStateType } from './zgwnu-bonita-process-configuration-state.type';
export declare class ZgwnuBonitaProcessDefinition {
    constructor(processDefinitionData?: any);
    id: string;
    icon: string;
    displayDescription: string;
    deploymentDate: Date;
    description: string;
    activationState: ZgwnuBonitaProcessActivationStateType;
    name: string;
    deployedBy: string;
    displayName: string;
    actorinitiatorid: string;
    last_update_date: Date;
    configurationState: ZgwnuBonitaProcessConfigurationStateType;
    version: string;
}
