// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaCaseStateType } from './zgwnu-bonita-case-state.type'
import { ZgwnuBonitaUtils } from '../../rest-api/zgwnu-bonita-utils'

export class ZgwnuBonitaCase {

    constructor(data?: any)
    {
        if (data) {
            const utils = new ZgwnuBonitaUtils()
            this.id = data.id
            this.end_date = utils.getDateValue(data.end_date)
            this.failedFlowNodes = data.failedFlowNodes
            this.start = utils.getDateValue(data.start)
            this.activeFlowNodes = data.activeFlowNodes
            this.state = data.state
            this.rootCaseId = data.rootCaseId
            this.started_by = data.started_by
            this.processDefinitionId = data.processDefinitionId
            this.last_update_date = utils.getDateValue(data.last_update_date)
            if (data.searchIndex1Label) this.searchIndex1Label = data.searchIndex1Label
            if (data.searchIndex2Label) this.searchIndex2Label = data.searchIndex2Label
            if (data.searchIndex3Label) this.searchIndex3Label = data.searchIndex2Label
            if (data.searchIndex4Label) this.searchIndex4Label = data.searchIndex3Label
            if (data.searchIndex5Label) this.searchIndex5Label = data.searchIndex4Label
            if (data.searchIndex1Value) this.searchIndex1Value = data.searchIndex1Value
            if (data.searchIndex2Value) this.searchIndex2Value = data.searchIndex2Value
            if (data.searchIndex3Value) this.searchIndex3Value = data.searchIndex3Value
            if (data.searchIndex4Value) this.searchIndex4Value = data.searchIndex4Value
            if (data.searchIndex5Value) this.searchIndex5Value = data.searchIndex5Value
        }
    }

    id: string // the identifier of the case
    end_date: Date // the date set when the case is closed
    failedFlowNodes: number // count of failed flow nodes if parameter n=failedFlowNodes is given
    startedBySubstitute: string // the identifier of the substitute user (as Process manager or Administrator) who started the process. It can be also the substitute user if d=startedBySubstitute is given.
    start: Date // the starting date of the case
    activeFlowNodes: number // count of active flow nodes if parameter n=activeFlowNodes is given
    state: ZgwnuBonitaCaseStateType
    rootCaseId: string // the identifier of the container of the case
    started_by: string // the identifier of the user who started the case
    processDefinitionId: string // the identifier of the process related of the case
    last_update_date: Date // the date of the last update done on the case
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