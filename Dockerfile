FROM node:20.17.0  
#  as build

RUN mkdir -p /project

# Set working directory
WORKDIR /project

#RUN apt-get clean

COPY . /project


RUN rm -Rf node_modules

RUN yarn install

RUN yarn run build

# FROM node:20.3.0 

# COPY --from=build /var/www/frontend /
# RUN yarn build

# CMD ["npm","run", "start"]
CMD ["yarn","run" , "dev"]
