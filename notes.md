## Modulos y webpack

Nos permite hacer mas accesible nuestro coidigo a otro tipo de navegadores anteiguos, sin necesidad de hacer un refactorizacion de todo nuestro codigo.

### Temas de la sección

En esta sección tocaremos los siguientes temas:

+ Más sobre módulos

+ Webpack y su beneficio

+ ¿Quienes usan Webpack?

+ ¿Qué es Webpack?

+ Webpack y su configuración

+ DevServer

+ Hot Reload

+ Babel

+ Minimización automática

+ Crear aplicación para producción

+ Optimizaciones para producción

+ Manejo de imágenes

Al final, crearemos una configuración estándar para la mayoría de aplicaciones de JavaScript puro, que nos permitirá iniciar proyectos rápidamente sin tener que pasar por toda la configuración de Webpack de nuevo.

--- 

### Introduccion a Node, Npm y Webpack

+ Buscamos eficiencia en el codigo, podermos incrementar compatibilidad con otros navegadores.

+ Node, es un entorno de ejecucion de Javascript que nos permite conectar backend,bases de datos y frontend.

+ El problema raiz nace de la idea de poder escribir codigo moderno, pero que sea compatible con todos lo navegadores.

+ Un paquete en JS es aquel que nos brinda funcionalidades, para poder utilizar en Javascript.

+ Despues del problema de compatibilidad nace babel, es un paquete que nos ayuda a hacer nuestro codigo compatible, con la mayoria de navegadores y que cada usuario pueda correr el codigo sin importar el navegador.

+ Actualmente exsiten muchos paquetes que se instalan con npm, que es el encargado de manejar estos paquetes en el entorno de ejecucion node.

+ Node nos permite correr codigo del lado del servidor, pero tambien nos permite desarrollar localmente.

+ Webpack, es un empaquetador de modulos, quiere decir que nos ayuda a desarrollar trabajos de manera automatica.

+ Nos permite gestionar dependencias, ejemplo paquetes de alertas. Ya existe un paquete que hace alertas por defecto. De esta forma solo nos concentramos en el codigo y le dejamos las alertas al paquete.

+ Webpack entre muchas otras cosas, nos va a permitir.

1. Gestionar dependencias: Consiste en administrar, instalar, actualizar y eliminar bibliotecas que nos otorgan funcionalidades. Dependiendo de lo que deseo lograr con mi aplicacion.
2.  Montar servidores de desarrollo y pruebas
3.  Cargar modulos: Significa que nos permite unir todos los archivos js en uno solo, todos los modulos o archivos que necesita mi aplicacion para funcionar.
4. Convertir a diferentes formatos
5. Minimizar nuestro codigo, como con la pagina que nos hace el codigo mas pequeño
6. Compilar SASS A CSS 
7. Compilar ts a js 
8. Nos permite trabajar con js moderno, para tener mayor compatibilidad con cualquier navegador sea antiguo o no.


+ Tiene algunas desventajas, la configuracion inicial puede ser un dolor de cabeza.
+ Puede ser algo complicado detectar problemas con algun paquete.

## Creando un proyecto con Node

+ NPM significa, node papackage manager. Nos permite gestionar cualquier paquete de node. Hace las intalciones sencillas.

+ Para iniciar un paquete en NPM, simplemente nos hubicamos en la carpeta que queremos que tenga nuestras dependencias o paquetes. Luego damos NPM  init, importante que tengamos intalado node y npm. 

+ Esto nos creara un archivo.json que nos va a permitir la comunicacion entre aplicaciones, en forma de texto, de forma rapida y liviana. Como en cliente servidor o aplicaciones moviles.

+ No es un lenguaje de programacion, es mas bien una notacion. Usa pares de clave y valor. 

+ Su significado es Javascript Object notation

