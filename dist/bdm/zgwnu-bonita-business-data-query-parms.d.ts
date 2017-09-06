export declare class ZgwnuBonitaBusinessDataQueryParms {
    queryName: string;
    page: number;
    count: number;
    parameterValues: string[] | undefined;
    constructor(queryName: string, page: number, count: number, parameterValues?: string[] | undefined);
    getUrlEncondedParms(): string;
}
