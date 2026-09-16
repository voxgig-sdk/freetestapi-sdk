

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreetestapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREETESTAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREETESTAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreetestapiSDK.test()
    const ent = testsdk.User()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREETESTAPI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"address","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"company","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"format":"email","name":"email","req":false,"short":"Email address of the user","type":"`$STRING`","index$":2},{"active":true,"format":"int64","name":"id","req":false,"short":"Unique identifier for the user","type":"`$INTEGER`","index$":3},{"active":true,"name":"name","req":false,"short":"Full name of the user","type":"`$STRING`","index$":4},{"active":true,"name":"phone","req":false,"short":"Phone number of the user","type":"`$STRING`","index$":5},{"active":true,"name":"username","req":false,"short":"Username of the user","type":"`$STRING`","index$":6},{"active":true,"format":"uri","name":"website","req":false,"short":"Personal website URL","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"user","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /users","json":"{\"operationId\":\"getAllUsers\",\"parameters\":[{\"description\":\"Limit the number of results returned\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"address\":{\"properties\":{\"city\":{\"example\":\"New York\",\"type\":\"string\"},\"country\":{\"example\":\"USA\",\"type\":\"string\"},\"state\":{\"example\":\"NY\",\"type\":\"string\"},\"street\":{\"example\":\"123 Main St\",\"type\":\"string\"},\"zipcode\":{\"example\":\"10001\",\"type\":\"string\"}},\"type\":\"object\"},\"company\":{\"properties\":{\"bs\":{\"example\":\"synergize innovative solutions\",\"type\":\"string\"},\"catchPhrase\":{\"example\":\"Innovation at its best\",\"type\":\"string\"},\"name\":{\"example\":\"Tech Corp\",\"type\":\"string\"}},\"type\":\"object\"},\"email\":{\"description\":\"Email address of the user\",\"example\":\"john.doe@example.com\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the user\",\"example\":1,\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the user\",\"example\":\"John Doe\",\"type\":\"string\"},\"phone\":{\"description\":\"Phone number of the user\",\"example\":\"+1-234-567-8900\",\"type\":\"string\"},\"username\":{\"description\":\"Username of the user\",\"example\":\"johndoe\",\"type\":\"string\"},\"website\":{\"description\":\"Personal website URL\",\"example\":\"https://johndoe.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of users\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Resource not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested resource could not be found\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Resource not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested resource could not be found\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/users","segments":[{"lit":"users"}],"select":{"exist":["limit","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /users/{id}","json":"{\"operationId\":\"getUserById\",\"parameters\":[{\"description\":\"Unique identifier of the user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"address\":{\"properties\":{\"city\":{\"example\":\"New York\",\"type\":\"string\"},\"country\":{\"example\":\"USA\",\"type\":\"string\"},\"state\":{\"example\":\"NY\",\"type\":\"string\"},\"street\":{\"example\":\"123 Main St\",\"type\":\"string\"},\"zipcode\":{\"example\":\"10001\",\"type\":\"string\"}},\"type\":\"object\"},\"company\":{\"properties\":{\"bs\":{\"example\":\"synergize innovative solutions\",\"type\":\"string\"},\"catchPhrase\":{\"example\":\"Innovation at its best\",\"type\":\"string\"},\"name\":{\"example\":\"Tech Corp\",\"type\":\"string\"}},\"type\":\"object\"},\"email\":{\"description\":\"Email address of the user\",\"example\":\"john.doe@example.com\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the user\",\"example\":1,\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the user\",\"example\":\"John Doe\",\"type\":\"string\"},\"phone\":{\"description\":\"Phone number of the user\",\"example\":\"+1-234-567-8900\",\"type\":\"string\"},\"username\":{\"description\":\"Username of the user\",\"example\":\"johndoe\",\"type\":\"string\"},\"website\":{\"description\":\"Personal website URL\",\"example\":\"https://johndoe.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with user details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Resource not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested resource could not be found\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"User not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Resource not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested resource could not be found\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/users/{id}","segments":[{"lit":"users"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user","name__orig":"user","Name":"User","name_":"user","name-":"user","NAME":"USER","index$":1}, {"active":true,"entity":"user","key$":"BasicUserFlow","kind":"basic","name":"BasicUserFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"user_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"user_ref01","srcdatavar":"user_ref01_data","suffix":"_dt0"},"match":{"id":"user01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_ref01"}}],"index$":1}]}, 'User')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_ref01_data = Object.values(setup.data.existing.user)[0] as any

    // LIST
    const user_ref01_ent = client.User()
    const user_ref01_match: any = {}

    const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e: any) => e.data())


    // LOAD
    const user_ref01_match_dt0: any = {}
    user_ref01_match_dt0.id = user_ref01_data.id
    const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data()
    assert(user_ref01_data_dt0.id === user_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user/UserTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreetestapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREETESTAPI_TEST_USER_ENTID': idmap,
    'FREETESTAPI_TEST_LIVE': 'FALSE',
    'FREETESTAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREETESTAPI_TEST_USER_ENTID']

  const live = 'TRUE' === env.FREETESTAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREETESTAPI_TEST_USER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreetestapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREETESTAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
