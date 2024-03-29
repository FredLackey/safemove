# SafeMove File Utility

> The following document applies to the command-line usage of `safemove`.  For usage directly in a Node application, please see the [alternate README located here](README-ALT.md).

## Purpose  

Recursively copy and delete files and folders from one location to another.

> More info on _why_ I created this is on my blog: [https://fredlackey.com](https://www.fredlackey.com)

## Installation

```bash
npm i -g safemove
```

## Usage

Move files and folders from one location to another... 

```bash
safemove \
  --source "/Users/flackey/Documents/Screenshots" \
  --target "/Volumes/MPHD01/Screenshots"
```

... or, add use the _backup_ switch to safely store copies of files that will be overwritten ... 

```bash
safemove \
  --source "/Users/flackey/Documents/Screenshots" \
  --target "/Volumes/MPHD01/Screenshots" \
  --backup "/Volumes/BACKUP01/Screenshots"
```

Of course, you can always prevent overwriting at all costs by using the `--nooverwrite` switch...

```bash
safemove \
  --source '/Users/flackey/pCloud Drive/Automatic Upload/' \
  --target /Volumes/MPHD01/Multimedia/Photos/ \
  --nooverwrite
```

The addition of the `--console` switch adds an output which is helpful for long-running operations...

![Console Output](./docs/images/console-output.png)

### Parameters

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
