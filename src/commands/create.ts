import { Command } from '@oclif/command';
import { execSync } from 'child_process';

export default class Create extends Command {
  static description = 'Build the project in SoS way';
  static args = [
    {
      name: 'projectName',
      required: true,
      description: 'Name of the project',
    },
  ];

  async run() {
    const args = this.parse(Create);
    const projectName = args.args.projectName;

    this.log(`Creating ${projectName} repo....`);
    const output = execSync(
      `git clone https://github.com/jkhabra/react-typescript-graphql-postgres-boilerplate.git ${projectName}`,
      { encoding: 'utf-8' },
    );
    this.log(`done`, output);
  }
}