[ Para profundizar ](https://rockcontent.com/es/blog/archivo-json/)

+ Su sintaxis es muy similar a un objeto comun en Javascript.

        {
          "name": "webpack-inicial",
          "version": "1.0.0",
          "description": "Mi primer archivo npm",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Luis Gonzalez",
          "license": "ISC"
        }
    
+ Ya cuando empecemos a trabajar a en produccion necesitaremos saber que paquetes usaremos para poroduccion, cuales no, entre otras cosas.

### Exposicion del problema y necesidad del webpack

+ Webpack siempre identifica la carpeta src por defecto, por ello es importante utilizar este nombre.

+ En muchos casos necesitarmos tener un directorio para los componente que se usaran en nuestra aplicion. Como funciones y demas.

+ Pero no es buena practica tener muchos script en nuestro index.html, ya que lo hace poco mantenido y dificil de leer. 

+ Aquie tenemos una opcion que utilizar import para poder importar una funcion de un componente en especifico.

Esta seria la sintaxis

    import { funcion } from 'js/componentes.js'

Aqui importamos la funcion de componentes.

+ Hasta aqui todo bien, pero si nuestro archivo index.js, que es el que usa todo nuestro codigo de diferentes componentes, en otro directorio. Presentaremos un error.

    Uncaught SyntaxError: Cannot use import statement outside a module

+ Aqui nace la necesidad de poder unir modulos en diferentes directorios y darle mas orden a nuestra aplicacion.  Sin tener ningun incoveniente.

+ Por defecto la biblioteca react, tiene aplicado el webpack, sin necesidad de tener que trabajar con esta misma.

+ De la misma forma tendremos acceso a variables y funciones desde la consola, inclusive podremos modificar las funciones.

+ La solucion va mas alla de un patron modulo o funcion autoinvocada.

### Instalacion y configuracion de webpack por defect

+ Las dependencias de desarrollo no llegan a la version de produccion, desarrolo es solo para mi y propduccion para el usuario final.

+ El proceso es muy sencillo dentro de una carpeta, luego de que iniciemos npm, ejecutamos el siguiente comando.

    npm install webpack webpack-cli --save-dev

+ Creara la dependencia de desarrollo en el .json y la carpeta node_modules.

+ Esto solo hace la instalacion.

+ Luego para empezar a ejecutar nuestro webpack, iremos a nuestro .json y buscamos la opcion que dice scripts, alli añadiremos el script build y como valor, escribimos webpack.

    "build": "webpack";

+ Una vez colocado nuestro script simplemente lo corremos usando: 

    npm run build

+ Acabo de solucionar un error, no reconocia el modulo, es importante que al agregar la direccion del mismo. Coloquemos en los modulos que necesitamos exportar el ./assets/js/componentes.

+ El ./ es importante para que pueda reconocer la direccion, si no, aparecera que no reconocera el modulo.

+ Continuando ya nos creara una carpeta llamada dist y alli encontraremos el tesoro que necesitamos, el archivo main.js que tiene nuestro codigo comprimido y listo para ejecutar.

+ Solo nos queda vincular ese archivo a nuestro index.html

+ Podemos decir que webpack funciona como sass, con muchas mas propiedades, para poder trabajar con nuestro codigo y unir modulos en un solo archivo js.

### Archivo de configuracion webpack

+ Mi proyecto de distribucion, seria la version que voy a utilizar para produccion quiere decir que es la que voy a mostrar al usuario final, normalmente se encuentra en la carpeta dist

+ Y mi proyecto de dev, quiere decir que es todo el desarrollo que estoy haciendo y configuraciones para ejecucion.

+ El archivo de configuracion de webpack me permite exactamente configurar mi proyecto como yo desee que sea visto, si quiero por el momento trabajar en modod desarrollo o produccion

+ Defino de igual forma las reglas que deseo que tenga mi proyecto, en cuanto a modulos.

+ Optimizaciones que deseo para mi proyecto o archivo

+ Por ultimo disponemos de plugins que permiten el acceso a una especie de extensiones importantes en el momento de crear y trabajar con mi proyecto.

Luce algo así: 

        module.exports = {
            mode: 'development',

            module: {
                rules: []
            },

            optimization: {},


            plugins: [],
        };

+ Una vez echo esto, nos va a cambiar automaticamente el archivo main, que tenemos indexado en index.html.

### Html loader

+ Exporta HTML como cadena. HTML se minimiza cuando el compilador lo exige.

+ Son plugins de html de desarrollo que nos permite moverlo y el otro para hacer una inyeccion del codigo html en el index que se termina generando.

+ Una vez instalados los plugins vemos como en nuestro archivo .json se ve la modificacion de dichos archivos, agregados automaticamente a plugins.

+ Las formas de cargarlo puede ser por configuracion, por reglas o por module. En este caso con json, lo hacemos por medio de reglas con los modulos.

+ Luego de hacer la instalacion de nuestro html-loader y el HtmlWebpackPlugin, ya podremos ir a nuestro archivo de configuracion de webpack.config.js y hacer los respectivos ajustes.

+ Lo que hacemos con esto es crear el archivo html en la carpeta dist, mientras que modificamos el tamplate en el area de desarrollo.

+ Luego de hacer las configuraciones necesarias en nuestro archivo de configuracion webpack, ya tendremos casrgado el archivo html en nuestra carpeta dist

+ Esto nos creara por defecto un archivo html simple, si queremos hacer alguna modificacion, como titulo o tomar un tempalte creado en otro archivo html. Modificamos dentro de la instancia de new HtmlWebpackPlugin({ aqui hacemos las modificaciones necesarias })

+ Al principio puede parecer un poco abrumador, pero siempre se tiene la documentacion, para poder analizar las instalaciones y el codigo. Lo unico que necesitamos es ir practicando.

+ Una de las configuraciones en el archivo webpack, es template: muy util, ya que de ella podremos extraer el template de otro archivo.

+ Al momento hemos echo esto:

1. Crear la carpeta de nuestro proyecto
2. instalar webpack
3. configurar .json agregando "build": "webpack" y luego depurar el build en terminal con npm run build
4. crear directorio src
5. crear los componentes .js y index.html
6. crear el index.js, que sera el modo development
7. crear el archivo webpack.config.js
8. instalar los plugins necesario de nuestro proyecto
9. instalamos html-loader y HtmlWebpackPlugin
10. Agregamos la configuracion necesaria en el archivo de configuracion webpack
11. verificamos que se cree la carpeta dist que sera la produccion
12. Añadimos la configuracion necesaria para nuestro archivo html

+ Recordemos que nosotros nos debemos tocar la carpeta de dist, ya que es la produccion y se modificara a medida que nosotros runeemos el build.

### Webpack dev server 

+ Nos ayudara a montar un localhost sin mayores extensiones, aunque existe un plugin que ya se encuarga de ello. Que es liveServer Igual es bueno aprenderlo.

+ Para instalarlo usamos npm i -D webpack-dev-server

+ Esta es una herramienta que sera solamente usada en develop mode, ya que en produccion tendremos nuestro propio devServer

+ Para instalar el paquete del servidor, vamos a ejecutar 

        npm i -D webpack-dev-server

+ Una vez instalado, aparecera automaticamente en nuestro .json

+ Luego agregamos la siguiente configuracion enm el .json\

        "start": "webpack serve --config webpack.config.js --open --port=8080"

Con la configuracion de arriba configuramos el script que iniciara nuestro servidor. 

+ Con la bandera --config le decimos cual sera el archivo de configuracion, con --open, le decimos que lo abra una vez corra el comando start y con --port le decimos que en que puerto deseamos que nos corra el servidor.

+ Luego solo damos 

        npm run start

Autmaticamente tendremos el servidor listo para poder ser ejecutado y nos abrira una ventana en google chrome con la app o aplicacion visualizada.\

+ El servidor siempre estara escuchando las peticiones que hagamos en nuestro archivo.

+ Los scripts del .json es lo que nosotros ejecutamos en la terminal con npm run el nombre del comando.

### Importando estilos de forma dinamica

+ Los estilos que tendran por defecto nuestra pagina.

+ Creamos una carpeta llamada componentes.css en nuestra carpeta css

+ Luego lo importamos en nuestro archivo js que queremos que tenga por defecto los componentes que vamos a utilizar. 

        import './css/componentes.css'

+ Es importante que nuestro archivo tenga el nombre de componentes como en js.

+ Una vez echo esto, tendremos un error. Ya que no hemos instalado nuestro css loader ni los plugins necesarios.

+ Style loader, inyecta estilos en el dom

+ Css loader interpreta import, url, importa/require y los resolvera

+ Esto tambien lo podremos hacer con sass less, por ejemplo si queremos trabajar con sass, simplemente agregamos el regex en el test

        module.exports = {
          module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            ],
          },
        };

