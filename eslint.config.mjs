import { neostandard } from 'neostandard'

// ESLint flat config. neostandard is the maintained successor of the old
// `eslint-config-standard` + `eslint-plugin-standard` setup, and `env: ['jest']`
// declares the globals Jest injects at runtime (`test`, `expect`, ...), which
// the previous config was missing.
export default neostandard({
  env: ['jest'],
})
