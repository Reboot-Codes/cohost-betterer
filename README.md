# cohost-betterer

Since Tumblr is run by \[not so nice people\] (GitHub is not the place to be as pedantic as we'd like, if you know, you know), we've decided to write an improvement userscript for [CoHost](https://cohost.org)!

Currently, it doesn't do anything helpful, but the build system *is* setup.

We hope to have compatibility with all major userscript managers! This may just become a UI re-write, we'll see. But, for sure, it is not going to be twitter-ified.

This project was inspired by the now unmaintained (for good reasons) [Dashboard Unfucker](https://github.com/enchanted-sword/dashboard-unfucker) by [dragongirlsnout](https://cohost.org/minecraft); since we really enjoyed how the Tumblr UI looked with it.

## Development

If you use NixOS, we have a `shell.nix` ready to go! It simply uses Node v21 and Yarn Pkg, you don't really need anything else. Otherwise, install the latest LTS version of NodeJS and Yarn.

Install packages with `yarn`, then run `yarn dev` to watch the source dirs.

## Building

Same as development requirements, install packages with `yarn` and run `yarn build` (this is broken, dev builds are fine and minified, use those for now).
