
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreetestapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreetestapiSDK.test()
    equal(testsdk instanceof FreetestapiSDK, true,
      'FreetestapiSDK.test() must return a client synchronously')
  })

})
