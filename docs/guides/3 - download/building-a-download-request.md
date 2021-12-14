---
sidebar_position: 1
sidebar_label: Download In-depth
---

# Building a Download Request

## Sheet Music

There are many different ways to use the model to build a download request. Below we will walk through a couple examples.

Below is a stripped down model for a product of an arragement. 

Download request requires a sku and you can obtionally provide a key. If you don't provide a key, all keys will be returned.


```
{
    "sku": "70824-L", // "parent level"
    "keys": [ ... ], // the common keys across all the parts
    "parts": [
        {
            "keys": [ ... ], // details for each individual key of that part. 
            "sku": "70824-7", // "part level"
        },
        {
            "keys": [ ... ],
            "sku": "70824-5",
        }
    ],
}
```

We can use this data to make a varity of download requests. Notice how you could easily create the same result multiple ways.

`/download?skus=73318-L` Returns all parts all keys (parent level)

`/download?skus[]=73318-7&skus[]=73318-5` Returns both parts in all keys

`/download?skus[]=73318-7` Returns one part in all avaliable keys

`/download?skus[]=73318-7&skus[]=73318-5&keys[]=D` Both parts in only the key of D

`/download?skus[]=73318-7&skus[]=73318-5&keys[]=D&keys[]=A` Both parts in D & A


### Chordpro

For chordpro downloads there is also the `chordpro_option` paramater. Use the chordpro_options from the product model to specify a Chord Chart output. 2 column is the default.
```
{
    "cc_text_txt": "Text Chord Chart",
    "ly_pdfbigly": "Big Lyrics",
    "ppt": "PowerPoint",
    "ly_small_pdf": "Small Lyrics",
    "cc_2col_pdf": "2 Column Layout",
    "cc_1col_pdf": "1 Column Layout",
    "ly_text_txt": "Text Lyrics",
    "chordpro": "Chordpro"
}
```

## Audio Tracks

Audio tracks don't have parts yet. Use the keys at the top level of the product object and the SKU for that product to make a request. If there are no keys, just specify the SKU.

## Patches

Patches don't have parts or keys. Just specify the sku.