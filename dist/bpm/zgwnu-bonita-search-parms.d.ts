export declare class ZgwnuBonitaSearchParms {
    page: number;
    count: number;
    order: string | undefined;
    query: string | undefined;
    filters: string[] | undefined;
    deploys: string[] | undefined;
    constructor(page: number, count: number, order?: string | undefined, query?: string | undefined, filters?: string[] | undefined, deploys?: string[] | undefined);
    getUrlEncondedParms(): string;
}
