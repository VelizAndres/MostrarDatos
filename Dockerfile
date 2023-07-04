FROM node:16
WORKDIR /app
COPY . .
RUN npm install package.json
RUN npm run build
CMD ["npm", "run", "start"]