---
permalink: /
title: "Yiming Qiao"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. student in [Institute for Interdisciplinary Information Sciences (IIIS)](https://iiis.tsinghua.edu.cn/en/) at Tsinghua University, where I am advised by [Prof. Huanchen Zhang](https://people.iiis.tsinghua.edu.cn/~huanchen/). My research focuses on database management systems, with particular interests in vectorized execution, query optimization, and data compression. I obtained my Bachelor's degree from Nanjing University of Posts and Telecommunications. 

Recently, I have been focusing on two major projects:
1. **Parallelism-friendly Query Optimization**: This project aims to enhance the parallelism of query plans, improving the overall efficiency and scalability of query execution.

2. **Multi-modal Query Execution**: This project supports complex queries that involve both structured and unstructured data. An example of such a query is: 

```sql
SELECT * 
FROM Movies AS M 
WHERE M.release_date = 2012 
  AND M.summary IS ABOUT 'A Love Story in World War II'; -- Uses LLM to filter summaries
```

<br>
[[CV](../files/YimingQiao_CV.pdf)] [[中文简历](../files/乔一明_简历.pdf)]



Education
-----

**Tsinghua University**  
Ph.D. in Computer Science, Sept. 2021 - Jun. 2026

**Nanjing University of Posts and Telecommunications**  
B.Eng. in Computer Science, Sept. 2017 - Jun. 2021

Experience
-----
**Centrum Wiskunde & Informatica**  
*Visiting Student*  
Amsterdam, Netherlands • Feb. 2025 – May. 2025  
Advisor: [Prof. Peter Boncz](https://homepages.cwi.nl/~boncz/)  

**eBay**  
*Software Engineering Intern*  
Shanghai, China • Sept. 2020 – Nov. 2020  

**Oracle**  
*Software Engineering Intern*  
Nanjing, China • Nov. 2019 – May 2020  

**Nanjing University**  
*Exchange Student*  
Nanjing, China • Sept. 2018 – Jun. 2019  



Publications
-----

1. **Yiming Qiao**, Huanchen Zhang, "Data Chunk Compaction in Vectorized Execution," *Proceedings of the ACM on Management of Data* (**SIGMOD’25**) 3(1): Article 26, 25 pages. [[Paper](../files/data-chunk-compaction-sigmod25.pdf)] [[Code](https://github.com/YimingQiao/Chunk-Compaction-in-Vectorized-Execution)] [[Poster](../files/data-chunk-compaction-sigmod25-poster.pdf)]

    *In this paper, we show the "small chunk problem" in vectorized query execution, identifying the filter and hash join as the most problematic operators. We propose two solutions: Learning Compaction for filters and Logical Compaction for hash joins. The Logical Compaction is used by DuckDB 1.2.0 ([#14956](https://github.com/duckdb/duckdb/pull/14956)).*

2. **Yiming Qiao**, Yihan Gao, Huanchen Zhang, "Blitzcrank: Fast Semantic Compression for In-memory Online Transaction Processing," *Proceedings of the VLDB Endowment* (**VLDB'24**) 17, no. 10, pp. 2528 - 2540.  [[Paper](../files/blitzcrank-vldb24.pdf)] [[Code](https://github.com/YimingQiao/Blitzcrank)] [[Poster](../files/blitz-vldb24-poster.pdf)] [[Slides](../files/YimingQiao%20-%20Blitzcrank.pdf)]

    *We propose Delayed Coding, a new entropy coding algorithm (e.g., Arithmetic Coding, Asymmetric Numeral System). Based on it, we design a compressor for row-store OLTP databases. It has high compression factors, and fast random access (to a single tuple), about 1 µs/tuple -- slower than memory (200 ns) but much faster than SSD (40 µs).*

3. Hu Zhu\*, **Yiming Qiao**\*, Guoxia Xu, Lizhen Deng, and Yu-Feng Yu. "DSPNet: A Lightweight Dilated Convolution Neural Networks for Spectral Deconvolution with Self-paced Learning," *IEEE Transactions on Industrial Informatics* (**TII**) 16, no. 12 (2019): 7392-7401. (*Equal Contribution)

4. Huihui Wang, Shunmei Meng, **Yiming Qiao**, and Jing Zhang. "Fast Classification Algorithms via Distributed Accelerated Alternating Direction Method of Multipliers," *Proceedings of 2019 IEEE International Conference on Data Mining* (**ICDM'19**), Nov. 2019, pp. 1354 - 1359. 

Patents
-----

1. Xingguo Chen, **Yiming Qiao**, Wei Liu, Jie Zhu, "A User-Oriented Method for Enhancing Custom Sports Commentary," Patent CN202010284204.8, China, Filed Apr. 2020, Granted Sept. 2023.

2. Zhiqiang Zou, Linrui Li, Shuyu Chang, **Yiming Qiao**, "A Classification Method for Outlier Celestial Objects Based on Astronomical Spectral Data," Patent CN202010983397.6, China, Filed Sept. 2020.


Awards
-----

- Tsinghua University Zhang Mingwei Comprehensive Scholarship, 2024.
- Excellent Comprehensive Scholarship of IIIS, 2023.
- [Mitacs Globalink Research Internship](https://www.mitacs.ca/our-programs/globalink-research-internship-students/), 2020.  
- [Bell Honors School Graduate Gold Medal](http://bhs.njupt.edu.cn/2014/0925/c4834a64225/page.htm), 2020.
- Nanjing University of Posts and Telecommunications First-Class Scholarship, 2019.

Teaching
-----
- **Teaching Assistant** - Quantitative Investment (Tsinghua 80470273) - Fall 2023
- **Teaching Assistant** - Data Mining (Tsinghua 40470333) - Fall 2021
