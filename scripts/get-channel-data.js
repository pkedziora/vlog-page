const axios = require('axios');
const fs = require('fs');
const appconfig = require('../app.config.json');

const { channels } = appconfig;

function BuildUrl(mode, param) {
  switch (mode) {
    case 'username':
      return `https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet%2CbrandingSettings&forUsername=${param}&key=${process.env.GOOGLE_API_KEY}`;
    case 'id':
      return `https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet%2CbrandingSettings&id=${param}&key=${process.env.GOOGLE_API_KEY}`;
    default:
      throw new Error('Unsupported mode');
  }
}

async function GetData(mode, param) {
  const url = BuildUrl(mode, param);

  const result = await axios.get(url);

  const videos = result.data.items.map((data) => ({
    id: data.id,
    uploads: data.contentDetails.relatedPlaylists.uploads,
    subscribers: data.statistics.subscriberCount,
    title: data.snippet.title,
    description: data.snippet.description,
    thumbnails: data.snippet.thumbnails,
    image: data.brandingSettings.image,
    keywords: data.brandingSettings.channel.keywords,
  }));

  return videos[0];
}

async function GetByUsername(userName) {
  return GetData('username', userName);
}

async function GetByChannelId(id) {
  return GetData('id', id);
}

async function GetAllChannels() {
  const promises = [];
  for (let i = 0; i < channels.userNames.length; i++) {
    promises.push(GetByUsername(channels.userNames[i]));
  }

  for (let i = 0; i < channels.channelIds.length; i++) {
    promises.push(GetByChannelId(channels.channelIds[i]));
  }

  const result = await Promise.all(promises);

  return result;
}

GetAllChannels().then((response) => {
  const data = JSON.stringify(response);
  fs.writeFileSync('data/channels.json', data);
});
