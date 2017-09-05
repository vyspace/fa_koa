# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import MySQLdb
import json

class WebspiderPipeline(object):
    def process_item(self, item, spider):
        print 1111
        cont = item['content']
        xx = json.dumps(cont, default=lambda cont: cont.__dict__, sort_keys=True, indent=4)
        val_s = (item['title'], xx, item['pub_date'], item['url_origin'])
        setting = spider.settings.get('MY_SQL')
        con = MySQLdb.connect(**setting)
        cur = con.cursor()
        sql = ('insert into gq (title, content, pub_date, url_origin) '
               'values(%s, %s, %s, %s)')

        try:
            cur.execute(sql, val_s)
        except Exception, e:
            print 'Insert error: ', e
            con.rollback()
        else:
            con.commit()
        cur.close()
        con.close()
        return item
