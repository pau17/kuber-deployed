# KubeDeployed

Este proyecto implementa una aplicación con dos backends en Node.js, uno con archivos estáticos (frontend) y una API REST (productos). Ambas aplicaciones están contenerizadas con Docker y orquestadas con Kubernetes.

## Estructura

- **backend-frontend/**: Aplicación de frontend de archivos estáticos.
- **backend-products/**: API REST que devuelve una lista de productos.
- **k8s/**: Manifiestos de Kubernetes para ambos despliegues y servicios.
