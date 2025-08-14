---
layout: category
title: "Kuchen"
category: "Süße Rezepte"
subcategory: "Kuchen"
permalink: /recipes/sweet/cake/
---

<p>Kurzer Introtext zu den Kuchen …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

