var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "COLOMBIA MAYOR",
			"fontSize": 22,
			"font": "verdana"
		},
		"subtitle": {
			"text": "ESTADOS DE LOS ADULTOS MAYORES REGISTRADOS",
			"color": "#999999",
			"fontSize": 10,
			"font": "verdana"
		},
		"titleSubtitlePadding": 12
	},
	"footer": {
		"text": "Total de adultos mayores registrados: 147.581",
		"color": "#999999",
		"fontSize": 11,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasHeight": 400,
		"canvasWidth": 590,
		"pieOuterRadius": "89%"
	},
	"data": {
		"content": [
			{
				"label": "Inscritos",
				"value": 48701,
				"color": "#2f68ca"
			},
			{
				"label": "Activos",
				"value": 28040,
				"color": "#f8251e"
			},
			{
				"label": "Priorizados",
				"value": 9379,
				"color": "#e6812a"
			},
			{
				"label": "Bloqueados",
				"value": 19185,
				"color": "#0dbdb8"
			},
			{
				"label": "Retirados",
				"value": 44274,
				"color": "#1ba724"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 33
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#000000",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 400,
			"size": 8
		}
	}
});