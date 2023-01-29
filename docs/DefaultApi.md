# MastodonApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthGET**](DefaultApi.md#healthGET) | **GET** /health | Health check
[**rootGET**](DefaultApi.md#rootGET) | **GET** / | 



## healthGET

> String healthGET()

Health check

Not part of the API but possibly useful.

### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.DefaultApi();
apiInstance.healthGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## rootGET

> rootGET()



### Example

```javascript
import MastodonApi from 'mastodon_api';

let apiInstance = new MastodonApi.DefaultApi();
apiInstance.rootGET((error, data, response) => {
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

