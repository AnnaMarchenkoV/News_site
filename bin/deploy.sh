#! /bin/sh
#npm i
npm run build

# move to server
scp -rp ~/work/news_site/News_site/front/build/* ubuntu@news-feed.dunice-testing.com:/home/ubuntu/news_client_2/
