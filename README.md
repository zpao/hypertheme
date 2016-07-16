# HyperTheme

A theme manager for [HyperTerm](https://hyperterm.org/).

## Installation

Add `'hypertheme'` to the `plugins` field in `~/.hyperterm.js`.

## Usage

Create (or download) a theme and put it into `~/.hyperterm_themes/<theme name>.js`. The theme should export an object with the same color fields that are specified in `~/.hyperterm.js`.

Then add a `config.theme` field in your `~/.hyperterm.js` file. The value should match the name of the theme file (without the `.js` extension).

Save your config file and your new theme will be loaded!
