# Dockerfile de ejemplo
FROM traccar/traccar:latest
COPY ./custom-web/ /opt/traccar/web/
CMD ["./traccar.run"]
