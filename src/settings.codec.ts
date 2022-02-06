import type { YoltFlag, YoltSettings } from './types'

import * as t from 'io-ts'
import { option } from 'io-ts-types'

const yoltFlag: t.Type<YoltFlag> = t.type ({
  name: t.string,
  alias: option (t.string),
  description: option (t.string),
  fallback: option (t.unknown)
})

const yoltSettings: t.Type<YoltSettings> = t.recursion ('YoltSettings', () =>
  t.type ({
    name: t.string,
    version: option (t.string),
    description: option (t.string),
    examples: t.readonlyArray (t.string),
    flags: t.readonlyArray (yoltFlag),
    commands: t.readonlyArray (yoltSettings)
  })
)
