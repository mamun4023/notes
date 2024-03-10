import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'


i18next.init({
    lng : "en",
    resources : {
        en : {
            common : {
                "home"  : "Hello English"
            }
        },
        ben : {
            common : {
                "home" : "Hello Bangla"
            }
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18next}> 
    <App />
    </I18nextProvider>
)
