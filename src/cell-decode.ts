import dotenv from 'dotenv';

import { Address, beginCell, Cell } from '@ton/core';

dotenv.config();

async function main() {
  let cellsFromHex = Cell.fromBoc(
    Buffer.from(
      'b5ee9c7241010101003600006700000000000007e98007ebd0a3f5bd5b9b3c4e0b75b17ea9db2b7e0c6074aa8b2683ce6ea571587550890cad8d8de40a89e9c43037e8b30d',
      'hex',
    ),
  );

  console.info(cellsFromHex);
  console.info(cellsFromHex[0]);
  let slice = cellsFromHex[0].asSlice();
  let number = slice.loadUint(64);
  let address = slice.loadAddress();
  let s = slice.loadStringTail();
  console.info(number);
  console.info(address);
  console.info(s);

  let cellBocBase64String = cellsFromHex[0].toBoc().toString('base64');
  console.info(cellBocBase64String);

  let cellsFromBase64 = Cell.fromBoc(Buffer.from(cellBocBase64String, 'base64'));
  console.info(cellsFromBase64);
}

main().catch((r) => console.error(r));
