# PCIC Climate Explorer

[![Build Status](https://travis-ci.org/pacificclimate/climate-explorer.svg?branch=master)](https://travis-ci.org/pacificclimate/climate-explorer)
[![Code Climate](https://codeclimate.com/github/pacificclimate/climate-explorer/badges/gpa.svg)](https://codeclimate.com/github/pacificclimate/climate-explorer)

## Development

To set up the Flask server use Virtualenv:

```bash
$ virtualenv venv
$ source venv/bin/activate
(venv)$ python setup.py develop
(venv)$ python scripts/devserver.py -p <port>
```

Any changes to the js files will need node and webpack. We reccomend using [nvm](https://github.com/creationix/nvm) to manage your node/npm install.

```bash  
cd ce/static/js
npm install
npm install -g webpack
webpack --watch
```    
