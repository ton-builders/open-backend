import dotenv from 'dotenv';

import { Address } from '@ton/core';

dotenv.config();

async function main() {
  const addr = Address.parse('0QAAQ3X8LZ3qmwnIgaXwgysWnBBBE8T26G8B4iQ4-PHDGHQC');
  console.log('default (main,bounceable)= ', addr.toString());
  console.log('main, bounceable = ', addr.toString({ testOnly: false, bounceable: true }));
  console.log('main, non-bounceable = ', addr.toString({ testOnly: false, bounceable: false }));
  console.log('test, bounceable = ', addr.toString({ testOnly: true, bounceable: true }));
  console.log('test, non-bounceable = ', addr.toString({ testOnly: true, bounceable: false }));
}

main().catch((r) => console.error(r));
