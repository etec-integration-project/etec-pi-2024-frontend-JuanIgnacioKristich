# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

ENV REACT_APP_BACKEND=/api

# Copia los archivos necesarios y ejecuta npm install
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Exponer el puerto en el que el frontend corre
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
