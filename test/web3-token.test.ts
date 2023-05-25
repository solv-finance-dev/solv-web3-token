// import { ethers } from 'ethers';
import SolvWeb3Token from '../src/index';

describe('solv web3 token', () => {
  it('solv web3 token test', async () => {
    // const jsonProvicer: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(
    //   'https://goerli.infura.io/v3/2b21c092a7f247bca79258bb05144b4b'
    // );
    // if ('undefined' !== typeof process.env.SOLV_SDK_TEST_PRIVATE_KEY) {
    // const signer = new ethers.Wallet(process.env.SOLV_SDK_TEST_PRIVATE_KEY, jsonProvicer);

    // generating a token with 1 day of expiration time
    // const msg =
    //   '{"statement":"Welcome to Solv!\\n\\n        Click to sign in and accept the Solv Terms of Service: https://solv.finance/tos\\n        \\n        This request will not trigger a blockchain transaction or cost any gas fees.\\n        \\n        Your authentication status will reset after 24 hours.\\n        \\n        Wallet address:\\n        0xf54AE9d68C986B39690da73f89B78E8c9Ea4683f\\n\\n        \\n        ","expires_in":"1d","nonce":"50ebd75a-ec21-45ef-9dd2-51776d4e5dbd"}';
    // console.log('msg', msg);
    // const token = await SolvWeb3Token.sign(async (msg) => await signer.signMessage(msg), JSON.parse(msg));

    // console.log('sig:' + token);

    const token = `eyJzaWduYXR1cmUiOiIweDY2NGM2MTRiZTZlMTRlNGJhN2M5ZDQ2NmMwMGU3NGY5Yjc2MmVkODE1ZDE5YWU2YTY2MDU4MjUzZjdiZGZhMTAwMzkyZjAyMWQwM2U2OWYxNDhmODQxNmE3ZTU3YzRmY2QxZjdiYmRjYTM3NjUwYmI4NjFjMGM5NjRiMjYwMGQzMWIiLCJib2R5IjoiV2VsY29tZSB0byBTb2x2IVxuXG5DbGljayB0byBzaWduIGluIGFuZCBhY2NlcHQgdGhlIFNvbHYgVGVybXMgb2YgU2VydmljZTogaHR0cHM6Ly9zb2x2LmZpbmFuY2UvdG9zXG5cblRoaXMgcmVxdWVzdCB3aWxsIG5vdCB0cmlnZ2VyIGEgYmxvY2tjaGFpbiB0cmFuc2FjdGlvbiBvciBjb3N0IGFueSBnYXMgZmVlcy5cblxuWW91ciBhdXRoZW50aWNhdGlvbiBzdGF0dXMgd2lsbCByZXNldCBhZnRlciAyNCBob3Vycy5cblxuV2FsbGV0IGFkZHJlc3M6XG4weDA3NzY3N0EyYTRFNDQ4Y0RGMEZDZGNCNDhEMGJhNjI4NGVDM0ZDRkZcblxuXG5VUkk6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9lYXJuXG5XZWIzIFRva2VuIFZlcnNpb246IDJcbk5vbmNlOiAzNmFjYjc3NS00YjBkLTQ4OGQtOGFkMi04OTNmMDczYmM4YmZcbklzc3VlZCBBdDogMjAyMy0wNS0yNVQwODo1OToxNC43NjBaXG5FeHBpcmF0aW9uIFRpbWU6IDIwMjMtMDUtMjZUMDg6NTk6MTQuNzYwWiJ9`;

    const { address, body } = await SolvWeb3Token.verify(token, {
      isERC1271: true,
      safeMessageHash: '0x0cd1d21aeec7bbd70cbefc98e48508d36e08ca70c9ef98f0eca049423c1a9382'
    });

    console.log('address, body', address, body);
    // } else {
    //   throw new Error('export private key.');
    // }
  });
});
