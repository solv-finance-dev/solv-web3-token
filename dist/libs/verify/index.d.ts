import { DecryptedBody, VerifyOpts } from '../interfaces';
export declare const verify: (token: string, opts?: VerifyOpts) => {
    address: string;
    body: DecryptedBody;
};
