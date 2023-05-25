import { DecrypterResult } from '../interfaces';
export declare const decrypt: (token: string) => DecrypterResult;
export declare const erc1271Decrypt: (token: string, safeMessageHash: string) => DecrypterResult;
