#!/usr/bin/env sh

# ����������ʱ��ֹ�ű�
set -e

# ����
npm run build

# cd �����������Ŀ¼�� 
cd dist

# �����Զ���������
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



# ���� https://jhonglu.github.io/movie/
git push -f git@github.com:jhonglu/movie.git master:gh-pages

cd -