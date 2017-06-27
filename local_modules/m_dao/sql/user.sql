create table if not exists user (
  id int not null primary key auto_increment,
  username varchar(50) not null default '',
  password varchar(50) not null default '',
  create_time datetime not null default now(),
  status char(1) not null default '1'
) default charset=utf8;
