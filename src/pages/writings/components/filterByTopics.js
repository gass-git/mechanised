import React from 'react'
import s from './filterByTopics.module.css'

export default function FilterByTopics({ tags, handleSelected, selected }) {
  return (
    <section id={s.filterByTopic}>
      {
        tags.map((tag) => {
          return (
            <div
              key={tag}
              className={selected.includes(tag) ? s.selected : null}
              onClick={() => handleSelected(tag)}>
              {tag}
            </div>
          )
        })
      }
    </section>
  )
}
