const fs = require('fs');

const data = {
  'ProjectDetail2': 'Building a Scalable Design System for a Growing HR Platform',
  'ProjectDetail3': 'CRM Analytics'
};

Object.keys(data).forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');

  content = content.replace(
    /From Search to Action: Turning HR Intent<br className="hidden md:block" \/> into Intelligent Execution/g,
    data[page]
  );

  fs.writeFileSync(filePath, content, 'utf-8');
});
