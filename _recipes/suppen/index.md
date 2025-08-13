---
layout: category
title: "Suppen"
subcategory: "Suppen"
---

<p>Kurzer Introtext zu den Suppen …</p>

<ul>
{% assign items = site.recipes | where:"subcategory", page.subcategory | sort: "title" %}
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