Con esto instalamos el sass loader, que es otro plugin de webpack <3

+ Luego generamos nuestro build de produccion, que seria el css que agregaremos a nuestros archivos en la carpeta .dist

+ Para eso corremos el build, lo que hace el script build es construirnos el archivo en la carpeta de distribucion tomando como configuracion el webpack.config

        npm run build

+ Vamos a ver que el archivo .css no va a estar en la carpeta dist, ya que el codigo css.

+ Lo que sucede es que los plugins de style loader va a estar inyectando el codigo css en nuestro archivo .js, osea el archivo main. 

+ Vamos a ver algunas opciones para poder instalarlo como archivo independiente. 

### Creando un archivo de estilos de forma global en la aplicación

+ Lo que deseamos es tener un archivo css global que podamos anexar en el head de nuestro archivo html

+ Para esto ocuparemos una configuracion necesaria, que sera

        "test": "/styles.css$/" 

Esto ira debajo de nuestra regla para inyectar el archivo css en nuestro main.js

+ Para esto ocuparemos el plugin MiniCssExtractPlugin 

+ Este complemento extrae CSS en archivos separados. Crea un archivo CSS por archivo JS que contiene CSS. Admite la carga bajo demanda de CSS y SourceMaps.

+ para instalarla 

        npm install --save-dev mini-css-extract-plugin

