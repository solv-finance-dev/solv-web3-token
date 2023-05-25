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

    const token = `eyJzaWduYXR1cmUiOiIweDIxYWIyOWE1ZGY0MTE3NzAyNGQ2NTAwMDVjYzc5YzNiM2NkMDUxYWMwODIwZWJjZjYxMjYyMjg5MjNmNzgzMjc1NGE5MWJlN2M5YjBmY2ZiYzZlNmJmZmVmYTMzNDA1NjA0NDk4ZGYyMWE5OWE3YjI3MWExNmY1MzMyYzcyMzRmMWM3MWYxNmEwZDVlNzE1MDk4MDllYzhkNmVmZmZkMjM0ZWRjNmI4OTM4Mzk0ZDQ4NTViOWU0ZDQ1MzJiMTc4NTE1NTkzMmE2ZTBhNjJhNGJhYmNmMDNkMmEzOTc3OGVmNmVmNmU0ZjQ3ZDAzMTY1ZGFjZDUyYTA2NDAwZGExMzA0ZjFjIiwiYm9keSI6IldlbGNvbWUgdG8gU29sdiFcblxuQ2xpY2sgdG8gc2lnbiBpbiBhbmQgYWNjZXB0IHRoZSBTb2x2IFRlcm1zIG9mIFNlcnZpY2U6IGh0dHBzOi8vc29sdi5maW5hbmNlL3Rvc1xuXG5UaGlzIHJlcXVlc3Qgd2lsbCBub3QgdHJpZ2dlciBhIGJsb2NrY2hhaW4gdHJhbnNhY3Rpb24gb3IgY29zdCBhbnkgZ2FzIGZlZXMuXG5cbllvdXIgYXV0aGVudGljYXRpb24gc3RhdHVzIHdpbGwgcmVzZXQgYWZ0ZXIgMjQgaG91cnMuXG5cbldhbGxldCBhZGRyZXNzOlxuMHgwNzc2NzdBMmE0RTQ0OGNERjBGQ2RjQjQ4RDBiYTYyODRlQzNGQ0ZGXG5cblxuVVJJOiBodHRwOi8vbG9jYWxob3N0OjMwMDEvZWFyblxuV2ViMyBUb2tlbiBWZXJzaW9uOiAyXG5Ob25jZTogZjMzNTU2MzItNWZmMS00YTMxLWFiYTQtOGMyMDBmM2JkZWVlXG5Jc3N1ZWQgQXQ6IDIwMjMtMDUtMjVUMTA6MTY6MTIuNTcwWlxuRXhwaXJhdGlvbiBUaW1lOiAyMDIzLTA1LTI2VDEwOjE2OjEyLjU3MFoifQ==`;

    const { address, body } = await SolvWeb3Token.verify(token, {
      isERC1271: true,
      safeMessageHash: '0xe0f2144b79fdf8c05906afea671411a00b65c9700af20dd93c85fd4b32c7db55'
    });

    console.log('address, body', address, body);
    // } else {
    //   throw new Error('export private key.');
    // }
  });
});
