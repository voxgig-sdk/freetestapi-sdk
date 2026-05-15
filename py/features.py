# Freetestapi SDK feature factory

from feature.base_feature import FreetestapiBaseFeature
from feature.test_feature import FreetestapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreetestapiBaseFeature(),
        "test": lambda: FreetestapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
