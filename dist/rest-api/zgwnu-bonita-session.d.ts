import { Headers } from '@angular/http';
export declare class ZgwnuBonitaSession {
    constructor(sessionData: any, headerData?: Headers);
    user_id: string;
    user_name: string;
    session_id: string;
    conf: string;
    is_technical_user: boolean;
    version: string;
    tenant?: string;
    token?: string;
}
