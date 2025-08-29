---
layout: default
title: Kingdom & Ark Project — Complete Study Series
description: "Explore the full 10-part series on the Ark, hidden scriptures, the inner Kingdom, and mystical awakening. Includes downloadable study pack."
---

<section class="container">
  <h3 class="page-title">📚 Featured Study Packs</h3>
  <p>Quick access to the first 3 study packs. Click “See All” to explore every part.</p>

  <div class="topics-grid">
    {% assign pdfs = site.static_files | where_exp:"file","file.path contains '/printables/' and file.extname == '.pdf'" | sort: "name" | slice: 0,3 %}
    {% for pdf in pdfs %}
      <a class="topic-card" href="{{ pdf.path }}" target="_blank">
        <h2>{{ pdf.name | replace: "-study-pack.pdf", "" | replace: "-", " " | capitalize }}</h2>
        <p>Download PDF</p>
      </a>
    {% endfor %}
  </div>

  <p style="margin-top:1rem;">
    <a class="btn" href="{{ '/printables/' | relative_url }}">See All Study Packs</a>
  </p>
</section>

<section class="container" style="margin-top: 2rem;">
  <h3 class="page-title">✨ Featured Printables</h3>
  <div class="printables-grid">
    {% assign pdfs = site.static_files | where_exp:"file","file.path contains '/printables/' and file.extname == '.pdf'" | sort: "name" %}
    {% for pdf in pdfs limit:3 %}
      <div class="printable-card">
        <h3>{{ pdf.name | replace: "-study-pack.pdf", "" | replace: "-", " " | capitalize }}</h3>
        <a href="{{ pdf.path }}" class="btn btn-download">Download</a>
      </div>
    {% endfor %}
  </div>
  <p style="margin-top:1rem;">
    <a href="{{ '/printables/index.html' | relative_url }}" class="btn btn-download">See All Printables</a>
  </p>
</section>

<section id="download" style="margin-top: 2rem">
  <h2>📥 Download the Full Study Pack</h2>
  <div class="highlight">
    <p>
      All 10 parts compiled into a single PDF with summaries, scriptures, 
      reflections, and exercises for personal and group study.
    </p>
  </div>
  <form action="https://example.us1.list-manage.com/subscribe/post" method="POST" target="_blank">
    <input type="email" name="EMAIL" placeholder="Your email" required />
    <button type="submit">Send me the full study pack</button>
  </form>
</section>
