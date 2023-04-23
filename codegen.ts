
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-ca-central-1.hygraph.com/v2/clgpt5jwd0qnp01upfgyg7ccz/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
