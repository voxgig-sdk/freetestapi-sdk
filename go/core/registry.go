package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewProductEntityFunc func(client *FreetestapiSDK, entopts map[string]any) FreetestapiEntity

var NewUserEntityFunc func(client *FreetestapiSDK, entopts map[string]any) FreetestapiEntity

