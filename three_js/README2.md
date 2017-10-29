# Three.js - Part 2

## Lights

- PointLight - emitted from a single space in all directions, think of a lightbulb



### Shadows

Shadows are a bit more complicated because they are computationally expensive

First we must enable our renderer to start rendering shadows

`    renderer.shadowMap.enabled = true`

We must also enable our lights to cast shadows as well

`light.castShadow = true`

We must also tell our meshes whether they should *cast* or *receive* shadows

`mesh.castShadow = true`

`otherMesh.receiveShadow = true`