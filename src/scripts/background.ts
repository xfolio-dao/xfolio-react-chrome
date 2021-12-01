import { wrapStore } from 'webext-redux'
import store from '../state/store'

chrome.runtime.onInstalled.addListener((details) => {
    console.log('[background.js] onInstalled', details)
    alert('[background.js] onInstalled')
})

chrome.runtime.onConnect.addListener((port) => {
    console.log('[background.js] onConnect', port)
    port.onMessage.addListener(msg => {
        // Handle message however you want
        console.log('port message', msg)
    })
})
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'))

chrome.runtime.onStartup.addListener(() => {
    console.log('[background.js] onStartup')
    alert('[background.js] onInstalled')
})

chrome.runtime.onSuspend.addListener(() => {
    console.log('[background.js] onSuspend')
    alert('[background.js] onSuspend')
})

wrapStore(store)