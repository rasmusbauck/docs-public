# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ npm install
```

## Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Hosting large assets

We don't want to commit large files to git, as this will bloat the repo and its history. To this end, videos and similar assets should be uploaded to the assets-bucket in the GCP project used to host the docs. Yggdrasil developers have the permission to do this.

### Hot tip for compressing video files for web sites

```
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 0.33M -c:a libopus -b:a 96k \
-filter:v "scale=iw:ih , fps=20" output.webm
```