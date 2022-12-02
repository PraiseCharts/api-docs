---
sidebar_position: 1
sidebar_label: Search Catalog
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Searching the Catalog
There are two routes you can use to search the catalog. 

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
    {/* Catalog */}
    <div class="col col--6">
      <Link class="card" to="/api#tag/Catalog/paths/~1catalog~1search/get" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>/v1.0/catalog/search</h4>
          <p>Search Catalog</p>
        </div>
      </Link>
    </div>
    <div class="col col--6">
      <Link class="card" to="/api#tag/Library/paths/~1library~1search/get" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>/v1.0/library/search</h4>
          <p>Search user's library</p>
        </div>
      </Link>
    </div>
  </div>
</div>


The response for each route is very similar but there are some slight differences.

## Library Search GET /v1.0/library/search

Library search takes the query and returns two objects. If a user owns at least one product from an arrangement in the results set
it will be in the "in_library".

If you happen to own the 14th & 18th most popular versions of "How Great Thou Art" and you search for "How Great Thou Art", you can easily show the owned versions first.

Library search will only ever return arrangements.

```
{
    "in_library": { ... }
    "other_results": { ... }
}
```

## Catalog Search GET /v1.0/catalog/search

Catalog search combines arrangement into one array of results whether you own them or not. By default, for faster results, ownership information is not blended into the results set. If you don't intend to show ownership data then you would
use this route

If you happen to own the 14th most popular version of "How Great Thou Art" and you search for "How Great Thou Art", the arrangement that you own would not return on the first page if you were using default pagination numbers.

Catalog Search will eventually support the ability to request multiple types of results like songlists, albums, artists etc. 

```
{
    "arrangements": { ... },
    "songlists": { ... } // other types will eventually be supported
}
```
