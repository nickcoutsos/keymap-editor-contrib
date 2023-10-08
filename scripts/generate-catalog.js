const fs = require('fs')
const path = require('path')

const DATA_PATH = path.join(__dirname, '..', 'keyboard-data')
const metadataFiles = fs.readdirSync(DATA_PATH)

const catalog = metadataFiles.reduce((catalog, filename) => {
  const { id, name } = require(path.join(DATA_PATH, filename))
  catalog[id] = { id, name }
  return catalog
}, {})

console.log(JSON.stringify(catalog, null, 2))
