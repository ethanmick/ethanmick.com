FROM postgres:11.5

ADD *.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
CMD ["postgres"]
