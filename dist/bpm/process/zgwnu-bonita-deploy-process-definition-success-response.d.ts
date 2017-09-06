import { ZgwnuBonitaProcessActivationStateType } from './zgwnu-bonita-process-activation-state.type';
import { ZgwnuBonitaProcessConfigurationStateType } from './zgwnu-bonita-process-configuration-state.type';
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response';
export declare class ZgwnuBonitaDeployProcessDefinitionSuccessResponse extends ZgwnuBonitaResponse {
    id: string;
    deploymentDate: Date;
    description: string;
    activationState: ZgwnuBonitaProcessActivationStateType;
    name: string;
    displayName: string;
    actorinitiatorid: string;
    last_update_date: Date;
    configurationState: ZgwnuBonitaProcessConfigurationStateType;
    version: string;
}
