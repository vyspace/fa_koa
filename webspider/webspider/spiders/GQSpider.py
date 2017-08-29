import scrapy
import time
from webspider.items import WebspiderItem

class GQSpider(scrapy.spiders.Spider):
    name = 'GQ'
    allowed_domains = ['gq.com.cn']
    start_urls = [
        'http://m.gq.com.cn/fashion/news_112gfbe51f1090f7.html'
    ]

    def parse(self, res):
        # filename = res.url.split('/')[-1]
        filename = '/Users/zh/works/nodejs_pros/fa_koa/webspider/data/'+ str(time.time())
        item = WebspiderItem()
        item['title'] = res.selector.xpath('/html/head/title/text()').extract()[0];
        with open(filename, 'wt') as f:
            f.write(item['title'].encode('utf-8'))