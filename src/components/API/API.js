const KEY = '32917696-664c2306d3c1c68814ed916e0';

export class API {
  async fetchImgs(query, page) {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
    );
    if (!response.ok) {
      throw new Error(`could not fetch , ${response.status}`);
    }
    return response.json();
  }
}