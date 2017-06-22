create table if not exists user_admin (
  id int(11) not null primary key auto_increment,
  username varchar(50) not null default '',
  password varchar(50) not null default ''
) default charset=utf8;