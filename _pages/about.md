---
permalink: /
title: "Yiming Qiao"
layout: academic
author_profile: false
home_navigation: true
redirect_from: 
  - /about/
  - /about.html
---

I received my Ph.D. in Computer Science at the [Institute for Interdisciplinary Information Sciences (IIIS)](https://iiis.tsinghua.edu.cn/en/), Tsinghua University, where I was advised by [Prof. Huanchen Zhang](https://people.iiis.tsinghua.edu.cn/~huanchen/). I also visited [Centrum Wiskunde & Informatica (CWI)](https://www.cwi.nl/) in the Netherlands, where I worked with [Prof. Peter Boncz](https://homepages.cwi.nl/~boncz/). My research focuses on database management systems, particularly query execution engines, query optimization, and data compression. I received my B.Eng. from Nanjing University of Posts and Telecommunications in 2021.

My current work spans robust query processing and databases for agents. Building on the Yannakakis algorithm, our [RPT+](../files/rpt_plus.pdf) work combines query optimization and execution to make performance less sensitive to join order. I also explore how analytical databases and cloud services can support agents in storing, querying, and analyzing data.

<!--
<br>
[[CV](../files/Yiming_Qiao_CV.pdf)]
-->

## News
{: #news}

<div class="news-list">
  <div class="news-item">
    <time class="news-item__label" datetime="2026-09">Sep. 2026</time>
    <p>We released <strong>Bloom</strong> for <a href="https://github.com/YimingQiao/bloom">DuckDB</a>, <a href="https://github.com/YimingQiao/bloompg">PostgreSQL</a>, and <a href="https://github.com/YimingQiao/datafusion-bloom">Apache DataFusion</a> for faster, join-order-robust queries: up to <a href="https://github.com/YimingQiao/bloompg#results"><strong>4.14× speedup</strong></a> on CEB IMDB (PostgreSQL; queries completed by both systems).</p>
  </div>
</div>

## Selected Publications
{: #publications}

<ul class="publication-list">
  <li class="publication-entry">
    <p class="publication-title">Entropy-based compaction for LSM-trees.</p>
    <p>Jiansheng Qiu, Fangzhou Yuan, Hengrui Wang, <strong>Yiming Qiao</strong>, Siyuan Bai, Lei Yu, Huanchen Zhang.</p>
    <p class="publication-venue">Proceedings of the ACM on Management of Data <span class="venue-tag">(SIGMOD'27)</span>. Accepted.</p>
  </li>
  <li class="publication-entry">
    <p class="publication-title"><a href="../files/rpt_plus.pdf">Robust Predicate Transfer with Dynamic Execution.</a></p>
    <p><strong>Yiming Qiao</strong>, Peter Boncz, Huanchen Zhang.</p>
    <p class="publication-venue">Proceedings of the VLDB Endowment <strong class="venue-plain">(VLDB'26)</strong> 19, no. 6, pp. 1278–1290, 2026. <span class="publication-links"><a href="https://github.com/embryo-labs/dynamic-predicate-transfer">[Code]</a> <a href="../files/rpt_plus_vldb26_slides.pdf">[Slides]</a></span></p>
  </li>
  <li class="publication-entry">
    <p class="publication-title"><a href="../files/data-chunk-compaction-sigmod25.pdf">Data Chunk Compaction in Vectorized Execution.</a></p>
    <p><strong>Yiming Qiao</strong>, Huanchen Zhang.</p>
    <p class="publication-venue">Proceedings of the ACM on Management of Data <span class="venue-tag">(SIGMOD'25)</span> 3(1): Article 26, 25 pages. <span class="publication-links"><a href="https://github.com/YimingQiao/Chunk-Compaction-in-Vectorized-Execution">[Code]</a> <a href="../files/data-chunk-compaction-sigmod25-slides.pdf">[Slides]</a></span></p>
  </li>
  <li class="publication-entry">
    <p class="publication-title"><a href="https://www.vldb.org/pvldb/vol17/p2528-zhang.pdf">Blitzcrank: Fast Semantic Compression for In-memory Online Transaction Processing.</a></p>
    <p><strong>Yiming Qiao</strong>, Yihan Gao, Huanchen Zhang.</p>
    <p class="publication-venue">Proceedings of the VLDB Endowment <span class="venue-tag">(VLDB'24)</span> 17, no. 10, pp. 2528–2540. <span class="publication-links"><a href="https://github.com/YimingQiao/Blitzcrank">[Code]</a> <a href="../files/YimingQiao-Blitzcrank.pdf">[Slides]</a></span></p>
  </li>
  <li class="publication-entry">
    <p class="publication-title">DSPNet: A Lightweight Dilated Convolution Neural Networks for Spectral Deconvolution with Self-paced Learning.</p>
    <p>Hu Zhu*, <strong>Yiming Qiao</strong>*, Guoxia Xu, Lizhen Deng, and Yu-Feng Yu.</p>
    <p class="publication-venue">IEEE Transactions on Industrial Informatics <span class="venue-tag">(TII)</span> 16, no. 12 (2019): 7392–7401. (*Equal Contribution)</p>
  </li>
</ul>

## Experience
{: #experience}

<div class="profile-list experience-list">
  <div class="profile-item"><div class="profile-item__body"><h3>Summer Intern (Qingyun Program)</h3><p>Tencent</p></div><div class="profile-item__date">July 2025 – Oct. 2025, Shanghai</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Visiting Student</h3><p>Centrum Wiskunde &amp; Informatica (CWI), Advisor: <a href="https://homepages.cwi.nl/~boncz/">Prof. Peter Boncz</a></p></div><div class="profile-item__date">Feb. 2025 – June 2025, Amsterdam</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Software Engineering Intern</h3><p>Oracle</p></div><div class="profile-item__date">Nov. 2019 – May 2020, Nanjing</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Exchange Student</h3><p>Nanjing University</p></div><div class="profile-item__date">Sept. 2018 – June 2019, Nanjing</div></div>
</div>

## Service
{: #service}

<div class="profile-list">
  <div class="profile-item"><div class="profile-item__body"><h3>Light-Load, Fast-Response (LLFR) Program Committee</h3><p>ACM SIGMOD 2027</p></div><div class="profile-item__date">2027</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>External reviewer for SIGMOD, VLDB, and ICDE</h3></div><div class="profile-item__date">2024/2025/2026</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Artifact Availability and Reproducibility Committee (ARC)</h3><p>ACM SIGMOD 2025</p></div><div class="profile-item__date">2025</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Teaching Assistant, Database Systems</h3><p>Tsinghua University, 40470414</p></div><div class="profile-item__date">Spring 2026</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Teaching Assistant, Quantitative Investment and Financial Optimization</h3><p>Tsinghua University, 80470273</p></div><div class="profile-item__date">Fall 2023</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Teaching Assistant, Data Mining</h3><p>Tsinghua University, 40470333</p></div><div class="profile-item__date">Fall 2021</div></div>
</div>

## Invited Talks
{: #talks}

<div class="profile-list">
  <div class="profile-item"><div class="profile-item__body"><h3>Robust predicate transfer and Beyond</h3><p>Clickhouse Lab</p></div><div class="profile-item__date">Sep. 18, 2026</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Adaptive Query Execution with Predicate Transfer</h3><p>CWI Amsterdam</p></div><div class="profile-item__date">Sep. 12, 2025</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Making Analytical Queries Robust to Join Order</h3><p>Tencent Cloud</p></div><div class="profile-item__date">Sep. 2, 2025</div></div>
</div>

## Selected Awards
{: #awards}

<div class="profile-list">
  <div class="profile-item"><div class="profile-item__body"><h3>Outstanding Graduate</h3><p>Tsinghua University</p></div><div class="profile-item__date">2026</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Merit Student</h3><p>Tsinghua University</p></div><div class="profile-item__date">2026</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>SIGMOD Programming Contest 2025, Third Place Team</h3><p>ACM SIGMOD</p></div><div class="profile-item__date">2025</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Excellent Comprehensive Scholarship</h3><p>Tsinghua University</p></div><div class="profile-item__date">2023/2024</div></div>
  <div class="profile-item"><div class="profile-item__body"><h3>Bell Honors School Graduate Gold Medal</h3><p>Nanjing University of Posts and Telecommunications</p></div><div class="profile-item__date">2020</div></div>
</div>
