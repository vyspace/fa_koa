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
        item = WebspiderItem()
        channel_list = response.xpath('//div[@class="clearfix channel_list"]')
        blocks = channel_list.xpath('./div[@class="articleboxmin"]')
        for cell in blocks:
            item['url_origin'] = cell.xpath('./a[1]/@href').extract()[0]
            yield scrapy.Request(url=item['url_origin'], meta={'item': item}, callback=self.parse_detail,
                                 dont_filter=True)

    def parse_detail(self, response):
        item = response.meta['item']
        item['title'] = response.xpath('//div[@class="head"]//div[@class="title"]/h1/text()').extract()[0]
        item['pub_date'] = response.xpath('//p[@class="signature"]/text()').extract()[1]
        content_div = response.xpath('//div[@class="wrapper article"]//div[@class="content"]')
        children = content_div.xpath('./img|./p')
        item['content'] = []
        for child in children:
            node_type = self.judge_node(child)
            cell = None
            if node_type == 'img':
                cell = {
                    'key': 'img',
                    'value': child.xpath('./@src').extract()[0]
                }
            if node_type == 'p':
                cell = {
                    'key': 'cont',
                    'value': child.xpath('./text()').extract()[0]
                }
            if node_type == 'subtitle':
                cell = {
                    'key': 'subtitle',
                    'value': child.xpath('./text()').extract()[0]
                }
            item['content'].append(cell)
        return item

    def judge_node(self, child):
        if len(child.xpath('attribute::src')) > 0:
            return 'img'
        elif len(child.xpath('attribute::class')) == 0:
            return 'p'
        else:
            return 'subtitle'
