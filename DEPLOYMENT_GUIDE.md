# Climate Explorer Deployment Guide

Deploying the Climate Explorer (CE) requires setting up a number of backing services. This guide assumes familiarity with deploying databases and web applications in a Debian based Linux distribution. Change commands as appropriate for alternate distributions. Additionally, a basic knowledge of version control (Git/Github), the statistical programming language R, NetCDF file format, and some experience working with climate data is reccomended.

## Backing Services

The CE requires a number of back end services to supply the user interface with the required information. These are:

1. Metadata database with indexed data files (PostgreSQL or SQLite)
2. ncWMS server
3. Publicly accessible climate-explorer-backend REST service
4. Basemap tile server (TileCache)



### Data Preparation

Data is expected to be in NetCDF files with metadata following [CF 1.6](http://cfconventions.org/cf-conventions/v1.6.0/cf-conventions.html) convention and file names following [CMIP5](http://cmip-pcmdi.llnl.gov/cmip5/docs/CMIP5_output_metadata_requirements.pdf) output convention. This version of the CE requires statistically aggregated yearly data.

#### Aggregating Daily Data to Yearly

We have supplied a number of helper utilities to aggregate daily data into a format suitable for the CE. They are written in Python with full documentation [here](https://github.com/pacificclimate/climate-explorer-backend/tree/master/data_prep) and a quickstart guide below.

Install system dependencies:

```bash
apt-get install python python-dev python-virtualenv libnetcdf-dev libhdf5-dev cdo
```

Then clone and install the python requirements in a virtual environment:

```bash
git clone https://github.com/pacificclimate/climate-explorer-backend
cd climate-explorer-backend/data_prep
git checkout generate-annual-average
virtualenv venv
source venv/bin/activate
pip install numpy # required to do first due to a bug in the netCDF4 python package
pip install -r requirements.txt
```

The script has documentation built in:

```bash
python generate_annual_averages.py -h
```

### Database setup

Database setup involved installing a database server, creating a database, and initializing the defined tables. We currently support PostgreSQL or SQLite databases.

#### PostgreSQL

Deploying a production PostgreSQL server is outside the scope of this guide. Provided you have a running instance, import the schema defined [here](https://github.com/pacificclimate/modelmeta/blob/master/db/schema.sql)

#### SQLite

We have provided a helper script in the `modelmeta` package create a blank database. The following will install SQLite3, create the database, and create the required tables

```bash
sudo apt-get install sqlite3 python3 python3-dev python-virtualenv libpq-dev
git clone https://github.com/pacificclimate/modelmeta
virtualenv -p python3 venv
source venv/bin/activate
python setup.py install
python scripts/mkblankdb.py -d sqlite:////db.sqlite3
```

### Data Indexing

Data is indexed into a backing PostgreSQL or SQLite database using an R script. The requirements are installed as follows:

```bash
apt-get install r-base libgdal-dev libproj-dev netcdf-bin
```

Then install the required R packages:

```R
install.packages(c('ncdf4', 'ncdf4.helpers', 'RPostgreSQL', 'RSQLite', 'PCICt', 'digest', 'rgdal', 'snow'))
```

Once these are set up, source the indexing script:

```bash
git clone https://github.com/pacificclimate/modelmeta
cd modelmeta/db
```

And then in an interactive R session run :

```R
source("index_netcdf.r")
f.list <- list.files("<base_directory_containing_netcdf_files>", full.name=TRUE, pattern = "\\.nc$")
index.netcdf.files.sqlite(f.list, '<path_to_sqlite_db>')
```

To index into a PostgreSQL server, use the `index.netcdf.files` function.

### Backend Setup

The `climate-explorer-backend` application is provided with a Dockerfile for easy deployment and pre-built images on Docker Hub. For more deployment details see the [README](https://github.com/pacificclimate/climate-explorer-backend/blob/master/README.md)

```bash
docker pull pcic/climate-explorer-backend
docker run -d --restart always \
    -p <public_port>:8000 \
    -e "MDDB_DSN=<dsn_of_sqlite_or_postgresql_instance>" \
    -v <source_data_location>:<location_in_container> [-v <more_data>:<data_loc_in_container> \
    --name some-climate-explorer-backend \
    pcic/climate-explorer-backend
```

### ncWMS

Setting up an ncWMS server is outside the scope of this guide. Once you have one set up, add all the files you have indexed to a running ncWMS instance. Starting the service should be as simple as:

## Front End

The `climate-explorer-frontend` application is provided with a Dockerfile for easy deployment and pre-built images on Docker Hub. For more in depth documentation see the [README](https://github.com/pacificclimate/climate-explorer-frontend/blob/master/README.md)

```bash
docker pull pcic/climate-explorer-frontend
docker run -d --restart always \
    -p <port>:<port> \
    -e "CE_BACKEND_URL=http://<backend_url>:<backend_port>/api" \
    -e "CE_ENSEMBLE_NAME=ce_moti_2" \
    --name some-climate-explorer-frontend \
    pcic/climate-explorer-frontend \
    npm start -- --port <port>
```