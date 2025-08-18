---
layout: category
title: "Salate"
category: "Salzige Rezepte"
subcategory: "Salate"
permalink: /recipes/salty/salads/
is_root: false
---

<p>Hier findet ihr alle Salat Rezepte!</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
