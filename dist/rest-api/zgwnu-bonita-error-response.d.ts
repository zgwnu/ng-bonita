import { ZgwnuBonitaResponse } from './zgwnu-bonita-response';
export declare class ZgwnuBonitaErrorResponse extends ZgwnuBonitaResponse {
    exception: string;
    message: string;
    explanations: string[];
}
