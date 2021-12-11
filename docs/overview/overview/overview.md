---
id: overview
title: Introduction
description: 'What is Supabase?'
hide_table_of_contents: true
sidebar_position: 1
slug: /
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

The documentation is divided into 3 sections.

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
    {/* Overview */}
    <div class="col col--4">
      <Link class="card" to="/docs/architecture" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Overview</h4>
          <p>A summary of the the tools used for PraiseCharts</p>
        </div>
      </Link>
    </div>
    {/* Auth */}
    <div class="col col--4">
      <Link class="card" to="/docs/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Guides</h4>
          <p>In-depth explanations for each tool.</p>
        </div>
      </Link>
    </div>
    {/* Ref */}
    <div class="col col--4">
      <Link class="card" to="/docs/reference/javascript/supabase-client" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Reference Docs</h4>
          <p>Technical documentation for Systems and how Data works together.</p>
        </div>
      </Link>
    </div>
  </div>
</div>
