import dotenv from 'dotenv';

import { Address, beginCell } from '@ton/core';

dotenv.config();

async function main() {
  let builder = beginCell();
  builder.storeUint(2025, 64);
  builder.storeAddress(Address.parse('0QA_XoUfrerc2eJwW62L9U7ZW_BjA6VUWTQec3UrisOqhBlV'));
  builder.storeStringTail('Hello');
  builder.storeStringTail(' ');
  builder.storeStringTail('TON!');
  let cell = builder.asCell();
  console.info(cell); //x{FFFFFFFFFFFFFFFF8007EBD0A3F5BD5B9B3C4E0B75B17EA9DB2B7E0C6074AA8B2683CE6EA571587550890CAD8D8DEA89E9C43_}

  let slice = cell.beginParse();
  let number = slice.loadUintBig(64);
  let address = slice.loadAddress();
  let s = slice.loadStringTail();
  console.info(number);
  console.info(address);
  console.info(s);
  let bocHex = cell.toBoc().toString('hex');
  console.info(bocHex);
  //b5ee9c7241010101003600006700000000000000008007ebd0a3f5bd5b9b3c4e0b75b17ea9db2b7e0c6074aa8b2683ce6ea571587550890cad8d8de40a89e9c430576b765a
}

main().catch((r) => console.error(r));
