# Utilizar una imagen base con Node.js
FROM node:18-alpine

# Crear y establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto en el que se ejecutará el contenedor
EXPOSE 3888

# Establecer una variable de entorno para el puerto
ENV SENDGRID_PORT=3888

# Ejecutar el servidor
CMD ["node", "app.js"]
