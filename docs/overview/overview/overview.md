---
id: overview
title: Introduction
hide_table_of_contents: true
sidebar_position: 1
slug: /
description: Documentation for the PraiseCharts API
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
const frameworks = [
  {
    name: 'PraiseCharts.com',
    logo: '/img/tools/praisecharts.png',
    href: 'https://www.praisecharts.com',
  },
  {
    name: 'Admin Tool',
    logo: '/img/tools/cpanel-white.png',
    href: 'https://cpanel.praisecharts.com/app',
  },
  {
    name: 'Old Admin',
    logo: '/img/tools/cpanel.png',
    href: 'https://cpanel.praisecharts.com',
  },
  {
    name: 'Support Tickets',
    logo: '/img/tools/support.png',
    href: 'https://support.praisecharts.com',
  },
    {
    name: 'Metabase (Data)',
    logo: '/img/tools/metabase.png',
    href: 'https://data.praisecharts.com',
  },
  {
    name: 'Marketing Emails',
    logo: '/img/tools/mautic.jpeg',
    href: 'https://m.praisecharts.com',
  },
  {
    name: 'Basecamp',
    logo: '/img/tools/basecamp.png',
    href: 'https://basecamp.com',
  }
]

:::info

These docs are still a WIP. The basics are covered but there are edge cases not yet fully explained. 

If you have questions or bump into issues reach out to isaiah@praisecharts.com directly.

:::

## Quick Start

The quickest way to get started is by playing around. We have collections set up in both Insomnia & Postman with environment variables pre-configured. 

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=PraiseCharts%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FPraiseCharts%2Fapi-docs%2Fmaster%2FInsomnia_2021-12-13.json)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/3322692-2221fa52-2d0b-4853-a649-f922ee2208b7?action=collection%2Ffork&collection-url=entityId%3D3322692-2221fa52-2d0b-4853-a649-f922ee2208b7%26entityType%3Dcollection%26workspaceId%3D0a69ee76-89ed-4fbd-85f4-025441b6f03c#?env%5BProduction%5D=W3sia2V5IjoiY29uc3VtZXJfa2V5IiwidmFsdWUiOiIzNjc1NzEwNDVkM2UxMWVjYmY2MzAyNDJhYyIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29uc3VtZXJfc2VjcmV0IiwidmFsdWUiOiI5ZDU0MjYyODc3IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJhY2Nlc3NfdG9rZW4iLCJ2YWx1ZSI6ImNjZGExMzUyMjYyMTU3Mjc5MDdjYzk0NGRkYjg1NCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidG9rZW5fc2VjcmV0IiwidmFsdWUiOiIwZDgzNTVlNjdlIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJsaWJyYXJ5X2lkIiwidmFsdWUiOiIzem04MXY1MTQzd29vMTZuZW83MiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vd3d3LnByYWlzZWNoYXJ0cy5jb20vYXBpIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ2ZXJzaW9uIiwidmFsdWUiOiIvdjEuMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYXBpX3VybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkucHJhaXNlY2hhcnRzLmNvbSIsImVuYWJsZWQiOnRydWV9XQ==)

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
    {/* Ref */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Guides</h4>
          <p>In-depth explanations.</p>
        </div>
      </Link>
    </div>
    {/* Ref */}
    <div class="col col--6">
      <Link class="card" to="/api" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Reference Docs</h4>
          <p>API reference.</p>
        </div>
      </Link>
    </div>
  </div>
</div>
