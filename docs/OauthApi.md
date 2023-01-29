# MastodonApi.OauthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthAuthorizeGET**](OauthApi.md#oauthAuthorizeGET) | **GET** /oauth/authorize | 
[**oauthAuthorizePOST**](OauthApi.md#oauthAuthorizePOST) | **POST** /oauth/authorize | 
[**oauthRevokePOST**](OauthApi.md#oauthRevokePOST) | **POST** /oauth/revoke | 
[**oauthTokenPOST**](OauthApi.md#oauthTokenPOST) | **POST** /oauth/token | 



## oauthAuthorizeGET

> oauthAuthorizeGET(responseType, clientId, redirectUri, opts)



### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.OauthApi();
let responseType = "responseType_example"; // String | Should be set equal to code.
let clientId = "clientId_example"; // String | The client ID, obtained during app registration.
let redirectUri = "redirectUri_example"; // String | Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect_uris declared during app registration.
let opts = {
  'scope': "scope_example", // String | List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read.
  'forceLogin': true // Boolean | Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance.
};
apiInstance.oauthAuthorizeGET(responseType, clientId, redirectUri, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responseType** | **String**| Should be set equal to code. | 
 **clientId** | **String**| The client ID, obtained during app registration. | 
 **redirectUri** | **String**| Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect_uris declared during app registration. | 
 **scope** | **String**| List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read. | [optional] 
 **forceLogin** | **Boolean**| Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## oauthAuthorizePOST

> oauthAuthorizePOST(opts)



### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.OauthApi();
let opts = {
  'oauthPostBody': new MastodonApi.OauthPostBody() // OauthPostBody | 
};
apiInstance.oauthAuthorizePOST(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthPostBody** | [**OauthPostBody**](OauthPostBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/form-data
- **Accept**: Not defined


## oauthRevokePOST

> oauthRevokePOST()



### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.OauthApi();
apiInstance.oauthRevokePOST((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## oauthTokenPOST

> Response200 oauthTokenPOST(opts)



Obtain an access token, to be used during API calls that are not public.

### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.OauthApi();
let opts = {
  'oauthPostBody': new MastodonApi.OauthPostBody() // OauthPostBody | 
};
apiInstance.oauthTokenPOST(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthPostBody** | [**OauthPostBody**](OauthPostBody.md)|  | [optional] 

### Return type

[**Response200**](Response200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/form-data
- **Accept**: application/json

