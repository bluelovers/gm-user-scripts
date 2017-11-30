/**
 * Created by user on 2017/8/27/027.
 */

import * as chai from 'chai';
import * as path from 'path';

const rootDir = path.join(__dirname, '..');

export function relative(filename): string
{
	return path.relative(rootDir, filename);
}

export const expect = chai.expect;
