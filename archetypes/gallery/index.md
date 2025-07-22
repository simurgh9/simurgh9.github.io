+++
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
tags = ['Photography']
[params]
  gallery = true
+++

{{< gallery "Caption goes here." media >}}
