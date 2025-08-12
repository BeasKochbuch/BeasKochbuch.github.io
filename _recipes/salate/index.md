---
layout: category
title: "Salate"
subcategory: "Salate"
---

<p>Kurzer Introtext zu den Salate …</p>

<ul>
{% assign items = site.recipes | where:"subcategory", page.subcategory | sort: "title" %}
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
