create table if not exists user (
  id int(11) not null primary key auto_increment,
  username varchar(50) not null default '',
  password varchar(50) not null default ''
) default charset=utf8;
