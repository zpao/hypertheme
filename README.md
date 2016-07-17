# HyperTheme

A theme manager for [HyperTerm](https://hyperterm.org/).

## Installation

Add `'hypertheme'` to the `plugins` field in `~/.hyperterm.js`.

## Usage

Create (or download) a theme and put it into `~/.hyperterm_themes/<theme name>.js`. The theme should export an object with the same color fields that are specified in `~/.hyperterm.js`.

Then add a `config.theme` field in your `~/.hyperterm.js` file. The value should match the name of the theme file (without the `.js` extension).

Save your config file and your new theme will be loaded!

## Goals

Ideally this project will be short lived and HyperTerm will have built-in theming in a sane way. We're not there yet, but I plan on working with the maintainers to get there.

## Note

As of v0.5, HypterTerm exposes some native theming functionality via the plugin API (`decorateConfig` specifically). There are many themes being distributed this way (eg [snazzy](https://github.com/sindresorhus/hyperterm-snazzy), which is awesome. I encourage theme authors to try that and work to make the theming experience as good as possible.
