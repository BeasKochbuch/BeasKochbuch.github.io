---
layout: category
title: "Torten"
subcategory: "Torten"
---

<p>Kurzer Introtext zu den Grundrezepten …</p>

<ul>
{% assign items = site.recipes | where:"subcategory", page.subcategory | sort: "title" %}
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
