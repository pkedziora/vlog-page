import Fuse from 'fuse.js';

export default {
  filterVideos(videos, count, searchTerm) {
    if (!searchTerm)
    {
      return videos.slice(0, count);
    }

    const options = {
      keys: ['title', 'description'],
    };

    const fuse = new Fuse(videos, options);
    const result = fuse.search(searchTerm);

    return result.slice(0, count);
  },
};
