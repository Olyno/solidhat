import { existsSync } from 'fs';
import * as path from 'path';
import prompt from 'prompts';

const AppTemplates = {
  TYPESCRIPT: 'typescript',
  JAVASCRIPT: 'javascript',
};

export async function createNewProject() {
  return prompt([
    {
      name: 'projectPath',
      message: 'Where should we create your project?',
      type: 'text',
      initial: 'hello-solidhat',
      format: (value: string) => path.resolve(value.trim()),
      validate: (value: string) =>
        existsSync(value)
          ? 'That path already exists, please try another.'
          : true,
    },
    {
      name: 'template',
      message: 'Which Solidhat template?',
      type: 'select',
      choices: [
        { title: 'Typescript', value: AppTemplates.TYPESCRIPT },
        { title: 'Javascript', value: AppTemplates.JAVASCRIPT },
      ],
    },
    // {
    //   name: 'template',
    //   message: 'Which Solidhat template?',
    //   type: 'select',
    //   choices: [
    //     { title: 'Typescript', value: AppTemplates.TYPESCRIPT },
    //     { title: 'Javascript', value: AppTemplates.JAVASCRIPT },
    //   ],
    // },
  ]);
}
