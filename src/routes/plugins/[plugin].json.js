import plugins from './_plugins';

const lookup = new Map();
plugins.forEach(plugin => {
  lookup.set(plugin.name, JSON.stringify(plugin));
});

export function get(req, res, next) {
  const {
    plugin
  } = req.params;

  if (lookup.has(plugin)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(plugin));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
