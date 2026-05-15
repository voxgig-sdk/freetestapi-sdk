
import { Context } from './Context'


class FreetestapiError extends Error {

  isFreetestapiError = true

  sdk = 'Freetestapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreetestapiError
}

