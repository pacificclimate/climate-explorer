var React = require("react");

var Map = React.createClass({
    componentDidMount: function() {
        // var crs = L.Proj.CRS.TMS(
        //     'EPSG:3005',
        //     '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
        //     [-1000000, -1000000, 3000000, 3000000],
        //     { 
        //         resolutions: [7812.5, 3906.25, 1953.125, 976.5625, 488.28125, 244.140625, 122.0703125, 61.03515625, 30.517578125, 15.2587890625, 7.62939453125, 3.814697265625]
        //     }
        // );

        // var map = L.map(this.getDOMNode(), {
        //     crs: crs,
        //     center: new L.LatLng(55, -125),
        //     minZoom: 2,
        //     maxZoom: 10,
        //     zoom: 2,
        //     maxBounds: L.latLngBounds([[45, -148], [62, -108]]),
        //     layers: [
        //  L.tileLayer(
        //      'http://{s}.tiles.pacificclimate.org/tilecache/tilecache.py/1.0.0/bc_osm/{z}/{x}/{y}.png', 
        //      {
        //      subdomains: 'abc',
        //      maxZoom: 12,
        //      noWrap: true,
        //      attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        //      continuousWorld: false
        //      }
        //  )
        //     ],
        //     worldCopyJump: false
        // });

        var map = L.map(this.getDOMNode(), {
            center: [51.505, -120],
            zoom: 4,
            maxBounds: L.latLngBounds([[40, -150], [85, -50]]),
        });
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(
            osmUrl,
            {
                minZoom: 3,
                maxZoom: 12,
                attribution: osmAttrib
            }
        );
        map.addLayer(osm);

        map.on('click', this.onMapClick);
        map.fitWorld();

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

module.exports = Map;
