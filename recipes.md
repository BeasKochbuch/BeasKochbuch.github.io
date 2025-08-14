---
layout: base
title: Rezepte
---

<h2>Rezepte nach Kategorie</h2>

{% assign cats = site.recipes | map: "category" | compact | uniq | sort %}
{% for c in cats %}
  <h3>{{ c }}</h3>
  {% assign subs = site.recipes | where:"category", c | map: "subcategory" | compact | uniq | sort %}
  <ul>
  {% for s in subs %}
    <li>
      <a href="{{ '/recipes/' | append: c | append: '/' | append: s | append: '/' | relative_url }}">
        {{ s }}
      </a>
    </li>
  {% endfor %}
  </ul>
{% endfor %}
