import { RequestOptions } from '@angular/http';
import { ZgwnuBonitaSession } from './zgwnu-bonita-session';
import { ZgwnuBonitaUrls } from './zgwnu-bonita-urls';
export declare class ZgwnuBonitaConfigService {
    bonitaUrls: ZgwnuBonitaUrls;
    businessDataModelPackage: string;
    readonly bonitaSessionTokenKey: string;
    private defaultHeaders;
    options: RequestOptions;
    sendOptions: RequestOptions;
    private _session;
    constructor(bonitaUrls: ZgwnuBonitaUrls);
    session: ZgwnuBonitaSession;
    private configSendOptions();
    appendSessionOptions(optionsRef: RequestOptions): void;
}
