# example-api-loopback

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

[demo server.valdepeace.com:3000](http://server.valdepeace.com:3000/)

![screen-explorer](doc/image/screen-swagger.png)

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

Envfile.env rename to .env and edit password and conection mongodb and http basic auth:

```
AUTH_BASIC_USERNAME=fintonic
AUTH_BASIC_PASSWORD=
MONGODB_HOST=localhost
MONGODB_PORT=27017
MONGODB_USER=fintonic
MONGODB_PASS=
MONGODB_DB=dbfintonic
```
### Dependencies:
* @loopback/authentiction
* dotenv
## Create mongodb database
* [hub mongo docker](https://hub.docker.com/_/mongo) for deploy
* Create user in mongodb
  ```
  db.createUser({user:"fintonic", pwd:"xxxxx", roles:[{role: "readWrite", db:"dbfintonic"}]})
  ```
## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application(note: change enviroment variables)
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```
## Enviroment variables
| name                | default                  | description          |
| ------------------- | ------------------------ | -------------------- |
| AUTH_BASIC_USERNAME | fintonic                 | http basic auth user |
| AUTH_BASIC_PASSWORD | http basic auth password |                      |
| MONGODB_HOST        | localhost                | host mongodb         |
| MONGODB_PORT        | 27017                    | port mongodb         |
| MONGODB_USER        | fintonic                 | user mongodb         |
| MONGODB_PASS        | fintonic.2021            | password mongodb     |
| MONGODB_DB          | dbfintonic               | database mongodb     |




```
D:\workspace\personal\example-api-loopback> lb4 datasource
? Nombre de Datasource: dbfintonic
? Seleccione el conector para dbfintonic:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database): mongodb://fintonic:fintonic.2021@localhost:27017/dbfintonic
? host: localhost:27017
? port:
PS D:\workspace\personal\example-api-loopback>
PS D:\workspace\personal\example-api-loopback> lb4 datasource
? Nombre de Datasource: dbfintonic
? Seleccione el conector para dbfintonic:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? user: fintonic
? password: [hidden]
? database: dbfintonic
? Feature supported by MongoDB v3.1.0 and above: Yes
   create src\datasources\dbfintonic.datasource.ts
npm WARN @loopback/eslint-config@12.0.1 requires a peer of eslint@^8.6.0 but none is installed. You must install peer dependencies yourself.
npm WARN example-api-loopback@0.0.1 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):

+ loopback-connector-mongodb@5.6.0
added 9 packages from 8 contributors and audited 637 packages in 8.582s

73 packages are looking for funding
  run `npm fund` for details

found 3 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
   update src\datasources\index.ts

Datasource Dbfintonic se ha/han creado en src\datasources

PS D:\workspace\personal\example-api-loopback> lb4 repository
? Seleccione el origen de datos DbfintonicDatasource
? Seleccione el modelo o modelos para los que desea generar un repositorio Product
? Seleccione la clase base del repositorio DefaultCrudRepository (Juggler bridge)
   create src\repositories\product.repository.ts
   update src\repositories\index.ts

Repository ProductRepository se ha/han creado en src\repositories

PS D:\workspace\personal\example-api-loopback> lb4 --help
Usage:
  lb4 app [<name>] [options]

Options:
  -h,    --help             # Imprimir las opciones y uso del generador
         --skip-cache       # No recordar respuestas de solicitud                                                       Default: false
         --skip-install     # No instalar automáticamente dependencias                                                  Default: false
         --force-install    # Se ha producido un error al instalar dependencias                                         Default: false
         --ask-answered     # Mostrar solicitudes para opciones ya configuradas                                         Default: false
         --applicationName  # Nombre de clase de aplicación
         --docker           # Incluir archivo Docker y .dockerignore
         --repositories     # Incluir importaciones de repositorio y RepositoryMixin
         --services         # Incluir importaciones de proxy de servicio y ServiceMixin
         --apiconnect       # Incluir ApiConnectComponent
         --description      # Descripción de application
         --outdir           # Directorio raíz de proyecto para application
         --eslint           # Habilitar eslint
         --prettier         # Habilitar prettier
         --mocha            # Habilitar mocha
         --loopbackBuild    # Utilizar @loopback/build
         --vscode           # Utilizar valores de VSCode preconfigurados
         --private          # Marque el proyecto como privado (excluido de npm publish)
  -c,    --config           # Nombre de archivo JSON o valor para configurar opciones
  -y,    --yes              # Saltar todas las solicitudes de confirmación con un valor predeterminado o proporcionado
         --format           # Formatear código generado mediante npm run lint:fix
  -pm,   --packageManager   # Cambiar el gestor de paquetes predeterminado


Available commands:
  lb4 app
  lb4 extension
  lb4 controller
  lb4 datasource
  lb4 import-lb3-models
  lb4 model
  lb4 repository
  lb4 service
  lb4 example
  lb4 openapi
  lb4 observer
  lb4 interceptor
  lb4 discover
  lb4 relation
  lb4 update
  lb4 rest-crud
  lb4 copyright
  lb4 install-completion
  lb4 uninstall-completion
PS D:\workspace\personal\example-api-loopback> lb4 rest-creud
PS D:\workspace\personal\example-api-loopback> lb4 rest-crud
? Seleccione el origen de datos DbfintonicDatasource
? Seleccione el modelo o los modelos que desea que generen un punto final REST CRUD Product
? Especifique la vía de acceso base /products
Updating src/application.ts to register CrudRestComponent from @loopback/rest-crud
   create src\model-endpoints\product.rest-config.ts
npm WARN @loopback/eslint-config@12.0.1 requires a peer of eslint@^8.6.0 but none is installed. You must install peer dependencies yourself.
npm WARN example-api-loopback@0.0.1 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @loopback/rest-crud@0.12.1
added 1 package from 1 contributor and audited 638 packages in 6.12s

73 packages are looking for funding
  run `npm fund` for details

found 3 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

RestConfig ProductRestConfig se ha/han creado en src\model-endpoints
```

## Authenticaion

https://loopback.io/doc/en/lb4/Authentication-passport.html#usage


## ref

* [loopback.io](https://loopback.io/)


## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
