# Freetestapi SDK exists test

require "minitest/autorun"
require_relative "../Freetestapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreetestapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
