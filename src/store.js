/*
    The Redux store
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { isNull } from 'lodash'
import createRavenMiddleware from 'raven-for-redux'

let store = null

export function getStore() {
    if (isNull(store)) {
        store = createStore(
            state => state,
            {musicians: [
                {
                    name: 'John Coltrane',
                    nick: 'trane',
                    albums: [
                        {title: 'Blue Trane'},
                        {title: 'Giant Steps'},
                        {title: 'Coltrane\'s Sound'},
                        {title: 'Crescent'},
                        {title: 'A Love Supreme'},
                    ]
                },
                {
                    name: 'Miles Davis',
                    nick: 'miles',
                    albums: [
                        {title: 'Workin\''},
                        {title: 'Cookin\''},
                        {title: 'Relaxin\''},
                        {title: 'Steamin\''},
                        {title: 'Kind of Blue'},
                        {title: 'In a Silent Way'},
                    ]
                },
                {
                    name: 'Bill Evans',
                    nick: 'billevans',
                    albums: [
                        {title: 'Everybody Digs Bill Evans'},
                        {title: 'Portrait in Jazz'},
                        {title: 'Sunday at the Village Vanguard'},
                        {title: 'Waltz for Debby'},
                    ]
                },
                {
                    name: 'Thelonious Monk',
                    nick: 'monk',
                    albums: [
                        {title: 'Brilliant Corners'},
                        {title: 'Monk\'s Music'},
                        {title: 'Genius of Modern Music'},
                    ]
                },
            ]},
            // applyMiddleware(
            //     createRavenMiddleware(window.Raven)
            // )
        )
    }
    return store
}
