import d3 from 'd3'
import jsdom from 'jsdom'

const document = jsdom.jsdom()
const svg = d3.select(document.body).append('svg')

console.log('svg', svg)
