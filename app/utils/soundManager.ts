const sounds = {
  // sound effects
  'hover': '/audio/sfx/hover.mp3',
  'click': '/audio/sfx/click.mp3'
}

export function playSound(soundName: keyof typeof sounds){
  const audio = new Audio(sounds[soundName])

  audio.currentTime = 0
  audio.play()
}