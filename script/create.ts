/**
 * Created by user on 2018/7/12/012.
 */

import yargs from 'yargs2';
import { console } from 'debug-color2';
import * as path from 'path';
import * as fs from 'fs-extra';

let name = yargs.argv.name || yargs.argv._[0];

//console.debug(yargs.argv);

if (name)
{
	name = name
		.toString()
		.trim()
		.replace(/[^a-z\d\-\._]/ig, '')
	;
}

if (!name)
{
	exit(`name is ${typeof name}`);
}

let root = path.resolve(__dirname, '..');
let root_src = path.resolve(root, 'src');

let target_dir = path.resolve(root_src, name);

//console.debug({
//	root,
//	root_src,
//	target_dir,
//});

if (fs.existsSync(target_dir))
{
	exit(`${name} already exists`);
}

fs.ensureDirSync(target_dir);
fs.ensureDirSync(path.join(target_dir, 'base'));
fs.ensureDirSync(path.join(target_dir, 'lib'));

fs.copyFileSync(path.join(root, 'lib/core/tpl/index.user.ts'), path.join(target_dir, `index.user.ts`));

fs.copyFileSync(path.join(root, 'lib/core/tpl/.gitignore'), path.join(target_dir, `.gitignore`));

fs.copyFileSync(path.join(root, 'lib/core/tpl/demo.ts'), path.join(target_dir, `base/${name}.ts`));

fs.copyFileSync(path.join(root, 'lib/core/tpl/metadata.ts'), path.join(target_dir, `lib/metadata.ts`));

console.success(`${name} created`);

function exit(msg, code = 1)
{
	console.error(msg);
	process.exit(1);
}
