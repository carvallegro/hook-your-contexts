import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        window
          .fetch('https://yesno.wtf/api')
          .then(response => response.json())
          .then(yesOrNo => setDarkMode(yesOrNo.answer === 'yes')),
      3000
    )

    return () => clearInterval(intervalId)
  })

  return darkMode
}
