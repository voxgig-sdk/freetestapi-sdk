-- Freetestapi SDK error

local FreetestapiError = {}
FreetestapiError.__index = FreetestapiError


function FreetestapiError.new(code, msg, ctx)
  local self = setmetatable({}, FreetestapiError)
  self.is_sdk_error = true
  self.sdk = "Freetestapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreetestapiError:error()
  return self.msg
end


function FreetestapiError:__tostring()
  return self.msg
end


return FreetestapiError
