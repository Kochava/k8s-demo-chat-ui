FROM nginx:1.15.9-alpine
ADD dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
