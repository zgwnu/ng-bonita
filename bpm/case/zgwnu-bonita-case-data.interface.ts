export interface ZgwnuBonitaCaseData {
    id: string // the identifier of the case
    end_date: string // the date set when the case is closed
    failedFlowNodes: number // count of failed flow nodes if parameter n=failedFlowNodes is given
    startedBySubstitute: string // the identifier of the substitute user (as Process manager or Administrator) who started the process. It can be also the substitute user if d=startedBySubstitute is given.
    start: Date // the starting date of the case
    activeFlowNodes: number // count of active flow nodes if parameter n=activeFlowNodes is given
    state: string // state: an enum that represent the state of the case, it can be INITIALIZING, STARTED, SUSPENDED, CANCELLED, ABORTED, COMPLETING, COMPLETED, ERROR, ABORTING
    rootCaseId: string // the identifier of the container of the case
    started_by: string // the identifier of the user who started the case
    processDefinitionId: string // the identifier of the process related of the case
    last_update_date: string // the date of the last update done on the case
    searchIndex1Label?: string // the 1st search index label (from 6.5, in Subscription editions only)
    searchIndex2Label?: string // the 2nd search index label (from 6.5, in Subscription editions only)
    searchIndex3Label?: string // the 3rd search index label (from 6.5, in Subscription editions only)
    searchIndex4Label?: string // the 4th search index label (from 6.5, in Subscription editions only)
    searchIndex5Label?: string // the 5th search index label (from 6.5, in Subscription editions only)
    searchIndex1Value?: string // the 1st search index value (from 6.5, in Subscription editions only)
    searchIndex2Value?: string // the 2nd search index value (from 6.5, in Subscription editions only)
    searchIndex3Value?: string // the 3rd search index value (from 6.5, in Subscription editions only)
    searchIndex4Value?: string // the 4th search index value (from 6.5, in Subscription editions only)
    searchIndex5Value?: string // the 5th search index value (from 6.5, in Subscription editions only)
}