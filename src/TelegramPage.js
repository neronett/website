import React, { useEffect } from 'react'
import detect from './detect' // Assuming detect.js is converted to a module or imported as a library
import './TelegramPage.css' // Styles for this component

const TelegramPage = () => {
  useEffect(() => {
    const user = detect.parse(navigator.userAgent)
    const downloadLink = document.getElementById('downloadLink')
    if (user.os.family === 'iOS') {
      downloadLink.href = 'https://itunes.apple.com/ru/app/telegram-messenger/id686449807?mt=8'
    } else if (user.os.family === 'Android') {
      downloadLink.href = 'market://details?id=org.telegram.messenger'
    } else {
      downloadLink.href = 'https://telegram.org/'
    }
  }, [])

  return (
    <div className="telegram-page">
      <div className="header">
        <img src="./LogoBig_1x.png" alt="Logo" />
      </div>

      <section className="jumbotron text-center">
        <div className="container">
          <img className="avatar" src="./piratecpa.png" alt="Avatar" />
          <h1 className="jumbotron-heading">3000 грн за 30 минут</h1>
          <p className="lead text-muted">
            {`📩 Зв'язок зі мною - `}
            <a href="https://t.me/+xxClem-EFV9lYjU6" style={{ color: 'royalblue', display: 'inline' }}>
              @semartinez
            </a>
            {`\nЗароби зараз - від 3 до 10 тис гривень`}
          </p>
          <div className="buttons">
            <a href="https://t.me/+xxClem-EFV9lYjU6" className="btn btn-primary my-2 ml-2">
              Открыть в Telegram
            </a>
            <a
              id="downloadLink"
              href="https://telegram.org/"
              className="btn btn-secondary my-2 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              У меня нет Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TelegramPage
