// ZGWNU Ng Bonita Module Imports
import { ZgwnuCaseVariableDataInterface } from './zgwnu-bonita-case-variable-data.interface'

export class ZgwnuBonitaCaseVariable {

    constructor(data: ZgwnuCaseVariableDataInterface)
    {
        this.description = data.description
        this.name = data.name
        this.value = data.value
        this.case_id = data.case_id
        this.type = data.type        
    }

    description: string
    name: string
    value: string
    case_id: string
    type: string
}