import {Command, Flags} from '@oclif/core'

export default class World extends Command {
  static description = 'Say hello world';

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static flags = {
    foo: Flags.boolean({}),
  };

  static args = {};

  async run(): Promise<void> {
    const {flags} = await this.parse(World)
    console.log('configDir', this.config.configDir)
    if (flags.foo) {
      this.log('--foo is given')
      try {
        World.run([])
      } catch {}
    } else {
      this.log('hello world! (./src/commands/hello/world.ts)')
    }
  }
}
