FROM node:20-alpine
WORKDIR /Mimnur_Ferdous_ui_garden
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-storybook
EXPOSE 8083
CMD ["npx", "http-server", "storybook-static", "-p", "8083"]