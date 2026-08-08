const sounds = {
  'hover': '/audio/sfx/hover.mp3',
  'click': '/audio/sfx/click.mp3',
}

export function playSound(soundName: keyof typeof sounds){
  const sfx = new Audio(sounds[soundName])

  sfx.currentTime = 0
  sfx.play()
}