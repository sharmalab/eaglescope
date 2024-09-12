---
title: 'Eaglescope: an interactive visualization and cohort selection tool for biomedical data exploration.'
tags:
  - javascript
  - interactive visualization
  - data exploration
  - biomedical research
  - data analysis
authors:
  - name: Ryan Birmingham
    orcid: 0000-0002-7943-6346
    equal-contrib: true
    affiliation: 1
  - name: Nan Li
    equal-contrib: true
    affiliation: 1
    orcid: 0000-0002-3975-4809
  - name: Tony Pan
    affiliation: 1
  - name: Yahia Zakaria
    corresponding: true
    orcid: 0009-0001-0705-4082
    affiliation: 2
affiliations:
 - name: Emory Univeristy, USA
   index: 1
 - name: Independent Researcher, Egypt
   index: 2
date: 23 April 2024
bibliography: paper.bib

---

# Summary

Eaglescope is a configurable code-free interactive visualization and cohort definition/selection tool designed for biomedical data exploration. It is designed to be hosted flexibly without the need for a dedicated server, and creates an interactive dashboard based upon a configuration file and either an API or data file. It uses visualizations of sets of features to describe and enable contextual filtering of the data. This allows for users to understand deeper patterns or anomalies within the data, and to create datasets specifically tuned to their requirements effortlessly.

Eaglescope is typically utilized either as a tool to create refined datasets tailored for training and validating machine learning AI models, or as a central hub for further exploration, allowing users to seamlessly navigate to biomedical viewers such as DICOM or whole slide imaging (WSI) platforms.

![Interactive Contextual Visualizations](./ContextualVis.png)

To create a dashboard, users simply need to create a file specifying the data source, configurations for each visualization, and any further desired customizations to the platform. Hosting is as straightforward as copying the static files, along with the configuration and data files if applicable, to any location capable of hosting static files. This streamlined process was intentionally designed to support the visualization of multiple datasets without added complexity or specialized requirements. Additionally, the flexibility of hosting allows for seamless scalability with demand, eliminating the need for modifications to Eaglescope itself.

# State of the Field

Cohort definition is an essential aspect of both retrospective and prospective studies. Different workflows are used to define cohorts depending on the nature and needs of a study. For example, in cases where the criteria is known, retrospective data for the criteria can be downloaded using user-focused natural language tools such as Criteria2Query [@Yuan2019]. 

In addition to statistical and code methods, visual tools can be and are used in cohort studies. A tool called Composer [@Rogers2019-ya] allows for surgeons and patients to visually interpret results of cohort studies. Some tools, such as CAVA (Cohort Analysis via Visual Analytics) [@Zhang2015-kd] can be used for both batch analytics and interactive analytics for exploratory cohort analysis for data stored in its own relational database.

Cohort definition or dataset selection can be done at the dataset level. For an example, the Gene Expression Omnibus Database [@Clough2016] enables interactive exploratory analysis on multiple of its component datasets. Many other dataset providers such as the Cancer Imaging Archive (TCIA) [@tica2013], cBioPortal [@cbioportal2013], and NBIA [@nbia2020] host similar kinds of filtering and exploratory analysis. Ultimately, users may also download data and use tools such as Bokeh [@bokeh] to perform analytics by creating and defining their own interactive visualizations.

# Statement of Need

Eaglescope was developed as a visual human-centered cohort definition and analysis tool. For cohort studies, this fits in a workflow niche for initial patient/record and feature selection. To support this dynamically and with minimal computational requirements, Eaglescope supports multiple datasets, creates dashboards which are reconfigurable without coding, and can be deployed in a serverless environment. It offers hierarchical functionality, allowing dashboards to represent and interlink with other dashboards.

In many datasets, filtering on a variable can significantly alter other properties of the data. To address this, Eaglescope employs visually contextualized filtering, which displays filtered data within its broader context. This approach helps users identify patterns and insights that might otherwise be overlooked, thereby enhancing decision-making in biomedical research. By incorporating this feature, Eaglescope supports a broader effort to mitigate systematic bias in cohort definition [@Nohr2018-in]. Additionally, Eaglescope can serve as a de facto home page for datasets, clarifying its features and limitations through its dashboards.

Eaglescope is a direct successor to the Datascope project [@datascope2017]. It is used by the Cancer Imaging Archive (TCIA) [@tica2013] and the National Cancer Institute for exploring and exporting extensive data across collections and modalities. Additionally, the PRISM [@prism2020] project incorporates Eaglescope for dataset creation and visualization.

# Acknowledgements

We acknowledge all contributors to the Eaglescope project, as well as grant support sub-awarded by the University of Arkansas Medical School and both financial and logistical support from the Emory University Department of Biomedical Informatics.

# References

