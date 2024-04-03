import { ArqErrorTypeEnum } from "./arq-error-type-enum.interface";
export interface ArqBackendException {
    timestamp: string;
    status: string;
    errorType: ArqErrorTypeEnum;
    message: string;
    messagei18n?: string;
    path: string;
    errors: string[];
}
