// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaActivity } from '../activity/zgwnu-bonita-activity'
import { ZgwnuBonitaTaskDataInterface } from './zgwnu-bonita-task-data.interface'

export class ZgwnuBonitaTask extends ZgwnuBonitaActivity {

    constructor(data: ZgwnuBonitaTaskDataInterface) 
    {
        super(data)
    }

}