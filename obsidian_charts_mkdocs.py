"""Extensión Markdown para MkDocs que renderiza bloques ```chart (formato
Obsidian Charts / phibr0) como un <canvas> manejado por Chart.js.

Uso en mkdocs.yml:

  markdown_extensions:
    - pymdownx.superfences:
        custom_fences:
          - name: chart
            class: mkdocs-chart
            format: !!python/name:obsidian_charts_mkdocs.fence_chart

Y en extra_javascript (Chart.js primero):

  extra_javascript:
    - javascripts/chart.umd.min.js
    - javascripts/charts.js
"""

import html
import json

import yaml


def fence_chart(
    source,
    language,
    css_class,
    options,
    md,
    classes="",
    id_value="",
    attrs="",
    **kwargs,
):
    """Convierte el YAML de un bloque ```chart en un <canvas> con data-chart."""
    try:
        data = yaml.safe_load(source) or {}
        if not isinstance(data, dict):
            raise ValueError("El contenido de ```chart debe ser un YAML de objeto")
    except Exception as exc:  # noqa: BLE001
        msg = html.escape(str(exc))
        return (
            '<div class="mkdocs-obsidian-chart-error">'
            f"<strong>Error en gráfica (```chart):</strong> {msg}</div>"
        )

    payload = json.dumps(data, ensure_ascii=False)
    width = html.escape(str(data.get("width", "100%")))
    encoded = html.escape(payload, quote=True)
    return (
        f'<div class="mkdocs-chart-wrap" style="width:{width}">'
        f'<canvas class="mkdocs-chart" data-chart="{encoded}"></canvas>'
        "</div>"
    )