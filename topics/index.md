---
layout: default
title: "Topics Index"
description: "Explore all parts of the Kingdom Ark series"
permalink: /topics/index.html
---

<section class="container">
  <h1>Kingdom Ark Study Series</h1>
  <div class="topics-grid">
    {% for i in (1..10) %}
      <a class="topic-card" href="/topics/part-{{ i }}.html">
        <h2>Part {{ i }}</h2>
        <p>Summary for Part {{ i }}</p>
      </a>
    {% endfor %}
  </div>
</section>
