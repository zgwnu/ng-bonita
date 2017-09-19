// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaActivity } from '../activity/zgwnu-bonita-activity'
import { ZgwnuBonitaUserTaskDataInterface } from './zgwnu-bonita-user-task-data.interface'

export class ZgwnuBonitaUserTask extends ZgwnuBonitaActivity {

    constructor(data: ZgwnuBonitaUserTaskDataInterface) 
    {
        super(data)
    }

}