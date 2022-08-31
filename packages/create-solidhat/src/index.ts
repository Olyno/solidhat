import { createNewProject } from '@solidhat/cli';
import { bold, cyan, green, redBright } from 'colorette';
import { copy } from 'fs-extra';
import { join, relative } from 'path';

async function main() {
  const templatesDir = join(__dirname, '..', 'templates');

  console.log('');
  console.log(cyan('Welcome to Solidhat!'));
  console.log('');
  console.log(
    bold(redBright('This is beta software; expect bugs and missing features.'))
  );
  console.log('');
  console.log(
    `Problems? Open an issue on ${cyan(
      'https://github.com/Olyno/solidhat/issues'
    )} if none exists already.`
  );
  console.log('');

  const { projectPath, template } = await createNewProject();
  const relativeProjectPath = relative(process.cwd(), projectPath);

  await copy(join(templatesDir, template), projectPath);

  console.log(green('Your project is ready!'));
  console.log('');
  console.log('Next steps:');
  console.log('');
  console.log(`\t1: ${cyan('cd ' + relativeProjectPath)}`);
  console.log(`\t2: ${cyan('npm install')} (or pnpm install, etc)`);
  console.log(
    `\t3: ${cyan(
      'git init && git add -A && git commit -m "Initial commit"'
    )} (optional)`
  );
  console.log('');
  console.log(
    `Stuck? Visit us at ${cyan(
      'https://github.com/Olyno/solidhat/discussions'
    )}`
  );
}

main();
