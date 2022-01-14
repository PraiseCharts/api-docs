---
sidebar_position: 1
sidebar_label: Purchase Links

---

# Purchase Links

Purchase links allow you to send the user over to PraiseCharts to complete the purchase and then return to where you sent them from very efficiently. 

### A Public Quick Buy

Purchase links are constructed with the following parameters. 

`sku` *{SongID}-{ProductCode}*

`return_url`

`cancel_url` *optional*

`token` *optional*

The user will be directed to a page that opens up the purchase state for that SKU (Product of a Song).

Passing in the userToken from the /v1.0/me route will automatically log the user into the correct account. 

### Example Link:

Clicking this link will take you to the purchase view, cancelling will return you right back here :)

https://www.praisecharts.com/buynow?sku=77846-L&return_url=https:%2F%2Fdeveloper.praisecharts.com%2Fguides%2Fpurchase%2Fpurchase-links

### Example Flow
1. Display a Purchase Link
2. User Clicks on links and makes purchase
3. User returns to where they were before.
![](/img/guides/purchase-links/purchase-links-flow.jpeg)

Example Video*

![](/img/guides/purchase-links/purchase-links.gif)

\* this is not a real implemtation. 
