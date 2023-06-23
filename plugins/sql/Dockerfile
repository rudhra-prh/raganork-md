FROM quay.io/souravkl11/rgnk-v2:latest

ADD https://api.github.com/repos/abhiru-dhachu/raganork-md/git/refs/heads/main version.json
RUN git clone -b main https://github.com/abhiru-dhachu/raganork-md /rgnk
WORKDIR /rgnk
ENV TZ=Asia/Kolkata
RUN yarn install --ignore-engines --network-concurrency 1
EXPOSE 3000
CMD ["node", "index.js"]
