---
layout: category
title: "Grundrezepte"
category: "Süße Rezepte"
subcategory: "Grundrezepte"
permalink: /recipes/sweet/basics/
is_root: false
---

<p>Kurzer Introtext zu den Grundrezepten …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

