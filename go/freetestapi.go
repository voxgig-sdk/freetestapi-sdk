package voxgigfreetestapisdk

import (
	"github.com/voxgig-sdk/freetestapi-sdk/go/core"
	"github.com/voxgig-sdk/freetestapi-sdk/go/entity"
	"github.com/voxgig-sdk/freetestapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/freetestapi-sdk/go/utility"
)

// Type aliases preserve external API.
type FreetestapiSDK = core.FreetestapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreetestapiEntity = core.FreetestapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreetestapiError = core.FreetestapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewProductEntityFunc = func(client *core.FreetestapiSDK, entopts map[string]any) core.FreetestapiEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.FreetestapiSDK, entopts map[string]any) core.FreetestapiEntity {
		return entity.NewUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreetestapiSDK = core.NewFreetestapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
