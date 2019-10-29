const axios = require('axios');
const fs = require('fs');
const channels = require('./input/channel-names.json')

async function GetByUsername(userName) {
  return await GetData('username', userName);
}

async function GetByChannelId(id) {
  return await GetData('id', id);
}

async function GetData(mode, param){
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
      keywords: data.brandingSettings.channel.keywords
    }));

  return videos[0];
}

function BuildUrl(mode, param)
{
  switch(mode)
  {
    case 'username':
      return "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet%2CbrandingSettings&forUsername=" + param + "&key=" + process.env.GOOGLE_API_KEY;
    case 'id':
      return "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet%2CbrandingSettings&id=" + param + "&key=" + process.env.GOOGLE_API_KEY;
    default:
      throw "Unsupported mode";
  }
}

async function GetAllChannels()
{
  var result = [];
  for (var i = 0; i < channels.userNames.length; i++)
  {
    var response = await GetByUsername(channels.userNames[i]);
    result.push(response);
  }

  for (var i = 0; i < channels.channelIds.length; i++)
  {
    var response = await GetByChannelId(channels.channelIds[i]);
    result.push(response);
  }

  return result;
}

GetAllChannels().then(response => {
  let data = JSON.stringify(response);
  fs.writeFileSync('data/channels.json', data);
});