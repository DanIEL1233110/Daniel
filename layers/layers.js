var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_srmhostels_1 = new ol.format.GeoJSON();
var features_srmhostels_1 = format_srmhostels_1.readFeatures(json_srmhostels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmhostels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmhostels_1.addFeatures(features_srmhostels_1);
var lyr_srmhostels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmhostels_1, 
                style: style_srmhostels_1,
                popuplayertitle: "srm hostels",
                interactive: true,
                title: '<img src="styles/legend/srmhostels_1.png" /> srm hostels'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_srmhostels_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_srmhostels_1];
lyr_srmhostels_1.set('fieldAliases', {'id': 'id', 'Block name': 'Block name', 'Population': 'Population', });
lyr_srmhostels_1.set('fieldImages', {'id': '', 'Block name': '', 'Population': '', });
lyr_srmhostels_1.set('fieldLabels', {'id': 'no label', 'Block name': 'no label', 'Population': 'no label', });
lyr_srmhostels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});