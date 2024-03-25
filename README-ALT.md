# SafeMove File Utility

> The following document applies to the programatic usage of `safemove`.  For use from the command line, please see the [main README located here](README.md).

## Purpose  

Recursively copy and delete files and folders from one location to another.

> More info on _why_ I created this is on my blog: [https://fredlackey.com](https://www.fredlackey.com)

## Installation

```bash
npm i safemove
```

## Usage

```bash
const safemove = require('safemove');

const results = safemove.process({
  source      : '/Users/flackey/Documents/Screenshots',
  target      : '/Volumes/MPHD01/Screenshots',
  nooverwrite : true
});
```

### Options

| Name          | Description                     | Type            | Default |
|---------------|---------------------------------|-----------------|---------|
| `source`      | Source Directory                | `string (path)` |         |
| `target`      | Desination Directory            | `string (path)` |         |
| `backup`      | Backup Directory                | `string (path)` |         |
| `nooverwrite` | Overwrite existing target files | `boolean`       | `false` |
| `console`     | Log activity to console         | `boolean`       | `false` |
| `limit`       | Number of files to process      | `number`        |         |

### Contact  

Please feel free to contact me directly with any questions, comments, or enhancement requests:

**Fred Lackey**  
**[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)**  
**[http://fredlackey.com](http://www.fredlackey.com)**  
