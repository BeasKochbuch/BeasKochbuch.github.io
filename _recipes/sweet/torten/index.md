---
layout: category
title: "Torten"
category: "Süße Rezepte"
subcategory: "Torten"
permalink:  /recipes/sweet/torten/
is_root: false
---

<p>Hier findet ihr alle Torten Rezepte!</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
