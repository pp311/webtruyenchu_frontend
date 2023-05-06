import { React, useContext, useState, useEffect } from 'react'
import { useReadingPageStore } from '../../hooks/useStore.jsx'
import { shallow } from 'zustand/shallow'
export default function SettingModal() {
  const { readingConfig, fontFamilyHandler, fontSizeHandler, lineHeightHandler, themeHandler } =
    useReadingPageStore(state => ({
      readingConfig: {
        fontFamily: state.fontFamily,
        fontSize: state.fontSize,
        lineHeight: state.lineHeight,
        backgroundColor: state.backgroundColor,
        textColor: state.textColor
      },
      fontFamilyHandler: state.setFontFamily,
      fontSizeHandler: state.setFontSize,
      lineHeightHandler: state.setLineHeight,
      themeHandler: state.setTheme
    }), shallow)
  const fontOptions = {
    'Roboto': 'font-sans',
    'Rubik': 'font-rubik',
    'Montserrat': 'font-montserrat',
    'Quicksand': 'font-quicksand',
    'Bitter': 'font-bitter',
    'Roboto Slab': 'font-robotoslab',
    'Literata': 'font-literata',
  }
  const sizeOptions = ['text-[16px]', 'text-[18px]', 'text-[20px]', 'text-[22px]', 'text-[24px]', 'text-[26px]', 'text-[28px]', 'text-[30px]', 'text-[32px]', 'text-[34px]', 'text-[36px]']
  const [fontSizeLevel, setFontSizeLevel] = useState(2)

  const [lineHeightLevel, setLineHeightLevel] = useState(2)
  const lineOptions = ['leading-5', 'leading-6', 'leading-7', 'leading-8', 'leading-9', 'leading-10']

  useEffect(() => {
    let fontSize = readingConfig.fontSize.match(/\d+/)[0]
    setFontSizeLevel(parseInt(fontSize / 2 - 8))
    let lineHeight = readingConfig.lineHeight.match(/\d+/)[0]
    setLineHeightLevel(lineHeight - 5)
  }, [readingConfig])

  return (
    <>
      {/* Setting Modal */}
      < input type="checkbox" id="setting-modal" className="modal-toggle" />
      <label className="modal modal-bottom sm:modal-middle sm:mb-0 mb-16 " htmlFor="setting-modal">
        <label className="modal-box relative px-4 text-lg font-bold">
          {/* Theme */}
          <div className="flex space-x-2 justify-center xs:space-x-6">
            <button className="w-12 h-12 bg-base-100 rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-base-100', textColor: 'text-base-content' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-content">Aa</span>
            </button>
            <button className="w-12 h-12 bg-black rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-black', textColor: 'text-white' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Aa</span>
            </button>
            <button className="w-12 h-12 bg-white rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-white', textColor: 'text-black' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">Aa</span>
            </button>
            <button className="w-12 h-12 bg-gray-200 rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-gray-200', textColor: 'text-base-content' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800">Aa</span>
            </button>
            <button className="w-12 h-12 bg-green-100 rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-green-100', textColor: 'text-gray-800' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800">Aa</span>
            </button>
            <button className="w-12 h-12 bg-red-100 rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-red-100', textColor: 'text-gray-800' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800">Aa</span>
            </button>
            <button className="w-12 h-12 bg-blue-100 rounded-full relative border-primary border"
              onClick={() => themeHandler({ backgroundColor: 'bg-blue-100', textColor: 'text-gray-800' })}>
              <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800">Aa</span>
            </button>
          </div>
          {/* Font family */}
          <div className="flex items-center justify-between mt-6">
            <h3>Font:</h3>
            <select className="select w-56 select-sm select-primary outline-0 focus:outline-0 basis-3/5"
              onChange={choice => fontFamilyHandler(choice.target.value)}>
              {Object.entries(fontOptions).map((opt, i) =>
                <option value={opt[1]} key={i}>{opt[0]}</option>
              )}
            </select>
          </div>
          {/* Font size */}
          <div className="flex text-lg justify-between items-center mt-6">
            <h3>Cỡ chữ:</h3>
            <div className="flex w-56 justify-between items-center basis-3/5">
              <button type="button" className={`btn btn-outline w-12 rounded-full relative ${fontSizeLevel == sizeOptions.length - 1 ? 'btn-disabled' : ''}`}
                onClick={() => fontSizeHandler(sizeOptions[fontSizeLevel + 1])}>
                <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">+</span>
              </button>
              <span className="mx-4">{sizeOptions[fontSizeLevel].match(/\d+/)[0]}px</span>
              <button type="button" className={`btn btn-outline w-12 rounded-full relative ${fontSizeLevel == 0 ? 'btn-disabled' : ''}`}
                onClick={() => fontSizeHandler(sizeOptions[fontSizeLevel - 1])}>
                <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">-</span>
              </button>
            </div>
          </div>
          {/* Line spacing */}
          <div className="flex justify-between items-center mt-6">
            <h3>Giãn dòng:</h3>
            <div className="flex w-56 justify-between items-center basis-3/5">
              <button type="button" className={`btn btn-outline w-12 rounded-full relative ${lineHeightLevel == lineOptions.length - 1 ? 'btn-disabled' : ''}`}
                onClick={() => lineHeightHandler(lineOptions[lineHeightLevel + 1])}>
                <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">+</span>
              </button>
              <span className="mx-4">{lineHeightLevel * 4 + 20}px</span>
              <button type="button" className={`btn btn-outline w-12 rounded-full relative ${lineHeightLevel == 0 ? 'btn-disabled' : ''}`}
                onClick={() => lineHeightHandler(lineOptions[lineHeightLevel - 1])}>
                <span className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">-</span>
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  )
}
