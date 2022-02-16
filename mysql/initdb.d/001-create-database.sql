DROP DATABASE IF EXISTS `open_camp_dev`;
CREATE DATABASE `open_camp_dev` default character set utf8mb4;
GRANT ALL ON fx_datastore.* TO 'open_camp_dev_writer'@'%' IDENTIFIED BY 'open_camp_dev_writer';
FLUSH PRIVILEGES;
