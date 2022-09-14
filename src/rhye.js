const axios = require('axios')

interface authenticationParams {
    clientId: string,
    redirectUrl: string,
    scope: string | string[],
    state?: Record<string, string>,
    prompt?: 'none' | 'consent' | 'select_account'
}

const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

async function generateUrlForAuthentication() {
    let url = `
    https://accounts.google.com/o/oauth2/v2/auth?
    scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
    include_granted_scopes=true&
    response_type=code&
    state=${JSON.stringify({
        session_token: 'mysesh',
        back: 'front'
    })}&
    redirect_uri=http%3A%2F%2Flocalhost%3A7000%2Fphantasm%2Facceptcode&
    client_id=519486068354-9t2f5a66a3rtiuosfpb54v39j8aohh5c.apps.googleusercontent.com&
    access_type=offline
    `
    console.log(url)
}

generateUrlForAuthentication()

//testscope https%3A//www.googleapis.com/auth/drive.metadata.readonly
