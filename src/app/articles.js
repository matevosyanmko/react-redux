import React from 'react';
import { Card } from 'antd';

// unix timestamp to date string
const timestampToDate = timestamp => new Date(timestamp * 1000).toLocaleString();

// article section template
const ArticleSection = ({ data, children }) =>
  data.map((article, key) => (
    <Card title={article.title} key={key} extra={timestampToDate(article.date)}>
      <p dangerouslySetInnerHTML={{ __html: article.text }} />
      {children}
    </Card>
  ));

export default ArticleSection;
