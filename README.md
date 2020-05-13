# BBEX (bbex)

Better Bookmark EXtension

## Motivation

I wrote this for Quasar's Hack-a-May contest to try out their BEX (Browser Extension) support.  (Great work guys!)

This is also an opportunity to give back to the community.  Hopefully someone can use this code in their own programs

## Problem

I've been wanting to write something like this for a long time.  I have almost 1400 bookmarks that I must have created for some reason. Lol

The problem is finding them again.  Folders are almost useless.  Tagging is better but tedious.

## Solution

Use Dexie for storing data about bookmarks like tags.  Fuse for fuzzy search.

See if there's some way to extract tags automatically.

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
