pnpm init

pnpm add typescript ts-node @types/node --save-dev


npx tsc --init

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}


mkdir src
// src/index.ts
console.log("Hello, TypeScript with pnpm!");
//package.json 
"scripts": {
  "start": "ts-node src/index.ts"
}

pnpm start

