import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faDev, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import techSound from '../../../global/assets/sounds/game_blip.wav'
import LoaderEffect from '../../../global/components/headerLoader/loaderEffect'
import useSound from 'use-sound'

export default function Header({ current, setCurrent, numberOfRenders, appMuted }) {
  const ini = { pixels: '0px', degrees: '180deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)
  const [switchSound] = useSound(techSound, { volume: 0.4, playbackRate:1 })

  function expand() {
    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('150px')
      setDegrees('0deg')
    }
  }

  function updateCurrent(selected) {
    if(!appMuted)switchSound()
    setCurrent(selected)
  }

  return (
    <section id={s.header} data-aos='flip-up' data-aos-duration='500'>
      {numberOfRenders < 2 ? <LoaderEffect /> :  null}
      <div className={s.wrapper}>
        <div className={s.glass}>
          <div
            className={s.movable_box}
            style={{ transform: `translateX(${pixels})` }}
          >

            <div className='tab'>
              <p
                className='vertical_text'
                onClick={() => expand()}
              >
                select
              </p>
              <FontAwesomeIcon
                className='animated_arrow'
                style={{ transform: `rotate(${degrees})` }}
                icon={faAngleLeft}
                onClick={() => expand()}
              />
            </div>

            <div className={s.icons_wrapper}>
              <div
                className={current === 'stack overflow' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('stack overflow')}
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </div>
              <div
                className={current === 'devto' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('devto')}
              >
                <FontAwesomeIcon icon={faDev} />
              </div>
              <div
                className={current === 'github' ? s.selected : s.transparent_border}
                onClick={() => updateCurrent('github')}
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}