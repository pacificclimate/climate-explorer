# PCIC Climate Explorer

[![Build Status](https://travis-ci.org/pacificclimate/climate-explorer.svg?branch=master)](https://travis-ci.org/pacificclimate/climate-explorer)
[![Code Climate](https://codeclimate.com/github/pacificclimate/climate-explorer/badges/gpa.svg)](https://codeclimate.com/github/pacificclimate/climate-explorer)

## Requirements

### Back End

libpq-dev python-dev

### Front End

npm >= 4.0

## Containerized Development

Both the back end and front end code can be ran in Docker conatainers. *IN PROGRESS*

## Development

### Back end

Setup using virtualenv:

```bash
$ virtualenv venv
$ source venv/bin/activate
(venv)$ pip install -U pip
(venv)$ pip install --trusted-host tools.pacificclimate.org -i http://tools.pacificclimate.org/pypiserver/ -e .
(venv)$ python scripts/devserver.py -p <port>
```

Setup using Docker *IN PROGRESS*:

```bash
docker build -t climate-explorer-backend backend
docker run --rm -it -v $(pwd)/backend:/app --name backend climate-explorer-backend
```

### Front end

Front end code runs on node using webpack. We reccomend using [nvm](https://github.com/creationix/nvm) to manage your node/npm install.

```bash  
cd client
npm install
npm start
```

Setup using Docker *IN PROGRESS*:

```bash
docker build -t climate-explorer-frontend client
docker run --rm -it -v $(pwd)/client:/app -p 8080:8080 --name frontend --link backend climate-explorer-frontend
```
