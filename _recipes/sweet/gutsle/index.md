---
layout: category
title: "Gutsle"
category: "Süße Rezepte"
subcategory: "Gutsle"
permalink: /recipes/sweet/gutsle/
is_root: false
---

<p>Kurzer Introtext zu den Gutsle …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

