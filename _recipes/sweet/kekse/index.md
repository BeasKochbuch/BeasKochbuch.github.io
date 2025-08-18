---
layout: category
title: "Kekse"
category: "Süße Rezepte"
subcategory: "Kekse"
permalink: /recipes/sweet/Kekse/
is_root: false
---

<p>Hier findet ihr leckere Keksrezepte!</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

