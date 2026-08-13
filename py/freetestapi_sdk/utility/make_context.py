# Freetestapi SDK utility: make_context

from freetestapi_sdk.core.context import FreetestapiContext


def make_context_util(ctxmap, basectx):
    return FreetestapiContext(ctxmap, basectx)
