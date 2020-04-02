import plugins from './_plugins';

const contents = JSON.stringify(plugins);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
