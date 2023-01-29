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

import ApiClient from '../ApiClient';

/**
 * The OauthPostBody model module.
 * @module model/OauthPostBody
 * @version 1.0.0
 */
class OauthPostBody {
    /**
     * Constructs a new <code>OauthPostBody</code>.
     * @alias module:model/OauthPostBody
     * @param grantType {String} Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only.
     * @param clientId {String} Client ID, obtained during app registration
     * @param clientSecret {String} Client secret, obtained during app registration
     * @param redirectUri {String} Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect_uris declared during app registration.
     */
    constructor(grantType, clientId, clientSecret, redirectUri) { 
        
        OauthPostBody.initialize(this, grantType, clientId, clientSecret, redirectUri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, grantType, clientId, clientSecret, redirectUri) { 
        obj['grant_type'] = grantType;
        obj['client_id'] = clientId;
        obj['client_secret'] = clientSecret;
        obj['redirect_uri'] = redirectUri;
    }

    /**
     * Constructs a <code>OauthPostBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OauthPostBody} obj Optional instance to populate.
     * @return {module:model/OauthPostBody} The populated <code>OauthPostBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthPostBody();

            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OauthPostBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OauthPostBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OauthPostBody.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['grant_type'] && !(typeof data['grant_type'] === 'string' || data['grant_type'] instanceof String)) {
            throw new Error("Expected the field `grant_type` to be a primitive type in the JSON string but got " + data['grant_type']);
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }
        // ensure the json data is a string
        if (data['redirect_uri'] && !(typeof data['redirect_uri'] === 'string' || data['redirect_uri'] instanceof String)) {
            throw new Error("Expected the field `redirect_uri` to be a primitive type in the JSON string but got " + data['redirect_uri']);
        }
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}

OauthPostBody.RequiredProperties = ["grant_type", "client_id", "client_secret", "redirect_uri"];

/**
 * Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only.
 * @member {String} grant_type
 */
OauthPostBody.prototype['grant_type'] = undefined;

/**
 * Client ID, obtained during app registration
 * @member {String} client_id
 */
OauthPostBody.prototype['client_id'] = undefined;

/**
 * Client secret, obtained during app registration
 * @member {String} client_secret
 */
OauthPostBody.prototype['client_secret'] = undefined;

/**
 * Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect_uris declared during app registration.
 * @member {String} redirect_uri
 */
OauthPostBody.prototype['redirect_uri'] = undefined;

/**
 *  List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). If code was provided, then this must be equal to the scope requested from the user. Otherwise, it must be a subset of scopes declared during app registration. If not provided, defaults to read.
 * @member {String} scope
 */
OauthPostBody.prototype['scope'] = undefined;

/**
 * A user authorization code, obtained via /oauth/authorize
 * @member {String} code
 */
OauthPostBody.prototype['code'] = undefined;






export default OauthPostBody;

