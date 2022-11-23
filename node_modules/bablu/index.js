const { chunk } = require('lodash')
const { createCanvas, loadImage, createImageData } = require('canvas')

/**
 * @description Convert hex to rgb code
 * @param {String} hex
 * @return {{r: number, b: number, g: number}|null}
 */
const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const hexToConvert = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexToConvert)

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null
}

/**
 * @description Fill different color in PNG
 * @param {String | Buffer } source
 * @param {String} hex
 * @return {Promise<Buffer>}
 */
const zaid = async (source, hex) => {
    // Convert Hex to RGB
    const rgbCode = hexToRgb(hex)
    if (!rgbCode) throw new Error('Invalid Hex code provided')
    const { r, g, b } = rgbCode

    // Load Image
    const baseImage = await loadImage(source)
    const canvas = createCanvas(baseImage.width, baseImage.height)

    // Tet Context
    const ctx = canvas.getContext('2d')
    ctx.drawImage(baseImage, 0, 0)
    const { data } = ctx.getImageData(0, 0, baseImage.width, baseImage.height)

    // Convert Pixels
    const pixels = chunk(data, 4)

    /**
     * @description IDK how this works, but works
     * @type {unknown[]}
     */
    const convertedPixel = pixels.map((pixel) => {
        const pixelCopy = pixel
        pixelCopy[0] = r
        pixelCopy[1] = g
        pixelCopy[2] = b

        return pixelCopy
    }).reduce((p, n) => [...p, ...n], [])

    const imageData = createImageData(new Uint8ClampedArray(convertedPixel), baseImage.width, baseImage.height)
    ctx.putImageData(imageData, 0, 0)

    return canvas.toBuffer()
}

module.exports = zaid
