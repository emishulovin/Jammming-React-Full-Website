const accessToken;
const clientId = 'f5514988b8d248149a23e4c3c48c29b7'
const redirectUri = 'http://localhost:3000/'

const Spotify =  {

    getAccessToken() {
        if ( this.token) {
            return this.token
        }
        //parse url for token
        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        
        if (accessTokenMatch && expiresInMatch) {
            accessToken = expires(accessTokenMatch, expiresInMatch)
        } else {
            
        }

        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${accessToken}&scope=playlist-modify-public&redirect_uri=${redirectUri}`)

    },

    expires(accessToken, expiresIn) {
                    accessToken = accessTokenMatch[1]
            expiresIn = Number(expiressInMatch[1])
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken
    }
}

export default Spotify;