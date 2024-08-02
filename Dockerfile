# Use uma imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Instale o Vue CLI globalmente
RUN npm install -g @vue/cli

# Copie os arquivos do projeto para o diretório de trabalho do contêiner
COPY . .

# Exponha a porta 8080
EXPOSE 8080