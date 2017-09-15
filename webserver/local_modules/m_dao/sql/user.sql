-- 用户数据表
drop table if exists user;
create table user (
    id int not null primary key auto_increment,
    username varchar(50) not null default '',
    password varchar(50) not null default '',
    profile varchar(255) default '',
    nickname varchar(50) not null default '',
    gender char(1) not null default '0',
    site varchar(50) default '',
    birthday date,
    signature varchar(50) default '',
    phone varchar(20) default '',
    email varchar(50) default '',
    tag char(1) default '',
    level int not null default 1,
    create_time datetime not null default now(),
    status char(1) not null default '1'
) default charset=utf8;
--tag  1=='时尚达人'
--gender  1=='男' 0=='女'


set @email = 'hello@test.com';
insert into user (username,password,profile,nickname,gender,site,birthday,signature,phone,email,tag) values
(@email,'123456','http://img2.woyaogexing.com/2017/09/12/9de4466e3adb68a1!400x400_big.jpg',
'美丽世界','0','上海','1990-12-01',
'╰︶▔ ゛ 回忆搁浅双手摻夹的幸福  ||  ╰︶▔ ゛ 曾经演绎脸庞灿烂的笑容',
'13000000001',@email,'1');
