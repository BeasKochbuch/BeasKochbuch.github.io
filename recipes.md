---
layout: base
title: Rezepte
---

<h2>Alle Rezepte</h2>
<ul>
{% for recipe in site.recipes %}
  <li><a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a></li>
{% endfor %}
</ul>
