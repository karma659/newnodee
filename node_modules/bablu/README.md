<h1 align="center">Bablu</h1>
<p align="center"><strong>( बबलू ) - Package for manipulating color of PNG with given hex</strong></p>
<p align="center">
    <a href="https://github.com/forscht/zaid/releases">
        <img src="https://img.shields.io/github/v/release/forscht/zaid?include_prereleases">
    </a>
    <a href="https://github.com/forscht/zaid/releases">
        <img src="https://img.shields.io/github/downloads/forscht/zaid/total">
    </a>
    <a href="https://github.com/vsnthdev/samaya/commits/main">
        <img src="https://img.shields.io/github/last-commit/forscht/zaid.svg">
    </a>
    <a href="https://github.com/vsnthdev/samaya/issues">
        <img src="https://img.shields.io/github/issues/forscht/zaid.svg">
    </a>
    <a href="https://github.com/vsnthdev/samaya/blob/main/LICENSE.md">
        <img src="https://img.shields.io/github/license/forscht/zaid">
    </a>
</p>
<br>

## 🛠 Installation
```shell
$ npm install --save bablu
```

## 🚀 Usage
```js
const fs = require('fs')
const bablu = require('bablu')

const url = 'https://cdn.discordapp.com/emojis/891761238994976788.png';

(async () => {
    // Convert from url
    const imageBuffer = await bablu(url, '#F05454')
    fs.writeFileSync('emoji-red.png', imageBuffer)

    // Convert from buffer
    const image = fs.readFileSync('emoji.png')
    const imageBuffer2 = await bablu(image, '#FFC069')
    fs.writeFileSync('emoji-yellow.png', imageBuffer2)
})()
```

<!-- footer -->

## 📰 License
> The **Bablu** project is released under the [GNU 3.0](LICENSE). <br> Developed &amp; maintained By Darshan Patel.
<hr>
