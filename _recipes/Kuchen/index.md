---
layout: category
title: "Kuchen"
subcategory: "Kuchen"
---

<p>Kurzer Introtext zu den Kuchen …</p>

<ul>
{% assign items = site.recipes | where:"subcategory", page.subcategory | sort: "title" %}
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
