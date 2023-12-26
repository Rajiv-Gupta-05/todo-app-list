const ProgressBar = ({progress}) => {
  const colors = [
    'rgb(153, 0, 0)',
    'rgb(153, 76, 0)',
    'rgb(204, 204, 0)',
    'rgb(76, 153, 0)',
    'rgb(0, 51, 25)',
    'rgb(0, 153, 153)',
    'rgb(0, 51, 102)',
    'rgb(0, 0, 204)',
    'rgb(76, 0, 153)',
    'rgb(204, 0, 204)',
    'rgb(51, 0, 25)',
    'rgb(0, 0, 0)',
    'rgb(255, 20, 147)',
    'rgb(255, 140, 0)'
  ]
  const randomColors = colors[Math.floor(Math.random() * colors.length)]
  return (
    <div className="outer-bar">
      <div 
        className="inner-bar"
        style={{width:`${progress}%`, backgroundColor: randomColors}}
      ></div>
    </div>
  )
}

export default ProgressBar;
