import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import path from 'path';
import fs from 'fs';
import { OnePagerPDF } from '../src/components/one-pager/OnePagerPDF';
import { PAUL_ONE_PAGER } from '../src/lib/one-pager-data';

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public', 'one-pager');
const logoSrc = path.join(publicDir, 'pm-logo.png');
const headshotSrc = path.join(publicDir, 'paul-headshot.png');
const outputPath = path.join(publicDir, 'paul-meyers-bni-one-pager.pdf');

if (!fs.existsSync(logoSrc)) throw new Error(`Logo not found at ${logoSrc}`);
if (!fs.existsSync(headshotSrc)) throw new Error(`Headshot not found at ${headshotSrc}`);

async function main() {
  const element = React.createElement(OnePagerPDF, {
    data: PAUL_ONE_PAGER,
    logoSrc,
    headshotSrc,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await ReactPDF.render(element as any, outputPath);
  const stats = fs.statSync(outputPath);
  console.log(`Wrote ${outputPath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
