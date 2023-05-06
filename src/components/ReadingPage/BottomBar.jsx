import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faList, faComment } from '@fortawesome/free-solid-svg-icons'
import SettingModal from './SettingModal'
import ChapterListModal from './ChapterListModal'

export default function BottomBar() {
  return (
    <>
      <div className="btm-nav border-t border-t-primary hidden sm:hidden" id="btm-nav" >
        <label for="setting-modal">
          <button className="active">
            <label for="setting-modal">
              <FontAwesomeIcon icon={faGear} />
            </label>
          </button>
        </label>
        <label for="chapter-list-modal">
          <button>
            <label for="chapter-list-modal">
              <FontAwesomeIcon icon={faList} />
            </label>
          </button>
        </label>
        <a href="#comment">
          <FontAwesomeIcon icon={faComment} />
        </a>
      </div>
      <SettingModal />
      <ChapterListModal />
    </>
  )
}
