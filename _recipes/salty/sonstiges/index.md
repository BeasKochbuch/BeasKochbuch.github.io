---
layout: category
title: "Sonstiges"
category: "Salzige Rezepte"
subcategory: "Sonstiges"
permalink: /recipes/salty/sonstiges/
is_root: false
---

<p>Hier findet ihr alle salzigen Rezepte die ich keiner Kategorie zuorddnen konnte!</p>

{% assign items = site.recipes
  | where:"category", page.category
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

