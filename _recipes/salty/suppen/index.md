---
layout: category
title: "Suppen"
category: "Salzige Rezepte"
subcategory: "Suppen"
permalink: /recipes/salty/soups/
---

<p>Kurzer Introtext zu den Suppen …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

