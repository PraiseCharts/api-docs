---
tags: [oauth]
---

# 3-Legged Authorization Flow

To perform actions on behalf of a PraiseCharts user, you'll need to obtain their access tokens. To obtain these, the user will need to grant your application access to a specific library that they are associated with.

These tokens do not expire but can be revoked by the user at any time.

### High Level Overview
1. Create a request request token with an oauth_callback to your application.
2. Send the user to the PraiseCharts (Service Provider) authorization endpoint, where the user will authenticate, grant access to the request token, and redirect the user back to your callback URL.
3. Your callback endpoint will convert the request token into a user access token, which can be used to make authenticated requests to the user’s song library.

![](https://oauth.net/core/diagram.png)
*Image Source: [https://oauth.net/core/1.0/#anchor9](https://oauth.net/core/1.0/#anchor9)*


---

### **Step 1** Generate a Request Token [POST /oauth/request_token](')

Create a `request_token`.

[Image Step (A)](#high-level-overview)
The only unique parameter in this request is oauth_callback, which must be a **URL encoded** version of the URL you wish your user to be redirected to when they complete step 2. The remaining parameters are added by the OAuth signing process.

Signed request must include:

`oauth_callback_url="https%3A%2F%2FyourCallbackUrl.com"`

Example of a signed request:

```shell
curl --request POST \
  --url https://api.praisecharts.com/oauth/request_token \
  --header 'Authorization: OAuth oauth_consumer_key="A8D37FC92342467F310FE05", oauth_nonce="zG67zkwroVuOZUolCp8RTgHyLmhJ1OSt", oauth_signature="xnHkg%2BAUvwjYdHvATN0YnP2Byyo%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1611362088", oauth_token="81e2fbb4e18b2fd0a6642b38ccf8bc", oauth_version="1.0", oauth_callback_url="https%3A%2F%2FyourCallbackUrl.com"' \
  --header 'Content-Type: application/json' 
```

[Image Step (B)](#high-level-overview) Response includes:

```json
{
  "oauth_token": "asdfasdfadsf",
  "oauth_token_secret": "asdfasdfasdf",
  "oauth_callback_confirmed": true,
}
``` 

--- 
### **Step 2:** Authenticate the User in a Library [POST /oauth/authorize](')
Send the user to PraiseCharts with `request_token` to login and grant access to the desired library. 
 

Example URL to redirect user to:

https://api.praisecharts.com/authorize?oauth_token=6ec82633931dc5d06ffa60558a3361

Upon successful authentication, your callback_url would receive a request containing the oauth_token and oauth_verifier parameters. Your application should verify that the token matches the request token received in step 1.
 

Request from service provider's redirect:

https://yourCallbackUrl.com?oauth_token=NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0&oauth_verifier=uw7NjWHT6OJ1MpJOXsHfNxoAhPKpgI8BlYDhxEjIBY

---
### **Step 3:** Obtain access_token [POST /oauth/access_token](')
Convert the request token into a usable access token

[Image Step (E)](#high-level-overview) Make a POST request to /oauth/access_token containing the oauth_verifier value obtained in step 2. The **request token** is also passed in the oauth_token portion of the header, but this will have been added by the signing process.
 

Signed Request must include:

`oauth_consumer_key="cChZNFj6T5R0TigYB9yd1w"`

`oauth_token="NPcudxy0yU5T3tBzho7iCotZ3cnetKwcTIRlX0iwRl0"`

`oauth_verifier="uw7NjWHT6OJ1MpJOXsHfNxoAhPKpgI8BlYDhxEjIBY"`


Example of a signed request:

```shell
curl --request POST \
  --url https://api.praisecharts.com/oauth/access_token \
  --header 'Authorization: OAuth oauth_consumer_key="A8D37FC92342467F310FE05", oauth_nonce="zG67zkwroVuOZUolCp8RTgHyLmhJ1OSt", oauth_signature="xnHkg%2BAUvwjYdHvATN0YnP2Byyo%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1611362088", oauth_token="81e2fbb4e18b2fd0a6642b38ccf8bc",oauth_verifier="1e2fb2fd0cf8bc", oauth_version="1.0"' \
  --header 'Content-Type: application/json' 
```


[Image Step (F)](#high-level-overview) A successful response contains the oauth_token, oauth_token_secret parameters. The token and token secret should be [stored](guides/authorization/key-concepts#storing-access-tokens) and used for future authenticated requests to the PraiseCharts API.
 
*Response includes:*
```json
{
  "oauth_token": "asdfasdfadsf",
  "oauth_token_secret": "asdfasdfasdf"
}

``` 


---
##### Credits
*Twitter: [Twitter Developer Documentation](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens)*

*OAuth.net: [oauth.net](https://oauth.net/core/1.0/#anchor9)*
