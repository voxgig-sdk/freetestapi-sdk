# Freetestapi SDK utility: feature_add
module FreetestapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
