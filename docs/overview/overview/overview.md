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

The goal of this documentation is to become the manual for everything needed to administer PraiseCharts.

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
    {/* Database */}
    <div class="col col--6">
      <Link class="card" to="/guides/create-a-catalog-item" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Catalog Management</h4>
          <p>If we can sell it, we can sell it.</p>
        </div>
      </Link>
    </div>
    {/* Auth */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Content & Marketing</h4>
          <p>Song lists for days, email builder.</p>
        </div>
      </Link>
    </div>
    {/* Auth */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Tags, Labels & People</h4>
          <p>Themes, Title Extensions, Styles</p>
        </div>
      </Link>
    </div>
    {/* API */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Members & Support</h4>
          <p>Help the people.</p>
        </div>
      </Link>
    </div>
    {/* API */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Royalties</h4>
          <p>Pay the publishers and arrangers.</p>
        </div>
      </Link>
    </div>
    {/* API */}
    <div class="col col--6">
      <Link class="card" to="/guides" style={{ height: '100%' }}>
        <div class="card__body">
          <h4>Old Admin Tool Help</h4>
          <p>Stuff that got us to where we are.</p>
        </div>
      </Link>
    </div>
  </div>
</div>

### Links to our tools

<div class="container" style={{ padding: 0 }}>
  <div class="row is-multiline">
    {frameworks.map((x) => (
      <div key={x.name} class="col col--3">
        <Link class="card" to={x.href}>
          <div class="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            {x.logo && (
              <img
                src={useBaseUrl(x.logo)}
                alt={x.name}
                width="20"
                style={{ display: 'block', maxHeight: 20 }}
              />
            )}
            <h5>{x.name}</h5>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>

## How to use these docs

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
