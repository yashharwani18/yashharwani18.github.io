import { Howl } from 'howler';

class AudioEngine {
  private sounds: Record<string, Howl> = {};
  private initialized: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.sounds = {
        hover: new Howl({
          src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'],
          volume: 0.2,
          preload: false,
        }),
        click: new Howl({
          src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'],
          volume: 0.4,
          preload: false,
        }),
        reveal: new Howl({
          src: ['https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3'],
          volume: 0.15,
          preload: false,
        }),
        background: new Howl({
          src: ['https://www.chosic.com/wp-content/uploads/2021/07/Slow-Atmospheric-Ambient-Background.mp3'],
          volume: 0.1,
          loop: true,
          preload: false,
          autoplay: false,
        }),
      };
    }
  }

  public play(soundName: 'hover' | 'click' | 'reveal' | 'background') {
    try {
      const sound = this.sounds[soundName];
      if (!sound) return;

      if (sound.state() === 'unloaded') {
        sound.load();
      }

      sound.play();
    } catch (error) {
      console.error(`Failed to play sound: ${soundName}`, error);
    }
  }

  public stop(soundName: string) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].stop();
    }
  }

  public init() {
    if (this.initialized) return;

    try {
      this.play('background');
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize background audio', error);
    }
  }
}

export const audioEngine = new AudioEngine();
