
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreetestapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreetestapiSDK.test()
    equal(null !== testsdk, true)
  })

})
