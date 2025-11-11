import { globSync } from 'fs';
import { existsSync, readFileSync, writeFileSync } from 'fs';

const dbPath = './storage/.verdaccio-db.json';
if (!existsSync(dbPath)) {
  console.error('请先运行 npm run start');
  process.exit();
}

const packages = globSync('./storage/**/package.json');
const list = packages.map(pkg => pkg.replace(/\\/g,"/").replace('storage/', '').replace('/package.json', ''));
// console.log(list);

const db = JSON.parse(readFileSync('./storage/.verdaccio-db.json', { encoding: 'utf-8' }));
// console.log(db);
db.list = list;

writeFileSync('./storage/.verdaccio-db.json', JSON.stringify(db));
