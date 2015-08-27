var React = require("react");

var utils = require("./utils");

var BCMap = React.createClass({
    componentDidMount: function() {
        var crs = new L.Proj.CRS.TMS(
            'EPSG:3005',
            '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            [-1000000, -1000000, 3000000, 3000000],
            {
                resolutions: utils.generate_resolutions(7812.5, 12)
            }
        );

        var map = L.map(this.getDOMNode(), {
            crs: crs,
            minZoom: 0,
            maxZoom: 12,
            maxBounds: L.latLngBounds([[45, -148], [62, -108]]),
            layers: [
                L.tileLayer(
                'http://{s}.tiles.pacificclimate.org/tilecache/tilecache.py/1.0.0/bc_osm/{z}/{x}/{y}.png',
                {
                    subdomains: 'abc',
                    noWrap: true,
                    maxZoom: 12,
                    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });

        map.on('click', this.onMapClick);
        map.setView(L.latLng(55, -125), 2);

    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
        console.log('clicked on map');
    },
    render: function() {
        return (
            <div id='map'></div>
        );
    }
});

module.exports.BCMap = BCMap;

var CanadaMap = React.createClass({
    componentDidMount: function() {
        var crs = new L.Proj.CRS.TMS(
            'EPSG:4326',
            '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs',
            [-150, -10, -50, 90],
            {
                resolutions: utils.generate_resolutions(0.09765625, 10)
            }
        );

        var map = L.map(this.getDOMNode(), {
            crs: crs,
            minZoom: 0,
            maxZoom: 10,
            maxBounds: L.latLngBounds([[40, -150], [90, -50]]),
            layers: [
                L.tileLayer(
                'http://{s}.tiles.pacificclimate.org/tilecache/tilecache.py/1.0.0/na_4326_osm/{z}/{x}/{y}.png',
                {
                    subdomains: 'abc',
                    noWrap: true,
                    maxZoom: 10,
                    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });

        map.on('click', this.onMapClick);
        map.setView(L.latLng(60, -100), 1);

    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
        console.log('clicked on map');
    },
    render: function() {
        return (
            <div id='map'></div>
        );
    }
});

module.exports.CanadaMap = CanadaMap;
