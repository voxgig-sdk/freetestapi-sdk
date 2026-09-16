# Freetestapi SDK feature factory

from freetestapi_sdk.feature.base_feature import FreetestapiBaseFeature
from freetestapi_sdk.feature.ratelimit_feature import FreetestapiRatelimitFeature
from freetestapi_sdk.feature.retry_feature import FreetestapiRetryFeature
from freetestapi_sdk.feature.test_feature import FreetestapiTestFeature
from freetestapi_sdk.feature.timeout_feature import FreetestapiTimeoutFeature


_FEATURES = {
    "base": lambda: FreetestapiBaseFeature(),
    "ratelimit": lambda: FreetestapiRatelimitFeature(),
    "retry": lambda: FreetestapiRetryFeature(),
    "test": lambda: FreetestapiTestFeature(),
    "timeout": lambda: FreetestapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
