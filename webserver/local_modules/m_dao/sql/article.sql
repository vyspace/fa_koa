create table if not exists article (
  id int not null primary key auto_increment,
  content text,
  image_array json,
  create_time datetime  not null default now(),
  num_like int not null default 0,
  num_comment int not null default 0,
  num_forward int not null default 0,
  is_hot char(1) not null default '0',
  status char(1) not null default '1'
) default charset=utf8;