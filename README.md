# Node Package Installation

```
npm install
```

## Create SSL Certificates

https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04

https://www3.rocketsoftware.com/rocketd3/support/documentation/Uniface/10/uniface/security/certificates/createIntermediateCertificate.htm?TocPath=Protecting%20Your%20Application%7CTransport%20Protocols%20and%20Certificates%7CDigital%20Certificates%7CCreating%20Certificates%7CActing%20as%20a%20Certificate%20Authority%7C_____2

```sh

COUNTRY="DE"
STATE="HH"
CITY="Hamburg"
ENTERPRISE="MondoEnt"
COMMON_NAME=$(hostname)

./nginx/setup.sh ${COUNTRY} ${STATE} ${CITY} ${ENTERPRISE} ${COMMON_NAME}

```


# Development

```
npm run dev
```

# Build for Production

```
npm run build
```

# Run Production with Docker

```
npm run build
export NGINX_HOST="$(hostname)"
docker-compose up -d
```

# THREE 

## Camera 

Look at a certain position 

```
camera.lookAt(new THREE.Vector3(0, 0, 0))
```

# Links

## Typescript Type Declarations

https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43

## Three JS Docs

https://threejs.org/docs/

## Three JS Tutorials

https://discoverthreejs.com/book/first-steps

## Three JS Geometry Viewer

http://threejsplaygnd.brangerbriz.net/gui/

## Three JS VR Examples

https://threejs.org/examples/?q=webxr

## Three JS GLTF Models

https://github.com/mrdoob/three.js/tree/master/examples/models/gltf

## Three JS with Tween.js for Animations:

https://threejs.org/examples/#webgl_loader_collada_kinematics

## Linear Algebra Lessons

https://www.khanacademy.org/math/linear-algebra

## Learn OpenGL

https://learnopengl.com/Getting-started/Coordinate-Systems

## Game Programming Patterns

https://gameprogrammingpatterns.com/game-loop.html