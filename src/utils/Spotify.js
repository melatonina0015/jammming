const client_ID = ''
const client_secret = ''

async function getAccessToken() {
    const auth = btoa(`${client_ID}:${client_secret}`);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${auth}`
        },
        body: 'grant_type=client_credentials'
        })

        try {
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.access_token
            }
        } catch (error) {
            console.log(error)
        }
         
}

async function searchTracks(searchTerm) {
    const searchUrl = 'https://api.spotify.com/v1/search'
    const searchFilters = `?q=${searchTerm}&type=track&limit=10`
    const endpointUrl = searchUrl + searchFilters;

    const accessToken = await getAccessToken();

    const response = await fetch(endpointUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    try {
        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.tracks.items.map(track => ({
                src: track.album.images[0].url,
                album: track.album.name,
                artist: track.artists[0].name,
                title: track.name,
                id: track.id,
                uri: track.uri
            }))
        }
    } catch (error) {
        console.log(error);
    }
    
}

export {searchTracks};