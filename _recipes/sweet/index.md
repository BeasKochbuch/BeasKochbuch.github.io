---
layout: category
title: "Süße Rezepte"
category: "Süße Rezepte"
permalink: /recipes/sweet/
is_root: true
---

<p>In dieser Kategorie findet ihr alle süßen Rezepte!</p>

{%- assign subs = site.recipes
  | where:"layout","recipe"
  | where:"category", page.category
  | map:"subcategory" | compact | uniq | sort -%}

<ul class="subcategories">
  {%- for s in subs -%}
    {%- comment -%}
      Versuche die passende Subkategorie-Landingpage zu finden (layout: category)
    {%- endcomment -%}
    {%- assign landing = site.recipes
      | where:"layout","category"
      | where:"category", page.category
      | where:"subcategory", s
      | first -%}

    <li class="subcategory">
      <h3>
        {%- if landing -%}
          <a href="{{ landing.url | relative_url }}">{{ s }}</a>
        {%- else -%}
          {{ s }}
        {%- endif -%}
      </h3>

      {%- assign items = site.recipes
        | where:"layout","recipe"
        | where:"category", page.category
        | where:"subcategory", s
        | sort:"title" -%}

      <ul class="recipes">
        {%- for r in items -%}
          <li><a href="{{ r.url | relative_url }}">{{ r.title }}</a></li>
        {%- endfor -%}
      </ul>
    </li>
  {%- endfor -%}
</ul>