+ Luego de que ya se encuentre instalada, hacemos las debidas configuraciones como aparece en la documentacion

        const MiniCssExtractPlugin = require("mini-css-extract-plugin");

Esto lo agregamos al inicio.

+ Luego es importante que agreguemos el nombre del archivo, ejemplo style.css
en la instancia del plugin en el apartado plugins.

        new MiniCssExtractPlugin({
          filename: '[name].css',
        })

+ Es muy importantes, colocar la especificacion, en test, por ejemplo no habia creado mi archivo styles.css y por ende webpack intentaba encontrarlo, al ajustar el cambiar el nombre de style.css a componentes.css lo encontro y metio todos los componentes en un solo arhcivo.

+ Al principio puede parecer abrumador pero solo es cuestion de analizar como los componentes y los diferentes archivos se interconectan.

+ Por ejemplo el archivo raiz js que conecta toda nuestra aplicacion se llama index.js, fue el nombre que colocamos al iniciar el proyecto en npm, por ende todo nuestro webpack va a estar escuchando las importanciones que hagamos en este archivo.

+ Podemos trabajar de dos formas diferentes, la primera colocar es inyectar el codigo css a js o la otra es crear un archivo css global a parte, para ambas usamos plugins distintos.

+ Un BUNDLE sirve para unir muchos componentes o modulos en un solo archivo, el mas popular es webpack

+ Llego la hora de trabajar con imagenes

### Manejo de imagenes

+ Con las imagenes, encontramos un plugin denominado file-loader

+ Lo que hace el plugin es resolver los import y los require que solicitemos en nuestro archivo main.js.

+ Se conoce recurso estatico, todos los recursos como imagenes que usemos en nuestro proyecto. 

+ LA configuracion necesesaria en nuestro config webpack es 

          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader',
          },

Como vemos escaneara todos los archivos con el regex arriba mostrado.

+ Para importar una imagen en nuestro archivo js, lo podemos hacer con:

        import webPackLogo from '../img/webpack-logo.svg'

Y cuando usemos esta imagen, solamente llamamos el nombre webPackLogo.

+ Ahora veremos como copiar recursos estaticos, en nuestra carpeta de dist para poder invocarlos ahi.

