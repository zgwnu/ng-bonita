import { ZgwnuBonitaActivityDeployActor } from './zgwnu-bonita-activity-deploy-actor';
export declare class ZgwnuBonitaActivity {
    constructor(activityData: any);
    id: string;
    type: string;
    name: string;
    displayName: string;
    description: string;
    displayDescription: string;
    state: string;
    reached_state_date: Date;
    last_update_date: Date;
    dueDate: Date;
    priority: string;
    processId: string;
    parentCaseId: string;
    rootCaseId: string;
    rootContainerId: string;
    executedBy: string;
    executedBySubstitute: string;
    actorId: string | ZgwnuBonitaActivityDeployActor;
    assigned_id: string;
    assigned_date: Date;
}
