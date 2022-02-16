FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE open_camp_dev
ENV MYSQL_USER open_camp_dev_writer
ENV MYSQL_PASSWORD Pa55w0rd
ENV TZ 'Asia/Tokyo'

EXPOSE 3306
ENV PORT 3306

RUN touch /var/log/mysql/mysql.log
