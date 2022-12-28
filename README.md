# Canvas Layer for AWS Lambda

![GitHub](https://img.shields.io/github/license/charoitel/lambda-layer-canvas-nodejs) Forked from [charoitel/lambda-layer-canvas-nodejs](https://github.com/charoitel/lambda-layer-canvas-nodejs)

## About node-canvas

[node-canvas](https://github.com/Automattic/node-canvas) is a Cairo backed Canvas implementation for Node.js. It implements the [Mozilla Web Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) as closely as possible. For the current API compliance, please check [Compatibility Status](https://github.com/Automattic/node-canvas/wiki/Compatibility-Status).

## How this layer is built?

The Lambda Layer is built from source of node-canvas npm package on [amazonlinux](https://hub.docker.com/_/amazonlinux) dev container instance, with following native dependencies installed. Please check `build-layer.sh` for details.

```bash
gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel librsvg2-devel pango-devel bzip2-devel jq python3
```

Since AWS Lambda is a secure and isolated runtime and execution environment, this layer aims to target AWS Lambda compatible build. As there are canvas libraries and frameworks relying on node-canvas running on Node.js runtime, this layer also tries to include and support these libraries and frameworks.

### Fabric.js support

[Fabric.js](https://github.com/fabricjs/fabric.js) is a framework that makes it easy to work with HTML5 canvas element. It is an interactive object model on top of canvas element. It is also an SVG-to-canvas (and canvas-to-SVG) parser.

## Getting started

To get started, please visit https://github.com/charoitel/lambda-layer-canvas-nodejs/wiki/Getting-Started

Made with ❤️ by Charoite Lee and contributors.
