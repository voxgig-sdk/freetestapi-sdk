# Freetestapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreetestapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreetestapiBaseFeature.new
    when "ratelimit"
      FreetestapiRatelimitFeature.new
    when "retry"
      FreetestapiRetryFeature.new
    when "test"
      FreetestapiTestFeature.new
    when "timeout"
      FreetestapiTimeoutFeature.new
    else
      FreetestapiBaseFeature.new
    end
  end
end
