/**
 * Mastodon API
 * https://docs.joinmastodon.org/methods/
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: erin@sockpuppet.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import OauthPostBody from './model/OauthPostBody';
import Response200 from './model/Response200';
import Response401 from './model/Response401';
import Response403 from './model/Response403';
import Response500 from './model/Response500';
import DefaultApi from './api/DefaultApi';
import OauthApi from './api/OauthApi';


/**
* https://docs.joinmastodon.org/methods/.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MastodonApi = require('index'); // See note below*.
* var xxxSvc = new MastodonApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MastodonApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MastodonApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MastodonApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The OauthPostBody model constructor.
     * @property {module:model/OauthPostBody}
     */
    OauthPostBody,

    /**
     * The Response200 model constructor.
     * @property {module:model/Response200}
     */
    Response200,

    /**
     * The Response401 model constructor.
     * @property {module:model/Response401}
     */
    Response401,

    /**
     * The Response403 model constructor.
     * @property {module:model/Response403}
     */
    Response403,

    /**
     * The Response500 model constructor.
     * @property {module:model/Response500}
     */
    Response500,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The OauthApi service constructor.
    * @property {module:api/OauthApi}
    */
    OauthApi
};
