import React, { useState } from 'react'
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import LoaderEffect from '../../../global/components/headerLoader/loaderEffect'

export default function Header({ numberOfRenders }) {
  const ini = { pixels: '240px', degrees: '0deg' }
  const [pixels, setPixels] = useState(ini.pixels)
  const [degrees, setDegrees] = useState(ini.degrees)

  function expand() {
    if (pixels !== ini.pixels) {
      setPixels(ini.pixels)
      setDegrees(ini.degrees)
    }
    else {
      setPixels('0px')
      setDegrees('180deg')
    }
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
                ABOUT
              </p>
              <FontAwesomeIcon
                style={{
                  fontSize: '45px',
                  transition: '500ms',
                  transform: `rotate(${degrees})`
                }}
                icon={faAngleLeft}
                onClick={() => expand()}
              />
            </div>

            <div className={s.content_wrapper}>
              <p>
                I'm constantly building projects related to web development.
              </p>
              <p>
                Feel free to have a look around and check them out!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



