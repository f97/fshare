# FshareDK

Unofficial Node.js SDK for fshare.vn and tool only support premium user. (By fshare after 09/2019)


## Usage

Install it with yarn or npm

```bash
yarn add fsharedk
# Or
npm install -save fsharedk
```

Usage 

```javascript
const fsharedk = require('fsharedk')

const account = {
    user_email: 'email@example.com',
    password:  'password'
}

const getURL = async (account) => {
  const { token, session_id: session } = await fsharedk.login(account);
  const url = await fsharedk.download(token, session, 'https://www.fshare.vn/file/xxxx...');
  return url;
};

getURL().then((res) => console.log(res)); // { location:: 'http://download.fshare.vn/dl/xxx...' }

```

## Methods

- [x] login(account): Login fshare with your account
- [x] download(token, session, url): Download file with logged
- [ ] upload
