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

If you have questions  or bump into issues reach out to isaiah@praisecharts.com directly.

:::





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
