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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MastodonApi);
  }
}(this, function(expect, MastodonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MastodonApi.OauthPostBody();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OauthPostBody', function() {
    it('should create an instance of OauthPostBody', function() {
      // uncomment below and update the code to test OauthPostBody
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be.a(MastodonApi.OauthPostBody);
    });

    it('should have the property grantType (base name: "grant_type")', function() {
      // uncomment below and update the code to test the property grantType
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

    it('should have the property redirectUri (base name: "redirect_uri")', function() {
      // uncomment below and update the code to test the property redirectUri
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new MastodonApi.OauthPostBody();
      //expect(instance).to.be();
    });

  });

}));
