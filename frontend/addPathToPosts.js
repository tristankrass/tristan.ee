// @ts-check

const path = require('path');
const fs = require('fs');

const dirs = fs.readdirSync(`${__dirname}/content/blog/`);

dirs.forEach(dir => {
  const file = fs
    .readFileSync(`${__dirname}/content/blog/${dir}/index.md`, 'utf8')
    .split('\n');

  // file[2] = `path: /blog/${dir}`;

  let c = '';

  file.forEach((line, i) => {
    if (i > 0 && i < 4) {
      c += `${line.split(': ')[0]}: "${line.split(': ')[1]}"\n`;
    } else {
      c += line + '\n';
    }
  });

  // console.log(c);

  fs.writeFileSync(`${__dirname}/content/blog/${dir}/index.md`, c);
});

// b.join('\n');
// fs.createWriteStream(b);

// fs.appendFile(`${__dirname}/content/blogPosts/what-is-redux/index.md`, `path: blog/${a}`, err => {
//   if (err) {
//     // append failed
//     console.log(err);
//   } else {
//     // console.log('Successfully Written to File.');
//     console.log(files);
//   }

// });
