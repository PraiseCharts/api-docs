---
sidebar_position: 1
sidebar_label: Key Concepts
---

# Key OAuth 1.0a Concepts

The objective is to make API requests on behalf of any PraiseCharts User, once they have authorized your app, allowing you to access their purchases and import files.

Once you have obtained an `oauth_consumer_key` and `oauth_consumer_secret`, you use the 3-legged OAuth flow where a user will grant you access to their library. From this process you will obtain a set of access tokens, `oauth_token` and `oauth_token_secret`, which you will use to make and sign OAuth 1.0a requests.

All OAuth 1.0a requests must be [signed](https://www.getpostman.com/) and this is a complicated process. We strongly recommend you use an existing OAuth library. It is best if you understand the process and concepts, but leave the actual implementation to well-tested libraries, as there are a lot of edge cases.

To get testing quickly, you can use either [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) which automatically takes care of generating request signatures.

## Storing Access Tokens

Most applications wanting to integrate with PraiseCharts have a structure in which there are Organizations, and then Users attached to those Organizations. Access Tokens must not be generated for Organizations themselves, but for each unique `User<>Organization` relationship. You must not use the same access token for multiple users in your application.

Below are some common terminology synonomys. 

- `Organization === Library === Library Member`

- `Customer === User === User Member`

- `User<>Organization === User<>Library`

With PraiseCharts, multiple **users** can share the same **library** but they may have different permissions and access levels inside that specific library. When you are making a request to the API for a file, preview image, or searching a User's library, that **must** only be done from the specific user in an organization (if applicable) who authorized the access tokens.


## Authorization docs in 100 words
If you are familiar with [OAuth 1.0a](https://oauth.net/core/1.0a/) here's the lowdown:

- We use the **three-legged flow**
  1. Request Token endpoint is [**/oauth/request_token**](https://oauth.net/core/1.0a/)
  2. Authorization endpoint is [**/oauth/authorize**](https://oauth.net/core/1.0a/)
  3. Token exchange (access token) endpoint is [**/oauth/access_token**](https://oauth.net/core/1.0a/)
- The only signature method supported is **HMAC-SHA1**
- Signed OAuth requests must be sent in the Authorization header.

For reference, here is an example of a signed cURL request with all of the generated tokens passed in an authorization header:

```shell
curl --request POST \
  --url https://api.praisecharts.com/catalog/search \
  --header 'Authorization: OAuth oauth_consumer_key="A8D37FC92342467F310FE05", oauth_nonce="zG67zkwroVuOZUolCp8RTgHyLmhJ1OSt", oauth_signature="xnHkg%2BAUvwjYdHvATN0YnP2Byyo%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1611362088", oauth_token="81e2fbb4e18b2fd0a6642b38ccf8bc", oauth_version="1.0"' \
  --header 'Content-Type: application/json' \
  --data '{
  "term": "Graves Into Gardens"
}'
```

### Need More Detail?

If you are not familiar with OAuth 1.0a or are looking for more detailed documentation on the process of obtaining access tokens, read on!

[Obtaining Access tokens (3-legged Flow) ](https://www.getpostman.com/)

---