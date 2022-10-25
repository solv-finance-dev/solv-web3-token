import { sign } from './libs/sign';
import { verify } from './libs/verify';
declare const SolvWeb3Token: {
    sign: (signer: import("./libs/interfaces").Signer, opts?: string | import("./libs/interfaces").SignOpts) => Promise<string>;
    verify: (token: string, opts?: import("./libs/interfaces").VerifyOpts) => {
        address: string;
        body: import("./libs/interfaces").DecryptedBody;
    };
};
export default SolvWeb3Token;
export { sign, verify };
