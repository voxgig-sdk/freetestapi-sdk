# Freetestapi SDK utility: make_context
require_relative '../core/context'
module FreetestapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreetestapiContext.new(ctxmap, basectx)
  }
end
