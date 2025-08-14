---
layout: base
title: Rezepte
---

{% assign cats = site.recipes
  | where:"layout","recipe"
  | map:"category" | compact | uniq | sort %}

{% for c in cats %}
  <h3>{{ c }}</h3>

  {% assign subs = site.recipes
    | where:"layout","recipe"
    | where:"category", c
    | map:"subcategory" | compact | uniq | sort %}

  <ul>
  {% for s in subs %}
    {% comment %}
      Versuche die passende Subkategorie-Landing zu finden (layout: category).
      Diese Seite kann (und sollte) selbst einen permalink haben.
    {% endcomment %}
    {% assign landing = site.recipes
      | where:"layout","category"
      | where:"category", c
      | where:"subcategory", s
      | first %}

    <li>
      {% if landing %}
        <a href="{{ landing.url | relative_url }}"><strong>{{ s }}</strong></a>
      {% else %}
        <strong>{{ s }}</strong>
      {% endif %}

      <ul>
      {% assign items = site.recipes
        | where:"layout","recipe"
        | where:"category", c
        | where:"subcategory", s
        | sort:"title" %}

      {% for r in items %}
        <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
      {% endfor %}
      </ul>
    </li>
  {% endfor %}
  </ul>
{% endfor %}
