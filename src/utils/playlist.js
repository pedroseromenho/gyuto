import music from '__MOCKS__/music';

export const playlist = () => {
  const list = []
  music.albums.forEach(m => {
    m.musics.forEach(t => {
      list.push({
        album: m.title,
        music: t.title,
        src: t.url,
      })
    })
  })
  return list;
}