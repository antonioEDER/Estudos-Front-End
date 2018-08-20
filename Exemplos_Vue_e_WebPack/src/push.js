import firebase from 'firebase'

export default function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
      .then(registration => {
        const messaging = firebase.messaging()
        let getToken = () => {
          messaging.getToken()
            .then((currentToken) => {
              if (currentToken) {
                console.log("Permitido token", currentToken)
                return currentToken
              }
              console.log('Não autorizado')
            })
        }
        messaging.useServiceWorker(registration)

        messaging.requestPermission()
          .then(() => {
             getToken()
          })
      })
      .catch(err => {
        console.warn('Erro =', err)
      })
  }

}
