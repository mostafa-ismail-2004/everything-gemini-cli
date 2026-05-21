import * as fs from 'fs';
import * as path from 'path';

const pkgPath = path.resolve('package.json');
const extPath = path.resolve('gemini-extension.json');

try {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const ext = JSON.parse(fs.readFileSync(extPath, 'utf8'));

  ext.version = pkg.version;

  fs.writeFileSync(extPath, JSON.stringify(ext, null, 2) + '\n', 'utf8');
  console.log(`Successfully synced version ${pkg.version} to gemini-extension.json`);
} catch (error: any) {
  console.error('Error syncing version:', error.message);
  process.exit(1);
}
