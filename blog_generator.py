#!/usr/bin/env python3
"""SwiftConvertHub Blog Generator — components.js style site."""
import json, os
from datetime import date

def r(p):
    with open(p, encoding='utf-8') as f: return f.read()
def w(p, c):
    with open(p, 'w', encoding='utf-8') as f: f.write(c)
    print(f'  OK: {os.path.basename(p)}')

cfg = json.load(open('blog_config.json', encoding='utf-8'))
BASE   = cfg['repo_path'].replace('\\','/').rstrip('/') + '/'
DOMAIN = cfg['site_domain']
ADS    = cfg['adsense_id']
PREFIX = cfg['article_prefix']
BIDX   = cfg['blog_index']
ARTS   = cfg['articles']
LANG   = cfg['language']

GTAG = '''  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLQEN72B5R"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TLQEN72B5R');
  </script>'''

ADSENSE_SCRIPT = f'  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADS}" crossorigin="anonymous"></script>'

def adsense_block():
    return f'''    <ins class="adsbygoogle" style="display:block;text-align:center;" data-ad-client="{ADS}" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({{}});</script>'''

def article_html(art):
    slug = art['slug']
    fn   = f"{PREFIX}{slug}.html"
    rels = [a for a in ARTS if a['slug'] != slug][:4]
    rel_links = '\n'.join(f'        <li><a href="{PREFIX}{a["slug"]}.html">{a["title"]}</a></li>' for a in rels)
    rel_links += f'\n        <li><a href="{BIDX}"><strong>View all articles →</strong></a></li>'
    schema = json.dumps({"@context":"https://schema.org","@type":"BlogPosting","headline":art['title'],"description":art['desc'],"datePublished":art['date'],"author":{"@type":"Organization","name":DOMAIN},"url":f"https://{DOMAIN}/{fn}","inLanguage":LANG}, ensure_ascii=False, indent=2)
    content = art.get('content') or f'<h2>{art["title"]}</h2>\n<p>Content coming soon.</p>'
    return f'''<!DOCTYPE html>
<html lang="{LANG}" data-theme="light">
<head>
{GTAG}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{art["title"]} | SwiftConvertHub</title>
  <meta name="description" content="{art["desc"]}" />
  <meta name="keywords" content="{art["keywords"]}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://{DOMAIN}/{fn}" />
  <meta property="og:title" content="{art["title"]}" />
  <meta property="og:description" content="{art["desc"]}" />
  <meta property="og:url" content="https://{DOMAIN}/{fn}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="SwiftConvertHub" />
  <link rel="stylesheet" href="css/styles.css" />
{ADSENSE_SCRIPT}
  <script type="application/ld+json">
{schema}
  </script>
</head>
<body data-page="blog">
  <div id="nav-placeholder"></div>

  <div class="article-header">
    <div class="container">
      <div class="breadcrumbs">
        <a href="/">Home</a> &rsaquo; <a href="{BIDX}">Blog</a> &rsaquo; {art["short"]}
      </div>
      <span class="blog-tag">{art["category"]}</span>
      <h1>{art["title"]}</h1>
      <div class="article-meta">📅 {art["date"]} &nbsp;·&nbsp; ✏️ SwiftConvertHub</div>
    </div>
  </div>

  <div class="container" style="padding-top:8px;padding-bottom:20px;">
    <div style="max-width:720px;margin:0 auto 24px;">
{adsense_block()}
    </div>
    <article class="article-body">
      {content}
    </article>
    <div style="max-width:720px;margin:0 auto 32px;">
{adsense_block()}
    </div>
    <div class="related-articles">
      <h3>Related Articles</h3>
      <ul>
{rel_links}
      </ul>
    </div>
  </div>

  <div id="footer-placeholder"></div>
  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>'''

def blog_index_html():
    cards = ''
    for i, art in enumerate(ARTS):
        fn = f"{PREFIX}{art['slug']}.html"
        cards += f'''        <div class="blog-card">
          <span class="blog-tag">{art["category"]}</span>
          <h3><a href="{fn}" style="color:inherit;text-decoration:none;">{art["title"]}</a></h3>
          <p>{art["desc"]}</p>
          <div class="blog-card-meta">📅 {art["date"]}</div>
          <a class="read-more" href="{fn}">Read article →</a>
        </div>\n'''
        if i == 5:  # ad mid-grid
            cards += f'''        <div style="grid-column:1/-1;padding:8px 0;">
{adsense_block()}
        </div>\n'''

    return f'''<!DOCTYPE html>
<html lang="{LANG}" data-theme="light">
<head>
{GTAG}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog — Unit Conversion Guides & Tips | SwiftConvertHub</title>
  <meta name="description" content="Guides, tips and explanations about unit conversion — length, weight, temperature, digital storage and binary numbers." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://{DOMAIN}/{BIDX}" />
  <meta property="og:title" content="SwiftConvertHub Blog — Unit Conversion Guides" />
  <meta property="og:type" content="website" />
  <link rel="stylesheet" href="css/styles.css" />
{ADSENSE_SCRIPT}
</head>
<body data-page="blog">
  <div id="nav-placeholder"></div>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label">📖 Blog</div>
        <h1 style="font-family:var(--font-head);font-size:clamp(1.5rem,3vw,2rem);font-weight:700;color:var(--text);margin-bottom:10px;">Unit Conversion Guides</h1>
        <p>Practical articles on length, weight, temperature, digital storage and number systems.</p>
      </div>
      <div style="margin:0 auto 24px;text-align:center;">
{adsense_block()}
      </div>
      <div class="blog-grid">
{cards}      </div>
      <div style="margin:40px auto 0;text-align:center;">
{adsense_block()}
      </div>
    </div>
  </section>

  <div id="footer-placeholder"></div>
  <script src="js/components.js"></script>
</body>
</html>'''

def build_sitemap():
    urls = [f'  <url><loc>https://{DOMAIN}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>']
    for p in cfg.get('existing_pages', []):
        urls.append(f'  <url><loc>https://{DOMAIN}/{p}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>')
    urls.append(f'  <url><loc>https://{DOMAIN}/{BIDX}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>')
    for a in ARTS:
        fn = f'{PREFIX}{a["slug"]}.html'
        urls.append(f'  <url><loc>https://{DOMAIN}/{fn}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>')
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(urls) + '\n</urlset>'

print('\n  Generating SwiftConvertHub blog...\n')
print('  Articles:')
for art in ARTS:
    w(BASE + PREFIX + art['slug'] + '.html', article_html(art))

print('\n  Blog index:')
w(BASE + BIDX, blog_index_html())

print('\n  Sitemap:')
w(BASE + 'sitemap.xml', build_sitemap())

print('\n  Done! All files generated.')
