// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaActivity } from '../activity/zgwnu-bonita-activity'
import { ZgwnuBonitaHumanTaskDataInterface } from './zgwnu-bonita-human-task-data.interface'

export class ZgwnuBonitaHumanTask extends ZgwnuBonitaActivity {

    constructor(data: ZgwnuBonitaHumanTaskDataInterface) 
    {
        super(data)
    }

}