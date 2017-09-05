import scrapy
from webspider.items import WebspiderItem

class GQSpider(scrapy.Spider):
    def __init__(self):
        pass

    name = 'spi_gq'
    allowed_domains = ['gq.com.cn']
    start_urls = [
        'http://www.gq.com.cn/fashion/'
    ]

    def parse(self, response):
        channel_list = response.xpath('//div[@class="clearfix channel_list"]')
        blocks = channel_list.xpath('./div[@class="articleboxmin"]')
        print len(blocks)
        for cell in blocks:
            item = WebspiderItem()
            item['url_origin'] = cell.xpath('./a[1]/@href').extract()[0]
            yield scrapy.Request(url=item['url_origin'], meta={'item': item}, callback=self.parse_detail,
                                 dont_filter=True)

    def parse_detail(self, response):
        pdate = response.xpath('//p[@class="signature"]/text()').extract()[1]
        if pdate > '2017.09.03':
            print pdate
            item = response.meta['item']
            item['pub_date'] = pdate
            item['title'] = response.xpath('//div[@class="head"]//div[@class="title"]/h1/text()').extract()[0]
            content_div = response.xpath('//div[@class="wrapper article"]//div[@class="content"]')
            children = content_div.xpath('./div|./p')
            item['content'] = []
            for child in children:
                res = self.handler(child)
                if res != '':
                    item['content'].append(res)
            yield item

    def handler(self, child):
        if len(child.xpath('attribute::class')) == 0:
            if len(child.xpath('./text()')) == 0:
                return ''
            else:
                return {
                    "key": "content",
                    "value": child.xpath('./text()').extract()[0]
                }
        elif child.xpath('attribute::class').extract()[0] == 'img':
            return {
                "key": "img",
                "value": child.xpath('./img/@src').extract()[0]
            }
        elif child.xpath('attribute::class').extract()[0] == 'info':
            return {
                "key": "subtitle",
                "value": child.xpath('./text()').extract()[0]
            }
        else:
            return ''
