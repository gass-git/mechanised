import React, { useContext } from 'react'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import { AppContext } from '../../../App'
import s from './pinned.module.css'


export default function Pinned({ src, data, images }) {
  const { dispatch } = useContext(AppContext)

  return (
    <section id={s.pinned_project} key={data.id} data-aos='fade' data-aos-duration='500'>
      <div className={s.top}>

        <div className={s.left}>
          <Folder className={s.folder} />
          <div className={s.project_name}>
            {data.name}
          </div>

        </div>

        <div className={s.middle}>
          <div className={s.movable_text}>
            <div style={{ marginTop: '9px' }}>
              See Live
            </div>

          </div>
        </div>

        <div className={s.right}>
          <FontAwesomeIcon
            icon={faImages}
            style={{ fontSize: '35px', margin: '0px 20px 0px 7px' }}
            onClick={() => dispatch({ type: 'show modal', data: data, images: images })}
          />
          <Github
            onClick={() => window.open(data.repo_url, 'blank')}
          />
        </div>

      </div>

      <div
        className={s.preview}
        onClick={() => window.open(data.project_url, 'blank')}
      >
        <div className={s.image_wrapper}>
          <img src={src} alt='preview' />
        </div>

        <div className={s.about}>
          {data.about}
        </div>

        <div className={s.tech}>
          {
            data['topics'].map((tech) => {
              return <div key={tech}>{tech}</div>
            })
          }
        </div>

      </div>

    </section>
  )
}
