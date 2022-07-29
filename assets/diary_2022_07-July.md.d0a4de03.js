import{_ as s,c as n,o as l,d as a}from"./app.3e2eb5a7.js";var o="/images/2022/07-27-01.jpg",p="/images/2022/07-27-02.jpg",e="/images/2022/07-27-03.jpg",t="/images/2022/07-28-01.gif",c="/images/2022/07-29-01.jpg",r="/images/2022/07-29-02.jpg";const b=JSON.parse('{"title":"07-July","description":"","frontmatter":{},"headers":[{"level":2,"title":"27 - slice \u7B49","slug":"_27-slice-\u7B49"},{"level":2,"title":"28 - \u4E8B\u4EF6","slug":"_28-\u4E8B\u4EF6"},{"level":2,"title":"29 - pnpm","slug":"_29-pnpm"}],"relativePath":"diary/2022/07-July.md","lastUpdated":1659084635000}'),D={name:"diary/2022/07-July.md"},y=a('<h1 id="_07-july" tabindex="-1">07-July <a class="header-anchor" href="#_07-july" aria-hidden="true">#</a></h1><h2 id="_27-slice-\u7B49" tabindex="-1">27 - slice \u7B49 <a class="header-anchor" href="#_27-slice-\u7B49" aria-hidden="true">#</a></h2><p>\u5173\u4E8E<code>slice</code>\u3001<code>substring</code>\u3001<code>substr</code>\uFF1A\u4ECE\u539F\u5B57\u7B26\u4E32\u53D6\u51FA\u5B50\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\uFF0C\u4E0D\u6539\u53D8\u539F\u5B57\u7B26\u4E32\u3002</p><table><thead><tr><th></th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>slice</code></td><td style="text-align:center;"><code>(indexStart[, indexEnd])</code></td><td style="text-align:center;">\u4E0D\u4F20\u53C2\u65F6\uFF0CindexStart \u4F1A\u88AB\u89C6\u4E3A 0</td></tr><tr><td><code>substring</code></td><td style="text-align:center;"><code>(indexStart[, indexEnd])</code></td><td style="text-align:center;">\u540C\u4E0A</td></tr><tr><td><code>substr</code></td><td style="text-align:center;"><code>(start[, length])</code></td><td style="text-align:center;">\u540C\u4E0A\uFF08<strong>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8BE5\u65B9\u6CD5</strong>\uFF09</td></tr></tbody></table><details class="details custom-block"><summary>Details</summary><p><img src="'+o+'" alt=""></p></details><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li><p><code>slice</code> \u7684\u53C2\u6570\u5982\u679C\u662F\u8D1F\u503C\u5219\u4ECE\u7ED3\u5C3E\u5F00\u59CB\u5012\u6570\u8BA1\u7B97\u4F4D\u7F6E\uFF0C\u8868\u73B0\u4E3A <code>length + indexStart</code>\u3002</p></li><li><p><code>substring</code> \u7684\u53C2\u6570\u5982\u679C\u662F\u8D1F\u503C\u5219\u4F1A\u88AB\u8F6C\u4E3A <strong>0</strong>\u3002</p></li><li><p><code>substr</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5982\u679C\u662F\u8D1F\u503C\u8868\u793A\u5012\u6570\u8BA1\u7B97\u7684\u5B57\u7B26\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8D1F\u503C\uFF0C\u4F1A\u88AB\u8F6C\u4E3A <strong>0</strong> \u800C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002</p></li></ul></div><details class="details custom-block"><summary>Details</summary><p><img src="'+p+'" alt=""></p></details><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li><p><code>slice</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5927\u4E8E\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08\u6B63\u6570\u60C5\u51B5\u4E0B\uFF09\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002</p></li><li><p><code>substring</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5927\u4E8E\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4F1A\u81EA\u52A8\u66F4\u6362\u4E24\u4E2A\u53C2\u6570\u4F4D\u7F6E\u3002</p></li></ul></div><details class="details custom-block"><summary>Details</summary><p><img src="'+e+`" alt=""></p></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>slice</code> \u8FD8\u53EF\u7528\u4E8E\u6570\u7EC4\uFF0C\u4F18\u5148\u4F7F\u7528 <code>slice</code>\u3002</p></div><p>\u6839\u636E <strong>deploy.yml</strong> \u7684\u914D\u7F6E\uFF0C\u5982\u679C\u8981\u4F7F\u7528 <strong>github actions</strong> \u5219\u5FC5\u987B\u4F7F\u7528 <strong>yarn</strong> \u5B89\u88C5\u3002</p><h2 id="_28-\u4E8B\u4EF6" tabindex="-1">28 - \u4E8B\u4EF6 <a class="header-anchor" href="#_28-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u6A21\u578B\uFF0C\u5C31\u662F\u901A\u8FC7\u76D1\u542C\u51FD\u6570\uFF08listener\uFF09\u5BF9\u4E8B\u4EF6\u505A\u51FA\u53CD\u5E94\u3002\u4E8B\u4EF6\u53D1\u751F\u540E\uFF0C\u6D4F\u89C8\u5668\u76D1\u542C\u5230\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u5C31\u4F1A\u6267\u884C\u5BF9\u5E94\u7684\u76D1\u542C\u51FD\u6570\u3002</p><ol><li>\u4EA7\u751F\u4E8B\u4EF6\u5BF9\u8C61</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Event</span><span style="color:#A6ACCD;">(type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li><p><code>type</code>\uFF1A\u8868\u793A\u4E8B\u4EF6\u540D\u79F0\u7684\u5B57\u7B26\u4E32\uFF1B</p></li><li><p><code>options</code>\uFF1A\u4E8B\u4EF6\u5BF9\u8C61\u7684\u914D\u7F6E\uFF1A</p><ul><li><code>bubbles</code>\uFF1A\u8868\u793A\u4E8B\u4EF6\u5BF9\u8C61\u662F\u5426<strong>\u5192\u6CE1</strong>\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\uFF1B</li><li><code>cancelable</code>\uFF1A\u8868\u793A\u4E8B\u4EF6\u662F\u5426\u53EF\u4EE5<strong>\u88AB\u53D6\u6D88</strong>\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\uFF1B</li></ul></li></ul></div><ol start="2"><li>\u4E3A\u4E8B\u4EF6\u7ED1\u5B9A\u76D1\u542C\u51FD\u6570</li></ol><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onload</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">doSomething</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> doSomething</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u89E6\u53D1\u4E8B\u4EF6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">load</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> doSomething</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u4EE5 <strong>HTML \u7684 on- \u5C5E\u6027</strong> \u7ED1\u5B9A\u76D1\u542C\u51FD\u6570\u9700\u8981\u5728\u51FD\u6570\u540E\u52A0 <strong>()</strong>\uFF1B</p><p>\u524D\u4E24\u79CD\u7ED1\u5B9A\u76D1\u542C\u51FD\u6570\u7684\u65B9\u6CD5\u65B9\u6CD5\u53EA\u4F1A\u5728\u5192\u6CE1\u9636\u6BB5\u89E6\u53D1\uFF1B</p><p><code>addEventListener</code> \u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u5982\u679C\u662F\u5E03\u5C14\u503C\u8868\u793A\u662F\u5426\u5728\u6355\u83B7\u9636\u6BB5\u89E6\u53D1\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\uFF1B\u5982\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\u5219\uFF1A</p><ul><li><p><code>capture</code>\uFF1A\u662F\u5426\u5728<strong>\u6355\u83B7</strong>\u9636\u6BB5\u89E6\u53D1\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\u3002</p></li><li><p><code>once</code>\uFF1A\u76D1\u542C\u51FD\u6570\u662F\u5426\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\u3002</p></li><li><p><code>passive</code>\uFF1A\u662F\u5426\u7981\u6B62\u76D1\u542C\u51FD\u6570\u8C03\u7528 <code>preventDefault()</code> \u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code>\u3002</p></li><li><p><code>signal</code>\uFF1A<code>AbortSignal</code> \u5BF9\u8C61\uFF0C\u4E3A\u76D1\u542C\u5668\u8BBE\u7F6E\u4E00\u4E2A\u4FE1\u53F7\u901A\u9053\uFF0C\u7528\u6765\u5728\u9700\u8981\u65F6\u53D1\u51FA\u4FE1\u53F7\uFF0C\u79FB\u9664\u76D1\u542C\u51FD\u6570\u3002</p></li></ul></div><ol start="3"><li>\u89E6\u53D1\u76D1\u542C\u51FD\u6570</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatchEvent</span><span style="color:#A6ACCD;">(event)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>Details</summary><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u89E6\u53D1\u4E8B\u4EF6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7EC8\u6B62\u4FE1\u53F7</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E00\u4E2A\u6D4B\u8BD5\u7F62\u4E86</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> btn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> btn2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E8B\u4EF6\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Event</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u63A7\u5236\u5668\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> controller </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AbortController</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7ED1\u5B9A\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  e </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ev\u4E8B\u4EF6\u89E6\u53D1\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">signal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">signal </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u89E6\u53D1\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">btn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatchEvent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ev</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u63A7\u5236\u5668\u7EC8\u6B62\u4FE1\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">btn2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7EC8\u6B62\u4FE1\u53F7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abort</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><img src="`+t+'" alt=""></p></details><h2 id="_29-pnpm" tabindex="-1">29 - pnpm <a class="header-anchor" href="#_29-pnpm" aria-hidden="true">#</a></h2><ol><li>\u5728 <code>linux</code> \u7CFB\u7EDF\u4E2D\uFF1A</li></ol><ul><li><p>\u786C\u94FE\u63A5\uFF08<code>Hard Link</code>\uFF09\uFF1A\u591A\u4E2A\u6587\u4EF6\u540D\u6307\u5411\u7EDF\u4E00\u7D22\u5F15\u8282\u70B9\uFF08<code>Inode Index</code>\uFF09\u7684\u60C5\u51B5\u3002</p><ul><li>\u7D22\u5F15\u8282\u70B9\uFF1A\u5B58\u50A8\u6587\u4EF6\u5143\u6570\u636E\u7684\u5B58\u50A8\u533A\u57DF\u53EB\u505A\u7D22\u5F15\u8282\u70B9\u3002\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u8282\u70B9\u5B9A\u4F4D\u5230\u771F\u5B9E\u7684\u6587\u4EF6\u6570\u636E\u3002</li></ul></li></ul><details class="details custom-block"><summary>Details</summary><p><img src="'+c+'" alt=""></p></details><ul><li>\u8F6F\u94FE\u63A5\uFF08<code>Symbolic Link</code>\uFF09\uFF1A\u7279\u6B8A\u7684\u6587\u4EF6\uFF0C\u5305\u542B\u53E6\u4E00\u6587\u4EF6\u7684\u4F4D\u7F6E\u4FE1\u606F\u3002</li></ul><details class="details custom-block"><summary>Details</summary><p><img src="'+r+'" alt=""></p></details><ol start="2"><li><p>\u5728 <code>windows \u4E2D</code>\uFF1A\u53EF\u4EE5\u5728 <code>cmd</code> \u901A\u8FC7 <code>mklink</code> \u521B\u5EFA\u8F6F\u94FE\u63A5\u548C\u786C\u94FE\u63A5\uFF1B</p></li><li><p>\u7528 <code>pnpm</code> \u5B89\u88C5\u65F6\uFF0C <code>node_modules</code> \u6587\u4EF6\u5939\u4E0B\u7684\u4F9D\u8D56\u662F<strong>\u8F6F\u94FE\u63A5</strong>\uFF0C\u94FE\u63A5\u5230 <code>.pnpm</code> \u4E2D\u5BF9\u5E94\u7684\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u8BE5\u4F9D\u8D56\u7528\u5230\u4E86\u522B\u7684\u5305\uFF0C\u5219\u5176<strong>\u540C\u6837\u662F\u8F6F\u94FE\u63A5</strong>\uFF0C\u540C\u6837\u94FE\u63A5\u5230 <code>.pnpm</code> \u4E2D\u5BF9\u5E94\u7684\u6587\u4EF6\u5939\uFF1B<code>.pnpm</code> \u4E2D\u6587\u4EF6\u5939\u7684\u6587\u4EF6\u662F<strong>\u786C\u94FE\u63A5</strong>\uFF0C\u94FE\u63A5\u5230 <code>pnpm</code> \u7684\u5B58\u50A8\u6587\u4EF6\u5939\u4E2D\uFF0C\u7531\u4E8E <code>windows</code> \u786C\u94FE\u63A5\u4E0D\u652F\u6301\u8DE8\u78C1\u76D8\uFF0C\u6240\u4EE5\u5982\u679C\u8981\u53D1\u6325 <code>pnpm</code> \u7684\u6027\u80FD\uFF0C\u9700\u8981\u5728\u9879\u76EE\u6240\u5728\u78C1\u76D8\u4E2D\u5B58\u5728 <code>pnpm</code> \u7684\u5B58\u50A8\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u5C06\u5B58\u50A8\u6307\u5B9A\u5230\u4E86\u522B\u7684\u78C1\u76D8\u4E2D\uFF0C\u5219\u53EA\u80FD\u590D\u5236\u5BF9\u5E94\u6587\u4EF6\u800C\u4E0D\u662F\u786C\u94FE\u63A5\u3002</p></li></ol>',31),F=[y];function i(d,A,C,u,g,m){return l(),n("div",null,F)}var _=s(D,[["render",i]]);export{b as __pageData,_ as default};