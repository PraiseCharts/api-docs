---
tags: [oauth]
---

# How To Create A Request Signature

If there is not an existing OAuth library for your stack or you're interested in how to create a signed request then we invite you to read on.

Few things to note

- The only signature method supported is HMAC-SHA1
- Signed OAuth requests must be sent in the Authorization header.

---

### **Step 1** Collect required parameters

Each request will have a different set of required elements. These ones will be consistent across all requests:

```
oauth_consumer_key
oauth_nonce
oauth_signature_method
oauth_timestamp
oauth_version
```

All of the above properties will have static values provided by the Oauth provider except for `oauth_nonce` and `oauth_timestamp`. As per the Oauth 1.0a specs the timestamp value must be a positive integer and must be equal to or greater than the timestamp used in previous requests. https://oauth.net/core/1.0a/#nonce

--- 
### **Step 2:** Collect the remaining request specific parameters

Depending on the specific request, we'll add other paramaters to it as well. The documentation for each request will outline requirements similar to this example ...

*Signed request must include:*

`oauth_callback_url="https%3A%2F%2FyourCallbackUrl.com"`

Once you have all the parameters collected, we can move on to creating a signature base string.

--- 
### **Step 3:** Create a signature base string
The signature base string is where alot of problems originate so follow along closely.

The base string format will always follow this format

`METHOD&REQUEST_URI&PARAMETERS`

Let's create an example for the https://api.praisecharts.com/oauth/request_token endpoint. The request_uri and all the oauth parameters need to be percent encoded and, as per [OAuth 1.0a 9.1.1](https://oauth.net/core/1.0a/#normalize), paramaters should be sorted by name, using lexicographical byte value ordering.... or alphabetical.
 
Examples in PHP

```php
$signature_base_string =
            $http_method
            . '&' . rawurlencode($http_route)
            . '&' . rawurlencode('oauth_callback=' . $callback_url) 
            . rawurlencode('&oauth_consumer_key=' . $consumer_key)
            . rawurlencode('&oauth_nonce=' . $oauth_nonce)
            . rawurlencode('&oauth_signature_method=HMAC-SHA1')
            . rawurlencode('&oauth_timestamp=' . $oauth_timestamp);
            . rawurlencode('&oauth_version=1.0');
```

Notice how the & between the Method, Request URI, and Paramaters are not URL encoded. This is key. 

This string is used to create the hashed signature.

--- 
### **Step 4:** Hash with HMAC-SHA1 and a secret key
First you must create a signing key which is your `CONSUMER_SECRET` concatendated by an ampersand with your `OAUTH_TOKEN_SECRET`

If the oauth token secret does not exist, continue to add the ampersand, but omit the oauth token secret.

Then create the signature be BASE64 encoding the signature string. At this time we only support HMAC_SHA1.

```php
$signature_key = rawurlencode($consumer_secret) . "&" . rawurlencode($token_secret);

$oauth_signature = rawurlencode(base64_encode(hash_hmac('sha1', $signature_base_string, $signature_key, true)));
```


--- 
### **Step 5:** Use the signature in your request

Now you can format an Authorization header that looks like this: (line breaks added for readability)

`Authorization: OAuth oauth_consumer_key="acg", 
oauth_nonce="tRaCzl8MyggsBoLQpMPAVgr8HJwpkcvR", 
oauth_signature="K3ZKCvb2wChDl8h2Q3m0okTKFAs%3D", 
oauth_signature_method="HMAC-SHA1", 
oauth_timestamp="1612380905", 
oauth_token="a537c2beef411a783483a754462583", 
oauth_version="1.0"
`

Remember, for OAuth 1.0a every request must be signed. 
