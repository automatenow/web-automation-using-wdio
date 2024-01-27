import {browser} from '@wdio/globals'

export default class Page {
    open(path) {
        return browser.url(`https://ecommerce-playground.lambdatest.io/index.php?route=${path}`)
    }
}