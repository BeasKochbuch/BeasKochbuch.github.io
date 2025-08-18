---
layout: category
title: "Sonstiges"
category: "Süße Rezepte"
subcategory: "Sonstiges"
permalink: /recipes/sweet/sonstiges/
is_root: false
---

<p>Kurzer Introtext zu den Sonstiges …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

