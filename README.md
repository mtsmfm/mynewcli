oclif ESM issue

```
$ git clone https://github.com/mtsmfm/mynewcli
$ cd mynewcli
$ npm install

$ # Make sure it works in commonjs
$ git checkout commonjs
$ bin/dev hello world --foo
configDir /home/mtsmfm/.config/mynewcli
--foo is given
configDir /home/mtsmfm/.config/mynewcli
hello world! (./src/commands/hello/world.ts)

$ # configDir points /home/mtsmfm/.config/ts-node on static `.run`
$ git checkout esm
$ PATH=$(npm bin):$PATH bin/dev.js hello world --foo
configDir /home/mtsmfm/.config/mynewcli
--foo is given
configDir /home/mtsmfm/.config/ts-node
hello world! (./src/commands/hello/world.ts)
```
