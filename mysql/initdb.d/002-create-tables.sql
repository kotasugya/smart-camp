---- databse ----
USE open_camp_dev;

---- drop ----
DROP TABLE IF EXISTS `users`;

---- create ----
create table IF not exists `users`
(
  `id` int not null auto_increment comment 'ユーザーID',
  `user_name` varchar(255) not null UNIQUE comment 'ユーザー名',
  `last_name` varchar(255) comment '姓',
  `first_name` varchar(255) comment '名',
  `password` varchar(50) not null default 'Pa55w0rd',
  `mail_address` varchar(255) UNIQUE comment 'メールアドレス',
  `create_at` timestamp not null default current_timestamp comment '登録日時',
  `update_at` timestamp not null default current_timestamp on update current_timestamp comment '更新日時',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
