import { ethers } from 'ethers';
import SolvWeb3Token from '../src/index';

describe('solv web3 token', () => {
    it('solv web3 token test', async () => {
        const jsonProvicer: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/2b21c092a7f247bca79258bb05144b4b');
        if ('undefined' !== typeof process.env.SOLV_SDK_TEST_PRIVATE_KEY) {
            const signer = new ethers.Wallet(process.env.SOLV_SDK_TEST_PRIVATE_KEY, jsonProvicer);

            // generating a token with 1 day of expiration time
            const token = await SolvWeb3Token.sign(async msg => await signer.signMessage(msg), {
                statement: 'Hey guys!',
                expires_in: '1d',
                nonce: 2222
            });

            const { address, body } = await SolvWeb3Token.verify(token);

            console.log('address, body', address, body);
        }
        else {
            throw new Error('export private key.');
        }

    })
})