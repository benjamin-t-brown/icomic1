'use strict';

(function () {
  const utils = {
    normalize: function (x, A, B, C, D) {
      return C + ((x - A) * (D - C)) / (B - A);
    },
  };

  window.scrollTo(0, 1);
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let canvas2 = document.getElementById('canvas2');
  let ctx2 = canvas2.getContext('2d');

  let measure_text = function ({ text, font }) {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'hanging';
    ctx.font = font || '16px monospace';
    var width = ctx.measureText(text).width;
    var height = 16;
    return {
      width,
      height,
    };
  };

  let wrap_text = function ({ text, font, maxWidth, lineHeight }) {
    var ret = [];
    var split_text = text.split(' ');
    var t = measure_text({
      text: text,
      font: font,
    });
    lineHeight = lineHeight || t.height;
    var current_text = '';
    while (split_text.length) {
      var next_text = split_text.shift();
      var check_text = current_text + (current_text ? ' ' : '') + next_text;
      var t = measure_text({
        text: check_text,
        font: font,
      });
      if (t.width > maxWidth) {
        ret.push(current_text);
        current_text = next_text;
      } else {
        current_text = check_text;
      }
    }
    if (current_text) {
      ret.push(current_text);
    }
    return {
      lines: ret,
      width: maxWidth,
      height: ret.length * lineHeight,
    };
  };

  var _console_log = (text) => {
    console.log(text);
    //expose.get_state( 'player-area' ).add_line( text || '' );
  };

  class KeyCatcher {
    constructor() {
      this.disabled = false;
      this.cb = () => {};

      this.on_keypress = (ev) => {
				if (ev?.target?.id === 'soundimg') {
					return;
				}
        if (this.disabled) {
          return;
        }
        this.cb(String.fromCharCode(ev.which || ev._which));
        ev.preventDefault();
      };

      window.addEventListener('keydown', this.on_keypress);
      window.addEventListener('mousedown', this.on_keypress);
      window.addEventListener('touchend', (ev) => {
        this.on_keypress({
          _which: ev.target.name,
          preventDefault: () => {},
        });
      });
      window.addEventListener('touchstart', (ev) => {
        if (canvas.onclick) {
          canvas.onclick(ev);
        }
        if (this.disabled) {
          ev.preventDefault();
        }
      });
    }

    setKeypressEvent(cb) {
      this.cb = cb;
    }

    disable() {
      this.disabled = true;
    }

    enable() {
      this.disabled = false;
    }
  }

  var disable_next_say_wait = false;
  var last_choose_node_id = null;
  var last_choose_nodes_selected = [];

  class Core {
    constructor() {
      this.catcher = new KeyCatcher();
    }

    init() {
      disable_next_say_wait = false;
      last_choose_node_id = null;
      last_choose_nodes_selected = [];
    }

    drawText(text) {
      clearInterval(this.intervalID);
      let max = 10;
      let ctr = 0;
      this.intervalID = setInterval(() => {
        const font = '16px monospace';
        let obj = wrap_text({
          text: text,
          font,
          maxWidth: 380,
          lineHeight: 2,
        });
        ctx2.fillStyle = 'black';
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
        ctx2.globalAlpha = ctr / max;
        if (ctr >= max) {
          ctx2.globalAlpha = 1;
        }
        for (let i = 0; i < obj.lines.length; i++) {
          let line = obj.lines[i];
          let x = 10;

          const speakerMatch = line.match(/^(.*):/);

          if (i === 0 && speakerMatch) {
            const name = speakerMatch[0];

            ctx2.fillStyle = 'grey';
            ctx2.font = font;
            ctx2.fillText(name, x, 20 + i * 18);

            const t = measure_text({
              text: name,
              font: font,
            });
            line = line.slice(name.length);
            x += t.width;
          }

          ctx2.fillStyle = 'white';
          ctx2.font = font;
          ctx2.fillText(line, x, 20 + i * 18);
        }
        ctr++;
      }, 33);
    }

    say(text, cb) {
      if (typeof text === 'object') {
        if (text.length === 1) {
          _console_log(text);
        } else {
          window.core.say(text[0], () => {
            window.core.say(text.slice(1), cb);
          });
          return;
        }
      } else {
        if (text.length <= 1) {
          return cb();
        } else {
          window.container.style.height = '128px';
          this.drawText(text);
          _console_log(text);
        }
      }

      if (disable_next_say_wait) {
        setTimeout(() => {
          cb();
        }, 1);
        return;
      }
      _console_log();

      this.catcher.setKeypressEvent(() => {
        cb();
      });

      this.catcher.disable();
      setTimeout(() => {
        this.catcher.enable();
      }, 100);
    }

    choose(text, node_id, choices) {
      if (text) {
        _console_log(text);
        _console_log();
        this.drawText(text);
      }
      _console_log('---------');
      let actual_choices = choices.filter((choice) => {
        if (choice.condition()) {
          return true;
        } else {
          return false;
        }
      });
      if (last_choose_node_id === node_id) {
        // actual_choices = actual_choices.filter( ( choice ) => {
        // 	return last_choose_nodes_selected.indexOf( choice.text ) === -1;
        // } );
      } else {
        last_choose_node_id = node_id;
        last_choose_nodes_selected = [];
      }

      window.button_event = (key) => {
        if (this.catcher.disabled) {
          return;
        }
        let choice = actual_choices[key - 1];
        if (choice) {
          document.getElementById('buttons').innerHTML = '';
          last_choose_nodes_selected.push(choice.text);
          this.catcher.setKeypressEvent(() => {});
          disable_next_say_wait = true;
          choice.cb();
          _console_log();
          disable_next_say_wait = false;
        }
      };

      this.catcher.disable();

      let ctr = 1;
      let buttons = [];
      window.container.style.height = '60px';
      actual_choices.forEach((choice) => {
        _console_log('  ' + ctr + '.) ' + choice.text);
        let a =
          '<div name="' +
          ctr +
          '" class="noselect">' +
          ctr +
          '.) ' +
          choice.text +
          '</div>';
        buttons.push(
          '<button onclick="button_event(' + ctr + ')">' + a + '</button><br/>'
        );
        ctr++;
      });
      _console_log('---------');

      this.catcher.setKeypressEvent(window.button_event);

      setTimeout(() => {
        document.getElementById('buttons').innerHTML = buttons.join('\n');
      }, 500);
      setTimeout(() => {
        this.catcher.enable();
      }, 1000);
    }

    picture() {
      //exports._scene.setBackground( picture_name );
      //expose.get_state( 'picture' ).setPicture( picture_name );
    }

    exit() {
      console.log('BYE!');
    }
  }

  class Player {
    constructor() {
      this.state = {
        inventory: [],
        booleans: {},
        combat: {},
      };
      this.name = 'default';
    }

    init() {
      this.state = {
        inventory: [],
      };
    }

    print() {
      _console_log(this.state);
    }

    get(path) {
      let _helper = (paths, obj) => {
        let k = paths.shift();
        if (!paths.length) {
          return obj[k] === undefined ? null : obj[k];
        }

        let next_obj = obj[k];
        if (next_obj !== undefined) {
          return _helper(paths, next_obj);
        } else {
          return null;
        }
      };

      return _helper(path.split('.'), this.state);
    }

    set(path, val) {
      val = val === undefined ? true : val;
      let _helper = (keys, obj) => {
        let k = keys.shift();
        if (k === undefined) {
          return;
        }
        if (!keys.length) {
          obj[k] = val;
          return;
        }

        if (!obj[k]) {
          obj[k] = {};
        }
        _helper(keys, obj[k]);
      };

      _helper(path.split('.'), this.state);
    }

    setIfUnset(path, val) {
      if (this.get(path) === null) {
        this.set(path, val);
      }
    }

    compare(str1, str2, key1, key2) {
      let a = this.get(key1);
      let b = this.get(key2);
      let ret = (a === str1 && b === str2) || (a === str2 && b === str1);
      return ret;
    }

    hasItem(name) {
      return this.state.inventory.indexOf(name) > -1;
    }
    addItem(name) {
      if (name) {
        this.state.inventory.push(name);
      }
    }
    removeItem(name) {
      var ind = this.state.inventory.indexOf(name);
      if (ind > -1) {
        this.state.inventory.splice(ind, 1);
      }
    }
  }

  class Transition {
    constructor(frames, fade_in, cb) {
      this.frame = 0;
      this.max_frame = frames;
      this.opacity = 1;
      this.fade_in = fade_in;
      this.cb = cb;
    }

    update() {
      if (this.fade_in) {
        this.opacity = this.frame / this.max_frame + 0.1;
      } else {
        this.opacity = 1 - this.frame / this.max_frame + 0.1;
      }
      this.frame++;
    }

    isDone() {
      return this.frame >= this.max_frame;
    }

    apply(ctx) {
      ctx.globalAlpha = this.opacity;
    }

    unapply(ctx) {
      ctx.globalAlpha = 1.0;
    }
  }

  class Animation {
    constructor(name, loop) {
      this.name = name;
      this.loop = loop || false;
      this.sprites = [];

      this.current_frame = 0;
      this.current_max_frames = 0;
      this.current_sprite_index = 0;
    }

    addSprite(name, nframes) {
      this.sprites.push({
        max_frames: nframes,
        name: name,
      });
      if (this.sprites.length === 1) {
        this.current_max_frames = nframes;
      }
    }

    update() {
      this.current_frame++;
      if (this.current_frame >= this.current_max_frames) {
        this.current_sprite_index++;
        if (this.current_sprite_index >= this.sprites.length) {
          if (this.loop) {
            this.current_sprite_index = 0;
          } else {
            this.current_sprite_index--;
          }
        }
        this.current_frame = 0;
        this.current_max_frames =
          this.sprites[this.current_sprite_index].max_frames;
      }
    }

    getSprite() {
      return this.sprites[this.current_sprite_index].name;
    }
  }

  class Sprite {
    constructor(img_name, clip_x, clip_y, clip_w, clip_h) {
      this.img = img_name;
      this.clip_x = clip_x;
      this.clip_y = clip_y;
      this.clip_w = clip_w;
      this.clip_h = clip_h;
    }
  }

  class Scene {
    constructor() {
      this.running = false;
      this.fps = 30;
      this.actors = {};
      this.actor_list = [];
      this.pictures = {};
      this.sprites = {};
      this.sounds = {};
      this.animations = {};
      this.canvas_id = '';
      this.canvas = null;
      this.ctx = null;
      this.ctr = 0;
      this.is_sound_enabled = false;

      window.createjs.Sound.alternateExtensions = ['ogg', 'aac'];
    }
    loadSounds(cb) {
      if (!window.createjs.Sound.initializeDefaultPlugins()) {
        console.error('Could not load sounds.');
        this.is_sound_enabled = false;
        return;
      }

      let sounds = [
        {
          id: 'bgm1',
          src: 'bgm1.mp3',
        },
        {
          id: 'bgm2',
          src: 'bgm2.mp3',
        },
        {
          id: 'bgm3',
          src: 'bgm3.mp3',
        },
        {
          id: 'bwow',
          src: 'bwow.mp3',
        },
      ];

      let ctr = 0;
      window.createjs.Sound.on('fileload', (event) => {
        ctr++;
        let ins = (this.sounds[event.id] = window.createjs.Sound.play(
          event.id
        ));
        ins.on('complete', () => {
          ins.stop();
          ins.play();
        });
        ins.volume = 1;
        ins.stop();
        console.log('Loaded sound', event.src);
        if (ctr >= sounds.length) {
          cb(null);
        }
      });
      window.createjs.Sound.registerSounds(sounds, 'assets/snd/');
    }
    playSound(name, fade) {
      let max_volume = 1;
      if (!this.is_sound_enabled) {
        max_volume = 0;
      }
      const snd = this.sounds[name];
      if (snd) {
        if (snd.isplaying) {
          return;
        }
        if (fade) {
          let ctr = 0;
          let max = 50;
          setTimeout(
            function a() {
              if (ctr >= max) {
                this.setVolume(name, max_volume);
                snd.isplaying = true;
                snd.play();
                return;
              }

              this.setVolume(name, utils.normalize(ctr, 0, max, 0, max_volume));

              ctr++;
              setTimeout(a.bind(this), 2000 / max);
            }.bind(this),
            2000 / max
          );
        }
        this.setVolume(name, 1);
        snd.isplaying = true;
        snd.play();
      } else {
        console.error('No sound is named', name);
      }
    }
    stopSound(name, fade) {
      let max_volume = 1;
      if (!name) {
        for (let i in this.sounds) {
          this.sounds[i].stop();
        }
        return;
      }

      if (!this.is_sound_enabled) {
        max_volume = 0;
      }
      const snd = this.sounds[name];
      if (this.sounds[name]) {
        if (fade) {
          let ctr = 0;
          let max = 50;
          setTimeout(
            function a() {
              if (ctr >= max) {
                snd.isplaying = false;
                snd.stop();
                return;
              }

              this.setVolume(
                name,
                max_volume - utils.normalize(ctr, 0, max, 0, max_volume)
              );

              ctr++;
              setTimeout(a.bind(this), 2000 / max);
            }.bind(this),
            2000 / max
          );
        } else {
          snd.isplaying = false;
          snd.stop();
        }
      } else {
        console.error('No sound is named', name);
      }
    }
    setVolume(name, v) {
      if (!this.is_sound_enabled) {
        return;
      }
      const snd = this.sounds[name];
      if (snd) {
        //snd.pause();
        snd.volume = v;
        //snd.play();
      }
    }

    loadSprite(name, pic, x, y, w, h) {
      this.sprites[name] = new Sprite(pic, x, y, w, h);
    }
    loadPicture(name, url, cb, anim) {
      if (this.pictures[name]) {
        return;
      }
      this.num_loading++;
      var img = new Image();
      this.pictures[name] = false;
      img.onload = () => {
        this.num_loaded++;
        this.pictures[name] = img;
        this.sprites[name] = new Sprite(name, 0, 0, img.width, img.height);
        if (anim) {
          this.createAnimationFromPicture(name);
        }
        cb(name);
      };
      img.src = url;
    }
    createAnimation(name, cb) {
      this.animations[name] = cb;
    }
    createAnimationFromPicture(name) {
      this.createAnimation(name, () => {
        let a = new Animation(name, false);
        a.addSprite(name, 1);
        return a;
      });
    }
    loadAnimations() {
      this.createAnimation('conscience_bg', () => {
        let a = new Animation('conscience_bg', true);
        a.addSprite('Conscience_bg1', 10);
        a.addSprite('Conscience_bg2', 10);
        a.addSprite('Conscience_bg3', 10);
        a.addSprite('Conscience_bg4', 10);
        a.addSprite('Conscience_bg5', 10);
        return a;
      });

      this.createAnimation('Conscience_entrance', () => {
        let a = new Animation('Conscience_entrance', false);
        a.addSprite('Conscience_entrance1', 4);
        a.addSprite('Conscience_entrance2', 4);
        a.addSprite('Conscience_entrance3', 4);
        a.addSprite('Conscience_entrance4', 4);
        a.addSprite('Conscience_entrance5', 4);
        a.addSprite('Conscience_entrance6', 4);
        return a;
      });

      this.createAnimation('Ada_actor_idle1', () => {
        let a = new Animation('Ada_actor_idle1', true);
        a.addSprite('Ada_actor_idle1_1', 30 * 1);
        a.addSprite('Ada_actor_idle1_2', 4);
        a.addSprite('Ada_actor_idle1_3', 4);
        a.addSprite('Ada_actor_idle1_4', 30 * 1);
        a.addSprite('Ada_actor_idle1_5', 6);
        return a;
      });

      this.createAnimation('Ada_actor_idle2', () => {
        let a = new Animation('Ada_actor_idle2', true);
        a.addSprite('Ada_actor_idle2_1', 30 * 1);
        a.addSprite('Ada_actor_idle2_2', 4);
        a.addSprite('Ada_actor_idle2_3', 30 * 1);
        a.addSprite('Ada_actor_idle2_2', 4);
        return a;
      });

      this.createAnimation('Ada_actor_idle3', () => {
        let a = new Animation('Ada_actor_idle3', true);
        a.addSprite('Ada_actor_idle3_1', 30 * 4);
        a.addSprite('Ada_actor_idle3_2', 4);
        a.addSprite('Ada_actor_idle3_3', 4);
        a.addSprite('Ada_actor_idle3_4', 4);
        a.addSprite('Ada_actor_idle3_5', 4);
        a.addSprite('Ada_actor_idle3_4', 4);
        a.addSprite('Ada_actor_idle3_5', 4);
        a.addSprite('Ada_actor_idle3_4', 4);
        a.addSprite('Ada_actor_idle3_5', 4);
        a.addSprite('Ada_actor_idle3_4', 4);
        a.addSprite('Ada_actor_idle3_3', 4);
        a.addSprite('Ada_actor_idle3_2', 4);
        return a;
      });

      this.createAnimation('Ada_moving_chair', () => {
        let a = new Animation('Ada_moving_chair', false);
        for (let i = 0; i < 23; i++) {
          a.addSprite('Ada_moving_chair_' + (i + 1), 4);
        }
        return a;
      });

      this.createAnimation('Ada_moving_chair2', () => {
        let a = new Animation('Ada_moving_chair2', false);
        for (let i = 0; i < 23; i++) {
          a.addSprite('Ada_moving_chair2_' + (i + 1), 4);
        }
        return a;
      });

      this.createAnimation('Jonathan_actor_idle1', () => {
        let a = new Animation('Jonathan_actor_idle1', true);
        a.addSprite('Jonathan_actor_idle1_1', 30 * 2);
        a.addSprite('Jonathan_actor_idle1_2', 4);
        a.addSprite('Jonathan_actor_idle1_3', 4);
        a.addSprite('Jonathan_actor_idle1_4', 4);
        a.addSprite('Jonathan_actor_idle1_3', 4);
        a.addSprite('Jonathan_actor_idle1_4', 4);
        a.addSprite('Jonathan_actor_idle1_3', 4);
        a.addSprite('Jonathan_actor_idle1_4', 4);
        a.addSprite('Jonathan_actor_idle1_3', 4);
        a.addSprite('Jonathan_actor_idle1_2', 4);
        return a;
      });

      this.createAnimation('Ralgo_actor_idle1', () => {
        let a = new Animation('Ralgo_actor_idle1', true);
        a.addSprite('Ralgo_actor_idle1_1', 45);
        a.addSprite('Ralgo_actor_idle1_2', 4);
        a.addSprite('Ralgo_actor_idle1_1', 4);
        a.addSprite('Ralgo_actor_idle1_2', 4);
        a.addSprite('Ralgo_actor_idle1_1', 4);
        a.addSprite('Ralgo_actor_idle1_2', 4);
        return a;
      });

      this.createAnimation('Girls_actor_talking', () => {
        let a = new Animation('Girls_actor_talking', true);
        a.addSprite('Girls_talking_1', 4);
        a.addSprite('Girls_talking_2', 4);
        a.addSprite('Girls_talking_3', 4);
        a.addSprite('Girls_talking_4', 8);
        a.addSprite('Girls_talking_3', 4);
        a.addSprite('Girls_talking_2', 4);
        a.addSprite('Girls_talking_1', 4);
        a.addSprite('Girls_talking_5', 4);
        a.addSprite('Girls_talking_6', 4);
        a.addSprite('Girls_talking_7', 4);
        a.addSprite('Girls_talking_8', 4);
        a.addSprite('Girls_talking_5', 4);
        a.addSprite('Girls_talking_6', 4);
        return a;
      });

      this.createAnimation('Bwow', () => {
        let a = new Animation('Bwow', true);
        a.addSprite('BWOW1_1', 2);
        a.addSprite('BWOW1_2', 2);
        a.addSprite('BWOW1_3', 2);
        a.addSprite('BWOW1_4', 2);
        a.addSprite('BWOW1_5', 2);
        a.addSprite('BWOW1_6', 2);
        a.addSprite('BWOW1_7', 2);
        a.addSprite('BWOW1_8', 2);
        a.addSprite('BWOW2_1', 2);
        a.addSprite('BWOW2_2', 2);
        a.addSprite('BWOW2_3', 2);
        a.addSprite('BWOW2_4', 2);
        a.addSprite('BWOW2_5', 2);
        a.addSprite('BWOW2_6', 2);
        a.addSprite('BWOW2_7', 2);
        a.addSprite('BWOW2_8', 2);
        return a;
      });

      this.createAnimation('Clock', () => {
        let a = new Animation('Clock', true);
        a.addSprite('clock1', 30);
        a.addSprite('clock2', 30);
        a.addSprite('clock3', 30);
        a.addSprite('clock4', 30);
        a.addSprite('clock5', 30);
        a.addSprite('clock6', 30);
        a.addSprite('clock7', 30);
        a.addSprite('clock8', 30);
        a.addSprite('clock9', 30);
        a.addSprite('clock10', 30);
        a.addSprite('clock11', 30);
        a.addSprite('clock12', 30);
        a.addSprite('clock13', 30);
        a.addSprite('clock14', 30);
        a.addSprite('clock15', 30);
        return a;
      });

      this.createAnimation('Otis_sleeping', () => {
        let a = new Animation('Otis_sleeping', true);
        a.addSprite('Otis_sleeping1', 30 * 1);
        a.addSprite('Otis_sleeping2', 4);
        a.addSprite('Otis_sleeping3', 30 * 1);
        a.addSprite('Otis_sleeping2', 4);
        return a;
      });

      this.createAnimation('AVCloset_door', () => {
        let a = new Animation('AVCloset_door', false);
        a.addSprite('AVCloset_door_closed', 15);
        a.addSprite('AVCloset_door_open', 30);
        return a;
      });

      this.createAnimation('Classroom3_shelf_books', () => {
        let a = new Animation('Classroom3_shelf_books', true);
        a.addSprite('Classroom3_shelf_books_1', 30);
        a.addSprite('Classroom3_shelf_books_2', 7);
        a.addSprite('Classroom3_shelf_books_3', 30);
        a.addSprite('Classroom3_shelf_books_2', 7);
        return a;
      });

      this.createAnimation('Ada_actor_pull_book', () => {
        let a = new Animation('Ada_actor_pull_book', false);
        for (let i = 0; i < 10; i++) {
          a.addSprite('Ada_actor_pull_book_' + (i + 1), 4);
        }
        return a;
      });

      this.createAnimation('Open_Window', () => {
        let a = new Animation('Open_Window', false);
        a.addSprite('invisible', 15);
        a.addSprite('Blue', 30);
        return a;
      });
    }
    isLoaded() {
      for (let i in this.pictures) {
        if (this.pictures[i] === false) {
          return false;
        }
      }
      return !!(
        Object.keys(this.pictures).length && Object.keys(this.sounds).length
      );
    }
    load(canvas_id, cb) {
      if (canvas_id) {
        if (this.isLoaded()) {
          cb();
          return;
        }

        this.canvas = document.getElementById(canvas_id);
        this.ctx = this.canvas.getContext('2d');
        this.drawLoading();

        let on_pic = (p) => {
          console.log('Loaded picture:', p);
          if (this.isLoaded()) {
            console.log('Done loading!');
            this.loop();
            cb();
          }
        };
        this.loadSounds(() => {
          console.log('Sounds loaded.');
          if (this.isLoaded()) {
            console.log('Done loading!');
            this.loop();
            cb();
          }
        });
        this.loadAnimations();

        this.loadPicture(
          'invisible',
          'assets/img/Comic1/invisible.png',
          on_pic,
          true
        );
        this.loadPicture(
          'default',
          'assets/img/Comic1/default.png',
          on_pic,
          true
        );
        this.loadPicture(
          'default-bg',
          'assets/img/Comic1/default-bg.png',
          on_pic
        );
        this.loadPicture(
          'ConscienceBG',
          'assets/img/Comic1/conscience-bg.png',
          on_pic
        );

        this.loadPicture(
          'Conscience_bg1',
          'assets/img/Comic1/conscience-bg1.png',
          on_pic
        );
        this.loadPicture(
          'Conscience_bg2',
          'assets/img/Comic1/conscience-bg2.png',
          on_pic
        );
        this.loadPicture(
          'Conscience_bg3',
          'assets/img/Comic1/conscience-bg3.png',
          on_pic
        );
        this.loadPicture(
          'Conscience_bg4',
          'assets/img/Comic1/conscience-bg4.png',
          on_pic
        );
        this.loadPicture(
          'Conscience_bg5',
          'assets/img/Comic1/conscience-bg5.png',
          on_pic
        );

        this.loadPicture(
          'Conscience_normal',
          'assets/img/Comic1/Conscience_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Conscience_frowning',
          'assets/img/Comic1/Conscience_frowning.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Conscience_sad',
          'assets/img/Comic1/Conscience_sad.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Conscience_smiling',
          'assets/img/Comic1/Conscience_smiling.png',
          on_pic,
          true
        );

        this.loadPicture(
          'Conscience_entrance',
          'assets/img/Comic1/Conscience_entrance.png',
          on_pic
        );
        this.loadSprite(
          'Conscience_entrance1',
          'Conscience_entrance',
          200 * 0,
          0,
          200,
          200
        );
        this.loadSprite(
          'Conscience_entrance2',
          'Conscience_entrance',
          200 * 1,
          0,
          200,
          200
        );
        this.loadSprite(
          'Conscience_entrance3',
          'Conscience_entrance',
          200 * 2,
          0,
          200,
          200
        );
        this.loadSprite(
          'Conscience_entrance4',
          'Conscience_entrance',
          200 * 3,
          0,
          200,
          200
        );
        this.loadSprite(
          'Conscience_entrance5',
          'Conscience_entrance',
          200 * 4,
          0,
          200,
          200
        );
        this.loadSprite(
          'Conscience_entrance6',
          'Conscience_entrance',
          200 * 5,
          0,
          200,
          200
        );

        this.loadPicture(
          'black-bar',
          'assets/img/Comic1/black-bar.png',
          on_pic,
          true
        );
        this.loadPicture(
          'black-bar-left',
          'assets/img/Comic1/black-bar-left.png',
          on_pic,
          true
        );
        this.loadPicture(
          'black-bar-right',
          'assets/img/Comic1/black-bar-right.png',
          on_pic,
          true
        );
        this.loadPicture(
          'black-screen',
          'assets/img/Comic1/black-screen.png',
          on_pic,
          true
        );

        this.loadPicture(
          'Ada_actor_idle1',
          'assets/img/Comic1/Ada_actor_idle1.png',
          on_pic
        );
        this.loadSprite(
          'Ada_actor_idle1_1',
          'Ada_actor_idle1',
          125 * 0,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle1_2',
          'Ada_actor_idle1',
          125 * 1,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle1_3',
          'Ada_actor_idle1',
          125 * 2,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle1_4',
          'Ada_actor_idle1',
          125 * 3,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle1_5',
          'Ada_actor_idle1',
          125 * 4,
          0,
          125,
          125
        );

        this.loadPicture(
          'Ada_actor_idle2',
          'assets/img/Comic1/Ada_actor_idle2.png',
          on_pic
        );
        this.loadSprite(
          'Ada_actor_idle2_1',
          'Ada_actor_idle2',
          300 * 0,
          0,
          300,
          300
        );
        this.loadSprite(
          'Ada_actor_idle2_2',
          'Ada_actor_idle2',
          300 * 1,
          0,
          300,
          300
        );
        this.loadSprite(
          'Ada_actor_idle2_3',
          'Ada_actor_idle2',
          300 * 2,
          0,
          300,
          300
        );

        this.loadPicture(
          'Ada_actor_idle3',
          'assets/img/Comic1/Ada_actor_idle3.png',
          on_pic
        );
        this.loadSprite(
          'Ada_actor_idle3_1',
          'Ada_actor_idle3',
          125 * 0,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle3_2',
          'Ada_actor_idle3',
          125 * 1,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle3_3',
          'Ada_actor_idle3',
          125 * 2,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle3_4',
          'Ada_actor_idle3',
          125 * 3,
          0,
          125,
          125
        );
        this.loadSprite(
          'Ada_actor_idle3_5',
          'Ada_actor_idle3',
          125 * 4,
          0,
          125,
          125
        );

        this.loadPicture(
          'Ada_moving_chair',
          'assets/img/Comic1/Ada_moving_chair.png',
          on_pic
        );
        for (let i = 0; i < 23; i++) {
          this.loadSprite(
            'Ada_moving_chair_' + (i + 1),
            'Ada_moving_chair',
            400 * i,
            0,
            400,
            200
          );
        }

        this.loadPicture(
          'Ada_moving_chair2',
          'assets/img/Comic1/Ada_moving_chair2.png',
          on_pic
        );
        for (let i = 0; i < 23; i++) {
          this.loadSprite(
            'Ada_moving_chair2_' + (23 - i),
            'Ada_moving_chair2',
            400 * i,
            0,
            400,
            200
          );
        }

        this.loadPicture(
          'Ada_actor_pull_book',
          'assets/img/Comic1/Ada_actor_pull_book.png',
          on_pic
        );
        for (let i = 0; i < 10; i++) {
          this.loadSprite(
            'Ada_actor_pull_book_' + (i + 1),
            'Ada_actor_pull_book',
            194 * i,
            0,
            194,
            300
          );
        }

        this.loadPicture(
          'Jonathan_actor_idle1',
          'assets/img/Comic1/Jonathan_actor_idle1.png',
          on_pic
        );
        this.loadSprite(
          'Jonathan_actor_idle1_1',
          'Jonathan_actor_idle1',
          125 * 0,
          0,
          125,
          125
        );
        this.loadSprite(
          'Jonathan_actor_idle1_2',
          'Jonathan_actor_idle1',
          125 * 1,
          0,
          125,
          125
        );
        this.loadSprite(
          'Jonathan_actor_idle1_3',
          'Jonathan_actor_idle1',
          125 * 2,
          0,
          125,
          125
        );
        this.loadSprite(
          'Jonathan_actor_idle1_4',
          'Jonathan_actor_idle1',
          125 * 3,
          0,
          125,
          125
        );

        this.loadPicture(
          'Ralgo_actor_idle1',
          'assets/img/Comic1/Ralgo_actor_idle1.png',
          on_pic
        );
        this.loadSprite(
          'Ralgo_actor_idle1_1',
          'Ralgo_actor_idle1',
          125 * 0,
          0,
          125,
          200
        );
        this.loadSprite(
          'Ralgo_actor_idle1_2',
          'Ralgo_actor_idle1',
          125 * 1,
          0,
          125,
          200
        );

        this.loadPicture(
          'Otis_sleeping',
          'assets/img/Comic1/Otis_sleeping.png',
          on_pic
        );
        this.loadSprite(
          'Otis_sleeping1',
          'Otis_sleeping',
          220 * 0,
          0,
          220,
          100
        );
        this.loadSprite(
          'Otis_sleeping2',
          'Otis_sleeping',
          220 * 1,
          0,
          220,
          100
        );
        this.loadSprite(
          'Otis_sleeping3',
          'Otis_sleeping',
          220 * 2,
          0,
          220,
          100
        );

        this.loadPicture(
          'Ada_actor_door',
          'assets/img/Comic1/Ada_actor_door.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_struggle1',
          'assets/img/Comic1/Ada_actor_struggle1.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_struggle2',
          'assets/img/Comic1/Ada_actor_struggle2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_classroom1_right',
          'assets/img/Comic1/Ada_actor_classroom1_right.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_classroom1_up',
          'assets/img/Comic1/Ada_actor_classroom1_up.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_classroom1_left',
          'assets/img/Comic1/Ada_actor_classroom1_left.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_classroom1_leftup',
          'assets/img/Comic1/Ada_actor_leftup.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_avcloset',
          'assets/img/Comic1/Ada_actor_avcloset.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_avcloset2',
          'assets/img/Comic1/Ada_actor_avcloset2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_actor_reaching',
          'assets/img/Comic1/Ada_actor_reaching.png',
          on_pic,
          true
        );

        this.loadPicture(
          'Jonathan_actor_classroom2_idle',
          'assets/img/Comic1/Jonathan_actor_talking.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Jonathan_actor_lift',
          'assets/img/Comic1/John_actor1_lift.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Jonathan_actor_right',
          'assets/img/Comic1/John_actor1_right.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Jonathan_actor_down',
          'assets/img/Comic1/John_actor1.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ralgo_actor_classroom2_idle',
          'assets/img/Comic1/Ralgo_actor_classroom2_idle.png',
          on_pic,
          true
        );

        this.loadPicture('clock', 'assets/img/Comic1/clock.png', on_pic);
        this.loadSprite('clock1', 'clock', 46 * 0, 0, 46, 46);
        this.loadSprite('clock2', 'clock', 46 * 1, 0, 46, 46);
        this.loadSprite('clock3', 'clock', 46 * 2, 0, 46, 46);
        this.loadSprite('clock4', 'clock', 46 * 3, 0, 46, 46);
        this.loadSprite('clock5', 'clock', 46 * 4, 0, 46, 46);
        this.loadSprite('clock6', 'clock', 46 * 5, 0, 46, 46);
        this.loadSprite('clock7', 'clock', 46 * 6, 0, 46, 46);
        this.loadSprite('clock8', 'clock', 46 * 7, 0, 46, 46);
        this.loadSprite('clock9', 'clock', 46 * 8, 0, 46, 46);
        this.loadSprite('clock10', 'clock', 46 * 9, 0, 46, 46);
        this.loadSprite('clock11', 'clock', 46 * 10, 0, 46, 46);
        this.loadSprite('clock12', 'clock', 46 * 11, 0, 46, 46);
        this.loadSprite('clock13', 'clock', 46 * 12, 0, 46, 46);
        this.loadSprite('clock14', 'clock', 46 * 13, 0, 46, 46);
        this.loadSprite('clock15', 'clock', 46 * 14, 0, 46, 46);

        this.loadPicture('BWOW1', 'assets/img/Comic1/bwow1.png', on_pic);
        this.loadSprite('BWOW1_1', 'BWOW1', 400 * 0, 0, 400, 400);
        this.loadSprite('BWOW1_2', 'BWOW1', 400 * 1, 0, 400, 400);
        this.loadSprite('BWOW1_3', 'BWOW1', 400 * 2, 0, 400, 400);
        this.loadSprite('BWOW1_4', 'BWOW1', 400 * 3, 0, 400, 400);
        this.loadSprite('BWOW1_5', 'BWOW1', 400 * 4, 0, 400, 400);
        this.loadSprite('BWOW1_6', 'BWOW1', 400 * 5, 0, 400, 400);
        this.loadSprite('BWOW1_7', 'BWOW1', 400 * 6, 0, 400, 400);
        this.loadSprite('BWOW1_8', 'BWOW1', 400 * 7, 0, 400, 400);

        this.loadPicture('BWOW2', 'assets/img/Comic1/bwow2.png', on_pic);
        this.loadSprite('BWOW2_1', 'BWOW2', 400 * 0, 0, 400, 400);
        this.loadSprite('BWOW2_2', 'BWOW2', 400 * 1, 0, 400, 400);
        this.loadSprite('BWOW2_3', 'BWOW2', 400 * 2, 0, 400, 400);
        this.loadSprite('BWOW2_4', 'BWOW2', 400 * 3, 0, 400, 400);
        this.loadSprite('BWOW2_5', 'BWOW2', 400 * 4, 0, 400, 400);
        this.loadSprite('BWOW2_6', 'BWOW2', 400 * 5, 0, 400, 400);
        this.loadSprite('BWOW2_7', 'BWOW2', 400 * 6, 0, 400, 400);
        this.loadSprite('BWOW2_8', 'BWOW2', 400 * 7, 0, 400, 400);

        this.loadPicture(
          'Classroom3_shelf_books',
          'assets/img/Comic1/Classroom3_shelf_books.png',
          on_pic
        );
        this.loadSprite(
          'Classroom3_shelf_books_1',
          'Classroom3_shelf_books',
          85 * 0,
          0,
          85,
          85
        );
        this.loadSprite(
          'Classroom3_shelf_books_2',
          'Classroom3_shelf_books',
          85 * 1,
          0,
          85,
          85
        );
        this.loadSprite(
          'Classroom3_shelf_books_3',
          'Classroom3_shelf_books',
          85 * 2,
          0,
          85,
          85
        );

        this.loadPicture(
          'Girls_talking',
          'assets/img/Comic1/Girls_talking.png',
          on_pic
        );
        for (let i = 0; i < 8; i++) {
          this.loadSprite(
            'Girls_talking_' + (i + 1),
            'Girls_talking',
            150 * i,
            0,
            150,
            150
          );
        }

        //portraits
        this.loadPicture(
          'Ada_angry',
          'assets/img/Comic1/Ada_angry.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_annoyed',
          'assets/img/Comic1/Ada_annoyed.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_normal',
          'assets/img/Comic1/Ada_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_normal2',
          'assets/img/Comic1/Ada_normal2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_talking',
          'assets/img/Comic1/Ada_normal2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_struggle',
          'assets/img/Comic1/Ada_struggle.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_surprised',
          'assets/img/Comic1/Ada_surprised.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_thoughtful',
          'assets/img/Comic1/Ada_thoughtful.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_worried',
          'assets/img/Comic1/Ada_worried.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ada_smug',
          'assets/img/Comic1/Ada_smug.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Door_normal',
          'assets/img/Comic1/Door_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Girl1_normal',
          'assets/img/Comic1/Girl1_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Girl1_smelling',
          'assets/img/Comic1/Girl1_smelling.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Mildred',
          'assets/img/Comic1/mildred.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Girls_actor_talking1',
          'assets/img/Comic1/Girls_talking1.png',
          on_pic
        );
        this.loadPicture(
          'Girls_actor_talking2',
          'assets/img/Comic1/Girls_talking2.png',
          on_pic
        );
        this.loadPicture(
          'Jonathan_normal',
          'assets/img/Comic1/Jonathan_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Jonathan_worried',
          'assets/img/Comic1/Jonathan_worried.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ralgo_actor_lecturing',
          'assets/img/Comic1/Ralgo_actor_lecturing.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ralgo_bored',
          'assets/img/Comic1/Ralgo_bored.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Ralgo_normal',
          'assets/img/Comic1/Ralgo_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Otis_normal',
          'assets/img/Comic1/Otis_normal.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Otis_talking',
          'assets/img/Comic1/Otis_talking.png',
          on_pic,
          true
        );

        this.loadPicture(
          'Banana',
          'assets/img/Comic1/banana.png',
          on_pic,
          true
        );
        this.loadPicture('Phone', 'assets/img/Comic1/phone.png', on_pic, true);
        this.loadPicture(
          'Scissors',
          'assets/img/Comic1/scissors.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Mousepad',
          'assets/img/Comic1/mousepad.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Stapler',
          'assets/img/Comic1/Stapler.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom2_Props',
          'assets/img/Comic1/Classroom2-props.png',
          on_pic,
          true
        );
        this.loadPicture(
          'First_Aid',
          'assets/img/Comic1/first-aid.png',
          on_pic,
          true
        );
        this.loadPicture('Chair', 'assets/img/Comic1/chair.png', on_pic, true);
        this.loadPicture(
          'Chair2',
          'assets/img/Comic1/chair2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'AVCloset_door_open',
          'assets/img/Comic1/AVCloset_door_open.png',
          on_pic,
          true
        );
        this.loadPicture(
          'AVCloset_door_closed',
          'assets/img/Comic1/AVCloset_door_closed.png',
          on_pic,
          true
        );
        this.loadPicture('Book', 'assets/img/Comic1/Book.png', on_pic, true);
        this.loadPicture('Book2', 'assets/img/Comic1/Book2.png', on_pic, true);
        this.loadPicture('Book3', 'assets/img/Comic1/Book3.png', on_pic, true);
        this.loadPicture('Book4', 'assets/img/Comic1/Book4.png', on_pic, true);
        this.loadPicture('Ink', 'assets/img/Comic1/Ink.png', on_pic, true);
        this.loadPicture('Note', 'assets/img/Comic1/Note.png', on_pic, true);
        this.loadPicture('Wires', 'assets/img/Comic1/Wires.png', on_pic, true);
        this.loadPicture(
          'Pillow',
          'assets/img/Comic1/Pillow.png',
          on_pic,
          true
        );
        this.loadPicture('Blue', 'assets/img/Comic1/Blue.png', on_pic, true);

        this.loadPicture(
          'Classroom1_bg',
          'assets/img/Comic1/Classroom1-bg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom1_fg',
          'assets/img/Comic1/Classroom1-fg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom1_fg2',
          'assets/img/Comic1/Classroom1-fg2.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom2_bg',
          'assets/img/Comic1/Classroom2-bg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom2_fg',
          'assets/img/Comic1/Classroom2-fg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom3_bg',
          'assets/img/Comic1/Classroom3-bg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom3_fg',
          'assets/img/Comic1/Classroom3-fg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom4_bg',
          'assets/img/Comic1/Classroom4-bg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'Classroom4_fg',
          'assets/img/Comic1/Classroom4-fg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'AVCloset_bg',
          'assets/img/Comic1/AVCloset-bg.png',
          on_pic,
          true
        );
        this.loadPicture(
          'AVCloset_fg',
          'assets/img/Comic1/AVCloset-fg.png',
          on_pic,
          true
        );

        for (let i = 1; i < 9; i++) {
          this.loadPicture(
            'calc' + i,
            'assets/img/Comic1/calc' + i + '.png',
            on_pic,
            true
          );
        }
      } else {
        cb();
      }
    }

    drawSprite(sprite_name, x, y) {
      let s = this.sprites[sprite_name];
      if (s) {
        if (s !== true) {
          let img = this.pictures[s.img];
          if (img) {
            this.ctx.drawImage(
              img,
              s.clip_x,
              s.clip_y,
              s.clip_w,
              s.clip_h,
              x,
              y,
              s.clip_w,
              s.clip_h
            );
          } else {
            console.warn('no image named', s.img, window.pictures);
          }
        }
      } else {
        this.running = false;
        console.error('no sprite named', sprite_name, this.sprites);
      }
    }

    drawLoading() {
      if (this.ctx) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = 'orange';
        //this.ctx.textAlign = 'center';
        this.ctx.font = '16px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(
          'Loading interactive comic...',
          this.ctx.canvas.width / 2,
          100
        );
        this.ctx.textAlign = 'left';
      }
    }

    loop() {
      if (!this.isLoaded()) {
        this.drawLoading();
      } else {
        this.running = true;
        for (let i in this.actor_list) {
          let act = this.actor_list[i];
          let spr = act.anim.getSprite();
          let t = act.transition;
          if (t) {
            t.update();
            t.apply(this.ctx);
          }
          this.drawSprite(spr, act.x, act.y);
          if (t) {
            t.unapply(this.ctx);
            if (t.isDone()) {
              act.transition = null;
              t.cb();
            }
          }
          act.anim.update();
        }
        if (this.credits) {
          this.ctx.fillStyle = 'orange';
          //this.ctx.textAlign = 'center';
          this.ctx.font = '24px monospace';
          this.ctx.fillText('Written by Benjamin Brown', 30, 120);
        }
      }

      if (this.running) {
        setTimeout(() => {
          window.scene.loop();
        }, 1000 / this.fps);
      }
    }
    addActor(name, x, y, anim) {
      this.actors[name] = {
        name: name,
        x: x,
        y: y,
        anim: this.animations.default(),
        anim_name: anim || 'invisible',
        orig_anim_name: anim || 'invisible',
        base_x: 0,
        base_y: 0,
        base_anim_name: 'invisible',
      };
      this.actor_list.push(this.actors[name]);
      if (anim) {
        this.setAnimation(name, anim, false);
      }
    }
    clearActors() {
      this.actors = {};
      this.actor_list = [];
    }
    setActorBase(name, x, y, anim) {
      let act = this.actors[name];
      if (!act) {
        console.error('Cannot set actor base, No actor exists named:', name);
        this.running = false;
      } else {
        act.base_x = x;
        act.base_y = y;
        act.base_anim_name = anim;
      }
    }
    restoreActorBase(name) {
      let act = this.actors[name];
      if (!act) {
        console.error(
          'Cannot restore actor base, No actor exists named:',
          name
        );
        this.running = false;
      } else {
        act.x = act.base_x;
        act.y = act.base_y;
        this.setAnimation(name, act.base_anim_name);
      }
    }
    setActor(name, x, y) {
      let act = this.actors[name];
      if (!act) {
        console.error('Cannot set actor, No actor exists named:', name);
        this.running = false;
      } else {
        act.x = x;
        act.y = y;
      }
    }
    setAnimation(name, anim, fade) {
      let a = this.animations[anim];
      let act = this.actors[name];
      if (a) {
        if (act) {
          if (fade) {
            act.anim_name = anim;
            act.transition = new Transition(5, false, () => {
              act.anim = a();
              act.transition = new Transition(5, true, () => {});
            });
          } else {
            act.anim = a();
            act.transition = null;
            act.anim_name = anim;
          }
        } else {
          console.error('Cannot set animation, No actor exists named:', name);
          this.running = false;
        }
      } else {
        console.error(
          'Cannot set animation, No animation exists named:',
          anim,
          this.animations
        );
        this.running = false;
      }
    }

    fadeOutActors(list) {
      list.forEach((act_name) => {
        let act = this.actors[act_name];
        if (act) {
          act.orig_anim_name = act.anim_name;
        }
        this.setAnimation(act_name, 'invisible', true);
      });
    }
    fadeInActors(list) {
      list.forEach((act_name) => {
        let act = this.actors[act_name];
        if (act) {
          this.setAnimation(act_name, act.orig_anim_name, true);
        } else {
          console.error('Cannot fade in actor "', act, '" does not exist');
        }
      });
    }

    startConversation(black_bar_actor, black_bar_name, actors) {
      this.conversation_black_bar_actor = black_bar_actor;
      this.conversation_actors = actors;
      this.conv_act1_x = 0;
      this.conv_act2_x = 0;

      this.setAnimation(black_bar_actor, black_bar_name, true);
      let act1 = actors[0];
      if (act1) {
        this.conv_act1_x = 225;
        if (black_bar_name.indexOf('left') > -1) {
          this.conv_act1_x = -10;
        }
        this.setAnimation(act1.name, act1.anim, true);
        this.setActor(act1.name, this.conv_act1_x, 200);
      }

      let act2 = actors[1];
      if (act2) {
        this.conv_act2_x = -30;
        if (black_bar_name.indexOf('left') > -1) {
          this.conv_act2_x = -10;
        }
        this.setAnimation(act2.name, act2.anim, true);
        this.setActor(act2.name, this.conv_act2_x, 200);
      }

      if (!act2) {
        this.conv_act1_x = 100;
        if (black_bar_name.indexOf('left') > -1) {
          this.conv_act1_x = -10;
        }
        this.setActor(act1.name, this.conv_act1_x, 200);
      }
    }
    endConversation() {
      this.setAnimation(this.conversation_black_bar_actor, 'invisible', true);
      let actors = this.conversation_actors;
      let act1 = actors[0];
      if (act1) {
        this.setAnimation(act1.name, 'invisible', true);
      }

      let act2 = actors[1];
      if (act2) {
        this.setAnimation(act2.name, 'invisible', true);
      }
    }
    setConv(actor_name, anim) {
      let actors = this.conversation_actors;
      let act1 = actors[0];
      let act2 = actors[1];
      if (actors.length > 1) {
        if (act1.name === actor_name) {
          this.setAnimation(act1.name, anim || act1.anim, false);
          this.setAnimation(act2.name, act2.anim, false);
          this.setActor(act1.name, this.conv_act1_x - 25, 200);
          this.setActor(act2.name, this.conv_act2_x, 220);
        } else if (act2.name === actor_name) {
          this.setAnimation(act1.name, act1.anim, false);
          this.setAnimation(act2.name, anim || act2.anim, false);
          this.setActor(act1.name, this.conv_act1_x, 220);
          this.setActor(act2.name, this.conv_act2_x + 25, 200);
        } else {
          this.setAnimation(act1.name, act1.anim, false);
          this.setAnimation(act2.name, act2.anim, false);
          this.setActor(act1.name, this.conv_act1_x, 200);
          this.setActor(act2.name, this.conv_act2_x, 200);
        }
      } else {
        this.setAnimation(act1.name, anim || act1.anim, false);
        this.setActor(act1.name, this.conv_act1_x, 200);
      }
    }
  }

  window.scene = new Scene();
  window.player = new Player();
  window.core = new Core();

  let is_init = false;
  let init_comic = function () {
    if (is_init === false) {
      is_init = true;
      let canvas_id = 'canvas';
      let cb = () => {
        setTimeout(() => {
          document.getElementById('loading').style.display = 'none';
          window.files[`main.json`]();
					// window.files[`comic-classroom4-se.json`]();
        }, 1);
      };
      window.core.init();
      window.core.catcher.enable();
      window.player.init();
      window.scene.load(canvas_id, cb);
      if (!window.scene.running) {
        window.scene.loop();
      }
    }
  };

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'orange';
  ctx.font = '32px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('Hey there.', canvas.width / 2, 40);
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '20px monospace';
  ctx.fillText('This is an interactive comic.', canvas.width / 2, 70);
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '16px monospace';
  ctx.fillText('It may take some minutes to complete,', canvas.width / 2, 100);
  ctx.fillText('so be sure that you have the time to', canvas.width / 2, 120);
  ctx.fillText('take your time, lest you rush through', canvas.width / 2, 140);
  ctx.fillText('the experience.', canvas.width / 2, 160);
  ctx.fillStyle = 'white';
  ctx.font = '20px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('Click to begin.', canvas.width / 2, 200);
  ctx.textAlign = 'left';

  canvas.onclick = () => {
    console.log('INIT');
    init_comic();
    document.getElementById('loading').style.display = 'block';
    canvas.onclick = null;
  };

  canvas.touchend = (e) => {
    if (canvas.onclick) {
      canvas.onclick();
    }
    e.preventDefault();
  };

  canvas.mousedown = () => {
    return false;
  };

  document.getElementById('soundimg').onclick = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    let elem = document.getElementById('soundimg');
    console.log('toggle volume to', !window.scene.is_sound_enabled);
    if (window.scene.is_sound_enabled) {
      elem.src = 'assets/img/volumeoff.png';
      for (let i in window.scene.sounds) {
        window.scene.sounds[i].volume = 0;
      }
      window.scene.is_sound_enabled = false;
    } else {
      elem.src = 'assets/img/volume.png';
      for (let i in window.scene.sounds) {
        window.scene.sounds[i].volume = 1;
      }
      window.scene.is_sound_enabled = true;
    }
  };
})();
