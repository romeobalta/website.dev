import 'dotenv/config'
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.GRAPHQL_URL ?? '']: {
      headers: {
        Authorization: `bearer ${process.env.GRAPHQL_TOKEN}`,
      },
    },
  },

  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    'src/gql/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  ignoreNoDocuments: true,
}

export default config
