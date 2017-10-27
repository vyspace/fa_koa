drop table if exists blog;
create table blog (
  id int not null primary key auto_increment,
  user_id int not null,
  type char(1) not null default '',
  photos json,
  num_of_likes int default 0,
  num_of_comments int default 0,
  num_of_forwards int default 0,
  text varchar(255) default '',
  article_id int,
  link varchar(255),
  create_time datetime not null default now()
) default charset=utf8;

insert into blog (type,user_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('1',5,'[{"src":"./img/t3.jpg","msrc":"./img/ts3.jpg","w":667,"h":1000},{"src":"./img/t5.jpg","msrc":"./img/ts5.jpg","w":1000,"h":667},{"src":"./img/t6.jpg","msrc":"./img/ts6.jpg","w":1000,"h":667}]',30087,1009,201,'裹挟在乱世，沈炼与北斋情陷其中，却越陷越深。而在这一切的背后，巨大阴谋正暗中布局。');
insert into blog (type,user_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('1',4,'[{"src":"./img/test.jpg","msrc":"./img/tests.jpg","w":740,"h":1077}]',15008,1100,969,'协会的最高宗旨是将巴黎作为世界时装之都的地位打造得坚如磐石。他们帮助新晋设计师入行，组织并协调巴黎时装周的日程表，务求让买手和时尚记者尽量看全每一场秀。');
insert into blog (type,user_id,article_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('2',1,1,'[{"src":"./img/as1.jpg"}]',1500,6100,96970,'从埃及法老到摇摆的迪斯科 袜子到底经历了什么？');
insert into blog (type,user_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('1',1,'[{"src":"./img/t1.jpg","msrc":"./img/ts1.jpg","w":960,"h":1362},{"src":"./img/t2.jpg","msrc":"./img/ts2.jpg","w":1080,"h":1920},{"src":"./img/t3.jpg","msrc":"./img/ts3.jpg","w":667,"h":1000},{"src":"./img/t4.jpg","msrc":"./img/ts4.jpg","w":1000,"h":667},{"src":"./img/t5.jpg","msrc":"./img/ts5.jpg","w":1000,"h":667},{"src":"./img/t6.jpg","msrc":"./img/ts6.jpg","w":1000,"h":667}]',300,100,201,'明天启七年，北镇抚司锦衣卫沈炼（张震饰）在一次扫除乱党任务中，为救画师北斋（杨幂饰），将同僚凌云铠（武强饰）灭口。此后一方面要摆脱来自陆文昭（张译饰）、裴纶（雷佳音饰）的质疑与调查，一方面又在神秘女子的要挟下放火烧了锦衣卫经历司，协力查明真相。裹挟在乱世，沈炼与北斋情陷其中，却越陷越深。而在这一切的背后，巨大阴谋正暗中布局。');
insert into blog (type,user_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('1',2,'[{"src":"./img/test.jpg","msrc":"./img/tests.jpg","w":740,"h":1077},{"src":"./img/test.jpg","msrc":"./img/tests.jpg","w":740,"h":1077}]',1500,6100,96970,'巴黎时装周（Paris Fashion Week）起源于1910年，由法国时装协会主办。法国时装协会成立于19世纪末，协会的最高宗旨是将巴黎作为世界时装之都的地位打造得坚如磐石。他们帮助新晋设计师入行，组织并协调巴黎时装周的日程表，务求让买手和时尚记者尽量看全每一场秀。');
insert into blog (type,user_id,link,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('3',3,'http://www.gq.com.cn/fashion/news/news_19359c6facb4c91d.html','[{"src":"http://img1.selfimg.com.cn/gq24640x/2017/08/18/1503020439_NC72wd.gif"}]',1500,6100,96970,'每日穿搭｜有一种时尚叫“穿成知名企业员工”_潮流_GQ男士网');