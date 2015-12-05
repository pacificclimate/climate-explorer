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

#### Config

Database dsn can be configured with the MDDB_DSN environment variable. Defaults to 'postgresql://httpd_meta@monsoon.pcic.uvic.ca/pcic_meta'

Setup using virtualenv:

```bash
$ virtualenv venv
$ source venv/bin/activate
(venv)$ pip install -U pip
(venv)$ pip install --trusted-host tools.pacificclimate.org -i http://tools.pacificclimate.org/pypiserver/ -e .
(venv)$ MDDB_DSN=postgresql://dbuser:dbpass@dbhost/dbname python scripts/devserver.py -p <port>
```

Setup using Docker *IN PROGRESS*:

While this will run a functional container, you must also link in all appropriate data to the correct location defined in the metadata database. Use multiple `-v /data/location:/data/location` options to mount them in the container. If using the test data is sufficient, use `-e "MDDB_DSN=sqlite:////app/ce/tests/data/test.sqlite" when running the container

```bash
docker build -t climate-explorer-backend backend
docker run --rm -it -p 8000:8000 -e "MDDB_DSN=postgresql://dbuser:dbpass@dbhost/dbname" -v $(pwd)/backend:/app --name backend climate-explorer-backend
```

### Front end

Front end code runs on node using webpack. We reccomend using [nvm](https://github.com/creationix/nvm) to manage your node/npm install.

#### Config

Front end configuration uses environment variables.

* CE_BACKEND_URL
  * Publicly accessible URL for backend climate data
  * Development default: http://localhost:8000/api
  * Production default: http://tools.pacificclimate.org/climate-data
* TILECACHE_URL
  * Tilecache URL for basemap layers
  * default: http://tiles.pacificclimate.org/tilecache/tilecache.py
* NCWMS_URL
  * ncWMS URL for climate layers
  * default: http://tools.pacificclimate.org/ncWMS-PCIC/wms

```bash  
cd client
npm install
npm start
```

Setup using Docker *IN PROGRESS*:

```bash
docker build -t climate-explorer-frontend client
docker run --rm -it -e "CE_BACKEND_URL=http://localhost:8000/api" -v $(pwd)/client:/app -p 8080:8080 --name frontend climate-explorer-frontend
```
