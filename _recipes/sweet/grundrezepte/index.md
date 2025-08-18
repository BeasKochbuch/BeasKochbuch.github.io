---
layout: category
title: "Grundrezepte"
category: "Süße Rezepte"
subcategory: "Grundrezepte"
permalink: /recipes/sweet/basics/
is_root: false
---

<p>Hier findet ihr alle Basis Rezepte / Grundrezepte für Kuchen und Torten!</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>

