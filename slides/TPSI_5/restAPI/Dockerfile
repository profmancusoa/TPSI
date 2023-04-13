FROM debian:11-slim

ENV tmp_dir /api

RUN mkdir /api

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs

RUN npm install -g json-server

RUN echo '{"students":[{"id":1,"nome":"Marco","cognome":"Garabello","classe":"5INFO","telefono":"3345678987","media":9.4},{"id":2,"nome":"Dario","cognome":"Ruggieri","classe":"5INFO","telefono":"3246476879","media":9.5},{"id":3,"nome":"Alex","cognome":"Chindris","classe":"5INFO","telefono":"3445643216","media":8}]}' > /api/students.json

ENTRYPOINT ["json-server", "--port", "8080", "--host", "0.0.0.0"]

CMD ["/api/students.json"]