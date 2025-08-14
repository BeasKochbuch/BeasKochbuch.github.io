---
layout: category
title: "Torten"
category: "Süße Rezepte"
subcategory: "Torten"
permalink:  /recipes/sweet/torten/
---

<p>Kurzer Introtext zu den Torten …</p>

{% assign items = site.recipes
  | where:"subcategory", page.subcategory
  | where:"layout","recipe"
  | sort:"title" %}

<ul>
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
{% assign items = site.recipes | where:"subcategory", page.subcategory | sort: "title" %}
{% for r in items %}
  <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
{% endfor %}
</ul>
