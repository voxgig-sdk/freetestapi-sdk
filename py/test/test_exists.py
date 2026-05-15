# ProjectName SDK exists test

import pytest
from freetestapi_sdk import FreetestapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreetestapiSDK.test(None, None)
        assert testsdk is not None
