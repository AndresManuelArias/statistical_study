/* Renderiza los bloques ```chart (formato Obsidian Charts) con Chart.js.
   Cada bloque fue convertido por la extensión Markdown en un <canvas> con
   el YAML original serializado en el atributo data-chart. */
(function () {
  "use strict";

  function hexToRgba(hex, alpha) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
    if (!m) return "rgba(0,0,0," + alpha + ")";
    return "rgba(" + parseInt(m[1], 16) + "," + parseInt(m[2], 16) + "," +
      parseInt(m[3], 16) + "," + alpha + ")";
  }

  var PALETTE = [
    "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231",
    "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe",
    "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000",
    "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080"
  ];

  function colorFor(i) {
    return PALETTE[i % PALETTE.length];
  }

  function buildDatasets(cfg) {
    var type = cfg.type || "bar";
    var labels = cfg.labels || [];
    var series = cfg.series || [];
    var useLabelColors = cfg.labelColors === true;
    var fill = cfg.fill;
    if (fill === undefined) fill = type === "line" ? false : true;

    return series.map(function (s, si) {
      var raw = Array.isArray(s.data) ? s.data : [];
      var data;
      if (type === "scatter") {
        data = raw.map(function (item, i) {
          if (Array.isArray(item)) return { x: item[0], y: item[1] };
          return { x: labels[i], y: item };
        });
      } else {
        data = raw.slice();
      }

      var ds = {
        label: s.title != null ? String(s.title) : "",
        data: data,
        fill: fill,
        borderColor: colorFor(si),
        backgroundColor: hexToRgba(colorFor(si), 0.4)
      };

      if (["pie", "doughnut", "polarArea"].indexOf(type) !== -1) {
        ds.borderColor = "#ffffff";
        ds.backgroundColor = raw.map(function (_, i) { return colorFor(i); });
      } else if (useLabelColors) {
        ds.borderColor = labels.map(function (_, i) { return colorFor(i); });
        ds.backgroundColor = labels.map(function (_, i) {
          return hexToRgba(colorFor(i), 0.4);
        });
      }

      if (s.color) ds.borderColor = s.color;
      if (s.backgroundColor) ds.backgroundColor = s.backgroundColor;
      if (s.type) ds.type = s.type;
      return ds;
    });
  }

  function buildOptions(cfg) {
    var options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: true } }
    };

    if (cfg.legend === false) options.plugins.legend.display = false;
    if (cfg.legendPosition) options.plugins.legend.position = cfg.legendPosition;

    options.scales = { x: {}, y: {} };
    if (cfg.stacked) {
      options.scales.x.stacked = true;
      options.scales.y.stacked = true;
    }
    if (cfg.beginAtZero === true) {
      options.scales.y.ticks = { beginAtZero: true };
      options.scales.x.ticks = { beginAtZero: true };
    }
    if (cfg.xMin !== undefined) options.scales.x.min = cfg.xMin;
    if (cfg.xMax !== undefined) options.scales.x.max = cfg.xMax;
    if (cfg.yMin !== undefined) options.scales.y.min = cfg.yMin;
    if (cfg.yMax !== undefined) options.scales.y.max = cfg.yMax;
    if (cfg.tension !== undefined) options.elements = {
      line: { tension: Number(cfg.tension) }
    };
    if (cfg.spanGaps === true) options.spanGaps = true;
    return options;
  }

  function renderChart(cfg, canvas) {
    var type = cfg.type || "bar";
    if (cfg.type === "scatter") type = "scatter";
    if (cfg.series === undefined && cfg.datasets !== undefined) {
      cfg = { type: type, data: { labels: cfg.labels, datasets: cfg.datasets } };
    }

    var config;
    if (cfg.data && cfg.data.datasets) {
      config = {
        type: cfg.type,
        data: { labels: cfg.labels || [], datasets: cfg.data.datasets },
        options: buildOptions(cfg)
      };
      if (config.data.labels && config.data.labels.length) {
        config.data.labels = cfg.labels;
      }
    } else {
      config = {
        type: type,
        data: { labels: cfg.labels || [], datasets: buildDatasets(cfg) },
        options: buildOptions(cfg)
      };
    }

    if (type === "scatter") {
      config.options.plugins.tooltip = {
        callbacks: {
          label: function (ctx) {
            return "(" + ctx.parsed.x + ", " + ctx.parsed.y + ")";
          }
        }
      };
    }

    if (window.Chart) {
      new window.Chart(canvas, config);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("canvas.mkdocs-chart").forEach(function (canvas) {
      var raw = canvas.getAttribute("data-chart");
      if (!raw) return;
      var cfg;
      try {
        cfg = JSON.parse(raw);
      } catch (e) {
        console.warn("mkdocs-charts: data-chart inválido", e);
        return;
      }
      try {
        renderChart(cfg, canvas);
      } catch (e) {
        console.error("mkdocs-charts: no se pudo renderizar la gráfica", e);
      }
    });
  });
})();