### copy plugin

+ El build de produccion es bastante pequeño, a pesar de que tengamos tantas dependencias instaladas. Ya que dichas dependencias son solo herramientas que nosotros ocupamos para poder unir modulos y minificar nuestro codigo.

+ Esto es especialmente util cuando deseamos crear y mover archivos a nuestra carpeta dist. 

+ Para instalar este paquete usamos el siguiente comando npm

        npm install copy-webpack-plugin --save-dev

+ Luego de ello, solo nos queda hacer la configuracion en nuestro archivo webpack.config.js

+ Importante destacar que cuando hagamos la instancia del plugin en el archivo config, colocamos de donde vamos a copiar recursos y que carpeta vamos a crear en nuestro dist. 

        { from: "source", to: "dest" };

+ Ahora solo nos queda hacer las optimizaciones y que el codigo sea soportado por muchos navegadores.

### Production mode

+ La principal diferencia es que el modo developmente tiene comentarios, codigo que yo entiendo, nombres de variables que yo comprendo y el orden que necesito para poder entender el proyercot.

+ El modo de produccion entrega un codigo minimizado, sin comentarios, sin espacios, apto para la mayoria de navegadores y tiene una composicion de distribucion. 

+ Por ende podemos crear dos archivos diferentes, uno de produccion y otro de configuracion/

        //Dev mode
        webpack.config.js

        //Prod mode
        webpack.prod.js

+ Solo nos queda configurar el .json para que muestre el de produccion o el de dev.

        "build": "webpack --config webpack.prod.js",
        "build:dev": "webpack --config webpack.config.js"

+ Y cambiamos el mode dependiendo si es produccion o development.

+ Para produccion dentro de las optimizaciones que necesito colcar una de ellas es el hashcontent que se coloca en el archivo css y en el archivo js

+ Para el archivo js, simplemente agregamos la configuracion dentro de el output, de esta forma

        filename: '[name].[contenthash].js'

+ Para el archivo css, lo colocamos en la instancia del plugin css

        filename: '[name].[contenthash].css'    

+ Este hash cambiara a medida que nosotros modifiquemos algo de nuestros archivos.

+ Vemos que el archivo css no se encuentra minimizado

+ Para esto vamos a ocupar dos extensiones, la primera sera css minimizer webpack plugin, que lo que hace es minimizar nuestro codigo css

+ la segunda se llama terser webpack plugin que lo que hace es minimizar nuestro codigo javascript, la version 5 de webpack ya tiene esto por defecto pero se instala si necesitamos hacer ajustes en la parte de opciones del mismo.

+ Para instalarlos simplemente usamos el siguiente comando. 

        npm install css-minimizer-webpack-plugin --save-dev
        npm install terser-webpack-plugin --save-dev

+ Luego agregamos la debida configuracion en nuestro archivo webpack config y woalaa

+ Nuestro css queda minimizado y listo para produccion.

+ Cada vez vamos viendo nuestro codigo mucho mejor y listo para entregarse.

+ Ya por ultimo solo nos queda agregar mucha compatibilidad para otros navegadores y que se peuda ejecutar en cualquiera asi sea google chrome.

### Instalacion y configuracion de babel

+ Lo que hace babel, es brindarnos mas compatibilidad de nuestro codigo para cualquier navegador.

+ Nos permite programar en E6 y convertir el codigo para diferentes navegadores.

+ El loader en el .json siempre sera lo que nos permita cargar los archivos y el nombre del la extension en este caso babel sera babelcore

+ Podemos seguir la documentacion al pie de la letra y funcionara peroi basicamente, lo que hicimos fue:

1. Instalar babel en el proyecto
2. Agregar la configuracion en el archivo de produccion
3. Crear archivo babel.json
4. Agregar la configuracion de la pagina.

+ Con esto ya finalizamos todo nuestro proyecto montado con webpack y distribuido para todos los navegadores, minimizado y divido de forma que en pueda leerlo y ver los cambios.

+ Algo realmente positivo de babel es que el codigo queda en forma de dev y de produccion.




