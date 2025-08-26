---
layout: default
title: "Kingdom Ark Topics Index"
description: "Explore all parts of the Kingdom Ark 10-part study series"
permalink: /topics/index.html
---

<section class="hero">
  <div class="hero-content container">
    <h1>Kingdom Ark Study Series</h1>
    <p>Explore the full 10-part series covering the prophecy, the Ark, hidden scriptures, and the Kingdom Within. Each part includes insights, reflections, and exercises to guide your inner journey.</p>
  </div>
</section>

<section class="container">
  <div class="topics-grid">
    {% for i in (1..10) %}
      <a class="topic-card" href="{{ site.baseurl }}/topics/part-{{ i }}.html">
        <h2>Part {{ i }}</h2>
        <p>Summary for Part {{ i }}</p>
      </a>
    {% endfor %}
  </div>
</section>

<section class="container content center" style="margin-top:2rem;">
  <p>Want to dive deeper? Download the <a href="{{ site.baseurl }}/#download">full study pack</a> and explore all 10 parts with additional reflections and exercises.</p>
</section>
