

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREETESTAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREETESTAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreetestapiSDK.test()
    const ent = testsdk.Product()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREETESTAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"brand":{"a":true,"h":"Brand","n":"brand","r":false,"sh":"Brand name of the product","t":"`$STRING`","key$":"brand","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Product category","t":"`$STRING`","key$":"category","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"Product creation timestamp","t":"`$STRING`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the product","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":false,"sh":"Unique identifier for the product","t":"`$INTEGER`","key$":"id","index$":4},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to product image","t":"`$STRING`","key$":"image","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the product","t":"`$STRING`","key$":"name","index$":6},"price":{"a":true,"fo":"float","h":"Price","n":"price","r":false,"sh":"Price of the product in USD","t":"`$NUMBER`","key$":"price","index$":7},"rating":{"a":true,"fo":"float","h":"Rating","n":"rating","r":false,"sh":"Average product rating (0-5)","t":"`$NUMBER`","key$":"rating","index$":8},"stock":{"a":true,"h":"Stock","n":"stock","r":false,"sh":"Available stock quantity","t":"`$INTEGER`","key$":"stock","index$":9}},"id":{"field":"id","name":"id"},"name":"product","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /products","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/products","q":{"exist":["category","limit","page"]},"r":{},"s":[{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"product","name__orig":"product","Name":"Product","name_":"product","name-":"product","NAME":"PRODUCT","index$":0}, {"active":true,"entity":"product","key$":"BasicProductFlow","kind":"basic","name":"BasicProductFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_ref01"}}],"index$":0}]}, 'Product', {"GET /products":{"protocol":"http","operationId":"getAllProducts","responses":{"200":{"description":"Successful response with list of products","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","format":"int64","description":"Unique identifier for the product","example":1,"key$":"id"},"name":{"type":"string","description":"Name of the product","example":"Laptop Computer","key$":"name"},"description":{"type":"string","description":"Detailed description of the product","example":"High-performance laptop with 16GB RAM and 512GB SSD","key$":"description"},"price":{"type":"number","format":"float","description":"Price of the product in USD","example":999.99,"key$":"price"},"category":{"type":"string","description":"Product category","example":"Electronics","key$":"category"},"brand":{"type":"string","description":"Brand name of the product","example":"TechBrand","key$":"brand"},"stock":{"type":"integer","description":"Available stock quantity","example":50,"key$":"stock"},"rating":{"type":"number","format":"float","description":"Average product rating (0-5)","minimum":0,"maximum":5,"example":4.5,"key$":"rating"},"image":{"type":"string","format":"uri","description":"URL to product image","example":"https://freetestapi.com/images/product1.jpg","key$":"image"},"createdAt":{"type":"string","format":"date-time","description":"Product creation timestamp","example":"2023-01-15T10:30:00Z","key$":"createdAt"}},"x-ref":"#/components/schemas/Product","index$":0}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message","example":"Resource not found"},"status":{"type":"integer","description":"HTTP status code","example":404},"message":{"type":"string","description":"Detailed error description","example":"The requested resource could not be found"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message","example":"Resource not found"},"status":{"type":"integer","description":"HTTP status code","example":404},"message":{"type":"string","description":"Detailed error description","example":"The requested resource could not be found"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"limit","in":"query","description":"Limit the number of results returned","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"category","in":"query","description":"Filter products by category","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let product_ref01_data = Object.values(setup.data.existing.product)[0] as any

    // LIST
    const product_ref01_ent = client.Product()
    const product_ref01_match: any = {}

    const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product/ProductTestData.json')

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
    ['product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREETESTAPI_TEST_PRODUCT_ENTID': idmap,
    'FREETESTAPI_TEST_LIVE': 'FALSE',
    'FREETESTAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREETESTAPI_TEST_PRODUCT_ENTID']

  const live = 'TRUE' === env.FREETESTAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREETESTAPI_TEST_PRODUCT_ENTID']
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
  
