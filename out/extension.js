var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports2, module2) {
    module2.exports = function isBuffer2(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports2, module2) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module2.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/markdown-it-emoji/lib/data/full.json
var require_full = __commonJS({
  "node_modules/markdown-it-emoji/lib/data/full.json"(exports2, module2) {
    module2.exports = {
      "100": "\u{1F4AF}",
      "1234": "\u{1F522}",
      grinning: "\u{1F600}",
      smiley: "\u{1F603}",
      smile: "\u{1F604}",
      grin: "\u{1F601}",
      laughing: "\u{1F606}",
      satisfied: "\u{1F606}",
      sweat_smile: "\u{1F605}",
      rofl: "\u{1F923}",
      joy: "\u{1F602}",
      slightly_smiling_face: "\u{1F642}",
      upside_down_face: "\u{1F643}",
      wink: "\u{1F609}",
      blush: "\u{1F60A}",
      innocent: "\u{1F607}",
      smiling_face_with_three_hearts: "\u{1F970}",
      heart_eyes: "\u{1F60D}",
      star_struck: "\u{1F929}",
      kissing_heart: "\u{1F618}",
      kissing: "\u{1F617}",
      relaxed: "\u263A\uFE0F",
      kissing_closed_eyes: "\u{1F61A}",
      kissing_smiling_eyes: "\u{1F619}",
      smiling_face_with_tear: "\u{1F972}",
      yum: "\u{1F60B}",
      stuck_out_tongue: "\u{1F61B}",
      stuck_out_tongue_winking_eye: "\u{1F61C}",
      zany_face: "\u{1F92A}",
      stuck_out_tongue_closed_eyes: "\u{1F61D}",
      money_mouth_face: "\u{1F911}",
      hugs: "\u{1F917}",
      hand_over_mouth: "\u{1F92D}",
      shushing_face: "\u{1F92B}",
      thinking: "\u{1F914}",
      zipper_mouth_face: "\u{1F910}",
      raised_eyebrow: "\u{1F928}",
      neutral_face: "\u{1F610}",
      expressionless: "\u{1F611}",
      no_mouth: "\u{1F636}",
      smirk: "\u{1F60F}",
      unamused: "\u{1F612}",
      roll_eyes: "\u{1F644}",
      grimacing: "\u{1F62C}",
      lying_face: "\u{1F925}",
      relieved: "\u{1F60C}",
      pensive: "\u{1F614}",
      sleepy: "\u{1F62A}",
      drooling_face: "\u{1F924}",
      sleeping: "\u{1F634}",
      mask: "\u{1F637}",
      face_with_thermometer: "\u{1F912}",
      face_with_head_bandage: "\u{1F915}",
      nauseated_face: "\u{1F922}",
      vomiting_face: "\u{1F92E}",
      sneezing_face: "\u{1F927}",
      hot_face: "\u{1F975}",
      cold_face: "\u{1F976}",
      woozy_face: "\u{1F974}",
      dizzy_face: "\u{1F635}",
      exploding_head: "\u{1F92F}",
      cowboy_hat_face: "\u{1F920}",
      partying_face: "\u{1F973}",
      disguised_face: "\u{1F978}",
      sunglasses: "\u{1F60E}",
      nerd_face: "\u{1F913}",
      monocle_face: "\u{1F9D0}",
      confused: "\u{1F615}",
      worried: "\u{1F61F}",
      slightly_frowning_face: "\u{1F641}",
      frowning_face: "\u2639\uFE0F",
      open_mouth: "\u{1F62E}",
      hushed: "\u{1F62F}",
      astonished: "\u{1F632}",
      flushed: "\u{1F633}",
      pleading_face: "\u{1F97A}",
      frowning: "\u{1F626}",
      anguished: "\u{1F627}",
      fearful: "\u{1F628}",
      cold_sweat: "\u{1F630}",
      disappointed_relieved: "\u{1F625}",
      cry: "\u{1F622}",
      sob: "\u{1F62D}",
      scream: "\u{1F631}",
      confounded: "\u{1F616}",
      persevere: "\u{1F623}",
      disappointed: "\u{1F61E}",
      sweat: "\u{1F613}",
      weary: "\u{1F629}",
      tired_face: "\u{1F62B}",
      yawning_face: "\u{1F971}",
      triumph: "\u{1F624}",
      rage: "\u{1F621}",
      pout: "\u{1F621}",
      angry: "\u{1F620}",
      cursing_face: "\u{1F92C}",
      smiling_imp: "\u{1F608}",
      imp: "\u{1F47F}",
      skull: "\u{1F480}",
      skull_and_crossbones: "\u2620\uFE0F",
      hankey: "\u{1F4A9}",
      poop: "\u{1F4A9}",
      shit: "\u{1F4A9}",
      clown_face: "\u{1F921}",
      japanese_ogre: "\u{1F479}",
      japanese_goblin: "\u{1F47A}",
      ghost: "\u{1F47B}",
      alien: "\u{1F47D}",
      space_invader: "\u{1F47E}",
      robot: "\u{1F916}",
      smiley_cat: "\u{1F63A}",
      smile_cat: "\u{1F638}",
      joy_cat: "\u{1F639}",
      heart_eyes_cat: "\u{1F63B}",
      smirk_cat: "\u{1F63C}",
      kissing_cat: "\u{1F63D}",
      scream_cat: "\u{1F640}",
      crying_cat_face: "\u{1F63F}",
      pouting_cat: "\u{1F63E}",
      see_no_evil: "\u{1F648}",
      hear_no_evil: "\u{1F649}",
      speak_no_evil: "\u{1F64A}",
      kiss: "\u{1F48B}",
      love_letter: "\u{1F48C}",
      cupid: "\u{1F498}",
      gift_heart: "\u{1F49D}",
      sparkling_heart: "\u{1F496}",
      heartpulse: "\u{1F497}",
      heartbeat: "\u{1F493}",
      revolving_hearts: "\u{1F49E}",
      two_hearts: "\u{1F495}",
      heart_decoration: "\u{1F49F}",
      heavy_heart_exclamation: "\u2763\uFE0F",
      broken_heart: "\u{1F494}",
      heart: "\u2764\uFE0F",
      orange_heart: "\u{1F9E1}",
      yellow_heart: "\u{1F49B}",
      green_heart: "\u{1F49A}",
      blue_heart: "\u{1F499}",
      purple_heart: "\u{1F49C}",
      brown_heart: "\u{1F90E}",
      black_heart: "\u{1F5A4}",
      white_heart: "\u{1F90D}",
      anger: "\u{1F4A2}",
      boom: "\u{1F4A5}",
      collision: "\u{1F4A5}",
      dizzy: "\u{1F4AB}",
      sweat_drops: "\u{1F4A6}",
      dash: "\u{1F4A8}",
      hole: "\u{1F573}\uFE0F",
      bomb: "\u{1F4A3}",
      speech_balloon: "\u{1F4AC}",
      eye_speech_bubble: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
      left_speech_bubble: "\u{1F5E8}\uFE0F",
      right_anger_bubble: "\u{1F5EF}\uFE0F",
      thought_balloon: "\u{1F4AD}",
      zzz: "\u{1F4A4}",
      wave: "\u{1F44B}",
      raised_back_of_hand: "\u{1F91A}",
      raised_hand_with_fingers_splayed: "\u{1F590}\uFE0F",
      hand: "\u270B",
      raised_hand: "\u270B",
      vulcan_salute: "\u{1F596}",
      ok_hand: "\u{1F44C}",
      pinched_fingers: "\u{1F90C}",
      pinching_hand: "\u{1F90F}",
      v: "\u270C\uFE0F",
      crossed_fingers: "\u{1F91E}",
      love_you_gesture: "\u{1F91F}",
      metal: "\u{1F918}",
      call_me_hand: "\u{1F919}",
      point_left: "\u{1F448}",
      point_right: "\u{1F449}",
      point_up_2: "\u{1F446}",
      middle_finger: "\u{1F595}",
      fu: "\u{1F595}",
      point_down: "\u{1F447}",
      point_up: "\u261D\uFE0F",
      "+1": "\u{1F44D}",
      thumbsup: "\u{1F44D}",
      "-1": "\u{1F44E}",
      thumbsdown: "\u{1F44E}",
      fist_raised: "\u270A",
      fist: "\u270A",
      fist_oncoming: "\u{1F44A}",
      facepunch: "\u{1F44A}",
      punch: "\u{1F44A}",
      fist_left: "\u{1F91B}",
      fist_right: "\u{1F91C}",
      clap: "\u{1F44F}",
      raised_hands: "\u{1F64C}",
      open_hands: "\u{1F450}",
      palms_up_together: "\u{1F932}",
      handshake: "\u{1F91D}",
      pray: "\u{1F64F}",
      writing_hand: "\u270D\uFE0F",
      nail_care: "\u{1F485}",
      selfie: "\u{1F933}",
      muscle: "\u{1F4AA}",
      mechanical_arm: "\u{1F9BE}",
      mechanical_leg: "\u{1F9BF}",
      leg: "\u{1F9B5}",
      foot: "\u{1F9B6}",
      ear: "\u{1F442}",
      ear_with_hearing_aid: "\u{1F9BB}",
      nose: "\u{1F443}",
      brain: "\u{1F9E0}",
      anatomical_heart: "\u{1FAC0}",
      lungs: "\u{1FAC1}",
      tooth: "\u{1F9B7}",
      bone: "\u{1F9B4}",
      eyes: "\u{1F440}",
      eye: "\u{1F441}\uFE0F",
      tongue: "\u{1F445}",
      lips: "\u{1F444}",
      baby: "\u{1F476}",
      child: "\u{1F9D2}",
      boy: "\u{1F466}",
      girl: "\u{1F467}",
      adult: "\u{1F9D1}",
      blond_haired_person: "\u{1F471}",
      man: "\u{1F468}",
      bearded_person: "\u{1F9D4}",
      red_haired_man: "\u{1F468}\u200D\u{1F9B0}",
      curly_haired_man: "\u{1F468}\u200D\u{1F9B1}",
      white_haired_man: "\u{1F468}\u200D\u{1F9B3}",
      bald_man: "\u{1F468}\u200D\u{1F9B2}",
      woman: "\u{1F469}",
      red_haired_woman: "\u{1F469}\u200D\u{1F9B0}",
      person_red_hair: "\u{1F9D1}\u200D\u{1F9B0}",
      curly_haired_woman: "\u{1F469}\u200D\u{1F9B1}",
      person_curly_hair: "\u{1F9D1}\u200D\u{1F9B1}",
      white_haired_woman: "\u{1F469}\u200D\u{1F9B3}",
      person_white_hair: "\u{1F9D1}\u200D\u{1F9B3}",
      bald_woman: "\u{1F469}\u200D\u{1F9B2}",
      person_bald: "\u{1F9D1}\u200D\u{1F9B2}",
      blond_haired_woman: "\u{1F471}\u200D\u2640\uFE0F",
      blonde_woman: "\u{1F471}\u200D\u2640\uFE0F",
      blond_haired_man: "\u{1F471}\u200D\u2642\uFE0F",
      older_adult: "\u{1F9D3}",
      older_man: "\u{1F474}",
      older_woman: "\u{1F475}",
      frowning_person: "\u{1F64D}",
      frowning_man: "\u{1F64D}\u200D\u2642\uFE0F",
      frowning_woman: "\u{1F64D}\u200D\u2640\uFE0F",
      pouting_face: "\u{1F64E}",
      pouting_man: "\u{1F64E}\u200D\u2642\uFE0F",
      pouting_woman: "\u{1F64E}\u200D\u2640\uFE0F",
      no_good: "\u{1F645}",
      no_good_man: "\u{1F645}\u200D\u2642\uFE0F",
      ng_man: "\u{1F645}\u200D\u2642\uFE0F",
      no_good_woman: "\u{1F645}\u200D\u2640\uFE0F",
      ng_woman: "\u{1F645}\u200D\u2640\uFE0F",
      ok_person: "\u{1F646}",
      ok_man: "\u{1F646}\u200D\u2642\uFE0F",
      ok_woman: "\u{1F646}\u200D\u2640\uFE0F",
      tipping_hand_person: "\u{1F481}",
      information_desk_person: "\u{1F481}",
      tipping_hand_man: "\u{1F481}\u200D\u2642\uFE0F",
      sassy_man: "\u{1F481}\u200D\u2642\uFE0F",
      tipping_hand_woman: "\u{1F481}\u200D\u2640\uFE0F",
      sassy_woman: "\u{1F481}\u200D\u2640\uFE0F",
      raising_hand: "\u{1F64B}",
      raising_hand_man: "\u{1F64B}\u200D\u2642\uFE0F",
      raising_hand_woman: "\u{1F64B}\u200D\u2640\uFE0F",
      deaf_person: "\u{1F9CF}",
      deaf_man: "\u{1F9CF}\u200D\u2642\uFE0F",
      deaf_woman: "\u{1F9CF}\u200D\u2640\uFE0F",
      bow: "\u{1F647}",
      bowing_man: "\u{1F647}\u200D\u2642\uFE0F",
      bowing_woman: "\u{1F647}\u200D\u2640\uFE0F",
      facepalm: "\u{1F926}",
      man_facepalming: "\u{1F926}\u200D\u2642\uFE0F",
      woman_facepalming: "\u{1F926}\u200D\u2640\uFE0F",
      shrug: "\u{1F937}",
      man_shrugging: "\u{1F937}\u200D\u2642\uFE0F",
      woman_shrugging: "\u{1F937}\u200D\u2640\uFE0F",
      health_worker: "\u{1F9D1}\u200D\u2695\uFE0F",
      man_health_worker: "\u{1F468}\u200D\u2695\uFE0F",
      woman_health_worker: "\u{1F469}\u200D\u2695\uFE0F",
      student: "\u{1F9D1}\u200D\u{1F393}",
      man_student: "\u{1F468}\u200D\u{1F393}",
      woman_student: "\u{1F469}\u200D\u{1F393}",
      teacher: "\u{1F9D1}\u200D\u{1F3EB}",
      man_teacher: "\u{1F468}\u200D\u{1F3EB}",
      woman_teacher: "\u{1F469}\u200D\u{1F3EB}",
      judge: "\u{1F9D1}\u200D\u2696\uFE0F",
      man_judge: "\u{1F468}\u200D\u2696\uFE0F",
      woman_judge: "\u{1F469}\u200D\u2696\uFE0F",
      farmer: "\u{1F9D1}\u200D\u{1F33E}",
      man_farmer: "\u{1F468}\u200D\u{1F33E}",
      woman_farmer: "\u{1F469}\u200D\u{1F33E}",
      cook: "\u{1F9D1}\u200D\u{1F373}",
      man_cook: "\u{1F468}\u200D\u{1F373}",
      woman_cook: "\u{1F469}\u200D\u{1F373}",
      mechanic: "\u{1F9D1}\u200D\u{1F527}",
      man_mechanic: "\u{1F468}\u200D\u{1F527}",
      woman_mechanic: "\u{1F469}\u200D\u{1F527}",
      factory_worker: "\u{1F9D1}\u200D\u{1F3ED}",
      man_factory_worker: "\u{1F468}\u200D\u{1F3ED}",
      woman_factory_worker: "\u{1F469}\u200D\u{1F3ED}",
      office_worker: "\u{1F9D1}\u200D\u{1F4BC}",
      man_office_worker: "\u{1F468}\u200D\u{1F4BC}",
      woman_office_worker: "\u{1F469}\u200D\u{1F4BC}",
      scientist: "\u{1F9D1}\u200D\u{1F52C}",
      man_scientist: "\u{1F468}\u200D\u{1F52C}",
      woman_scientist: "\u{1F469}\u200D\u{1F52C}",
      technologist: "\u{1F9D1}\u200D\u{1F4BB}",
      man_technologist: "\u{1F468}\u200D\u{1F4BB}",
      woman_technologist: "\u{1F469}\u200D\u{1F4BB}",
      singer: "\u{1F9D1}\u200D\u{1F3A4}",
      man_singer: "\u{1F468}\u200D\u{1F3A4}",
      woman_singer: "\u{1F469}\u200D\u{1F3A4}",
      artist: "\u{1F9D1}\u200D\u{1F3A8}",
      man_artist: "\u{1F468}\u200D\u{1F3A8}",
      woman_artist: "\u{1F469}\u200D\u{1F3A8}",
      pilot: "\u{1F9D1}\u200D\u2708\uFE0F",
      man_pilot: "\u{1F468}\u200D\u2708\uFE0F",
      woman_pilot: "\u{1F469}\u200D\u2708\uFE0F",
      astronaut: "\u{1F9D1}\u200D\u{1F680}",
      man_astronaut: "\u{1F468}\u200D\u{1F680}",
      woman_astronaut: "\u{1F469}\u200D\u{1F680}",
      firefighter: "\u{1F9D1}\u200D\u{1F692}",
      man_firefighter: "\u{1F468}\u200D\u{1F692}",
      woman_firefighter: "\u{1F469}\u200D\u{1F692}",
      police_officer: "\u{1F46E}",
      cop: "\u{1F46E}",
      policeman: "\u{1F46E}\u200D\u2642\uFE0F",
      policewoman: "\u{1F46E}\u200D\u2640\uFE0F",
      detective: "\u{1F575}\uFE0F",
      male_detective: "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
      female_detective: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
      guard: "\u{1F482}",
      guardsman: "\u{1F482}\u200D\u2642\uFE0F",
      guardswoman: "\u{1F482}\u200D\u2640\uFE0F",
      ninja: "\u{1F977}",
      construction_worker: "\u{1F477}",
      construction_worker_man: "\u{1F477}\u200D\u2642\uFE0F",
      construction_worker_woman: "\u{1F477}\u200D\u2640\uFE0F",
      prince: "\u{1F934}",
      princess: "\u{1F478}",
      person_with_turban: "\u{1F473}",
      man_with_turban: "\u{1F473}\u200D\u2642\uFE0F",
      woman_with_turban: "\u{1F473}\u200D\u2640\uFE0F",
      man_with_gua_pi_mao: "\u{1F472}",
      woman_with_headscarf: "\u{1F9D5}",
      person_in_tuxedo: "\u{1F935}",
      man_in_tuxedo: "\u{1F935}\u200D\u2642\uFE0F",
      woman_in_tuxedo: "\u{1F935}\u200D\u2640\uFE0F",
      person_with_veil: "\u{1F470}",
      man_with_veil: "\u{1F470}\u200D\u2642\uFE0F",
      woman_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
      bride_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
      pregnant_woman: "\u{1F930}",
      breast_feeding: "\u{1F931}",
      woman_feeding_baby: "\u{1F469}\u200D\u{1F37C}",
      man_feeding_baby: "\u{1F468}\u200D\u{1F37C}",
      person_feeding_baby: "\u{1F9D1}\u200D\u{1F37C}",
      angel: "\u{1F47C}",
      santa: "\u{1F385}",
      mrs_claus: "\u{1F936}",
      mx_claus: "\u{1F9D1}\u200D\u{1F384}",
      superhero: "\u{1F9B8}",
      superhero_man: "\u{1F9B8}\u200D\u2642\uFE0F",
      superhero_woman: "\u{1F9B8}\u200D\u2640\uFE0F",
      supervillain: "\u{1F9B9}",
      supervillain_man: "\u{1F9B9}\u200D\u2642\uFE0F",
      supervillain_woman: "\u{1F9B9}\u200D\u2640\uFE0F",
      mage: "\u{1F9D9}",
      mage_man: "\u{1F9D9}\u200D\u2642\uFE0F",
      mage_woman: "\u{1F9D9}\u200D\u2640\uFE0F",
      fairy: "\u{1F9DA}",
      fairy_man: "\u{1F9DA}\u200D\u2642\uFE0F",
      fairy_woman: "\u{1F9DA}\u200D\u2640\uFE0F",
      vampire: "\u{1F9DB}",
      vampire_man: "\u{1F9DB}\u200D\u2642\uFE0F",
      vampire_woman: "\u{1F9DB}\u200D\u2640\uFE0F",
      merperson: "\u{1F9DC}",
      merman: "\u{1F9DC}\u200D\u2642\uFE0F",
      mermaid: "\u{1F9DC}\u200D\u2640\uFE0F",
      elf: "\u{1F9DD}",
      elf_man: "\u{1F9DD}\u200D\u2642\uFE0F",
      elf_woman: "\u{1F9DD}\u200D\u2640\uFE0F",
      genie: "\u{1F9DE}",
      genie_man: "\u{1F9DE}\u200D\u2642\uFE0F",
      genie_woman: "\u{1F9DE}\u200D\u2640\uFE0F",
      zombie: "\u{1F9DF}",
      zombie_man: "\u{1F9DF}\u200D\u2642\uFE0F",
      zombie_woman: "\u{1F9DF}\u200D\u2640\uFE0F",
      massage: "\u{1F486}",
      massage_man: "\u{1F486}\u200D\u2642\uFE0F",
      massage_woman: "\u{1F486}\u200D\u2640\uFE0F",
      haircut: "\u{1F487}",
      haircut_man: "\u{1F487}\u200D\u2642\uFE0F",
      haircut_woman: "\u{1F487}\u200D\u2640\uFE0F",
      walking: "\u{1F6B6}",
      walking_man: "\u{1F6B6}\u200D\u2642\uFE0F",
      walking_woman: "\u{1F6B6}\u200D\u2640\uFE0F",
      standing_person: "\u{1F9CD}",
      standing_man: "\u{1F9CD}\u200D\u2642\uFE0F",
      standing_woman: "\u{1F9CD}\u200D\u2640\uFE0F",
      kneeling_person: "\u{1F9CE}",
      kneeling_man: "\u{1F9CE}\u200D\u2642\uFE0F",
      kneeling_woman: "\u{1F9CE}\u200D\u2640\uFE0F",
      person_with_probing_cane: "\u{1F9D1}\u200D\u{1F9AF}",
      man_with_probing_cane: "\u{1F468}\u200D\u{1F9AF}",
      woman_with_probing_cane: "\u{1F469}\u200D\u{1F9AF}",
      person_in_motorized_wheelchair: "\u{1F9D1}\u200D\u{1F9BC}",
      man_in_motorized_wheelchair: "\u{1F468}\u200D\u{1F9BC}",
      woman_in_motorized_wheelchair: "\u{1F469}\u200D\u{1F9BC}",
      person_in_manual_wheelchair: "\u{1F9D1}\u200D\u{1F9BD}",
      man_in_manual_wheelchair: "\u{1F468}\u200D\u{1F9BD}",
      woman_in_manual_wheelchair: "\u{1F469}\u200D\u{1F9BD}",
      runner: "\u{1F3C3}",
      running: "\u{1F3C3}",
      running_man: "\u{1F3C3}\u200D\u2642\uFE0F",
      running_woman: "\u{1F3C3}\u200D\u2640\uFE0F",
      woman_dancing: "\u{1F483}",
      dancer: "\u{1F483}",
      man_dancing: "\u{1F57A}",
      business_suit_levitating: "\u{1F574}\uFE0F",
      dancers: "\u{1F46F}",
      dancing_men: "\u{1F46F}\u200D\u2642\uFE0F",
      dancing_women: "\u{1F46F}\u200D\u2640\uFE0F",
      sauna_person: "\u{1F9D6}",
      sauna_man: "\u{1F9D6}\u200D\u2642\uFE0F",
      sauna_woman: "\u{1F9D6}\u200D\u2640\uFE0F",
      climbing: "\u{1F9D7}",
      climbing_man: "\u{1F9D7}\u200D\u2642\uFE0F",
      climbing_woman: "\u{1F9D7}\u200D\u2640\uFE0F",
      person_fencing: "\u{1F93A}",
      horse_racing: "\u{1F3C7}",
      skier: "\u26F7\uFE0F",
      snowboarder: "\u{1F3C2}",
      golfing: "\u{1F3CC}\uFE0F",
      golfing_man: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
      golfing_woman: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
      surfer: "\u{1F3C4}",
      surfing_man: "\u{1F3C4}\u200D\u2642\uFE0F",
      surfing_woman: "\u{1F3C4}\u200D\u2640\uFE0F",
      rowboat: "\u{1F6A3}",
      rowing_man: "\u{1F6A3}\u200D\u2642\uFE0F",
      rowing_woman: "\u{1F6A3}\u200D\u2640\uFE0F",
      swimmer: "\u{1F3CA}",
      swimming_man: "\u{1F3CA}\u200D\u2642\uFE0F",
      swimming_woman: "\u{1F3CA}\u200D\u2640\uFE0F",
      bouncing_ball_person: "\u26F9\uFE0F",
      bouncing_ball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
      basketball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
      bouncing_ball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
      basketball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
      weight_lifting: "\u{1F3CB}\uFE0F",
      weight_lifting_man: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
      weight_lifting_woman: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
      bicyclist: "\u{1F6B4}",
      biking_man: "\u{1F6B4}\u200D\u2642\uFE0F",
      biking_woman: "\u{1F6B4}\u200D\u2640\uFE0F",
      mountain_bicyclist: "\u{1F6B5}",
      mountain_biking_man: "\u{1F6B5}\u200D\u2642\uFE0F",
      mountain_biking_woman: "\u{1F6B5}\u200D\u2640\uFE0F",
      cartwheeling: "\u{1F938}",
      man_cartwheeling: "\u{1F938}\u200D\u2642\uFE0F",
      woman_cartwheeling: "\u{1F938}\u200D\u2640\uFE0F",
      wrestling: "\u{1F93C}",
      men_wrestling: "\u{1F93C}\u200D\u2642\uFE0F",
      women_wrestling: "\u{1F93C}\u200D\u2640\uFE0F",
      water_polo: "\u{1F93D}",
      man_playing_water_polo: "\u{1F93D}\u200D\u2642\uFE0F",
      woman_playing_water_polo: "\u{1F93D}\u200D\u2640\uFE0F",
      handball_person: "\u{1F93E}",
      man_playing_handball: "\u{1F93E}\u200D\u2642\uFE0F",
      woman_playing_handball: "\u{1F93E}\u200D\u2640\uFE0F",
      juggling_person: "\u{1F939}",
      man_juggling: "\u{1F939}\u200D\u2642\uFE0F",
      woman_juggling: "\u{1F939}\u200D\u2640\uFE0F",
      lotus_position: "\u{1F9D8}",
      lotus_position_man: "\u{1F9D8}\u200D\u2642\uFE0F",
      lotus_position_woman: "\u{1F9D8}\u200D\u2640\uFE0F",
      bath: "\u{1F6C0}",
      sleeping_bed: "\u{1F6CC}",
      people_holding_hands: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
      two_women_holding_hands: "\u{1F46D}",
      couple: "\u{1F46B}",
      two_men_holding_hands: "\u{1F46C}",
      couplekiss: "\u{1F48F}",
      couplekiss_man_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
      couplekiss_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
      couplekiss_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
      couple_with_heart: "\u{1F491}",
      couple_with_heart_woman_man: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
      couple_with_heart_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
      couple_with_heart_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
      family: "\u{1F46A}",
      family_man_woman_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
      family_man_woman_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
      family_man_woman_girl_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_woman_boy_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_woman_girl_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      family_man_man_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
      family_man_man_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
      family_man_man_girl_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_man_boy_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_man_girl_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
      family_woman_woman_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
      family_woman_woman_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
      family_woman_woman_girl_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_woman_woman_boy_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_woman_woman_girl_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      family_man_boy: "\u{1F468}\u200D\u{1F466}",
      family_man_boy_boy: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_girl: "\u{1F468}\u200D\u{1F467}",
      family_man_girl_boy: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_girl_girl: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
      family_woman_boy: "\u{1F469}\u200D\u{1F466}",
      family_woman_boy_boy: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_woman_girl: "\u{1F469}\u200D\u{1F467}",
      family_woman_girl_boy: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_woman_girl_girl: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      speaking_head: "\u{1F5E3}\uFE0F",
      bust_in_silhouette: "\u{1F464}",
      busts_in_silhouette: "\u{1F465}",
      people_hugging: "\u{1FAC2}",
      footprints: "\u{1F463}",
      monkey_face: "\u{1F435}",
      monkey: "\u{1F412}",
      gorilla: "\u{1F98D}",
      orangutan: "\u{1F9A7}",
      dog: "\u{1F436}",
      dog2: "\u{1F415}",
      guide_dog: "\u{1F9AE}",
      service_dog: "\u{1F415}\u200D\u{1F9BA}",
      poodle: "\u{1F429}",
      wolf: "\u{1F43A}",
      fox_face: "\u{1F98A}",
      raccoon: "\u{1F99D}",
      cat: "\u{1F431}",
      cat2: "\u{1F408}",
      black_cat: "\u{1F408}\u200D\u2B1B",
      lion: "\u{1F981}",
      tiger: "\u{1F42F}",
      tiger2: "\u{1F405}",
      leopard: "\u{1F406}",
      horse: "\u{1F434}",
      racehorse: "\u{1F40E}",
      unicorn: "\u{1F984}",
      zebra: "\u{1F993}",
      deer: "\u{1F98C}",
      bison: "\u{1F9AC}",
      cow: "\u{1F42E}",
      ox: "\u{1F402}",
      water_buffalo: "\u{1F403}",
      cow2: "\u{1F404}",
      pig: "\u{1F437}",
      pig2: "\u{1F416}",
      boar: "\u{1F417}",
      pig_nose: "\u{1F43D}",
      ram: "\u{1F40F}",
      sheep: "\u{1F411}",
      goat: "\u{1F410}",
      dromedary_camel: "\u{1F42A}",
      camel: "\u{1F42B}",
      llama: "\u{1F999}",
      giraffe: "\u{1F992}",
      elephant: "\u{1F418}",
      mammoth: "\u{1F9A3}",
      rhinoceros: "\u{1F98F}",
      hippopotamus: "\u{1F99B}",
      mouse: "\u{1F42D}",
      mouse2: "\u{1F401}",
      rat: "\u{1F400}",
      hamster: "\u{1F439}",
      rabbit: "\u{1F430}",
      rabbit2: "\u{1F407}",
      chipmunk: "\u{1F43F}\uFE0F",
      beaver: "\u{1F9AB}",
      hedgehog: "\u{1F994}",
      bat: "\u{1F987}",
      bear: "\u{1F43B}",
      polar_bear: "\u{1F43B}\u200D\u2744\uFE0F",
      koala: "\u{1F428}",
      panda_face: "\u{1F43C}",
      sloth: "\u{1F9A5}",
      otter: "\u{1F9A6}",
      skunk: "\u{1F9A8}",
      kangaroo: "\u{1F998}",
      badger: "\u{1F9A1}",
      feet: "\u{1F43E}",
      paw_prints: "\u{1F43E}",
      turkey: "\u{1F983}",
      chicken: "\u{1F414}",
      rooster: "\u{1F413}",
      hatching_chick: "\u{1F423}",
      baby_chick: "\u{1F424}",
      hatched_chick: "\u{1F425}",
      bird: "\u{1F426}",
      penguin: "\u{1F427}",
      dove: "\u{1F54A}\uFE0F",
      eagle: "\u{1F985}",
      duck: "\u{1F986}",
      swan: "\u{1F9A2}",
      owl: "\u{1F989}",
      dodo: "\u{1F9A4}",
      feather: "\u{1FAB6}",
      flamingo: "\u{1F9A9}",
      peacock: "\u{1F99A}",
      parrot: "\u{1F99C}",
      frog: "\u{1F438}",
      crocodile: "\u{1F40A}",
      turtle: "\u{1F422}",
      lizard: "\u{1F98E}",
      snake: "\u{1F40D}",
      dragon_face: "\u{1F432}",
      dragon: "\u{1F409}",
      sauropod: "\u{1F995}",
      "t-rex": "\u{1F996}",
      whale: "\u{1F433}",
      whale2: "\u{1F40B}",
      dolphin: "\u{1F42C}",
      flipper: "\u{1F42C}",
      seal: "\u{1F9AD}",
      fish: "\u{1F41F}",
      tropical_fish: "\u{1F420}",
      blowfish: "\u{1F421}",
      shark: "\u{1F988}",
      octopus: "\u{1F419}",
      shell: "\u{1F41A}",
      snail: "\u{1F40C}",
      butterfly: "\u{1F98B}",
      bug: "\u{1F41B}",
      ant: "\u{1F41C}",
      bee: "\u{1F41D}",
      honeybee: "\u{1F41D}",
      beetle: "\u{1FAB2}",
      lady_beetle: "\u{1F41E}",
      cricket: "\u{1F997}",
      cockroach: "\u{1FAB3}",
      spider: "\u{1F577}\uFE0F",
      spider_web: "\u{1F578}\uFE0F",
      scorpion: "\u{1F982}",
      mosquito: "\u{1F99F}",
      fly: "\u{1FAB0}",
      worm: "\u{1FAB1}",
      microbe: "\u{1F9A0}",
      bouquet: "\u{1F490}",
      cherry_blossom: "\u{1F338}",
      white_flower: "\u{1F4AE}",
      rosette: "\u{1F3F5}\uFE0F",
      rose: "\u{1F339}",
      wilted_flower: "\u{1F940}",
      hibiscus: "\u{1F33A}",
      sunflower: "\u{1F33B}",
      blossom: "\u{1F33C}",
      tulip: "\u{1F337}",
      seedling: "\u{1F331}",
      potted_plant: "\u{1FAB4}",
      evergreen_tree: "\u{1F332}",
      deciduous_tree: "\u{1F333}",
      palm_tree: "\u{1F334}",
      cactus: "\u{1F335}",
      ear_of_rice: "\u{1F33E}",
      herb: "\u{1F33F}",
      shamrock: "\u2618\uFE0F",
      four_leaf_clover: "\u{1F340}",
      maple_leaf: "\u{1F341}",
      fallen_leaf: "\u{1F342}",
      leaves: "\u{1F343}",
      grapes: "\u{1F347}",
      melon: "\u{1F348}",
      watermelon: "\u{1F349}",
      tangerine: "\u{1F34A}",
      orange: "\u{1F34A}",
      mandarin: "\u{1F34A}",
      lemon: "\u{1F34B}",
      banana: "\u{1F34C}",
      pineapple: "\u{1F34D}",
      mango: "\u{1F96D}",
      apple: "\u{1F34E}",
      green_apple: "\u{1F34F}",
      pear: "\u{1F350}",
      peach: "\u{1F351}",
      cherries: "\u{1F352}",
      strawberry: "\u{1F353}",
      blueberries: "\u{1FAD0}",
      kiwi_fruit: "\u{1F95D}",
      tomato: "\u{1F345}",
      olive: "\u{1FAD2}",
      coconut: "\u{1F965}",
      avocado: "\u{1F951}",
      eggplant: "\u{1F346}",
      potato: "\u{1F954}",
      carrot: "\u{1F955}",
      corn: "\u{1F33D}",
      hot_pepper: "\u{1F336}\uFE0F",
      bell_pepper: "\u{1FAD1}",
      cucumber: "\u{1F952}",
      leafy_green: "\u{1F96C}",
      broccoli: "\u{1F966}",
      garlic: "\u{1F9C4}",
      onion: "\u{1F9C5}",
      mushroom: "\u{1F344}",
      peanuts: "\u{1F95C}",
      chestnut: "\u{1F330}",
      bread: "\u{1F35E}",
      croissant: "\u{1F950}",
      baguette_bread: "\u{1F956}",
      flatbread: "\u{1FAD3}",
      pretzel: "\u{1F968}",
      bagel: "\u{1F96F}",
      pancakes: "\u{1F95E}",
      waffle: "\u{1F9C7}",
      cheese: "\u{1F9C0}",
      meat_on_bone: "\u{1F356}",
      poultry_leg: "\u{1F357}",
      cut_of_meat: "\u{1F969}",
      bacon: "\u{1F953}",
      hamburger: "\u{1F354}",
      fries: "\u{1F35F}",
      pizza: "\u{1F355}",
      hotdog: "\u{1F32D}",
      sandwich: "\u{1F96A}",
      taco: "\u{1F32E}",
      burrito: "\u{1F32F}",
      tamale: "\u{1FAD4}",
      stuffed_flatbread: "\u{1F959}",
      falafel: "\u{1F9C6}",
      egg: "\u{1F95A}",
      fried_egg: "\u{1F373}",
      shallow_pan_of_food: "\u{1F958}",
      stew: "\u{1F372}",
      fondue: "\u{1FAD5}",
      bowl_with_spoon: "\u{1F963}",
      green_salad: "\u{1F957}",
      popcorn: "\u{1F37F}",
      butter: "\u{1F9C8}",
      salt: "\u{1F9C2}",
      canned_food: "\u{1F96B}",
      bento: "\u{1F371}",
      rice_cracker: "\u{1F358}",
      rice_ball: "\u{1F359}",
      rice: "\u{1F35A}",
      curry: "\u{1F35B}",
      ramen: "\u{1F35C}",
      spaghetti: "\u{1F35D}",
      sweet_potato: "\u{1F360}",
      oden: "\u{1F362}",
      sushi: "\u{1F363}",
      fried_shrimp: "\u{1F364}",
      fish_cake: "\u{1F365}",
      moon_cake: "\u{1F96E}",
      dango: "\u{1F361}",
      dumpling: "\u{1F95F}",
      fortune_cookie: "\u{1F960}",
      takeout_box: "\u{1F961}",
      crab: "\u{1F980}",
      lobster: "\u{1F99E}",
      shrimp: "\u{1F990}",
      squid: "\u{1F991}",
      oyster: "\u{1F9AA}",
      icecream: "\u{1F366}",
      shaved_ice: "\u{1F367}",
      ice_cream: "\u{1F368}",
      doughnut: "\u{1F369}",
      cookie: "\u{1F36A}",
      birthday: "\u{1F382}",
      cake: "\u{1F370}",
      cupcake: "\u{1F9C1}",
      pie: "\u{1F967}",
      chocolate_bar: "\u{1F36B}",
      candy: "\u{1F36C}",
      lollipop: "\u{1F36D}",
      custard: "\u{1F36E}",
      honey_pot: "\u{1F36F}",
      baby_bottle: "\u{1F37C}",
      milk_glass: "\u{1F95B}",
      coffee: "\u2615",
      teapot: "\u{1FAD6}",
      tea: "\u{1F375}",
      sake: "\u{1F376}",
      champagne: "\u{1F37E}",
      wine_glass: "\u{1F377}",
      cocktail: "\u{1F378}",
      tropical_drink: "\u{1F379}",
      beer: "\u{1F37A}",
      beers: "\u{1F37B}",
      clinking_glasses: "\u{1F942}",
      tumbler_glass: "\u{1F943}",
      cup_with_straw: "\u{1F964}",
      bubble_tea: "\u{1F9CB}",
      beverage_box: "\u{1F9C3}",
      mate: "\u{1F9C9}",
      ice_cube: "\u{1F9CA}",
      chopsticks: "\u{1F962}",
      plate_with_cutlery: "\u{1F37D}\uFE0F",
      fork_and_knife: "\u{1F374}",
      spoon: "\u{1F944}",
      hocho: "\u{1F52A}",
      knife: "\u{1F52A}",
      amphora: "\u{1F3FA}",
      earth_africa: "\u{1F30D}",
      earth_americas: "\u{1F30E}",
      earth_asia: "\u{1F30F}",
      globe_with_meridians: "\u{1F310}",
      world_map: "\u{1F5FA}\uFE0F",
      japan: "\u{1F5FE}",
      compass: "\u{1F9ED}",
      mountain_snow: "\u{1F3D4}\uFE0F",
      mountain: "\u26F0\uFE0F",
      volcano: "\u{1F30B}",
      mount_fuji: "\u{1F5FB}",
      camping: "\u{1F3D5}\uFE0F",
      beach_umbrella: "\u{1F3D6}\uFE0F",
      desert: "\u{1F3DC}\uFE0F",
      desert_island: "\u{1F3DD}\uFE0F",
      national_park: "\u{1F3DE}\uFE0F",
      stadium: "\u{1F3DF}\uFE0F",
      classical_building: "\u{1F3DB}\uFE0F",
      building_construction: "\u{1F3D7}\uFE0F",
      bricks: "\u{1F9F1}",
      rock: "\u{1FAA8}",
      wood: "\u{1FAB5}",
      hut: "\u{1F6D6}",
      houses: "\u{1F3D8}\uFE0F",
      derelict_house: "\u{1F3DA}\uFE0F",
      house: "\u{1F3E0}",
      house_with_garden: "\u{1F3E1}",
      office: "\u{1F3E2}",
      post_office: "\u{1F3E3}",
      european_post_office: "\u{1F3E4}",
      hospital: "\u{1F3E5}",
      bank: "\u{1F3E6}",
      hotel: "\u{1F3E8}",
      love_hotel: "\u{1F3E9}",
      convenience_store: "\u{1F3EA}",
      school: "\u{1F3EB}",
      department_store: "\u{1F3EC}",
      factory: "\u{1F3ED}",
      japanese_castle: "\u{1F3EF}",
      european_castle: "\u{1F3F0}",
      wedding: "\u{1F492}",
      tokyo_tower: "\u{1F5FC}",
      statue_of_liberty: "\u{1F5FD}",
      church: "\u26EA",
      mosque: "\u{1F54C}",
      hindu_temple: "\u{1F6D5}",
      synagogue: "\u{1F54D}",
      shinto_shrine: "\u26E9\uFE0F",
      kaaba: "\u{1F54B}",
      fountain: "\u26F2",
      tent: "\u26FA",
      foggy: "\u{1F301}",
      night_with_stars: "\u{1F303}",
      cityscape: "\u{1F3D9}\uFE0F",
      sunrise_over_mountains: "\u{1F304}",
      sunrise: "\u{1F305}",
      city_sunset: "\u{1F306}",
      city_sunrise: "\u{1F307}",
      bridge_at_night: "\u{1F309}",
      hotsprings: "\u2668\uFE0F",
      carousel_horse: "\u{1F3A0}",
      ferris_wheel: "\u{1F3A1}",
      roller_coaster: "\u{1F3A2}",
      barber: "\u{1F488}",
      circus_tent: "\u{1F3AA}",
      steam_locomotive: "\u{1F682}",
      railway_car: "\u{1F683}",
      bullettrain_side: "\u{1F684}",
      bullettrain_front: "\u{1F685}",
      train2: "\u{1F686}",
      metro: "\u{1F687}",
      light_rail: "\u{1F688}",
      station: "\u{1F689}",
      tram: "\u{1F68A}",
      monorail: "\u{1F69D}",
      mountain_railway: "\u{1F69E}",
      train: "\u{1F68B}",
      bus: "\u{1F68C}",
      oncoming_bus: "\u{1F68D}",
      trolleybus: "\u{1F68E}",
      minibus: "\u{1F690}",
      ambulance: "\u{1F691}",
      fire_engine: "\u{1F692}",
      police_car: "\u{1F693}",
      oncoming_police_car: "\u{1F694}",
      taxi: "\u{1F695}",
      oncoming_taxi: "\u{1F696}",
      car: "\u{1F697}",
      red_car: "\u{1F697}",
      oncoming_automobile: "\u{1F698}",
      blue_car: "\u{1F699}",
      pickup_truck: "\u{1F6FB}",
      truck: "\u{1F69A}",
      articulated_lorry: "\u{1F69B}",
      tractor: "\u{1F69C}",
      racing_car: "\u{1F3CE}\uFE0F",
      motorcycle: "\u{1F3CD}\uFE0F",
      motor_scooter: "\u{1F6F5}",
      manual_wheelchair: "\u{1F9BD}",
      motorized_wheelchair: "\u{1F9BC}",
      auto_rickshaw: "\u{1F6FA}",
      bike: "\u{1F6B2}",
      kick_scooter: "\u{1F6F4}",
      skateboard: "\u{1F6F9}",
      roller_skate: "\u{1F6FC}",
      busstop: "\u{1F68F}",
      motorway: "\u{1F6E3}\uFE0F",
      railway_track: "\u{1F6E4}\uFE0F",
      oil_drum: "\u{1F6E2}\uFE0F",
      fuelpump: "\u26FD",
      rotating_light: "\u{1F6A8}",
      traffic_light: "\u{1F6A5}",
      vertical_traffic_light: "\u{1F6A6}",
      stop_sign: "\u{1F6D1}",
      construction: "\u{1F6A7}",
      anchor: "\u2693",
      boat: "\u26F5",
      sailboat: "\u26F5",
      canoe: "\u{1F6F6}",
      speedboat: "\u{1F6A4}",
      passenger_ship: "\u{1F6F3}\uFE0F",
      ferry: "\u26F4\uFE0F",
      motor_boat: "\u{1F6E5}\uFE0F",
      ship: "\u{1F6A2}",
      airplane: "\u2708\uFE0F",
      small_airplane: "\u{1F6E9}\uFE0F",
      flight_departure: "\u{1F6EB}",
      flight_arrival: "\u{1F6EC}",
      parachute: "\u{1FA82}",
      seat: "\u{1F4BA}",
      helicopter: "\u{1F681}",
      suspension_railway: "\u{1F69F}",
      mountain_cableway: "\u{1F6A0}",
      aerial_tramway: "\u{1F6A1}",
      artificial_satellite: "\u{1F6F0}\uFE0F",
      rocket: "\u{1F680}",
      flying_saucer: "\u{1F6F8}",
      bellhop_bell: "\u{1F6CE}\uFE0F",
      luggage: "\u{1F9F3}",
      hourglass: "\u231B",
      hourglass_flowing_sand: "\u23F3",
      watch: "\u231A",
      alarm_clock: "\u23F0",
      stopwatch: "\u23F1\uFE0F",
      timer_clock: "\u23F2\uFE0F",
      mantelpiece_clock: "\u{1F570}\uFE0F",
      clock12: "\u{1F55B}",
      clock1230: "\u{1F567}",
      clock1: "\u{1F550}",
      clock130: "\u{1F55C}",
      clock2: "\u{1F551}",
      clock230: "\u{1F55D}",
      clock3: "\u{1F552}",
      clock330: "\u{1F55E}",
      clock4: "\u{1F553}",
      clock430: "\u{1F55F}",
      clock5: "\u{1F554}",
      clock530: "\u{1F560}",
      clock6: "\u{1F555}",
      clock630: "\u{1F561}",
      clock7: "\u{1F556}",
      clock730: "\u{1F562}",
      clock8: "\u{1F557}",
      clock830: "\u{1F563}",
      clock9: "\u{1F558}",
      clock930: "\u{1F564}",
      clock10: "\u{1F559}",
      clock1030: "\u{1F565}",
      clock11: "\u{1F55A}",
      clock1130: "\u{1F566}",
      new_moon: "\u{1F311}",
      waxing_crescent_moon: "\u{1F312}",
      first_quarter_moon: "\u{1F313}",
      moon: "\u{1F314}",
      waxing_gibbous_moon: "\u{1F314}",
      full_moon: "\u{1F315}",
      waning_gibbous_moon: "\u{1F316}",
      last_quarter_moon: "\u{1F317}",
      waning_crescent_moon: "\u{1F318}",
      crescent_moon: "\u{1F319}",
      new_moon_with_face: "\u{1F31A}",
      first_quarter_moon_with_face: "\u{1F31B}",
      last_quarter_moon_with_face: "\u{1F31C}",
      thermometer: "\u{1F321}\uFE0F",
      sunny: "\u2600\uFE0F",
      full_moon_with_face: "\u{1F31D}",
      sun_with_face: "\u{1F31E}",
      ringed_planet: "\u{1FA90}",
      star: "\u2B50",
      star2: "\u{1F31F}",
      stars: "\u{1F320}",
      milky_way: "\u{1F30C}",
      cloud: "\u2601\uFE0F",
      partly_sunny: "\u26C5",
      cloud_with_lightning_and_rain: "\u26C8\uFE0F",
      sun_behind_small_cloud: "\u{1F324}\uFE0F",
      sun_behind_large_cloud: "\u{1F325}\uFE0F",
      sun_behind_rain_cloud: "\u{1F326}\uFE0F",
      cloud_with_rain: "\u{1F327}\uFE0F",
      cloud_with_snow: "\u{1F328}\uFE0F",
      cloud_with_lightning: "\u{1F329}\uFE0F",
      tornado: "\u{1F32A}\uFE0F",
      fog: "\u{1F32B}\uFE0F",
      wind_face: "\u{1F32C}\uFE0F",
      cyclone: "\u{1F300}",
      rainbow: "\u{1F308}",
      closed_umbrella: "\u{1F302}",
      open_umbrella: "\u2602\uFE0F",
      umbrella: "\u2614",
      parasol_on_ground: "\u26F1\uFE0F",
      zap: "\u26A1",
      snowflake: "\u2744\uFE0F",
      snowman_with_snow: "\u2603\uFE0F",
      snowman: "\u26C4",
      comet: "\u2604\uFE0F",
      fire: "\u{1F525}",
      droplet: "\u{1F4A7}",
      ocean: "\u{1F30A}",
      jack_o_lantern: "\u{1F383}",
      christmas_tree: "\u{1F384}",
      fireworks: "\u{1F386}",
      sparkler: "\u{1F387}",
      firecracker: "\u{1F9E8}",
      sparkles: "\u2728",
      balloon: "\u{1F388}",
      tada: "\u{1F389}",
      confetti_ball: "\u{1F38A}",
      tanabata_tree: "\u{1F38B}",
      bamboo: "\u{1F38D}",
      dolls: "\u{1F38E}",
      flags: "\u{1F38F}",
      wind_chime: "\u{1F390}",
      rice_scene: "\u{1F391}",
      red_envelope: "\u{1F9E7}",
      ribbon: "\u{1F380}",
      gift: "\u{1F381}",
      reminder_ribbon: "\u{1F397}\uFE0F",
      tickets: "\u{1F39F}\uFE0F",
      ticket: "\u{1F3AB}",
      medal_military: "\u{1F396}\uFE0F",
      trophy: "\u{1F3C6}",
      medal_sports: "\u{1F3C5}",
      "1st_place_medal": "\u{1F947}",
      "2nd_place_medal": "\u{1F948}",
      "3rd_place_medal": "\u{1F949}",
      soccer: "\u26BD",
      baseball: "\u26BE",
      softball: "\u{1F94E}",
      basketball: "\u{1F3C0}",
      volleyball: "\u{1F3D0}",
      football: "\u{1F3C8}",
      rugby_football: "\u{1F3C9}",
      tennis: "\u{1F3BE}",
      flying_disc: "\u{1F94F}",
      bowling: "\u{1F3B3}",
      cricket_game: "\u{1F3CF}",
      field_hockey: "\u{1F3D1}",
      ice_hockey: "\u{1F3D2}",
      lacrosse: "\u{1F94D}",
      ping_pong: "\u{1F3D3}",
      badminton: "\u{1F3F8}",
      boxing_glove: "\u{1F94A}",
      martial_arts_uniform: "\u{1F94B}",
      goal_net: "\u{1F945}",
      golf: "\u26F3",
      ice_skate: "\u26F8\uFE0F",
      fishing_pole_and_fish: "\u{1F3A3}",
      diving_mask: "\u{1F93F}",
      running_shirt_with_sash: "\u{1F3BD}",
      ski: "\u{1F3BF}",
      sled: "\u{1F6F7}",
      curling_stone: "\u{1F94C}",
      dart: "\u{1F3AF}",
      yo_yo: "\u{1FA80}",
      kite: "\u{1FA81}",
      "8ball": "\u{1F3B1}",
      crystal_ball: "\u{1F52E}",
      magic_wand: "\u{1FA84}",
      nazar_amulet: "\u{1F9FF}",
      video_game: "\u{1F3AE}",
      joystick: "\u{1F579}\uFE0F",
      slot_machine: "\u{1F3B0}",
      game_die: "\u{1F3B2}",
      jigsaw: "\u{1F9E9}",
      teddy_bear: "\u{1F9F8}",
      pinata: "\u{1FA85}",
      nesting_dolls: "\u{1FA86}",
      spades: "\u2660\uFE0F",
      hearts: "\u2665\uFE0F",
      diamonds: "\u2666\uFE0F",
      clubs: "\u2663\uFE0F",
      chess_pawn: "\u265F\uFE0F",
      black_joker: "\u{1F0CF}",
      mahjong: "\u{1F004}",
      flower_playing_cards: "\u{1F3B4}",
      performing_arts: "\u{1F3AD}",
      framed_picture: "\u{1F5BC}\uFE0F",
      art: "\u{1F3A8}",
      thread: "\u{1F9F5}",
      sewing_needle: "\u{1FAA1}",
      yarn: "\u{1F9F6}",
      knot: "\u{1FAA2}",
      eyeglasses: "\u{1F453}",
      dark_sunglasses: "\u{1F576}\uFE0F",
      goggles: "\u{1F97D}",
      lab_coat: "\u{1F97C}",
      safety_vest: "\u{1F9BA}",
      necktie: "\u{1F454}",
      shirt: "\u{1F455}",
      tshirt: "\u{1F455}",
      jeans: "\u{1F456}",
      scarf: "\u{1F9E3}",
      gloves: "\u{1F9E4}",
      coat: "\u{1F9E5}",
      socks: "\u{1F9E6}",
      dress: "\u{1F457}",
      kimono: "\u{1F458}",
      sari: "\u{1F97B}",
      one_piece_swimsuit: "\u{1FA71}",
      swim_brief: "\u{1FA72}",
      shorts: "\u{1FA73}",
      bikini: "\u{1F459}",
      womans_clothes: "\u{1F45A}",
      purse: "\u{1F45B}",
      handbag: "\u{1F45C}",
      pouch: "\u{1F45D}",
      shopping: "\u{1F6CD}\uFE0F",
      school_satchel: "\u{1F392}",
      thong_sandal: "\u{1FA74}",
      mans_shoe: "\u{1F45E}",
      shoe: "\u{1F45E}",
      athletic_shoe: "\u{1F45F}",
      hiking_boot: "\u{1F97E}",
      flat_shoe: "\u{1F97F}",
      high_heel: "\u{1F460}",
      sandal: "\u{1F461}",
      ballet_shoes: "\u{1FA70}",
      boot: "\u{1F462}",
      crown: "\u{1F451}",
      womans_hat: "\u{1F452}",
      tophat: "\u{1F3A9}",
      mortar_board: "\u{1F393}",
      billed_cap: "\u{1F9E2}",
      military_helmet: "\u{1FA96}",
      rescue_worker_helmet: "\u26D1\uFE0F",
      prayer_beads: "\u{1F4FF}",
      lipstick: "\u{1F484}",
      ring: "\u{1F48D}",
      gem: "\u{1F48E}",
      mute: "\u{1F507}",
      speaker: "\u{1F508}",
      sound: "\u{1F509}",
      loud_sound: "\u{1F50A}",
      loudspeaker: "\u{1F4E2}",
      mega: "\u{1F4E3}",
      postal_horn: "\u{1F4EF}",
      bell: "\u{1F514}",
      no_bell: "\u{1F515}",
      musical_score: "\u{1F3BC}",
      musical_note: "\u{1F3B5}",
      notes: "\u{1F3B6}",
      studio_microphone: "\u{1F399}\uFE0F",
      level_slider: "\u{1F39A}\uFE0F",
      control_knobs: "\u{1F39B}\uFE0F",
      microphone: "\u{1F3A4}",
      headphones: "\u{1F3A7}",
      radio: "\u{1F4FB}",
      saxophone: "\u{1F3B7}",
      accordion: "\u{1FA97}",
      guitar: "\u{1F3B8}",
      musical_keyboard: "\u{1F3B9}",
      trumpet: "\u{1F3BA}",
      violin: "\u{1F3BB}",
      banjo: "\u{1FA95}",
      drum: "\u{1F941}",
      long_drum: "\u{1FA98}",
      iphone: "\u{1F4F1}",
      calling: "\u{1F4F2}",
      phone: "\u260E\uFE0F",
      telephone: "\u260E\uFE0F",
      telephone_receiver: "\u{1F4DE}",
      pager: "\u{1F4DF}",
      fax: "\u{1F4E0}",
      battery: "\u{1F50B}",
      electric_plug: "\u{1F50C}",
      computer: "\u{1F4BB}",
      desktop_computer: "\u{1F5A5}\uFE0F",
      printer: "\u{1F5A8}\uFE0F",
      keyboard: "\u2328\uFE0F",
      computer_mouse: "\u{1F5B1}\uFE0F",
      trackball: "\u{1F5B2}\uFE0F",
      minidisc: "\u{1F4BD}",
      floppy_disk: "\u{1F4BE}",
      cd: "\u{1F4BF}",
      dvd: "\u{1F4C0}",
      abacus: "\u{1F9EE}",
      movie_camera: "\u{1F3A5}",
      film_strip: "\u{1F39E}\uFE0F",
      film_projector: "\u{1F4FD}\uFE0F",
      clapper: "\u{1F3AC}",
      tv: "\u{1F4FA}",
      camera: "\u{1F4F7}",
      camera_flash: "\u{1F4F8}",
      video_camera: "\u{1F4F9}",
      vhs: "\u{1F4FC}",
      mag: "\u{1F50D}",
      mag_right: "\u{1F50E}",
      candle: "\u{1F56F}\uFE0F",
      bulb: "\u{1F4A1}",
      flashlight: "\u{1F526}",
      izakaya_lantern: "\u{1F3EE}",
      lantern: "\u{1F3EE}",
      diya_lamp: "\u{1FA94}",
      notebook_with_decorative_cover: "\u{1F4D4}",
      closed_book: "\u{1F4D5}",
      book: "\u{1F4D6}",
      open_book: "\u{1F4D6}",
      green_book: "\u{1F4D7}",
      blue_book: "\u{1F4D8}",
      orange_book: "\u{1F4D9}",
      books: "\u{1F4DA}",
      notebook: "\u{1F4D3}",
      ledger: "\u{1F4D2}",
      page_with_curl: "\u{1F4C3}",
      scroll: "\u{1F4DC}",
      page_facing_up: "\u{1F4C4}",
      newspaper: "\u{1F4F0}",
      newspaper_roll: "\u{1F5DE}\uFE0F",
      bookmark_tabs: "\u{1F4D1}",
      bookmark: "\u{1F516}",
      label: "\u{1F3F7}\uFE0F",
      moneybag: "\u{1F4B0}",
      coin: "\u{1FA99}",
      yen: "\u{1F4B4}",
      dollar: "\u{1F4B5}",
      euro: "\u{1F4B6}",
      pound: "\u{1F4B7}",
      money_with_wings: "\u{1F4B8}",
      credit_card: "\u{1F4B3}",
      receipt: "\u{1F9FE}",
      chart: "\u{1F4B9}",
      envelope: "\u2709\uFE0F",
      email: "\u{1F4E7}",
      "e-mail": "\u{1F4E7}",
      incoming_envelope: "\u{1F4E8}",
      envelope_with_arrow: "\u{1F4E9}",
      outbox_tray: "\u{1F4E4}",
      inbox_tray: "\u{1F4E5}",
      package: "\u{1F4E6}",
      mailbox: "\u{1F4EB}",
      mailbox_closed: "\u{1F4EA}",
      mailbox_with_mail: "\u{1F4EC}",
      mailbox_with_no_mail: "\u{1F4ED}",
      postbox: "\u{1F4EE}",
      ballot_box: "\u{1F5F3}\uFE0F",
      pencil2: "\u270F\uFE0F",
      black_nib: "\u2712\uFE0F",
      fountain_pen: "\u{1F58B}\uFE0F",
      pen: "\u{1F58A}\uFE0F",
      paintbrush: "\u{1F58C}\uFE0F",
      crayon: "\u{1F58D}\uFE0F",
      memo: "\u{1F4DD}",
      pencil: "\u{1F4DD}",
      briefcase: "\u{1F4BC}",
      file_folder: "\u{1F4C1}",
      open_file_folder: "\u{1F4C2}",
      card_index_dividers: "\u{1F5C2}\uFE0F",
      date: "\u{1F4C5}",
      calendar: "\u{1F4C6}",
      spiral_notepad: "\u{1F5D2}\uFE0F",
      spiral_calendar: "\u{1F5D3}\uFE0F",
      card_index: "\u{1F4C7}",
      chart_with_upwards_trend: "\u{1F4C8}",
      chart_with_downwards_trend: "\u{1F4C9}",
      bar_chart: "\u{1F4CA}",
      clipboard: "\u{1F4CB}",
      pushpin: "\u{1F4CC}",
      round_pushpin: "\u{1F4CD}",
      paperclip: "\u{1F4CE}",
      paperclips: "\u{1F587}\uFE0F",
      straight_ruler: "\u{1F4CF}",
      triangular_ruler: "\u{1F4D0}",
      scissors: "\u2702\uFE0F",
      card_file_box: "\u{1F5C3}\uFE0F",
      file_cabinet: "\u{1F5C4}\uFE0F",
      wastebasket: "\u{1F5D1}\uFE0F",
      lock: "\u{1F512}",
      unlock: "\u{1F513}",
      lock_with_ink_pen: "\u{1F50F}",
      closed_lock_with_key: "\u{1F510}",
      key: "\u{1F511}",
      old_key: "\u{1F5DD}\uFE0F",
      hammer: "\u{1F528}",
      axe: "\u{1FA93}",
      pick: "\u26CF\uFE0F",
      hammer_and_pick: "\u2692\uFE0F",
      hammer_and_wrench: "\u{1F6E0}\uFE0F",
      dagger: "\u{1F5E1}\uFE0F",
      crossed_swords: "\u2694\uFE0F",
      gun: "\u{1F52B}",
      boomerang: "\u{1FA83}",
      bow_and_arrow: "\u{1F3F9}",
      shield: "\u{1F6E1}\uFE0F",
      carpentry_saw: "\u{1FA9A}",
      wrench: "\u{1F527}",
      screwdriver: "\u{1FA9B}",
      nut_and_bolt: "\u{1F529}",
      gear: "\u2699\uFE0F",
      clamp: "\u{1F5DC}\uFE0F",
      balance_scale: "\u2696\uFE0F",
      probing_cane: "\u{1F9AF}",
      link: "\u{1F517}",
      chains: "\u26D3\uFE0F",
      hook: "\u{1FA9D}",
      toolbox: "\u{1F9F0}",
      magnet: "\u{1F9F2}",
      ladder: "\u{1FA9C}",
      alembic: "\u2697\uFE0F",
      test_tube: "\u{1F9EA}",
      petri_dish: "\u{1F9EB}",
      dna: "\u{1F9EC}",
      microscope: "\u{1F52C}",
      telescope: "\u{1F52D}",
      satellite: "\u{1F4E1}",
      syringe: "\u{1F489}",
      drop_of_blood: "\u{1FA78}",
      pill: "\u{1F48A}",
      adhesive_bandage: "\u{1FA79}",
      stethoscope: "\u{1FA7A}",
      door: "\u{1F6AA}",
      elevator: "\u{1F6D7}",
      mirror: "\u{1FA9E}",
      window: "\u{1FA9F}",
      bed: "\u{1F6CF}\uFE0F",
      couch_and_lamp: "\u{1F6CB}\uFE0F",
      chair: "\u{1FA91}",
      toilet: "\u{1F6BD}",
      plunger: "\u{1FAA0}",
      shower: "\u{1F6BF}",
      bathtub: "\u{1F6C1}",
      mouse_trap: "\u{1FAA4}",
      razor: "\u{1FA92}",
      lotion_bottle: "\u{1F9F4}",
      safety_pin: "\u{1F9F7}",
      broom: "\u{1F9F9}",
      basket: "\u{1F9FA}",
      roll_of_paper: "\u{1F9FB}",
      bucket: "\u{1FAA3}",
      soap: "\u{1F9FC}",
      toothbrush: "\u{1FAA5}",
      sponge: "\u{1F9FD}",
      fire_extinguisher: "\u{1F9EF}",
      shopping_cart: "\u{1F6D2}",
      smoking: "\u{1F6AC}",
      coffin: "\u26B0\uFE0F",
      headstone: "\u{1FAA6}",
      funeral_urn: "\u26B1\uFE0F",
      moyai: "\u{1F5FF}",
      placard: "\u{1FAA7}",
      atm: "\u{1F3E7}",
      put_litter_in_its_place: "\u{1F6AE}",
      potable_water: "\u{1F6B0}",
      wheelchair: "\u267F",
      mens: "\u{1F6B9}",
      womens: "\u{1F6BA}",
      restroom: "\u{1F6BB}",
      baby_symbol: "\u{1F6BC}",
      wc: "\u{1F6BE}",
      passport_control: "\u{1F6C2}",
      customs: "\u{1F6C3}",
      baggage_claim: "\u{1F6C4}",
      left_luggage: "\u{1F6C5}",
      warning: "\u26A0\uFE0F",
      children_crossing: "\u{1F6B8}",
      no_entry: "\u26D4",
      no_entry_sign: "\u{1F6AB}",
      no_bicycles: "\u{1F6B3}",
      no_smoking: "\u{1F6AD}",
      do_not_litter: "\u{1F6AF}",
      "non-potable_water": "\u{1F6B1}",
      no_pedestrians: "\u{1F6B7}",
      no_mobile_phones: "\u{1F4F5}",
      underage: "\u{1F51E}",
      radioactive: "\u2622\uFE0F",
      biohazard: "\u2623\uFE0F",
      arrow_up: "\u2B06\uFE0F",
      arrow_upper_right: "\u2197\uFE0F",
      arrow_right: "\u27A1\uFE0F",
      arrow_lower_right: "\u2198\uFE0F",
      arrow_down: "\u2B07\uFE0F",
      arrow_lower_left: "\u2199\uFE0F",
      arrow_left: "\u2B05\uFE0F",
      arrow_upper_left: "\u2196\uFE0F",
      arrow_up_down: "\u2195\uFE0F",
      left_right_arrow: "\u2194\uFE0F",
      leftwards_arrow_with_hook: "\u21A9\uFE0F",
      arrow_right_hook: "\u21AA\uFE0F",
      arrow_heading_up: "\u2934\uFE0F",
      arrow_heading_down: "\u2935\uFE0F",
      arrows_clockwise: "\u{1F503}",
      arrows_counterclockwise: "\u{1F504}",
      back: "\u{1F519}",
      end: "\u{1F51A}",
      on: "\u{1F51B}",
      soon: "\u{1F51C}",
      top: "\u{1F51D}",
      place_of_worship: "\u{1F6D0}",
      atom_symbol: "\u269B\uFE0F",
      om: "\u{1F549}\uFE0F",
      star_of_david: "\u2721\uFE0F",
      wheel_of_dharma: "\u2638\uFE0F",
      yin_yang: "\u262F\uFE0F",
      latin_cross: "\u271D\uFE0F",
      orthodox_cross: "\u2626\uFE0F",
      star_and_crescent: "\u262A\uFE0F",
      peace_symbol: "\u262E\uFE0F",
      menorah: "\u{1F54E}",
      six_pointed_star: "\u{1F52F}",
      aries: "\u2648",
      taurus: "\u2649",
      gemini: "\u264A",
      cancer: "\u264B",
      leo: "\u264C",
      virgo: "\u264D",
      libra: "\u264E",
      scorpius: "\u264F",
      sagittarius: "\u2650",
      capricorn: "\u2651",
      aquarius: "\u2652",
      pisces: "\u2653",
      ophiuchus: "\u26CE",
      twisted_rightwards_arrows: "\u{1F500}",
      repeat: "\u{1F501}",
      repeat_one: "\u{1F502}",
      arrow_forward: "\u25B6\uFE0F",
      fast_forward: "\u23E9",
      next_track_button: "\u23ED\uFE0F",
      play_or_pause_button: "\u23EF\uFE0F",
      arrow_backward: "\u25C0\uFE0F",
      rewind: "\u23EA",
      previous_track_button: "\u23EE\uFE0F",
      arrow_up_small: "\u{1F53C}",
      arrow_double_up: "\u23EB",
      arrow_down_small: "\u{1F53D}",
      arrow_double_down: "\u23EC",
      pause_button: "\u23F8\uFE0F",
      stop_button: "\u23F9\uFE0F",
      record_button: "\u23FA\uFE0F",
      eject_button: "\u23CF\uFE0F",
      cinema: "\u{1F3A6}",
      low_brightness: "\u{1F505}",
      high_brightness: "\u{1F506}",
      signal_strength: "\u{1F4F6}",
      vibration_mode: "\u{1F4F3}",
      mobile_phone_off: "\u{1F4F4}",
      female_sign: "\u2640\uFE0F",
      male_sign: "\u2642\uFE0F",
      transgender_symbol: "\u26A7\uFE0F",
      heavy_multiplication_x: "\u2716\uFE0F",
      heavy_plus_sign: "\u2795",
      heavy_minus_sign: "\u2796",
      heavy_division_sign: "\u2797",
      infinity: "\u267E\uFE0F",
      bangbang: "\u203C\uFE0F",
      interrobang: "\u2049\uFE0F",
      question: "\u2753",
      grey_question: "\u2754",
      grey_exclamation: "\u2755",
      exclamation: "\u2757",
      heavy_exclamation_mark: "\u2757",
      wavy_dash: "\u3030\uFE0F",
      currency_exchange: "\u{1F4B1}",
      heavy_dollar_sign: "\u{1F4B2}",
      medical_symbol: "\u2695\uFE0F",
      recycle: "\u267B\uFE0F",
      fleur_de_lis: "\u269C\uFE0F",
      trident: "\u{1F531}",
      name_badge: "\u{1F4DB}",
      beginner: "\u{1F530}",
      o: "\u2B55",
      white_check_mark: "\u2705",
      ballot_box_with_check: "\u2611\uFE0F",
      heavy_check_mark: "\u2714\uFE0F",
      x: "\u274C",
      negative_squared_cross_mark: "\u274E",
      curly_loop: "\u27B0",
      loop: "\u27BF",
      part_alternation_mark: "\u303D\uFE0F",
      eight_spoked_asterisk: "\u2733\uFE0F",
      eight_pointed_black_star: "\u2734\uFE0F",
      sparkle: "\u2747\uFE0F",
      copyright: "\xA9\uFE0F",
      registered: "\xAE\uFE0F",
      tm: "\u2122\uFE0F",
      hash: "#\uFE0F\u20E3",
      asterisk: "*\uFE0F\u20E3",
      zero: "0\uFE0F\u20E3",
      one: "1\uFE0F\u20E3",
      two: "2\uFE0F\u20E3",
      three: "3\uFE0F\u20E3",
      four: "4\uFE0F\u20E3",
      five: "5\uFE0F\u20E3",
      six: "6\uFE0F\u20E3",
      seven: "7\uFE0F\u20E3",
      eight: "8\uFE0F\u20E3",
      nine: "9\uFE0F\u20E3",
      keycap_ten: "\u{1F51F}",
      capital_abcd: "\u{1F520}",
      abcd: "\u{1F521}",
      symbols: "\u{1F523}",
      abc: "\u{1F524}",
      a: "\u{1F170}\uFE0F",
      ab: "\u{1F18E}",
      b: "\u{1F171}\uFE0F",
      cl: "\u{1F191}",
      cool: "\u{1F192}",
      free: "\u{1F193}",
      information_source: "\u2139\uFE0F",
      id: "\u{1F194}",
      m: "\u24C2\uFE0F",
      new: "\u{1F195}",
      ng: "\u{1F196}",
      o2: "\u{1F17E}\uFE0F",
      ok: "\u{1F197}",
      parking: "\u{1F17F}\uFE0F",
      sos: "\u{1F198}",
      up: "\u{1F199}",
      vs: "\u{1F19A}",
      koko: "\u{1F201}",
      sa: "\u{1F202}\uFE0F",
      ideograph_advantage: "\u{1F250}",
      accept: "\u{1F251}",
      congratulations: "\u3297\uFE0F",
      secret: "\u3299\uFE0F",
      u6e80: "\u{1F235}",
      red_circle: "\u{1F534}",
      orange_circle: "\u{1F7E0}",
      yellow_circle: "\u{1F7E1}",
      green_circle: "\u{1F7E2}",
      large_blue_circle: "\u{1F535}",
      purple_circle: "\u{1F7E3}",
      brown_circle: "\u{1F7E4}",
      black_circle: "\u26AB",
      white_circle: "\u26AA",
      red_square: "\u{1F7E5}",
      orange_square: "\u{1F7E7}",
      yellow_square: "\u{1F7E8}",
      green_square: "\u{1F7E9}",
      blue_square: "\u{1F7E6}",
      purple_square: "\u{1F7EA}",
      brown_square: "\u{1F7EB}",
      black_large_square: "\u2B1B",
      white_large_square: "\u2B1C",
      black_medium_square: "\u25FC\uFE0F",
      white_medium_square: "\u25FB\uFE0F",
      black_medium_small_square: "\u25FE",
      white_medium_small_square: "\u25FD",
      black_small_square: "\u25AA\uFE0F",
      white_small_square: "\u25AB\uFE0F",
      large_orange_diamond: "\u{1F536}",
      large_blue_diamond: "\u{1F537}",
      small_orange_diamond: "\u{1F538}",
      small_blue_diamond: "\u{1F539}",
      small_red_triangle: "\u{1F53A}",
      small_red_triangle_down: "\u{1F53B}",
      diamond_shape_with_a_dot_inside: "\u{1F4A0}",
      radio_button: "\u{1F518}",
      white_square_button: "\u{1F533}",
      black_square_button: "\u{1F532}",
      checkered_flag: "\u{1F3C1}",
      triangular_flag_on_post: "\u{1F6A9}",
      crossed_flags: "\u{1F38C}",
      black_flag: "\u{1F3F4}",
      white_flag: "\u{1F3F3}\uFE0F",
      rainbow_flag: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
      transgender_flag: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
      pirate_flag: "\u{1F3F4}\u200D\u2620\uFE0F",
      ascension_island: "\u{1F1E6}\u{1F1E8}",
      andorra: "\u{1F1E6}\u{1F1E9}",
      united_arab_emirates: "\u{1F1E6}\u{1F1EA}",
      afghanistan: "\u{1F1E6}\u{1F1EB}",
      antigua_barbuda: "\u{1F1E6}\u{1F1EC}",
      anguilla: "\u{1F1E6}\u{1F1EE}",
      albania: "\u{1F1E6}\u{1F1F1}",
      armenia: "\u{1F1E6}\u{1F1F2}",
      angola: "\u{1F1E6}\u{1F1F4}",
      antarctica: "\u{1F1E6}\u{1F1F6}",
      argentina: "\u{1F1E6}\u{1F1F7}",
      american_samoa: "\u{1F1E6}\u{1F1F8}",
      austria: "\u{1F1E6}\u{1F1F9}",
      australia: "\u{1F1E6}\u{1F1FA}",
      aruba: "\u{1F1E6}\u{1F1FC}",
      aland_islands: "\u{1F1E6}\u{1F1FD}",
      azerbaijan: "\u{1F1E6}\u{1F1FF}",
      bosnia_herzegovina: "\u{1F1E7}\u{1F1E6}",
      barbados: "\u{1F1E7}\u{1F1E7}",
      bangladesh: "\u{1F1E7}\u{1F1E9}",
      belgium: "\u{1F1E7}\u{1F1EA}",
      burkina_faso: "\u{1F1E7}\u{1F1EB}",
      bulgaria: "\u{1F1E7}\u{1F1EC}",
      bahrain: "\u{1F1E7}\u{1F1ED}",
      burundi: "\u{1F1E7}\u{1F1EE}",
      benin: "\u{1F1E7}\u{1F1EF}",
      st_barthelemy: "\u{1F1E7}\u{1F1F1}",
      bermuda: "\u{1F1E7}\u{1F1F2}",
      brunei: "\u{1F1E7}\u{1F1F3}",
      bolivia: "\u{1F1E7}\u{1F1F4}",
      caribbean_netherlands: "\u{1F1E7}\u{1F1F6}",
      brazil: "\u{1F1E7}\u{1F1F7}",
      bahamas: "\u{1F1E7}\u{1F1F8}",
      bhutan: "\u{1F1E7}\u{1F1F9}",
      bouvet_island: "\u{1F1E7}\u{1F1FB}",
      botswana: "\u{1F1E7}\u{1F1FC}",
      belarus: "\u{1F1E7}\u{1F1FE}",
      belize: "\u{1F1E7}\u{1F1FF}",
      canada: "\u{1F1E8}\u{1F1E6}",
      cocos_islands: "\u{1F1E8}\u{1F1E8}",
      congo_kinshasa: "\u{1F1E8}\u{1F1E9}",
      central_african_republic: "\u{1F1E8}\u{1F1EB}",
      congo_brazzaville: "\u{1F1E8}\u{1F1EC}",
      switzerland: "\u{1F1E8}\u{1F1ED}",
      cote_divoire: "\u{1F1E8}\u{1F1EE}",
      cook_islands: "\u{1F1E8}\u{1F1F0}",
      chile: "\u{1F1E8}\u{1F1F1}",
      cameroon: "\u{1F1E8}\u{1F1F2}",
      cn: "\u{1F1E8}\u{1F1F3}",
      colombia: "\u{1F1E8}\u{1F1F4}",
      clipperton_island: "\u{1F1E8}\u{1F1F5}",
      costa_rica: "\u{1F1E8}\u{1F1F7}",
      cuba: "\u{1F1E8}\u{1F1FA}",
      cape_verde: "\u{1F1E8}\u{1F1FB}",
      curacao: "\u{1F1E8}\u{1F1FC}",
      christmas_island: "\u{1F1E8}\u{1F1FD}",
      cyprus: "\u{1F1E8}\u{1F1FE}",
      czech_republic: "\u{1F1E8}\u{1F1FF}",
      de: "\u{1F1E9}\u{1F1EA}",
      diego_garcia: "\u{1F1E9}\u{1F1EC}",
      djibouti: "\u{1F1E9}\u{1F1EF}",
      denmark: "\u{1F1E9}\u{1F1F0}",
      dominica: "\u{1F1E9}\u{1F1F2}",
      dominican_republic: "\u{1F1E9}\u{1F1F4}",
      algeria: "\u{1F1E9}\u{1F1FF}",
      ceuta_melilla: "\u{1F1EA}\u{1F1E6}",
      ecuador: "\u{1F1EA}\u{1F1E8}",
      estonia: "\u{1F1EA}\u{1F1EA}",
      egypt: "\u{1F1EA}\u{1F1EC}",
      western_sahara: "\u{1F1EA}\u{1F1ED}",
      eritrea: "\u{1F1EA}\u{1F1F7}",
      es: "\u{1F1EA}\u{1F1F8}",
      ethiopia: "\u{1F1EA}\u{1F1F9}",
      eu: "\u{1F1EA}\u{1F1FA}",
      european_union: "\u{1F1EA}\u{1F1FA}",
      finland: "\u{1F1EB}\u{1F1EE}",
      fiji: "\u{1F1EB}\u{1F1EF}",
      falkland_islands: "\u{1F1EB}\u{1F1F0}",
      micronesia: "\u{1F1EB}\u{1F1F2}",
      faroe_islands: "\u{1F1EB}\u{1F1F4}",
      fr: "\u{1F1EB}\u{1F1F7}",
      gabon: "\u{1F1EC}\u{1F1E6}",
      gb: "\u{1F1EC}\u{1F1E7}",
      uk: "\u{1F1EC}\u{1F1E7}",
      grenada: "\u{1F1EC}\u{1F1E9}",
      georgia: "\u{1F1EC}\u{1F1EA}",
      french_guiana: "\u{1F1EC}\u{1F1EB}",
      guernsey: "\u{1F1EC}\u{1F1EC}",
      ghana: "\u{1F1EC}\u{1F1ED}",
      gibraltar: "\u{1F1EC}\u{1F1EE}",
      greenland: "\u{1F1EC}\u{1F1F1}",
      gambia: "\u{1F1EC}\u{1F1F2}",
      guinea: "\u{1F1EC}\u{1F1F3}",
      guadeloupe: "\u{1F1EC}\u{1F1F5}",
      equatorial_guinea: "\u{1F1EC}\u{1F1F6}",
      greece: "\u{1F1EC}\u{1F1F7}",
      south_georgia_south_sandwich_islands: "\u{1F1EC}\u{1F1F8}",
      guatemala: "\u{1F1EC}\u{1F1F9}",
      guam: "\u{1F1EC}\u{1F1FA}",
      guinea_bissau: "\u{1F1EC}\u{1F1FC}",
      guyana: "\u{1F1EC}\u{1F1FE}",
      hong_kong: "\u{1F1ED}\u{1F1F0}",
      heard_mcdonald_islands: "\u{1F1ED}\u{1F1F2}",
      honduras: "\u{1F1ED}\u{1F1F3}",
      croatia: "\u{1F1ED}\u{1F1F7}",
      haiti: "\u{1F1ED}\u{1F1F9}",
      hungary: "\u{1F1ED}\u{1F1FA}",
      canary_islands: "\u{1F1EE}\u{1F1E8}",
      indonesia: "\u{1F1EE}\u{1F1E9}",
      ireland: "\u{1F1EE}\u{1F1EA}",
      israel: "\u{1F1EE}\u{1F1F1}",
      isle_of_man: "\u{1F1EE}\u{1F1F2}",
      india: "\u{1F1EE}\u{1F1F3}",
      british_indian_ocean_territory: "\u{1F1EE}\u{1F1F4}",
      iraq: "\u{1F1EE}\u{1F1F6}",
      iran: "\u{1F1EE}\u{1F1F7}",
      iceland: "\u{1F1EE}\u{1F1F8}",
      it: "\u{1F1EE}\u{1F1F9}",
      jersey: "\u{1F1EF}\u{1F1EA}",
      jamaica: "\u{1F1EF}\u{1F1F2}",
      jordan: "\u{1F1EF}\u{1F1F4}",
      jp: "\u{1F1EF}\u{1F1F5}",
      kenya: "\u{1F1F0}\u{1F1EA}",
      kyrgyzstan: "\u{1F1F0}\u{1F1EC}",
      cambodia: "\u{1F1F0}\u{1F1ED}",
      kiribati: "\u{1F1F0}\u{1F1EE}",
      comoros: "\u{1F1F0}\u{1F1F2}",
      st_kitts_nevis: "\u{1F1F0}\u{1F1F3}",
      north_korea: "\u{1F1F0}\u{1F1F5}",
      kr: "\u{1F1F0}\u{1F1F7}",
      kuwait: "\u{1F1F0}\u{1F1FC}",
      cayman_islands: "\u{1F1F0}\u{1F1FE}",
      kazakhstan: "\u{1F1F0}\u{1F1FF}",
      laos: "\u{1F1F1}\u{1F1E6}",
      lebanon: "\u{1F1F1}\u{1F1E7}",
      st_lucia: "\u{1F1F1}\u{1F1E8}",
      liechtenstein: "\u{1F1F1}\u{1F1EE}",
      sri_lanka: "\u{1F1F1}\u{1F1F0}",
      liberia: "\u{1F1F1}\u{1F1F7}",
      lesotho: "\u{1F1F1}\u{1F1F8}",
      lithuania: "\u{1F1F1}\u{1F1F9}",
      luxembourg: "\u{1F1F1}\u{1F1FA}",
      latvia: "\u{1F1F1}\u{1F1FB}",
      libya: "\u{1F1F1}\u{1F1FE}",
      morocco: "\u{1F1F2}\u{1F1E6}",
      monaco: "\u{1F1F2}\u{1F1E8}",
      moldova: "\u{1F1F2}\u{1F1E9}",
      montenegro: "\u{1F1F2}\u{1F1EA}",
      st_martin: "\u{1F1F2}\u{1F1EB}",
      madagascar: "\u{1F1F2}\u{1F1EC}",
      marshall_islands: "\u{1F1F2}\u{1F1ED}",
      macedonia: "\u{1F1F2}\u{1F1F0}",
      mali: "\u{1F1F2}\u{1F1F1}",
      myanmar: "\u{1F1F2}\u{1F1F2}",
      mongolia: "\u{1F1F2}\u{1F1F3}",
      macau: "\u{1F1F2}\u{1F1F4}",
      northern_mariana_islands: "\u{1F1F2}\u{1F1F5}",
      martinique: "\u{1F1F2}\u{1F1F6}",
      mauritania: "\u{1F1F2}\u{1F1F7}",
      montserrat: "\u{1F1F2}\u{1F1F8}",
      malta: "\u{1F1F2}\u{1F1F9}",
      mauritius: "\u{1F1F2}\u{1F1FA}",
      maldives: "\u{1F1F2}\u{1F1FB}",
      malawi: "\u{1F1F2}\u{1F1FC}",
      mexico: "\u{1F1F2}\u{1F1FD}",
      malaysia: "\u{1F1F2}\u{1F1FE}",
      mozambique: "\u{1F1F2}\u{1F1FF}",
      namibia: "\u{1F1F3}\u{1F1E6}",
      new_caledonia: "\u{1F1F3}\u{1F1E8}",
      niger: "\u{1F1F3}\u{1F1EA}",
      norfolk_island: "\u{1F1F3}\u{1F1EB}",
      nigeria: "\u{1F1F3}\u{1F1EC}",
      nicaragua: "\u{1F1F3}\u{1F1EE}",
      netherlands: "\u{1F1F3}\u{1F1F1}",
      norway: "\u{1F1F3}\u{1F1F4}",
      nepal: "\u{1F1F3}\u{1F1F5}",
      nauru: "\u{1F1F3}\u{1F1F7}",
      niue: "\u{1F1F3}\u{1F1FA}",
      new_zealand: "\u{1F1F3}\u{1F1FF}",
      oman: "\u{1F1F4}\u{1F1F2}",
      panama: "\u{1F1F5}\u{1F1E6}",
      peru: "\u{1F1F5}\u{1F1EA}",
      french_polynesia: "\u{1F1F5}\u{1F1EB}",
      papua_new_guinea: "\u{1F1F5}\u{1F1EC}",
      philippines: "\u{1F1F5}\u{1F1ED}",
      pakistan: "\u{1F1F5}\u{1F1F0}",
      poland: "\u{1F1F5}\u{1F1F1}",
      st_pierre_miquelon: "\u{1F1F5}\u{1F1F2}",
      pitcairn_islands: "\u{1F1F5}\u{1F1F3}",
      puerto_rico: "\u{1F1F5}\u{1F1F7}",
      palestinian_territories: "\u{1F1F5}\u{1F1F8}",
      portugal: "\u{1F1F5}\u{1F1F9}",
      palau: "\u{1F1F5}\u{1F1FC}",
      paraguay: "\u{1F1F5}\u{1F1FE}",
      qatar: "\u{1F1F6}\u{1F1E6}",
      reunion: "\u{1F1F7}\u{1F1EA}",
      romania: "\u{1F1F7}\u{1F1F4}",
      serbia: "\u{1F1F7}\u{1F1F8}",
      ru: "\u{1F1F7}\u{1F1FA}",
      rwanda: "\u{1F1F7}\u{1F1FC}",
      saudi_arabia: "\u{1F1F8}\u{1F1E6}",
      solomon_islands: "\u{1F1F8}\u{1F1E7}",
      seychelles: "\u{1F1F8}\u{1F1E8}",
      sudan: "\u{1F1F8}\u{1F1E9}",
      sweden: "\u{1F1F8}\u{1F1EA}",
      singapore: "\u{1F1F8}\u{1F1EC}",
      st_helena: "\u{1F1F8}\u{1F1ED}",
      slovenia: "\u{1F1F8}\u{1F1EE}",
      svalbard_jan_mayen: "\u{1F1F8}\u{1F1EF}",
      slovakia: "\u{1F1F8}\u{1F1F0}",
      sierra_leone: "\u{1F1F8}\u{1F1F1}",
      san_marino: "\u{1F1F8}\u{1F1F2}",
      senegal: "\u{1F1F8}\u{1F1F3}",
      somalia: "\u{1F1F8}\u{1F1F4}",
      suriname: "\u{1F1F8}\u{1F1F7}",
      south_sudan: "\u{1F1F8}\u{1F1F8}",
      sao_tome_principe: "\u{1F1F8}\u{1F1F9}",
      el_salvador: "\u{1F1F8}\u{1F1FB}",
      sint_maarten: "\u{1F1F8}\u{1F1FD}",
      syria: "\u{1F1F8}\u{1F1FE}",
      swaziland: "\u{1F1F8}\u{1F1FF}",
      tristan_da_cunha: "\u{1F1F9}\u{1F1E6}",
      turks_caicos_islands: "\u{1F1F9}\u{1F1E8}",
      chad: "\u{1F1F9}\u{1F1E9}",
      french_southern_territories: "\u{1F1F9}\u{1F1EB}",
      togo: "\u{1F1F9}\u{1F1EC}",
      thailand: "\u{1F1F9}\u{1F1ED}",
      tajikistan: "\u{1F1F9}\u{1F1EF}",
      tokelau: "\u{1F1F9}\u{1F1F0}",
      timor_leste: "\u{1F1F9}\u{1F1F1}",
      turkmenistan: "\u{1F1F9}\u{1F1F2}",
      tunisia: "\u{1F1F9}\u{1F1F3}",
      tonga: "\u{1F1F9}\u{1F1F4}",
      tr: "\u{1F1F9}\u{1F1F7}",
      trinidad_tobago: "\u{1F1F9}\u{1F1F9}",
      tuvalu: "\u{1F1F9}\u{1F1FB}",
      taiwan: "\u{1F1F9}\u{1F1FC}",
      tanzania: "\u{1F1F9}\u{1F1FF}",
      ukraine: "\u{1F1FA}\u{1F1E6}",
      uganda: "\u{1F1FA}\u{1F1EC}",
      us_outlying_islands: "\u{1F1FA}\u{1F1F2}",
      united_nations: "\u{1F1FA}\u{1F1F3}",
      us: "\u{1F1FA}\u{1F1F8}",
      uruguay: "\u{1F1FA}\u{1F1FE}",
      uzbekistan: "\u{1F1FA}\u{1F1FF}",
      vatican_city: "\u{1F1FB}\u{1F1E6}",
      st_vincent_grenadines: "\u{1F1FB}\u{1F1E8}",
      venezuela: "\u{1F1FB}\u{1F1EA}",
      british_virgin_islands: "\u{1F1FB}\u{1F1EC}",
      us_virgin_islands: "\u{1F1FB}\u{1F1EE}",
      vietnam: "\u{1F1FB}\u{1F1F3}",
      vanuatu: "\u{1F1FB}\u{1F1FA}",
      wallis_futuna: "\u{1F1FC}\u{1F1EB}",
      samoa: "\u{1F1FC}\u{1F1F8}",
      kosovo: "\u{1F1FD}\u{1F1F0}",
      yemen: "\u{1F1FE}\u{1F1EA}",
      mayotte: "\u{1F1FE}\u{1F1F9}",
      south_africa: "\u{1F1FF}\u{1F1E6}",
      zambia: "\u{1F1FF}\u{1F1F2}",
      zimbabwe: "\u{1F1FF}\u{1F1FC}",
      england: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
      scotland: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
      wales: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
    };
  }
});

// node_modules/markdown-it-emoji/lib/data/shortcuts.js
var require_shortcuts = __commonJS({
  "node_modules/markdown-it-emoji/lib/data/shortcuts.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      angry: [">:(", ">:-("],
      blush: [':")', ':-")'],
      broken_heart: ["</3", "<\\3"],
      confused: [":/", ":-/"],
      cry: [":'(", ":'-(", ":,(", ":,-("],
      frowning: [":(", ":-("],
      heart: ["<3"],
      imp: ["]:(", "]:-("],
      innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
      joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
      kissing: [":*", ":-*"],
      laughing: ["x-)", "X-)"],
      neutral_face: [":|", ":-|"],
      open_mouth: [":o", ":-o", ":O", ":-O"],
      rage: [":@", ":-@"],
      smile: [":D", ":-D"],
      smiley: [":)", ":-)"],
      smiling_imp: ["]:)", "]:-)"],
      sob: [":,'(", ":,'-(", ";(", ";-("],
      stuck_out_tongue: [":P", ":-P"],
      sunglasses: ["8-)", "B-)"],
      sweat: [",:(", ",:-("],
      sweat_smile: [",:)", ",:-)"],
      unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
      wink: [";)", ";-)"]
    };
  }
});

// node_modules/markdown-it-emoji/lib/render.js
var require_render = __commonJS({
  "node_modules/markdown-it-emoji/lib/render.js"(exports2, module2) {
    "use strict";
    module2.exports = function emoji_html(tokens, idx) {
      return tokens[idx].content;
    };
  }
});

// node_modules/markdown-it-emoji/lib/replace.js
var require_replace = __commonJS({
  "node_modules/markdown-it-emoji/lib/replace.js"(exports2, module2) {
    "use strict";
    module2.exports = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
      var arrayReplaceAt = md.utils.arrayReplaceAt, ucm = md.utils.lib.ucmicro, ZPCc = new RegExp([ucm.Z.source, ucm.P.source, ucm.Cc.source].join("|"));
      function splitTextToken(text5, level, Token) {
        var token, last_pos = 0, nodes = [];
        text5.replace(replaceRE, function(match, offset, src) {
          var emoji_name;
          if (shortcuts.hasOwnProperty(match)) {
            emoji_name = shortcuts[match];
            if (offset > 0 && !ZPCc.test(src[offset - 1])) {
              return;
            }
            if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
              return;
            }
          } else {
            emoji_name = match.slice(1, -1);
          }
          if (offset > last_pos) {
            token = new Token("text", "", 0);
            token.content = text5.slice(last_pos, offset);
            nodes.push(token);
          }
          token = new Token("emoji", "", 0);
          token.markup = emoji_name;
          token.content = emojies[emoji_name];
          nodes.push(token);
          last_pos = offset + match.length;
        });
        if (last_pos < text5.length) {
          token = new Token("text", "", 0);
          token.content = text5.slice(last_pos);
          nodes.push(token);
        }
        return nodes;
      }
      return function emoji_replace(state) {
        var i, j, l, tokens, token, blockTokens = state.tokens, autolinkLevel = 0;
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline") {
            continue;
          }
          tokens = blockTokens[j].children;
          for (i = tokens.length - 1; i >= 0; i--) {
            token = tokens[i];
            if (token.type === "link_open" || token.type === "link_close") {
              if (token.info === "auto") {
                autolinkLevel -= token.nesting;
              }
            }
            if (token.type === "text" && autolinkLevel === 0 && scanRE.test(token.content)) {
              blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
            }
          }
        }
      };
    };
  }
});

// node_modules/markdown-it-emoji/lib/normalize_opts.js
var require_normalize_opts = __commonJS({
  "node_modules/markdown-it-emoji/lib/normalize_opts.js"(exports2, module2) {
    "use strict";
    function quoteRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    module2.exports = function normalize_opts(options) {
      var emojies = options.defs, shortcuts;
      if (options.enabled.length) {
        emojies = Object.keys(emojies).reduce(function(acc, key) {
          if (options.enabled.indexOf(key) >= 0) {
            acc[key] = emojies[key];
          }
          return acc;
        }, {});
      }
      shortcuts = Object.keys(options.shortcuts).reduce(function(acc, key) {
        if (!emojies[key]) {
          return acc;
        }
        if (Array.isArray(options.shortcuts[key])) {
          options.shortcuts[key].forEach(function(alias) {
            acc[alias] = key;
          });
          return acc;
        }
        acc[options.shortcuts[key]] = key;
        return acc;
      }, {});
      var keys2 = Object.keys(emojies), names;
      if (keys2.length === 0) {
        names = "^$";
      } else {
        names = keys2.map(function(name) {
          return ":" + name + ":";
        }).concat(Object.keys(shortcuts)).sort().reverse().map(function(name) {
          return quoteRE(name);
        }).join("|");
      }
      var scanRE = RegExp(names);
      var replaceRE = RegExp(names, "g");
      return {
        defs: emojies,
        shortcuts,
        scanRE,
        replaceRE
      };
    };
  }
});

// node_modules/markdown-it-emoji/bare.js
var require_bare = __commonJS({
  "node_modules/markdown-it-emoji/bare.js"(exports2, module2) {
    "use strict";
    var emoji_html = require_render();
    var emoji_replace = require_replace();
    var normalize_opts = require_normalize_opts();
    module2.exports = function emoji_plugin(md, options) {
      var defaults = {
        defs: {},
        shortcuts: {},
        enabled: []
      };
      var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
      md.renderer.rules.emoji = emoji_html;
      md.core.ruler.push("emoji", emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
    };
  }
});

// node_modules/markdown-it-emoji/index.js
var require_markdown_it_emoji = __commonJS({
  "node_modules/markdown-it-emoji/index.js"(exports2, module2) {
    "use strict";
    var emojies_defs = require_full();
    var emojies_shortcuts = require_shortcuts();
    var bare_emoji_plugin = require_bare();
    module2.exports = function emoji_plugin(md, options) {
      var defaults = {
        defs: emojies_defs,
        shortcuts: emojies_shortcuts,
        enabled: []
      };
      var opts = md.utils.assign({}, defaults, options || {});
      bare_emoji_plugin(md, opts);
    };
  }
});

// src/util/config.js
var vscode = require("vscode");
function getKey(key) {
  return vscode.workspace.getConfiguration("shirkhanMarkdown").get(key);
}

// src/config.js
function getActiveConvert() {
  return getKey("activeConvert");
}

// src/util/storage.js
function setGlobalStorageKey(context, key, value) {
  context.globalState.update(key, value);
}
function getGlobalStorageKey(context, key) {
  return context.globalState.get(key);
}

// src/storage.js
function setConvertState(context, value) {
  return setGlobalStorageKey(context, "convert-state", value);
}
function getConvertState(context) {
  return getGlobalStorageKey(context, "convert-state");
}

// src/util/registerCommand.js
var vscode2 = require("vscode");
function registerCommand(context, commandUniqName, handlerFunc, thisArg = void 0) {
  let disposable = vscode2.commands.registerCommand(commandUniqName, handlerFunc, thisArg);
  context.subscriptions.push(disposable);
}

// src/util/message.js
var vscode3 = require("vscode");
var showInfoMessage = (message) => {
  vscode3.window.showInformationMessage(message);
};

// node_modules/bail/index.js
function bail(error) {
  if (error) {
    throw error;
  }
}

// node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require_is_buffer(), 1);
var import_extend = __toESM(require_extend(), 1);

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

// node_modules/trough/index.js
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware(...parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/vfile/lib/index.js
var import_is_buffer = __toESM(require_is_buffer(), 1);

// node_modules/unist-util-stringify-position/index.js
var own = {}.hasOwnProperty;
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own.call(value, "position") || own.call(value, "type")) {
    return position(value.position);
  }
  if (own.call(value, "start") || own.call(value, "end")) {
    return position(value);
  }
  if (own.call(value, "line") || own.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/index.js
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    var parts = [null, null];
    var position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    var index2;
    super();
    if (typeof place === "string") {
      origin = place;
      place = null;
    }
    if (typeof origin === "string") {
      index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position2 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position2 = place;
      } else if ("line" in place || "column" in place) {
        position2.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.line = position2.start.line;
    this.column = position2.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position2;
    this.file;
    this.fatal;
    this.url;
    this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// node_modules/vfile/lib/minpath.js
var import_path = __toESM(require("path"), 1);

// node_modules/vfile/lib/minproc.js
var import_process = __toESM(require("process"), 1);
var proc = import_process.default;

// node_modules/vfile/lib/minurl.js
var import_url = __toESM(require("url"), 1);

// node_modules/vfile/lib/minurl.shared.js
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
}

// node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
var VFile = class {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || (0, import_is_buffer.default)(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = proc.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop))
        this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path3) {
    if (isUrl(path3)) {
      path3 = (0, import_url.fileURLToPath)(path3);
    }
    assertNonEmpty(path3, "path");
    if (this.path !== path3) {
      this.history.push(path3);
    }
  }
  get dirname() {
    return typeof this.path === "string" ? import_path.default.dirname(this.path) : void 0;
  }
  set dirname(dirname) {
    assertPath(this.basename, "dirname");
    this.path = import_path.default.join(dirname || "", this.basename);
  }
  get basename() {
    return typeof this.path === "string" ? import_path.default.basename(this.path) : void 0;
  }
  set basename(basename) {
    assertNonEmpty(basename, "basename");
    assertPart(basename, "basename");
    this.path = import_path.default.join(this.dirname || "", basename);
  }
  get extname() {
    return typeof this.path === "string" ? import_path.default.extname(this.path) : void 0;
  }
  set extname(extname) {
    assertPart(extname, "extname");
    assertPath(this.dirname, "extname");
    if (extname) {
      if (extname.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = import_path.default.join(this.dirname, this.stem + (extname || ""));
  }
  get stem() {
    return typeof this.path === "string" ? import_path.default.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = import_path.default.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(import_path.default.sep)) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + import_path.default.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path3, name) {
  if (!path3) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}

// node_modules/unified/lib/index.js
var unified = base().freeze();
var own2 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor2.data = data;
  processor2.Parser = void 0;
  processor2.Compiler = void 0;
  processor2.freeze = freeze;
  processor2.attachers = attachers;
  processor2.use = use;
  processor2.parse = parse2;
  processor2.stringify = stringify;
  processor2.run = run;
  processor2.runSync = runSync;
  processor2.process = process2;
  processor2.processSync = processSync;
  return processor2;
  function processor2() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data((0, import_extend.default)(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor2;
      }
      return own2.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor2;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor2;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[1] = void 0;
      }
      const transformer = attacher.call(processor2, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor2;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor2;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry = attachers[index2];
          break;
        }
      }
      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value2)) {
          value2 = (0, import_extend.default)(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse2(doc) {
    processor2.freeze();
    const file = vfile(doc);
    const Parser = processor2.Parser;
    assertParser("parse", Parser);
    if (newable(Parser, "parse")) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function stringify(node, doc) {
    processor2.freeze();
    const file = vfile(doc);
    const Compiler = processor2.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run(node, doc, callback) {
    assertNode(node);
    processor2.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor2.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process2(doc, callback) {
    processor2.freeze();
    assertParser("process", processor2.Parser);
    assertCompiler("process", processor2.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor2.run(processor2.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor2.stringify(tree, file2);
          if (result === void 0 || result === null) {
          } else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor2.freeze();
    assertParser("processSync", processor2.Parser);
    assertCompiler("processSync", processor2.Compiler);
    const file = vfile(doc);
    processor2.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own2.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!isPlainObject(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || (0, import_is_buffer2.default)(value);
}

// node_modules/shirkhan-retext/dist/shirkhan-retext.es.js
var numerical = /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/;
var punctuation = /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var whiteSpace = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var isAscii = (char) => /[\x00-\xFF]/.test(char);
var isAsciiAZ = (char) => /[a-zA-Z]/.test(char);
var isPunctuation = (char) => punctuation.test(char);
var isWhiteSpace = (char) => whiteSpace.test(char);
var isNumber = (char) => numerical.test(char);
function baseParser(...params) {
  const parser = (value, file) => {
    return {
      type: "RootNode",
      children: Array.from(value).map((char) => {
        return {
          type: "CharNode",
          value: char.toLocaleLowerCase(),
          ascii: isAscii(char),
          asciiAZ: isAsciiAZ(char),
          punctuation: isPunctuation(char),
          whiteSpace: isWhiteSpace(char),
          number: isNumber(char)
        };
      })
    };
  };
  Object.assign(this, { Parser: parser });
}
function toString(node, separator = "") {
  let index2 = -1;
  if (!node || !Array.isArray(node) && !node.type) {
    throw new Error("Expected node, not `" + node + "`");
  }
  if (typeof node.value === "string")
    return node.value;
  const children = (Array.isArray(node) ? node : node.children) || [];
  if (children.length === 1 && "value" in children[0]) {
    return children[0].value;
  }
  const values = [];
  while (++index2 < children.length) {
    values[index2] = toString(children[index2], separator);
  }
  return values.join(separator);
}
function baseCompiler(...params) {
  const compiler2 = (tree, file) => {
    return toString(tree);
  };
  Object.assign(this, { Compiler: compiler2 });
}
var convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index22 = -1;
    while (++index22 < checks.length) {
      if (checks[index22].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all2);
  function all2(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}
function color(d) {
  return d;
}
var CONTINUE = true;
var SKIP = "skip";
var EXIT = false;
var visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit22, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit22;
    function visit22() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
var TRANSLATIONAL_MARK = "/";
var SEPARATE_MARK = "h";
var HEMZE$1 = "\u0626";
var table = [
  {
    ug: "\u0626",
    uly: "x",
    khan: "x",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0627",
    uly: "a",
    khan: "a",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D5",
    uly: "e",
    khan: "e",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D0",
    uly: "\xEB",
    khan: "eh",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0649",
    uly: "i",
    khan: "i",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0648",
    uly: "o",
    khan: "o",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C7",
    uly: "u",
    khan: "u",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C6",
    uly: "\xF6",
    khan: "c",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C8",
    uly: "\xFC",
    khan: "v",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0628",
    uly: "b",
    khan: "b",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u067E",
    uly: "p",
    khan: "p",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062A",
    uly: "t",
    khan: "t",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062C",
    uly: "j",
    khan: "j",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0686",
    uly: "ch",
    khan: "ch",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062E",
    uly: "x",
    khan: "kh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062F",
    uly: "d",
    khan: "d",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0631",
    uly: "r",
    khan: "r",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0632",
    uly: "z",
    khan: "z",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0698",
    uly: "zh",
    khan: "zh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0633",
    uly: "s",
    khan: "s",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0634",
    uly: "sh",
    khan: "sh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u063A",
    uly: "gh",
    khan: "gh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0642",
    uly: "q",
    khan: "q",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0641",
    uly: "f",
    khan: "f",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0643",
    uly: "k",
    khan: "k",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AF",
    uly: "g",
    khan: "g",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AD",
    uly: "ng",
    khan: "ng",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0644",
    uly: "l",
    khan: "l",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0645",
    uly: "m",
    khan: "m",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n" + SEPARATE_MARK,
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06BE",
    uly: "h",
    khan: "wh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06CB",
    uly: "w",
    khan: "w",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u064A",
    uly: "y",
    khan: "y",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u061F",
    uly: "?",
    khan: "?",
    volwes: false,
    punctuation: true
  },
  {
    ug: "\u060C",
    uly: ",",
    khan: ",",
    volwes: false,
    punctuation: true
  },
  {
    ug: "\u061B",
    uly: ";",
    khan: ";",
    volwes: false,
    punctuation: true
  }
];
function getHemze() {
  return HEMZE$1;
}
function getMap({ from, to }, dataSet = table) {
  let m = {};
  dataSet.forEach((item) => {
    m[item[from]] = item[to];
  });
  return m;
}
function getVolwes() {
  return table.filter((item) => item.volwes);
}
var khanMap = getMap({ from: "khan", to: "ug" });
var volwes = getVolwes().map((item) => item.ug);
var HEMZE = getHemze();
function khanToUg() {
  return (tree) => {
    visit(tree, "CharNode", (node, index2, parent) => {
      if (node.value === "/") {
        node.value = node.value.replace("/", "");
      }
      const preNode = parent.children[index2 - 1];
      if (node.convert) {
        node.value = khanMap[node.value] || node.value;
        if ((!preNode || preNode.value === " " || preNode.punctuation) && volwes.includes(node.value)) {
          node.value = HEMZE + node.value;
        }
      }
    });
  };
}
function toKhan() {
  return (root2) => {
    const children = root2.children;
    let len = children.length;
    let convertStatus2 = true;
    const deletePos = [];
    for (let index2 = 0; index2 < len; index2++) {
      const preNode = children[index2 - 1];
      const node = children[index2];
      if (node.value === TRANSLATIONAL_MARK) {
        convertStatus2 = !convertStatus2;
        continue;
      }
      if (!node.asciiAZ && !node.punctuation)
        continue;
      node["convert"] = convertStatus2;
      if (convertStatus2 && node.value === "h" && preNode.value.length === 1) {
        node.value = preNode.value + "h";
        preNode.value = "";
        deletePos.push(index2 - 1);
      }
      if (convertStatus2 && preNode && preNode.value === "n" && node.value === "g") {
        node.value = preNode.value + node.value;
        preNode.value = "";
        deletePos.push(index2 - 1);
      }
    }
    root2.children = children.filter((item, index2) => !deletePos.includes(index2));
  };
}
var ugMap = getMap({ from: "ug", to: "khan" });
var ugChars = Object.keys(ugMap);
var convertStatus = false;
function converUgCharToKhan(node, index2, parent) {
  var _a;
  node.value = ugMap[node.value];
  const next = parent.children[index2 + 1];
  if (node.value === "nh" && (next == null ? void 0 : next.value) !== "\u06AF") {
    node.value = "n";
  }
  const preNode = parent.children[index2 - 1];
  if (((preNode == null ? void 0 : preNode.value) === " " || !preNode) && node.value === "x") {
    node.value = "";
  }
  if (convertStatus) {
    convertStatus = false;
    let i = index2;
    while (((_a = parent.children[i - 1]) == null ? void 0 : _a.asciiAZ) === false) {
      i = i - 1;
      if (i < 0)
        break;
    }
    if (i > 0) {
      parent.children[i].value = "/" + parent.children[i].value;
    }
  }
}
function ugToKhan() {
  return (tree) => {
    visit(tree, "CharNode", (node, index2, parent) => {
      if (ugChars.includes(node.value)) {
        converUgCharToKhan(node, index2, parent);
        return;
      }
      if (node.asciiAZ && !convertStatus) {
        convertStatus = true;
        node.value = "/" + node.value;
        return;
      }
      if (convertStatus && index2 === parent.children.length - 1) {
        convertStatus = false;
        node.value = node.value + "/";
      }
    });
  };
}

// node_modules/mdast-util-to-string/index.js
function toString2(node, options) {
  var { includeImageAlt = true } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt);
  }
  return result.join("");
}

// node_modules/micromark-util-chunked/index.js
function splice(list3, start, remove, items) {
  const end = list3.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    [].splice.apply(list3, parameters);
  } else {
    if (remove)
      [].splice.apply(list3, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      [].splice.apply(list3, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list3, items) {
  if (list3.length > 0) {
    splice(list3, list3.length, 0, items);
    return list3;
  }
  return items;
}

// node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code3;
    for (code3 in right) {
      if (!hasOwnProperty.call(left, code3))
        left[code3] = [];
      const value = right[code3];
      constructs(left[code3], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1;
  const before = [];
  while (++index2 < list3.length) {
    ;
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  }
  splice(existing, 0, 0, before);
}

// node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code3) {
  return code3 !== null && (code3 < 32 || code3 === 127);
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
var unicodeWhitespace = regexCheck(/\s/);
var unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && regex.test(String.fromCharCode(code3));
  }
}

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok3, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok3(code3);
  }
  function prefix(code3) {
    if (markdownSpace(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok3(code3);
  }
}

// node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous4;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    effects.enter("paragraph");
    return lineStart(code3);
  }
  function lineStart(code3) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous4
    });
    if (previous4) {
      previous4.next = token;
    }
    previous4 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/micromark/lib/initialize/document.js
var document = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point2;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point2 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
      return checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code3);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code3);
      }
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3);
  }
  function thereIsANewContainer(code3) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code3);
  }
  function documentContinued(code3) {
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code3);
  }
  function containerContinue(code3) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code3);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point2;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point2 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok3, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok3, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text5;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text5 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text5, context]
          ]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [
            ["exit", text5, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok3) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous4 = this.previous;
  const before = classifyCharacter(previous4);
  let marker;
  return start;
  function start(code3) {
    effects.enter("attentionSequence");
    marker = code3;
    return sequence(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return sequence;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code3);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous4);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok3(code3);
  }
}
function movePoint(point2, offset) {
  point2.column += offset;
  point2.offset += offset;
  point2._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok3, nok) {
  let size = 1;
  return start;
  function start(code3) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code3) ? emailAtext(code3) : nok(code3);
  }
  function schemeOrEmailAtext(code3) {
    return code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3) ? schemeInsideOrEmailAtext(code3) : emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      return urlInside;
    }
    if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
      effects.consume(code3);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code3);
  }
  function urlInside(code3) {
    if (code3 === 62) {
      effects.exit("autolinkProtocol");
      return end(code3);
    }
    if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return urlInside;
  }
  function emailAtext(code3) {
    if (code3 === 64) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code3)) {
      effects.consume(code3);
      return emailAtext;
    }
    return nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code3 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code3);
    }
    return emailValue(code3);
  }
  function emailValue(code3) {
    if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
      effects.consume(code3);
      return code3 === 45 ? emailValue : emailLabel;
    }
    return nok(code3);
  }
  function end(code3) {
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok3;
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok3, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code3);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownSpace(code3)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code3);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok3;
    }
    effects.exit("blockQuotePrefix");
    return ok3(code3);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok3, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code3) {
    if (asciiPunctuation(code3)) {
      effects.enter("characterEscapeValue");
      effects.consume(code3);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/character-entities/index.js
var characterEntities = {
  AEli: "\xC6",
  AElig: "\xC6",
  AM: "&",
  AMP: "&",
  Aacut: "\xC1",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acir: "\xC2",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrav: "\xC0",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Arin: "\xC5",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atild: "\xC3",
  Atilde: "\xC3",
  Aum: "\xC4",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COP: "\xA9",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedi: "\xC7",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ET: "\xD0",
  ETH: "\xD0",
  Eacut: "\xC9",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecir: "\xCA",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrav: "\xC8",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Eum: "\xCB",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  G: ">",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacut: "\xCD",
  Iacute: "\xCD",
  Icir: "\xCE",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrav: "\xCC",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Ium: "\xCF",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  L: "<",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: "\n",
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntild: "\xD1",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacut: "\xD3",
  Oacute: "\xD3",
  Ocir: "\xD4",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograv: "\xD2",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslas: "\xD8",
  Oslash: "\xD8",
  Otild: "\xD5",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Oum: "\xD6",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUO: '"',
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  RE: "\xAE",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THOR: "\xDE",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacut: "\xDA",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucir: "\xDB",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrav: "\xD9",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uum: "\xDC",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacut: "\xDD",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacut: "\xE1",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acir: "\xE2",
  acirc: "\xE2",
  acut: "\xB4",
  acute: "\xB4",
  acy: "\u0430",
  aeli: "\xE6",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrav: "\xE0",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  am: "&",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  arin: "\xE5",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atild: "\xE3",
  atilde: "\xE3",
  aum: "\xE4",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvba: "\xA6",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedi: "\xE7",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedi: "\xB8",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cen: "\xA2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  cop: "\xA9",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curre: "\xA4",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  de: "\xB0",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divid: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacut: "\xE9",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\xEA",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrav: "\xE8",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  et: "\xF0",
  eth: "\xF0",
  eum: "\xEB",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac1: "\xBC",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac3: "\xBE",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  g: ">",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacut: "\xED",
  iacute: "\xED",
  ic: "\u2063",
  icir: "\xEE",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexc: "\xA1",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrav: "\xEC",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iques: "\xBF",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  ium: "\xEF",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laqu: "\xAB",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  l: "<",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  mac: "\xAF",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micr: "\xB5",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middo: "\xB7",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbs: "\xA0",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  no: "\xAC",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntild: "\xF1",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacut: "\xF3",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\xF4",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograv: "\xF2",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\xBA",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslas: "\xF8",
  oslash: "\xF8",
  osol: "\u2298",
  otild: "\xF5",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  oum: "\xF6",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\xB6",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusm: "\xB1",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  poun: "\xA3",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quo: '"',
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raqu: "\xBB",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  re: "\xAE",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sec: "\xA7",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  sh: "\xAD",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup: "\u2283",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szli: "\xDF",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thor: "\xFE",
  thorn: "\xFE",
  tilde: "\u02DC",
  time: "\xD7",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacut: "\xFA",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucir: "\xFB",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrav: "\xF9",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  um: "\xA8",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uum: "\xFC",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacut: "\xFD",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  ye: "\xA5",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yum: "\xFF",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/decode-named-character-reference/index.js
var own3 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own3.call(characterEntities, value) ? characterEntities[value] : false;
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok3, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code3) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code3);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code3);
  }
  function numeric(code3) {
    if (code3 === 88 || code3 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code3);
  }
  function value(code3) {
    let token;
    if (code3 === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code3);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok3;
    }
    if (test(code3) && size++ < max) {
      effects.consume(code3);
      return value;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok3, nok) {
  const self = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine2 = {
    tokenize: tokenizeNonLazyLine2,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code3;
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code3) : factorySpace(effects, infoOpen, "whitespace")(code3);
  }
  function infoOpen(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return openAfter(code3);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code3);
  }
  function info(code3) {
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code3);
    }
    if (code3 === 96 && code3 === marker)
      return nok(code3);
    effects.consume(code3);
    return info;
  }
  function infoAfter(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return openAfter(code3);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code3);
  }
  function meta(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code3);
    }
    if (code3 === 96 && code3 === marker)
      return nok(code3);
    effects.consume(code3);
    return meta;
  }
  function openAfter(code3) {
    effects.exit("codeFencedFence");
    return self.interrupt ? ok3(code3) : contentStart(code3);
  }
  function contentStart(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(nonLazyLine2, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code3);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code3);
  }
  function contentContinue(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return contentStart(code3);
    }
    effects.consume(code3);
    return contentContinue;
  }
  function after(code3) {
    effects.exit("codeFenced");
    return ok3(code3);
  }
  function tokenizeNonLazyLine2(effects2, ok4, nok2) {
    const self2 = this;
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code3) {
      return self2.parser.lazy[self2.now().line] ? nok2(code3) : ok4(code3);
    }
  }
  function tokenizeClosingFence(effects2, ok4, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code3) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code3);
    }
    function closingSequence(code3) {
      if (code3 === marker) {
        effects2.consume(code3);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code3);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code3);
    }
    function closingSequenceEnd(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("codeFencedFence");
        return ok4(code3);
      }
      return nok2(code3);
    }
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function tokenizeCodeIndented(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterStartPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code3) : nok(code3);
  }
  function afterPrefix(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code3);
    }
    effects.enter("codeFlowValue");
    return content3(code3);
  }
  function content3(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code3);
    }
    effects.consume(code3);
    return content3;
  }
  function after(code3) {
    effects.exit("codeIndented");
    return ok3(code3);
  }
}
function tokenizeIndentedContent(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return start;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok3(code3) : markdownLineEnding(code3) ? start(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok3, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code3) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code3);
  }
  function openingSequence(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code3);
  }
  function gap(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code3);
    }
    if (code3 === 32) {
      effects.enter("space");
      effects.consume(code3);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
      effects.exit("codeTextData");
      return gap(code3);
    }
    effects.consume(code3);
    return data;
  }
  function closingSequence(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok3(code3);
    }
    token.type = "codeTextData";
    return data(code3);
  }
}

// node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous4;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous4) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous4 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}

// node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok3) {
  let previous4;
  return start;
  function start(code3) {
    effects.enter("content");
    previous4 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      return contentEnd(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code3);
    }
    effects.consume(code3);
    return data;
  }
  function contentEnd(code3) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok3(code3);
  }
  function contentContinue(code3) {
    effects.consume(code3);
    effects.exit("chunkContent");
    previous4.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous4
    });
    previous4 = previous4.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok3, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code3) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok3(code3);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok3)(code3);
  }
}

// node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code3) {
    if (code3 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code3 === null || code3 === 41 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code3);
  }
  function destinationEnclosedBefore(code3) {
    if (code3 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code3);
  }
  function destinationEnclosed(code3) {
    if (code3 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code3);
    }
    if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code3) {
    if (code3 === 60 || code3 === 62 || code3 === 92) {
      effects.consume(code3);
      return destinationEnclosed;
    }
    return destinationEnclosed(code3);
  }
  function destinationRaw(code3) {
    if (code3 === 40) {
      if (++balance > limit)
        return nok(code3);
      effects.consume(code3);
      return destinationRaw;
    }
    if (code3 === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok3(code3);
      }
      effects.consume(code3);
      return destinationRaw;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      if (balance)
        return nok(code3);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok3(code3);
    }
    if (asciiControl(code3))
      return nok(code3);
    effects.consume(code3);
    return code3 === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code3) {
    if (code3 === 40 || code3 === 41 || code3 === 92) {
      effects.consume(code3);
      return destinationRaw;
    }
    return destinationRaw(code3);
  }
}

// node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 && !data || code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code3);
  }
  function label(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    data = data || !markdownSpace(code3);
    return code3 === 92 ? labelEscape : label;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return label;
    }
    return label(code3);
  }
}

// node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    marker = code3 === 40 ? 41 : code3;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code3) {
    if (code3 === marker) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    return atTitleBreak(code3);
  }
  function atTitleBreak(code3) {
    if (code3 === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code3);
  }
  function title(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      return atTitleBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? titleEscape : title;
  }
  function titleEscape(code3) {
    if (code3 === marker || code3 === 92) {
      effects.consume(code3);
      return title;
    }
    return title(code3);
  }
}

// node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok3) {
  let seen;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code3);
    }
    return ok3(code3);
  }
}

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok3, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code3) {
    effects.enter("definition");
    return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code3);
  }
  function labelAfter(code3) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code3);
  }
  function after(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("definition");
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeTitle(effects, ok3, nok) {
  return start;
  function start(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, before)(code3) : nok(code3);
  }
  function before(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3);
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (markdownLineEnding(code3)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok3(code3);
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text5;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text5 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content3, context],
      ["enter", text5, context],
      ["exit", text5, context],
      ["exit", content3, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok3, nok) {
  const self = this;
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code3);
  }
  function fenceOpenInside(code3) {
    if (code3 === 35 && size++ < 6) {
      effects.consume(code3);
      return fenceOpenInside;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingSequence");
      return self.interrupt ? ok3(code3) : headingBreak(code3);
    }
    return nok(code3);
  }
  function headingBreak(code3) {
    if (code3 === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("atxHeading");
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, headingBreak, "whitespace")(code3);
    }
    effects.enter("atxHeadingText");
    return data(code3);
  }
  function sequence(code3) {
    if (code3 === 35) {
      effects.consume(code3);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingText");
      return headingBreak(code3);
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok3, nok) {
  const self = this;
  let kind;
  let startTag;
  let buffer2;
  let index2;
  let marker;
  return start;
  function start(code3) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationStart;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      kind = 3;
      return self.interrupt ? ok3 : continuationDeclarationInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer2 = String.fromCharCode(code3);
      startTag = true;
      return tagName;
    }
    return nok(code3);
  }
  function declarationStart(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      kind = 2;
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      kind = 5;
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      kind = 4;
      return self.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return self.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function cdataOpenInside(code3) {
    if (code3 === buffer2.charCodeAt(index2++)) {
      effects.consume(code3);
      return index2 === buffer2.length ? self.interrupt ? ok3 : continuation : cdataOpenInside;
    }
    return nok(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer2 = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function tagName(code3) {
    if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      if (code3 !== 47 && startTag && htmlRawNames.includes(buffer2.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok3(code3) : continuation(code3);
      }
      if (htmlBlockNames.includes(buffer2.toLowerCase())) {
        kind = 6;
        if (code3 === 47) {
          effects.consume(code3);
          return basicSelfClosing;
        }
        return self.interrupt ? ok3(code3) : continuation(code3);
      }
      kind = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : startTag ? completeAttributeNameBefore(code3) : completeClosingTagAfter(code3);
    }
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      buffer2 += String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function basicSelfClosing(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return self.interrupt ? ok3 : continuation;
    }
    return nok(code3);
  }
  function completeClosingTagAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeClosingTagAfter;
    }
    return completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return completeEnd;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameBefore;
    }
    return completeEnd(code3);
  }
  function completeAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code3);
  }
  function completeAttributeValueQuoted(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    if (code3 === marker) {
      effects.consume(code3);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code3);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
      return completeAttributeNameAfter(code3);
    }
    effects.consume(code3);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
      return completeAttributeNameBefore(code3);
    }
    return nok(code3);
  }
  function completeEnd(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function completeAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAfter;
    }
    return code3 === null || markdownLineEnding(code3) ? continuation(code3) : nok(code3);
  }
  function continuation(code3) {
    if (code3 === 45 && kind === 2) {
      effects.consume(code3);
      return continuationCommentInside;
    }
    if (code3 === 60 && kind === 1) {
      effects.consume(code3);
      return continuationRawTagOpen;
    }
    if (code3 === 62 && kind === 4) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 63 && kind === 3) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    if (code3 === 93 && kind === 5) {
      effects.consume(code3);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code3) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return continuationAtLineEnding(code3);
    }
    effects.consume(code3);
    return continuation;
  }
  function continuationAtLineEnding(code3) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code3);
  }
  function htmlContinueStart(code3) {
    if (code3 === null) {
      return done(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code3);
    }
    effects.enter("htmlFlowData");
    return continuation(code3);
  }
  function htmlLineEnd(effects2, ok4, nok2) {
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code3) {
      return self.parser.lazy[self.now().line] ? nok2(code3) : ok4(code3);
    }
  }
  function continuationCommentInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      buffer2 = "";
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationRawEndTag(code3) {
    if (code3 === 62 && htmlRawNames.includes(buffer2.toLowerCase())) {
      effects.consume(code3);
      return continuationClose;
    }
    if (asciiAlpha(code3) && buffer2.length < 8) {
      effects.consume(code3);
      buffer2 += String.fromCharCode(code3);
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationCharacterDataInside(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 45 && kind === 2) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationClose(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return done(code3);
    }
    effects.consume(code3);
    return continuationClose;
  }
  function done(code3) {
    effects.exit("htmlFlow");
    return ok3(code3);
  }
}
function tokenizeNextBlank(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok3, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok3, nok) {
  const self = this;
  let marker;
  let buffer2;
  let index2;
  let returnState;
  return start;
  function start(code3) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instruction;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentOpen;
    }
    if (code3 === 91) {
      effects.consume(code3);
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return declaration;
    }
    return nok(code3);
  }
  function commentOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentStart;
    }
    return nok(code3);
  }
  function commentStart(code3) {
    if (code3 === null || code3 === 62) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentStartDash;
    }
    return comment(code3);
  }
  function commentStartDash(code3) {
    if (code3 === null || code3 === 62) {
      return nok(code3);
    }
    return comment(code3);
  }
  function comment(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = comment;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return comment;
  }
  function commentClose(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return end;
    }
    return comment(code3);
  }
  function cdataOpen(code3) {
    if (code3 === buffer2.charCodeAt(index2++)) {
      effects.consume(code3);
      return index2 === buffer2.length ? cdata : cdataOpen;
    }
    return nok(code3);
  }
  function cdata(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = cdata;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return cdata;
  }
  function cdataClose(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function cdataEnd(code3) {
    if (code3 === 62) {
      return end(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function declaration(code3) {
    if (code3 === null || code3 === 62) {
      return end(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = declaration;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return declaration;
  }
  function instruction(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instructionClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = instruction;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return instruction;
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return nok(code3);
  }
  function tagClose(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    if (markdownLineEnding(code3)) {
      returnState = tagCloseBetween;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagCloseBetween;
    }
    return end(code3);
  }
  function tagOpen(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenBetween(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return end;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenBetween;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenBetween;
    }
    return end(code3);
  }
  function tagOpenAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code3);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    if (code3 === 62 || code3 === 47 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code3) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code3) {
    effects.enter("htmlTextData");
    return returnState(code3);
  }
  function end(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  let token;
  while (++index2 < events.length) {
    token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text5 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text5, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [
    ["exit", text5, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok3, nok) {
  const self = this;
  let index2 = self.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart) {
      return nok(code3);
    }
    if (labelStart._inactive)
      return balanced(code3);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code3) {
    if (code3 === 40) {
      return effects.attempt(resourceConstruct, ok3, defined ? ok3 : balanced)(code3);
    }
    if (code3 === 91) {
      return effects.attempt(fullReferenceConstruct, ok3, defined ? effects.attempt(collapsedReferenceConstruct, ok3, balanced) : balanced)(code3);
    }
    return defined ? ok3(code3) : balanced(code3);
  }
  function balanced(code3) {
    labelStart._balanced = true;
    return nok(code3);
  }
}
function tokenizeResource(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code3);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code3) {
    if (code3 === 41) {
      return end(code3);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
  }
  function destinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, between)(code3) : end(code3);
  }
  function between(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3);
    }
    return end(code3);
  }
  function end(code3) {
    if (code3 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok3;
    }
    return nok(code3);
  }
}
function tokenizeFullReference(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code3);
  }
  function afterLabel(code3) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok3(code3) : nok(code3);
  }
}
function tokenizeCollapsedReference(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code3);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code3);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 91) {
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok3) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, ok3, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok3, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("thematicBreak");
    marker = code3;
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, atBreak, "whitespace")(code3);
    }
    if (size < 3 || code3 !== null && !markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.exit("thematicBreak");
    return ok3(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok3, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code3) {
    const kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      }
      if (!self.interrupt || code3 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code3);
      }
    }
    return nok(code3);
  }
  function inside(code3) {
    if (asciiDigit(code3) && ++size < 10) {
      effects.consume(code3);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code3);
    }
    return nok(code3);
  }
  function atMarker(code3) {
    effects.enter("listItemMarker");
    effects.consume(code3);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code3;
    return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code3) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    if (markdownSpace(code3)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code3);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code3);
  }
  function endOfPrefix(code3) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok3(code3);
  }
}
function tokenizeListContinuation(effects, ok3, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(effects, ok3, "listItemIndent", self.containerState.size + 1)(code3);
  }
  function notBlank(code3) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code3)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code3);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code3);
  }
  function notInCurrentItem(code3) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok3, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
  }
}
function tokenizeIndent(effects, ok3, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok3(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text5;
  let definition3;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text5 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition3 && events[index2][1].type === "definition") {
        definition3 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text5][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text5][1].type = "setextHeadingText";
  if (definition3) {
    events.splice(text5, 0, ["enter", heading2, context]);
    events.splice(definition3 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = Object.assign({}, events[definition3][1].end);
  } else {
    events[content3][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok3, nok) {
  const self = this;
  let index2 = self.events.length;
  let marker;
  let paragraph2;
  while (index2--) {
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start;
  function start(code3) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code3;
      return closingSequence(code3);
    }
    return nok(code3);
  }
  function closingSequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code3);
  }
  function closingSequenceEnd(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("setextHeadingLine");
      return ok3(code3);
    }
    return nok(code3);
  }
}

// node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}

// node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text5 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text5(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("data");
      effects.consume(code3);
      return data;
    }
    function data(code3) {
      if (atBreak(code3)) {
        effects.exit("data");
        return text5(code3);
      }
      effects.consume(code3);
      return data;
    }
    function atBreak(code3) {
      if (code3 === null) {
        return true;
      }
      const list3 = constructs2[code3];
      let index2 = -1;
      if (list3) {
        while (++index2 < list3.length) {
          const item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point2 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit: exit3,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point2);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point2._index < chunks.length) {
      const chunk = chunks[point2._index];
      if (typeof chunk === "string") {
        chunkIndex = point2._index;
        if (point2._bufferIndex < 0) {
          point2._bufferIndex = 0;
        }
        while (point2._index === chunkIndex && point2._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point2._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code3) {
    consumed = void 0;
    expectedCode = code3;
    state = state(code3);
  }
  function consume(code3) {
    if (markdownLineEnding(code3)) {
      point2.line++;
      point2.column = 1;
      point2.offset += code3 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code3 !== -1) {
      point2.column++;
      point2.offset++;
    }
    if (point2._bufferIndex < 0) {
      point2._index++;
    } else {
      point2._bufferIndex++;
      if (point2._bufferIndex === chunks[point2._index].length) {
        point2._bufferIndex = -1;
        point2._index++;
      }
    }
    context.previous = code3;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit3(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map3) {
        return start;
        function start(code3) {
          const def = code3 !== null && map3[code3];
          const all2 = code3 !== null && map3.null;
          const list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list3)(code3);
        }
      }
      function handleListOfConstructs(list3) {
        listOfConstructs = list3;
        constructIndex = 0;
        if (list3.length === 0) {
          return bogusState;
        }
        return handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code3);
          }
          return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok3, nok)(code3);
        }
      }
      function ok3(code3) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code3) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point2 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point2.line in columnStart && point2.column < 2) {
      point2.column = columnStart[point2.line];
      point2.offset += columnStart[point2.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document2,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document2 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// node_modules/micromark/lib/parse.js
function parse(options = {}) {
  const constructs2 = combineExtensions([constructs_exports].concat(options.extensions || []));
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(string),
    text: create(text)
  };
  return parser;
  function create(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer2 = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code3;
    value = buffer2 + value.toString(encoding);
    startPosition = 0;
    buffer2 = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code3 = value.charCodeAt(endPosition);
      if (!match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code3) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer2)
        chunks.push(buffer2);
      chunks.push(null);
    }
    return chunks;
  }
}

// node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base2) {
  const code3 = Number.parseInt(value, base2);
  if (code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || code3 > 126 && code3 < 160 || code3 > 55295 && code3 < 57344 || code3 > 64975 && code3 < 65008 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || code3 > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code3);
}

// node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var own4 = {}.hasOwnProperty;
var fromMarkdown = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
};
function compiler(options = {}) {
  const config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition3),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer2),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer2,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit3,
      buffer: buffer2,
      resume,
      setData,
      getData
    };
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own4.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
      } else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem3 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem3, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point2(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point2(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point2(token.end);
    return node;
  }
  function resume() {
    return toString2(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text5();
      tail.position = {
        start: point2(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    const ancestor = this.stack[this.stack.length - 2];
    const string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node.type === "link") {
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decodeNamedCharacterReference(data2);
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition3() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text5() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own4.call(extension2, key)) {
      const list3 = key === "canContainEols" || key === "transforms";
      const maybe = own4.call(combined, key) ? combined[key] : void 0;
      const left = maybe || (combined[key] = list3 ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list3) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const parser = (doc) => {
    const settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser });
}

// node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// node_modules/micromark-extension-math/lib/math-flow.js
var mathFlow = {
  tokenize: tokenizeMathFenced,
  concrete: true
};
var nonLazyLine = {
  tokenize: tokenizeNonLazyLine,
  partial: true
};
function tokenizeMathFenced(effects, ok3, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  return start;
  function start(code3) {
    effects.enter("mathFlow");
    effects.enter("mathFlowFence");
    effects.enter("mathFlowFenceSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 36) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("mathFlowFenceSequence");
    return sizeOpen < 2 ? nok(code3) : factorySpace(effects, metaOpen, "whitespace")(code3);
  }
  function metaOpen(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return openAfter(code3);
    }
    effects.enter("mathFlowFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code3);
  }
  function meta(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("mathFlowFenceMeta");
      return openAfter(code3);
    }
    if (code3 === 36)
      return nok(code3);
    effects.consume(code3);
    return meta;
  }
  function openAfter(code3) {
    effects.exit("mathFlowFence");
    return self.interrupt ? ok3(code3) : contentStart(code3);
  }
  function contentStart(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(nonLazyLine, effects.attempt({
        tokenize: tokenizeClosingFence,
        partial: true
      }, after, initialSize ? factorySpace(effects, contentStart, "linePrefix", initialSize + 1) : contentStart), after)(code3);
    }
    effects.enter("mathFlowValue");
    return contentContinue(code3);
  }
  function contentContinue(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("mathFlowValue");
      return contentStart(code3);
    }
    effects.consume(code3);
    return contentContinue;
  }
  function after(code3) {
    effects.exit("mathFlow");
    return ok3(code3);
  }
  function tokenizeClosingFence(effects2, ok4, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", 4);
    function closingPrefixAfter(code3) {
      effects2.enter("mathFlowFence");
      effects2.enter("mathFlowFenceSequence");
      return closingSequence(code3);
    }
    function closingSequence(code3) {
      if (code3 === 36) {
        effects2.consume(code3);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code3);
      effects2.exit("mathFlowFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code3);
    }
    function closingSequenceEnd(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("mathFlowFence");
        return ok4(code3);
      }
      return nok2(code3);
    }
  }
}
function tokenizeNonLazyLine(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code3) {
    return self.parser.lazy[self.now().line] ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-extension-math/lib/math-text.js
function mathText(options = {}) {
  let single = options.singleDollarTextMath;
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    tokenize: tokenizeMathText,
    resolve: resolveMathText,
    previous: previous2
  };
  function tokenizeMathText(effects, ok3, nok) {
    const self = this;
    let sizeOpen = 0;
    let size;
    let token;
    return start;
    function start(code3) {
      effects.enter("mathText");
      effects.enter("mathTextSequence");
      return openingSequence(code3);
    }
    function openingSequence(code3) {
      if (code3 === 36) {
        effects.consume(code3);
        sizeOpen++;
        return openingSequence;
      }
      if (sizeOpen < 2 && !single)
        return nok(code3);
      effects.exit("mathTextSequence");
      return gap(code3);
    }
    function gap(code3) {
      if (code3 === null) {
        return nok(code3);
      }
      if (code3 === 36) {
        token = effects.enter("mathTextSequence");
        size = 0;
        return closingSequence(code3);
      }
      if (code3 === 32) {
        effects.enter("space");
        effects.consume(code3);
        effects.exit("space");
        return gap;
      }
      if (markdownLineEnding(code3)) {
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return gap;
      }
      effects.enter("mathTextData");
      return data(code3);
    }
    function data(code3) {
      if (code3 === null || code3 === 32 || code3 === 36 || markdownLineEnding(code3)) {
        effects.exit("mathTextData");
        return gap(code3);
      }
      effects.consume(code3);
      return data;
    }
    function closingSequence(code3) {
      if (code3 === 36) {
        effects.consume(code3);
        size++;
        return closingSequence;
      }
      if (size === sizeOpen) {
        effects.exit("mathTextSequence");
        effects.exit("mathText");
        return ok3(code3);
      }
      token.type = "mathTextData";
      return data(code3);
    }
  }
}
function resolveMathText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "mathTextData") {
        events[tailExitIndex][1].type = "mathTextPadding";
        events[headEnterIndex][1].type = "mathTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "mathTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous2(code3) {
  return code3 !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}

// node_modules/micromark-extension-math/lib/syntax.js
function math(options) {
  return {
    flow: {
      [36]: mathFlow
    },
    text: {
      [36]: mathText(options)
    }
  };
}

// node_modules/longest-streak/index.js
function longestStreak(value, character) {
  const source = String(value);
  let index2 = source.indexOf(character);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof character !== "string" || character.length !== 1) {
    throw new Error("Expected character");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + 1;
    index2 = source.indexOf(character, expected);
  }
  return max;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
function patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
  }
  return pattern._compiled;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list3, none) {
  if (!list3) {
    return none;
  }
  if (typeof list3 === "string") {
    list3 = [list3];
  }
  let index2 = -1;
  while (++index2 < list3.length) {
    if (stack.includes(list3[index2])) {
      return true;
    }
  }
  return false;
}

// node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(context, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index2 = -1;
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    if (!patternInScope(context.stack, pattern)) {
      continue;
    }
    const expression = patternCompile(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position2 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position2)) {
        if (infos[position2].before && !before) {
          infos[position2].before = false;
        }
        if (infos[position2].after && !after) {
          infos[position2].after = false;
        }
      } else {
        positions.push(position2);
        infos[position2] = { before, after };
      }
    }
  }
  positions.sort(numerical2);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index2 = -1;
  while (++index2 < positions.length) {
    const position2 = positions[index2];
    if (position2 < start || position2 >= end) {
      continue;
    }
    if (position2 + 1 < end && positions[index2 + 1] === position2 + 1 && infos[position2].after && !infos[position2 + 1].before && !infos[position2 + 1].after || positions[index2 - 1] === position2 - 1 && infos[position2].before && !infos[position2 - 1].before && !infos[position2 - 1].after) {
      continue;
    }
    if (start !== position2) {
      result.push(escapeBackslashes(value.slice(start, position2), "\\"));
    }
    start = position2;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position2)) && (!config.encode || !config.encode.includes(value.charAt(position2)))) {
      result.push("\\");
    } else {
      result.push("&#x" + value.charCodeAt(position2).toString(16).toUpperCase() + ";");
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical2(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index2 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index2 < positions.length) {
    if (start !== positions[index2]) {
      results.push(value.slice(start, positions[index2]));
    }
    results.push("\\");
    start = positions[index2];
  }
  results.push(value.slice(start));
  return results.join("");
}

// node_modules/mdast-util-math/index.js
function mathFromMarkdown() {
  return {
    enter: {
      mathFlow: enterMathFlow,
      mathFlowFenceMeta: enterMathFlowMeta,
      mathText: enterMathText
    },
    exit: {
      mathFlow: exitMathFlow,
      mathFlowFence: exitMathFlowFence,
      mathFlowFenceMeta: exitMathFlowMeta,
      mathFlowValue: exitMathData,
      mathText: exitMathText,
      mathTextData: exitMathData
    }
  };
  function enterMathFlow(token) {
    this.enter({
      type: "math",
      meta: null,
      value: "",
      data: {
        hName: "div",
        hProperties: { className: ["math", "math-display"] },
        hChildren: [{ type: "text", value: "" }]
      }
    }, token);
  }
  function enterMathFlowMeta() {
    this.buffer();
  }
  function exitMathFlowMeta() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data;
  }
  function exitMathFlowFence() {
    if (this.getData("mathFlowInside"))
      return;
    this.buffer();
    this.setData("mathFlowInside", true);
  }
  function exitMathFlow(token) {
    const data = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    const node = this.exit(token);
    node.value = data;
    node.data.hChildren[0].value = data;
    this.setData("mathFlowInside");
  }
  function enterMathText(token) {
    this.enter({
      type: "inlineMath",
      value: "",
      data: {
        hName: "span",
        hProperties: { className: ["math", "math-inline"] },
        hChildren: [{ type: "text", value: "" }]
      }
    }, token);
    this.buffer();
  }
  function exitMathText(token) {
    const data = this.resume();
    const node = this.exit(token);
    node.value = data;
    node.data.hChildren[0].value = data;
  }
  function exitMathData(token) {
    this.config.enter.data.call(this, token);
    this.config.exit.data.call(this, token);
  }
}
function mathToMarkdown(options = {}) {
  let single = options.singleDollarTextMath;
  if (single === null || single === void 0) {
    single = true;
  }
  inlineMath.peek = inlineMathPeek;
  return {
    unsafe: [
      { character: "\r", inConstruct: ["mathFlowMeta"] },
      { character: "\r", inConstruct: ["mathFlowMeta"] },
      single ? { character: "$", inConstruct: ["mathFlowMeta", "phrasing"] } : {
        character: "$",
        after: "\\$",
        inConstruct: ["mathFlowMeta", "phrasing"]
      },
      { atBreak: true, character: "$", after: "\\$" }
    ],
    handlers: { math: math2, inlineMath }
  };
  function math2(node, _, context) {
    const raw = node.value || "";
    const fence = "$".repeat(Math.max(longestStreak(raw, "$") + 1, 2));
    const exit3 = context.enter("mathFlow");
    let value = fence;
    if (node.meta) {
      const subexit = context.enter("mathFlowMeta");
      value += safe(context, node.meta, {
        before: "$",
        after: " ",
        encode: ["$"]
      });
      subexit();
    }
    value += "\n";
    if (raw) {
      value += raw + "\n";
    }
    value += fence;
    exit3();
    return value;
  }
  function inlineMath(node) {
    const value = node.value || "";
    let size = 1;
    let pad = "";
    if (!single)
      size++;
    while (new RegExp("(^|[^$])" + "\\$".repeat(size) + "([^$]|$)").test(value)) {
      size++;
    }
    if (/[^ \r\n]/.test(value) && (/[ \r\n$]/.test(value.charAt(0)) || /[ \r\n$]/.test(value.charAt(value.length - 1)))) {
      pad = " ";
    }
    const sequence = "$".repeat(size);
    return sequence + pad + value + pad + sequence;
  }
  function inlineMathPeek() {
    return "$";
  }
}

// node_modules/remark-math/index.js
function remarkMath(options = {}) {
  const data = this.data();
  add("micromarkExtensions", math(options));
  add("fromMarkdownExtensions", mathFromMarkdown());
  add("toMarkdownExtensions", mathToMarkdown(options));
  function add(field, value) {
    const list3 = data[field] ? data[field] : data[field] = [];
    list3.push(value);
  }
}

// node_modules/zwitch/index.js
var own5 = {}.hasOwnProperty;
function zwitch(key, options) {
  var settings = options || {};
  function one2(value) {
    var fn = one2.invalid;
    var handlers = one2.handlers;
    if (value && own5.call(value, key)) {
      fn = own5.call(handlers, value[key]) ? handlers[value[key]] : one2.unknown;
    }
    if (fn) {
      return fn.apply(this, arguments);
    }
  }
  one2.handlers = settings.handlers || {};
  one2.invalid = settings.invalid;
  one2.unknown = settings.unknown;
  return one2;
}

// node_modules/mdast-util-to-markdown/lib/configure.js
function configure2(base2, extension2) {
  let index2 = -1;
  let key;
  if (extension2.extensions) {
    while (++index2 < extension2.extensions.length) {
      configure2(base2, extension2.extensions[index2]);
    }
  }
  for (key in extension2) {
    if (key === "extensions") {
    } else if (key === "unsafe" || key === "join") {
      base2[key] = [...base2[key] || [], ...extension2[key] || []];
    } else if (key === "handlers") {
      base2[key] = Object.assign(base2[key], extension2[key] || {});
    } else {
      base2.options[key] = extension2[key];
    }
  }
  return base2;
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(context.handle(child, parent, context, { before: "\n", after: "\n" }));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(between(child, children[index2 + 1]));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    while (index3--) {
      const result = context.join[index3](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g;
function indentLines(value, map3) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one2(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one2(value.slice(start));
  return result.join("");
  function one2(value2) {
    result.push(map3(value2, line, !value2));
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node, _, context) {
  const exit3 = context.enter("blockquote");
  const value = indentLines(containerFlow(node, context), map);
  exit3();
  return value;
}
function map(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}

// node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_, _1, context, safe2) {
  let index2 = -1;
  while (++index2 < context.unsafe.length) {
    if (context.unsafe[index2].character === "\n" && patternInScope(context.stack, context.unsafe[index2])) {
      return /[ \t]/.test(safe2.before) ? "" : " ";
    }
  }
  return "\\\n";
}

// node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node, context) {
  return Boolean(!context.options.fences && node.value && !node.lang && /[^ \r\n]/.test(node.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}

// node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(context) {
  const marker = context.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/code.js
function code(node, _, context) {
  const marker = checkFence(context);
  const raw = node.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  let value;
  let exit3;
  if (formatCodeAsIndented(node, context)) {
    exit3 = context.enter("codeIndented");
    value = indentLines(raw, map2);
  } else {
    const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
    let subexit;
    exit3 = context.enter("codeFenced");
    value = sequence;
    if (node.lang) {
      subexit = context.enter("codeFencedLang" + suffix);
      value += safe(context, node.lang, {
        before: "`",
        after: " ",
        encode: ["`"]
      });
      subexit();
    }
    if (node.lang && node.meta) {
      subexit = context.enter("codeFencedMeta" + suffix);
      value += " " + safe(context, node.meta, {
        before: " ",
        after: "\n",
        encode: ["`"]
      });
      subexit();
    }
    value += "\n";
    if (raw) {
      value += raw + "\n";
    }
    value += sequence;
  }
  exit3();
  return value;
}
function map2(line, _, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node) {
  if (node.label || !node.identifier) {
    return node.label || "";
  }
  return decodeString(node.identifier);
}

// node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(context) {
  const marker = context.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition2(node, _, context) {
  const marker = checkQuote(context);
  const suffix = marker === '"' ? "Quote" : "Apostrophe";
  const exit3 = context.enter("definition");
  let subexit = context.enter("label");
  let value = "[" + safe(context, association(node), { before: "[", after: "]" }) + "]: ";
  subexit();
  if (!node.url || /[\0- \u007F]/.test(node.url)) {
    subexit = context.enter("destinationLiteral");
    value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
  } else {
    subexit = context.enter("destinationRaw");
    value += safe(context, node.url, { before: " ", after: " " });
  }
  subexit();
  if (node.title) {
    subexit = context.enter("title" + suffix);
    value += " " + marker + safe(context, node.title, { before: marker, after: marker }) + marker;
    subexit();
  }
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(context) {
  const marker = context.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle2 = context.handle.handlers[children[index2 + 1].type];
      if (handle2 && handle2.peek)
        handle2 = handle2.peek;
      after = handle2 ? handle2(children[index2 + 1], parent, context, {
        before: "",
        after: ""
      }).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
    }
    results.push(context.handle(child, parent, context, { before, after }));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}

// node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
emphasis.peek = emphasisPeek;
function emphasis(node, _, context) {
  const marker = checkEmphasis(context);
  const exit3 = context.enter("emphasis");
  const value = containerPhrasing(node, context, {
    before: marker,
    after: marker
  });
  exit3();
  return marker + value + marker;
}
function emphasisPeek(_, _1, context) {
  return context.options.emphasis || "*";
}

// node_modules/unist-util-is/index.js
var convert2 = function(test) {
  if (test === void 0 || test === null) {
    return ok2;
  }
  if (typeof test === "string") {
    return typeFactory2(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory2(test) : propsFactory2(test);
  }
  if (typeof test === "function") {
    return castFactory2(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory2(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert2(tests[index2]);
  }
  return castFactory2(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory2(check) {
  return castFactory2(all2);
  function all2(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory2(check) {
  return castFactory2(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory2(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok2() {
  return true;
}

// node_modules/unist-util-visit-parents/color.js
function color2(d) {
  return "[33m" + d + "[39m";
}

// node_modules/unist-util-visit-parents/index.js
var CONTINUE2 = true;
var SKIP2 = "skip";
var EXIT2 = false;
var visitParents2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert2(test);
  const step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit3, "name", {
        value: "node (" + color2(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit3;
    function visit3() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult2(visitor(node, parents));
        if (result[0] === EXIT2) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP2) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT2) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE2, value];
  }
  return [value];
}

// node_modules/unist-util-visit/index.js
var visit2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents2(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node, context) {
  let literalWithBreak = false;
  visit2(node, (node2) => {
    if ("value" in node2 && /\r?\n|\r/.test(node2.value) || node2.type === "break") {
      literalWithBreak = true;
      return EXIT2;
    }
  });
  return Boolean((!node.depth || node.depth < 3) && toString2(node) && (context.options.setext || literalWithBreak));
}

// node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node, _, context) {
  const rank = Math.max(Math.min(6, node.depth || 1), 1);
  if (formatHeadingAsSetext(node, context)) {
    const exit4 = context.enter("headingSetext");
    const subexit2 = context.enter("phrasing");
    const value2 = containerPhrasing(node, context, { before: "\n", after: "\n" });
    subexit2();
    exit4();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(value2.length - (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1));
  }
  const sequence = "#".repeat(rank);
  const exit3 = context.enter("headingAtx");
  const subexit = context.enter("phrasing");
  let value = containerPhrasing(node, context, { before: "# ", after: "\n" });
  if (/^[\t ]/.test(value)) {
    value = "&#x" + value.charCodeAt(0).toString(16).toUpperCase() + ";" + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (context.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/handle/html.js
html.peek = htmlPeek;
function html(node) {
  return node.value || "";
}
function htmlPeek() {
  return "<";
}

// node_modules/mdast-util-to-markdown/lib/handle/image.js
image.peek = imagePeek;
function image(node, _, context) {
  const quote = checkQuote(context);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit3 = context.enter("image");
  let subexit = context.enter("label");
  let value = "![" + safe(context, node.alt, { before: "[", after: "]" }) + "](";
  subexit();
  if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
    subexit = context.enter("destinationLiteral");
    value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
  } else {
    subexit = context.enter("destinationRaw");
    value += safe(context, node.url, {
      before: "(",
      after: node.title ? " " : ")"
    });
  }
  subexit();
  if (node.title) {
    subexit = context.enter("title" + suffix);
    value += " " + quote + safe(context, node.title, { before: quote, after: quote }) + quote;
    subexit();
  }
  value += ")";
  exit3();
  return value;
}
function imagePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
imageReference.peek = imageReferencePeek;
function imageReference(node, _, context) {
  const type = node.referenceType;
  const exit3 = context.enter("imageReference");
  let subexit = context.enter("label");
  const alt = safe(context, node.alt, { before: "[", after: "]" });
  let value = "![" + alt + "]";
  subexit();
  const stack = context.stack;
  context.stack = [];
  subexit = context.enter("reference");
  const reference = safe(context, association(node), { before: "[", after: "]" });
  subexit();
  context.stack = stack;
  exit3();
  if (type === "full" || !alt || alt !== reference) {
    value += "[" + reference + "]";
  } else if (type !== "shortcut") {
    value += "[]";
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek;
function inlineCode(node, _, context) {
  let value = node.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    const expression = patternCompile(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position2 = match.index;
      if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
        position2--;
      }
      value = value.slice(0, position2) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node, context) {
  const raw = toString2(node);
  return Boolean(!context.options.resourceLink && node.url && !node.title && node.children && node.children.length === 1 && node.children[0].type === "text" && (raw === node.url || "mailto:" + raw === node.url) && /^[a-z][a-z+.-]+:/i.test(node.url) && !/[\0- <>\u007F]/.test(node.url));
}

// node_modules/mdast-util-to-markdown/lib/handle/link.js
link.peek = linkPeek;
function link(node, _, context) {
  const quote = checkQuote(context);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  let exit3;
  let subexit;
  let value;
  if (formatLinkAsAutolink(node, context)) {
    const stack = context.stack;
    context.stack = [];
    exit3 = context.enter("autolink");
    value = "<" + containerPhrasing(node, context, { before: "<", after: ">" }) + ">";
    exit3();
    context.stack = stack;
    return value;
  }
  exit3 = context.enter("link");
  subexit = context.enter("label");
  value = "[" + containerPhrasing(node, context, { before: "[", after: "]" }) + "](";
  subexit();
  if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
    subexit = context.enter("destinationLiteral");
    value += "<" + safe(context, node.url, { before: "<", after: ">" }) + ">";
  } else {
    subexit = context.enter("destinationRaw");
    value += safe(context, node.url, {
      before: "(",
      after: node.title ? " " : ")"
    });
  }
  subexit();
  if (node.title) {
    subexit = context.enter("title" + suffix);
    value += " " + quote + safe(context, node.title, { before: quote, after: quote }) + quote;
    subexit();
  }
  value += ")";
  exit3();
  return value;
}
function linkPeek(node, _, context) {
  return formatLinkAsAutolink(node, context) ? "<" : "[";
}

// node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
linkReference.peek = linkReferencePeek;
function linkReference(node, _, context) {
  const type = node.referenceType;
  const exit3 = context.enter("linkReference");
  let subexit = context.enter("label");
  const text5 = containerPhrasing(node, context, { before: "[", after: "]" });
  let value = "[" + text5 + "]";
  subexit();
  const stack = context.stack;
  context.stack = [];
  subexit = context.enter("reference");
  const reference = safe(context, association(node), { before: "[", after: "]" });
  subexit();
  context.stack = stack;
  exit3();
  if (type === "full" || !text5 || text5 !== reference) {
    value += "[" + reference + "]";
  } else if (type !== "shortcut") {
    value += "[]";
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(context) {
  const marker = context.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(context) {
  const bullet = checkBullet(context);
  const bulletOther = context.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
  }
  if (bulletOther === bullet) {
    throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
  }
  return bulletOther;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(context) {
  const marker = context.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered-other.js
function checkBulletOrderedOther(context) {
  const bulletOrdered = checkBulletOrdered(context);
  const bulletOrderedOther = context.options.bulletOrderedOther;
  if (!bulletOrderedOther) {
    return bulletOrdered === "." ? ")" : ".";
  }
  if (bulletOrderedOther !== "." && bulletOrderedOther !== ")") {
    throw new Error("Cannot serialize items with `" + bulletOrderedOther + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
  }
  if (bulletOrderedOther === bulletOrdered) {
    throw new Error("Expected `bulletOrdered` (`" + bulletOrdered + "`) and `bulletOrderedOther` (`" + bulletOrderedOther + "`) to be different");
  }
  return bulletOrderedOther;
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(context) {
  const marker = context.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/list.js
function list2(node, parent, context) {
  const exit3 = context.enter("list");
  const bulletCurrent = context.bulletCurrent;
  let bullet = node.ordered ? checkBulletOrdered(context) : checkBullet(context);
  const bulletOther = node.ordered ? checkBulletOrderedOther(context) : checkBulletOther(context);
  const bulletLastUsed = context.bulletLastUsed;
  let useDifferentMarker = false;
  if (parent && (node.ordered ? context.options.bulletOrderedOther : context.options.bulletOther) && bulletLastUsed && bullet === bulletLastUsed) {
    useDifferentMarker = true;
  }
  if (!node.ordered) {
    const firstListItem = node.children ? node.children[0] : void 0;
    if ((bullet === "*" || bullet === "-") && firstListItem && (!firstListItem.children || !firstListItem.children[0]) && context.stack[context.stack.length - 1] === "list" && context.stack[context.stack.length - 2] === "listItem" && context.stack[context.stack.length - 3] === "list" && context.stack[context.stack.length - 4] === "listItem" && context.indexStack[context.indexStack.length - 1] === 0 && context.indexStack[context.indexStack.length - 2] === 0 && context.indexStack[context.indexStack.length - 3] === 0) {
      useDifferentMarker = true;
    }
    if (checkRule(context) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node.children.length) {
        const item = node.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  context.bulletCurrent = bullet;
  const value = containerFlow(node, context);
  context.bulletLastUsed = bullet;
  context.bulletCurrent = bulletCurrent;
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(context) {
  const style = context.options.listItemIndent || "tab";
  if (style === 1 || style === "1") {
    return "one";
  }
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  }
  return style;
}

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node, parent, context) {
  const listItemIndent = checkListItemIndent(context);
  let bullet = context.bulletCurrent || checkBullet(context);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const exit3 = context.enter("listItem");
  const value = indentLines(containerFlow(node, context), map3);
  exit3();
  return value;
  function map3(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node, _, context) {
  const exit3 = context.enter("paragraph");
  const subexit = context.enter("phrasing");
  const value = containerPhrasing(node, context, { before: "\n", after: "\n" });
  subexit();
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/handle/root.js
function root(node, _, context) {
  return containerFlow(node, context);
}

// node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(context) {
  const marker = context.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/strong.js
strong.peek = strongPeek;
function strong(node, _, context) {
  const marker = checkStrong(context);
  const exit3 = context.enter("strong");
  const value = containerPhrasing(node, context, {
    before: marker,
    after: marker
  });
  exit3();
  return marker + marker + value + marker + marker;
}
function strongPeek(_, _1, context) {
  return context.options.strong || "*";
}

// node_modules/mdast-util-to-markdown/lib/handle/text.js
function text3(node, _, context, safeOptions) {
  return safe(context, node.value, safeOptions);
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(context) {
  const repetition = context.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
  }
  return repetition;
}

// node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak2(_, _1, context) {
  const value = (checkRule(context) + (context.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(context));
  return context.options.ruleSpaces ? value.slice(0, -1) : value;
}

// node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle = {
  blockquote,
  break: hardBreak,
  code,
  definition: definition2,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list: list2,
  listItem,
  paragraph,
  root,
  strong,
  text: text3,
  thematicBreak: thematicBreak2
};

// node_modules/mdast-util-to-markdown/lib/join.js
var join = [joinDefaults];
function joinDefaults(left, right, parent, context) {
  if (right.type === "code" && formatCodeAsIndented(right, context) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, context))) {
    return false;
  }
  if (left.type === "list" && left.type === right.type && Boolean(left.ordered) === Boolean(right.ordered) && !(left.ordered ? context.options.bulletOrderedOther : context.options.bulletOther)) {
    return false;
  }
  if ("spread" in parent && typeof parent.spread === "boolean") {
    if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, context))) {
      return;
    }
    return parent.spread ? 1 : 0;
  }
}

// node_modules/mdast-util-to-markdown/lib/unsafe.js
var fullPhrasingSpans = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
var unsafe = [
  { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: "	",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  {
    character: "\r",
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  {
    character: "\n",
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: " ",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  {
    character: "!",
    after: "\\[",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  { character: '"', inConstruct: "titleQuote" },
  { atBreak: true, character: "#" },
  { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
  { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
  { character: "'", inConstruct: "titleApostrophe" },
  { character: "(", inConstruct: "destinationRaw" },
  {
    before: "\\]",
    character: "(",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  { atBreak: true, before: "\\d+", character: ")" },
  { character: ")", inConstruct: "destinationRaw" },
  { atBreak: true, character: "*" },
  { character: "*", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  { atBreak: true, character: "+" },
  { atBreak: true, character: "-" },
  { atBreak: true, before: "\\d+", character: ".", after: "(?:[ 	\r\n]|$)" },
  { atBreak: true, character: "<", after: "[!/?A-Za-z]" },
  {
    character: "<",
    after: "[!/?A-Za-z]",
    inConstruct: "phrasing",
    notInConstruct: fullPhrasingSpans
  },
  { character: "<", inConstruct: "destinationLiteral" },
  { atBreak: true, character: "=" },
  { atBreak: true, character: ">" },
  { character: ">", inConstruct: "destinationLiteral" },
  { atBreak: true, character: "[" },
  { character: "[", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  { character: "[", inConstruct: ["label", "reference"] },
  { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: "]", inConstruct: ["label", "reference"] },
  { atBreak: true, character: "_" },
  { character: "_", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  { atBreak: true, character: "`" },
  {
    character: "`",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
  },
  { character: "`", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
  { atBreak: true, character: "~" }
];

// node_modules/mdast-util-to-markdown/lib/index.js
function toMarkdown(tree, options = {}) {
  const context = {
    enter,
    stack: [],
    unsafe: [],
    join: [],
    handlers: {},
    options: {},
    indexStack: []
  };
  configure2(context, { unsafe, join, handlers: handle });
  configure2(context, options);
  if (context.options.tightDefinitions) {
    configure2(context, { join: [joinDefinition] });
  }
  context.handle = zwitch("type", {
    invalid,
    unknown,
    handlers: context.handlers
  });
  let result = context.handle(tree, null, context, { before: "\n", after: "\n" });
  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += "\n";
  }
  return result;
  function enter(name) {
    context.stack.push(name);
    return exit3;
    function exit3() {
      context.stack.pop();
    }
  }
}
function invalid(value) {
  throw new Error("Cannot handle value `" + value + "`, expected node");
}
function unknown(node) {
  throw new Error("Cannot handle unknown node `" + node.type + "`");
}
function joinDefinition(left, right) {
  if (left.type === "definition" && left.type === right.type) {
    return 0;
  }
}

// node_modules/remark-stringify/lib/index.js
function remarkStringify(options) {
  const compiler2 = (tree) => {
    const settings = this.data("settings");
    return toMarkdown(tree, Object.assign({}, settings, options, {
      extensions: this.data("toMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Compiler: compiler2 });
}

// node_modules/remark-stringify/index.js
var remark_stringify_default = remarkStringify;

// node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var www = {
  tokenize: tokenizeWww,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path2 = {
  tokenize: tokenizePath,
  partial: true
};
var punctuation2 = {
  tokenize: tokenizePunctuation,
  partial: true
};
var namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
};
var wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var httpAutolink = {
  tokenize: tokenizeHttpAutolink,
  previous: previousHttp
};
var emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text4 = {};
var gfmAutolinkLiteral = {
  text: text4
};
var code2 = 48;
while (code2 < 123) {
  text4[code2] = emailAutolink;
  code2++;
  if (code2 === 58)
    code2 = 65;
  else if (code2 === 91)
    code2 = 97;
}
text4[43] = emailAutolink;
text4[45] = emailAutolink;
text4[46] = emailAutolink;
text4[95] = emailAutolink;
text4[72] = [emailAutolink, httpAutolink];
text4[104] = [emailAutolink, httpAutolink];
text4[87] = [emailAutolink, wwwAutolink];
text4[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok3, nok) {
  const self = this;
  let hasDot;
  let hasDigitInLastSegment;
  return start;
  function start(code3) {
    if (!gfmAtext(code3) || !previousEmail(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code3);
  }
  function atext(code3) {
    if (gfmAtext(code3)) {
      effects.consume(code3);
      return atext;
    }
    if (code3 === 64) {
      effects.consume(code3);
      return label;
    }
    return nok(code3);
  }
  function label(code3) {
    if (code3 === 46) {
      return effects.check(punctuation2, done, dotContinuation)(code3);
    }
    if (code3 === 45 || code3 === 95) {
      return effects.check(punctuation2, nok, dashOrUnderscoreContinuation)(code3);
    }
    if (asciiAlphanumeric(code3)) {
      if (!hasDigitInLastSegment && asciiDigit(code3)) {
        hasDigitInLastSegment = true;
      }
      effects.consume(code3);
      return label;
    }
    return done(code3);
  }
  function dotContinuation(code3) {
    effects.consume(code3);
    hasDot = true;
    hasDigitInLastSegment = void 0;
    return label;
  }
  function dashOrUnderscoreContinuation(code3) {
    effects.consume(code3);
    return afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code3) {
    if (code3 === 46) {
      return effects.check(punctuation2, nok, dotContinuation)(code3);
    }
    return label(code3);
  }
  function done(code3) {
    if (hasDot && !hasDigitInLastSegment) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 !== 87 && code3 !== 119 || !previousWww(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(www, effects.attempt(domain, effects.attempt(path2, done), nok), nok)(code3);
  }
  function done(code3) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeHttpAutolink(effects, ok3, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 !== 72 && code3 !== 104 || !previousHttp(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkHttp");
    effects.consume(code3);
    return t1;
  }
  function t1(code3) {
    if (code3 === 84 || code3 === 116) {
      effects.consume(code3);
      return t2;
    }
    return nok(code3);
  }
  function t2(code3) {
    if (code3 === 84 || code3 === 116) {
      effects.consume(code3);
      return p;
    }
    return nok(code3);
  }
  function p(code3) {
    if (code3 === 80 || code3 === 112) {
      effects.consume(code3);
      return s;
    }
    return nok(code3);
  }
  function s(code3) {
    if (code3 === 83 || code3 === 115) {
      effects.consume(code3);
      return colon;
    }
    return colon(code3);
  }
  function colon(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      return slash1;
    }
    return nok(code3);
  }
  function slash1(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return slash2;
    }
    return nok(code3);
  }
  function slash2(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path2, done), nok)(code3);
  }
  function done(code3) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeWww(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return w2;
  }
  function w2(code3) {
    if (code3 === 87 || code3 === 119) {
      effects.consume(code3);
      return w3;
    }
    return nok(code3);
  }
  function w3(code3) {
    if (code3 === 87 || code3 === 119) {
      effects.consume(code3);
      return dot;
    }
    return nok(code3);
  }
  function dot(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : ok3(code3);
  }
}
function tokenizeDomain(effects, ok3, nok) {
  let hasUnderscoreInLastSegment;
  let hasUnderscoreInLastLastSegment;
  return domain2;
  function domain2(code3) {
    if (code3 === 38) {
      return effects.check(namedCharacterReference, done, punctuationContinuation)(code3);
    }
    if (code3 === 46 || code3 === 95) {
      return effects.check(punctuation2, done, punctuationContinuation)(code3);
    }
    if (code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3)) {
      return done(code3);
    }
    effects.consume(code3);
    return domain2;
  }
  function punctuationContinuation(code3) {
    if (code3 === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
      hasUnderscoreInLastSegment = void 0;
      effects.consume(code3);
      return domain2;
    }
    if (code3 === 95)
      hasUnderscoreInLastSegment = true;
    effects.consume(code3);
    return domain2;
  }
  function done(code3) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizePath(effects, ok3) {
  let balance = 0;
  return inPath;
  function inPath(code3) {
    if (code3 === 38) {
      return effects.check(namedCharacterReference, ok3, continuedPunctuation)(code3);
    }
    if (code3 === 40) {
      balance++;
    }
    if (code3 === 41) {
      return effects.check(punctuation2, parenAtPathEnd, continuedPunctuation)(code3);
    }
    if (pathEnd(code3)) {
      return ok3(code3);
    }
    if (trailingPunctuation(code3)) {
      return effects.check(punctuation2, ok3, continuedPunctuation)(code3);
    }
    effects.consume(code3);
    return inPath;
  }
  function continuedPunctuation(code3) {
    effects.consume(code3);
    return inPath;
  }
  function parenAtPathEnd(code3) {
    balance--;
    return balance < 0 ? ok3(code3) : continuedPunctuation(code3);
  }
}
function tokenizeNamedCharacterReference(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return inside;
  }
  function inside(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return inside;
    }
    if (code3 === 59) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return pathEnd(code3) ? ok3(code3) : nok(code3);
  }
}
function tokenizePunctuation(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    if (trailingPunctuation(code3)) {
      effects.consume(code3);
      return after;
    }
    return pathEnd(code3) ? ok3(code3) : nok(code3);
  }
}
function trailingPunctuation(code3) {
  return code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 95 || code3 === 126;
}
function pathEnd(code3) {
  return code3 === null || code3 === 60 || markdownLineEndingOrSpace(code3);
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousHttp(code3) {
  return code3 === null || !asciiAlpha(code3);
}
function previousEmail(code3) {
  return code3 !== 47 && previousHttp(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

// node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
  tokenize: tokenizeIndent2,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
  const self = this;
  let index2 = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code3);
    }
    const id = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    if (id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code3);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok3(code3);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  let labelStart;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  };
  const replacement = [
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    events[index2 + 3],
    events[index2 + 4],
    ["enter", marker, context],
    ["exit", marker, context],
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok3, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code3) {
    if (code3 !== 94)
      return nok(code3);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code3) {
    let token;
    if (code3 === null || code3 === 91 || size++ > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      if (!data) {
        return nok(code3);
      }
      effects.exit("chunkString");
      token = effects.exit("gfmFootnoteCallString");
      return defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code3) : nok(code3);
    }
    effects.consume(code3);
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    return code3 === 92 ? callEscape : callData;
  }
  function callEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return callData;
    }
    return callData(code3);
  }
  function end(code3) {
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    effects.exit("gfmFootnoteCall");
    return ok3;
  }
}
function tokenizeDefinitionStart(effects, ok3, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelStart;
  }
  function labelStart(code3) {
    if (code3 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      return atBreak;
    }
    return nok(code3);
  }
  function atBreak(code3) {
    let token;
    if (code3 === null || code3 === 91 || size > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      if (!data) {
        return nok(code3);
      }
      token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      size++;
      return atBreak;
    }
    effects.enter("chunkString").contentType = "string";
    return label(code3);
  }
  function label(code3) {
    if (code3 === null || markdownLineEnding(code3) || code3 === 91 || code3 === 93 || size > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? labelEscape : label;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return label;
    }
    return label(code3);
  }
  function labelAfter(code3) {
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return factorySpace(effects, done, "gfmFootnoteDefinitionWhitespace");
    }
    return nok(code3);
  }
  function done(code3) {
    if (!defined.includes(identifier)) {
      defined.push(identifier);
    }
    return ok3(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok3, nok) {
  return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok3, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text5 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text5, context]
            ];
            splice(nextEvents, nextEvents.length, 0, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text5, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok3, nok) {
    const previous4 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code3) {
      if (previous4 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code3);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code3);
    }
    function more(code3) {
      const before = classifyCharacter(previous4);
      if (code3 === 126) {
        if (size > 1)
          return nok(code3);
        effects.consume(code3);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code3);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code3);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok3(code3);
    }
  }
}

// node_modules/micromark-extension-gfm-table/lib/syntax.js
var gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolve: resolveTable
    }
  }
};
var nextPrefixedOrBlank = {
  tokenize: tokenizeNextPrefixedOrBlank,
  partial: true
};
function resolveTable(events, context) {
  let index2 = -1;
  let inHead;
  let inDelimiterRow;
  let inRow;
  let contentStart;
  let contentEnd;
  let cellStart;
  let seenCellInRow;
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (inRow) {
      if (token.type === "temporaryTableCellContent") {
        contentStart = contentStart || index2;
        contentEnd = index2;
      }
      if ((token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd) {
        const content3 = {
          type: "tableContent",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        const text5 = {
          type: "chunkText",
          start: content3.start,
          end: content3.end,
          contentType: "text"
        };
        events.splice(contentStart, contentEnd - contentStart + 1, ["enter", content3, context], ["enter", text5, context], ["exit", text5, context], ["exit", content3, context]);
        index2 -= contentEnd - contentStart - 3;
        contentStart = void 0;
        contentEnd = void 0;
      }
    }
    if (events[index2][0] === "exit" && cellStart !== void 0 && cellStart + (seenCellInRow ? 0 : 1) < index2 && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index2 || events[cellStart][1].type !== "whitespace"))) {
      const cell = {
        type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
        start: events[cellStart][1].start,
        end: events[index2][1].end
      };
      events.splice(index2 + (token.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        cell,
        context
      ]);
      events.splice(cellStart, 0, ["enter", cell, context]);
      index2 += 2;
      cellStart = index2 + 1;
      seenCellInRow = true;
    }
    if (token.type === "tableRow") {
      inRow = events[index2][0] === "enter";
      if (inRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableDelimiterRow") {
      inDelimiterRow = events[index2][0] === "enter";
      if (inDelimiterRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableHead") {
      inHead = events[index2][0] === "enter";
    }
  }
  return events;
}
function tokenizeTable(effects, ok3, nok) {
  const self = this;
  const align = [];
  let tableHeaderCount = 0;
  let seenDelimiter;
  let hasDash;
  return start;
  function start(code3) {
    effects.enter("table")._align = align;
    effects.enter("tableHead");
    effects.enter("tableRow");
    if (code3 === 124) {
      return cellDividerHead(code3);
    }
    tableHeaderCount++;
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code3);
  }
  function cellDividerHead(code3) {
    effects.enter("tableCellDivider");
    effects.consume(code3);
    effects.exit("tableCellDivider");
    seenDelimiter = true;
    return cellBreakHead;
  }
  function cellBreakHead(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return atRowEndHead(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceHead;
    }
    if (seenDelimiter) {
      seenDelimiter = void 0;
      tableHeaderCount++;
    }
    if (code3 === 124) {
      return cellDividerHead(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code3);
  }
  function inWhitespaceHead(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceHead;
    }
    effects.exit("whitespace");
    return cellBreakHead(code3);
  }
  function inCellContentHead(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakHead(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? inCellContentEscapeHead : inCellContentHead;
  }
  function inCellContentEscapeHead(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return inCellContentHead;
    }
    return inCellContentHead(code3);
  }
  function atRowEndHead(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    effects.exit("tableRow");
    effects.exit("tableHead");
    const originalInterrupt = self.interrupt;
    self.interrupt = true;
    return effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, function(code4) {
      self.interrupt = originalInterrupt;
      effects.enter("tableDelimiterRow");
      return atDelimiterRowBreak(code4);
    }, function(code4) {
      self.interrupt = originalInterrupt;
      return nok(code4);
    })(code3);
  }
  function atDelimiterRowBreak(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return rowEndDelimiter(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code3);
      hasDash = true;
      align.push("none");
      return inFillerDelimiter;
    }
    if (code3 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code3);
      effects.exit("tableDelimiterAlignment");
      align.push("left");
      return afterLeftAlignment;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code3);
  }
  function inWhitespaceDelimiter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    effects.exit("whitespace");
    return atDelimiterRowBreak(code3);
  }
  function inFillerDelimiter(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return inFillerDelimiter;
    }
    effects.exit("tableDelimiterFiller");
    if (code3 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code3);
      effects.exit("tableDelimiterAlignment");
      align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right";
      return afterRightAlignment;
    }
    return atDelimiterRowBreak(code3);
  }
  function afterLeftAlignment(code3) {
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code3);
      hasDash = true;
      return inFillerDelimiter;
    }
    return nok(code3);
  }
  function afterRightAlignment(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return rowEndDelimiter(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code3);
  }
  function rowEndDelimiter(code3) {
    effects.exit("tableDelimiterRow");
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code3);
    }
    if (code3 === null) {
      return tableClose(code3);
    }
    return effects.check(nextPrefixedOrBlank, tableClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, bodyStart, "linePrefix", 4), tableClose))(code3);
  }
  function tableClose(code3) {
    effects.exit("table");
    return ok3(code3);
  }
  function bodyStart(code3) {
    effects.enter("tableBody");
    return rowStartBody(code3);
  }
  function rowStartBody(code3) {
    effects.enter("tableRow");
    if (code3 === 124) {
      return cellDividerBody(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code3);
  }
  function cellDividerBody(code3) {
    effects.enter("tableCellDivider");
    effects.consume(code3);
    effects.exit("tableCellDivider");
    return cellBreakBody;
  }
  function cellBreakBody(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return atRowEndBody(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceBody;
    }
    if (code3 === 124) {
      return cellDividerBody(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code3);
  }
  function inWhitespaceBody(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceBody;
    }
    effects.exit("whitespace");
    return cellBreakBody(code3);
  }
  function inCellContentBody(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakBody(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? inCellContentEscapeBody : inCellContentBody;
  }
  function inCellContentEscapeBody(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return inCellContentBody;
    }
    return inCellContentBody(code3);
  }
  function atRowEndBody(code3) {
    effects.exit("tableRow");
    if (code3 === null) {
      return tableBodyClose(code3);
    }
    return effects.check(nextPrefixedOrBlank, tableBodyClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, rowStartBody, "linePrefix", 4), tableBodyClose))(code3);
  }
  function tableBodyClose(code3) {
    effects.exit("tableBody");
    return tableClose(code3);
  }
  function tokenizeRowEnd(effects2, ok4, nok2) {
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return factorySpace(effects2, prefixed, "linePrefix");
    }
    function prefixed(code3) {
      if (self.parser.lazy[self.now().line] || code3 === null || markdownLineEnding(code3)) {
        return nok2(code3);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return nok2(code3);
      }
      self._gfmTableDynamicInterruptHack = true;
      return effects2.check(self.parser.constructs.flow, function(code4) {
        self._gfmTableDynamicInterruptHack = false;
        return nok2(code4);
      }, function(code4) {
        self._gfmTableDynamicInterruptHack = false;
        return ok4(code4);
      })(code3);
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("check");
    effects.consume(code3);
    return whitespace;
  }
  function whitespace(code3) {
    if (code3 === -1 || code3 === 32) {
      effects.consume(code3);
      size++;
      return size === 4 ? ok3 : whitespace;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      return ok3(code3);
    }
    return nok(code3);
  }
}

// node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
var gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok3, nok) {
  const self = this;
  return open;
  function open(code3) {
    if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) {
      return nok(code3);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code3);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code3) {
    if (markdownLineEndingOrSpace(code3)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code3 === 88 || code3 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code3);
  }
  function close(code3) {
    if (code3 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code3);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok3, nok);
    }
    return nok(code3);
  }
}
function spaceThenNonSpace(effects, ok3, nok) {
  const self = this;
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    const tail = self.events[self.events.length - 1];
    return (tail && tail[1].type === "whitespace" || markdownLineEnding(code3)) && code3 !== null ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}

// node_modules/ccount/index.js
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}

// node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string3) {
  if (typeof string3 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/color.js
function color3(d) {
  return "[33m" + d + "[39m";
}

// node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/index.js
var CONTINUE3 = true;
var SKIP3 = "skip";
var EXIT3 = false;
var visitParents3 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  var is = convert2(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit3, "name", {
        value: "node (" + color3(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit3;
    function visit3() {
      var result = [];
      var subresult;
      var offset;
      var grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult3(visitor(node, parents));
        if (result[0] === EXIT3) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP3) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT3) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult3(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE3, value];
  }
  return [value];
}

// node_modules/mdast-util-find-and-replace/index.js
var own6 = {}.hasOwnProperty;
var findAndReplace = function(tree, find, replace2, options) {
  let settings;
  let schema;
  if (typeof find === "string" || find instanceof RegExp) {
    schema = [[find, replace2]];
    settings = options;
  } else {
    schema = find;
    settings = replace2;
  }
  if (!settings) {
    settings = {};
  }
  const ignored = convert2(settings.ignore || []);
  const pairs = toPairs(schema);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents3(tree, "text", visitor);
  }
  return tree;
  function visitor(node, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent = parents[index2];
      if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent)) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node, grandparent);
    }
  }
  function handler(node, parent) {
    const find2 = pairs[pairIndex][0];
    const replace3 = pairs[pairIndex][1];
    let start = 0;
    let index2 = parent.children.indexOf(node);
    let nodes = [];
    let position2;
    find2.lastIndex = 0;
    let match = find2.exec(node.value);
    while (match) {
      position2 = match.index;
      let value = replace3(...match, {
        index: match.index,
        input: match.input
      });
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value !== false) {
        if (start !== position2) {
          nodes.push({
            type: "text",
            value: node.value.slice(start, position2)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position2 + match[0].length;
      }
      if (!find2.global) {
        break;
      }
      match = find2.exec(node.value);
    }
    if (position2 === void 0) {
      nodes = [node];
      index2--;
    } else {
      if (start < node.value.length) {
        nodes.push({ type: "text", value: node.value.slice(start) });
      }
      parent.children.splice(index2, 1, ...nodes);
    }
    return index2 + nodes.length + 1;
  }
};
function toPairs(schema) {
  const result = [];
  if (typeof schema !== "object") {
    throw new TypeError("Expected array or object as schema");
  }
  if (Array.isArray(schema)) {
    let index2 = -1;
    while (++index2 < schema.length) {
      result.push([
        toExpression(schema[index2][0]),
        toFunction(schema[index2][1])
      ]);
    }
  } else {
    let key;
    for (key in schema) {
      if (own6.call(schema, key)) {
        result.push([toExpression(key), toFunction(schema[key])]);
      }
    }
  }
  return result;
}
function toExpression(find) {
  return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : () => replace2;
}

// node_modules/mdast-util-gfm-autolink-literal/index.js
var inConstruct = "phrasing";
var notInConstruct = ["autolink", "link", "image", "label"];
var gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
};
var gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
  ]
};
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(tree, [
    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
    [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
  ], { ignore: ["link", "linkReference"] });
}
function findUrl(_, protocol, domain2, path3, match) {
  let prefix = "";
  if (!previous3(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path3);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label, match) {
  if (!previous3(match, true) || /[_-\d]$/.test(label)) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  let closingParenIndex;
  let openingParens;
  let closingParens;
  let trail;
  if (trailExec) {
    url = url.slice(0, trailExec.index);
    trail = trailExec[0];
    closingParenIndex = trail.indexOf(")");
    openingParens = ccount(url, "(");
    closingParens = ccount(url, ")");
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1);
      trail = trail.slice(closingParenIndex + 1);
      closingParenIndex = trail.indexOf(")");
      closingParens++;
    }
  }
  return [url, trail];
}
function previous3(match, email) {
  const code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && (!email || code3 !== 47);
}

// node_modules/mdast-util-gfm-footnote/index.js
var warningColonInFootnote = false;
var warningListInFootnote = false;
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, token);
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  footnoteReference.peek = footnoteReferencePeek;
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference }
  };
  function footnoteReference(node, _, context) {
    const exit3 = context.enter("footnoteReference");
    const subexit = context.enter("reference");
    const reference = safe(context, association(node), {
      before: "^",
      after: "]"
    });
    subexit();
    exit3();
    return "[^" + reference + "]";
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node, _, context) {
    const exit3 = context.enter("footnoteDefinition");
    const subexit = context.enter("label");
    const id = safe(context, association(node), { before: "^", after: "]" });
    const label = "[^" + id + "]:";
    subexit();
    const value = indentLines(containerFlow(node, context), map3);
    exit3();
    if (!warningColonInFootnote && id.includes(":")) {
      console.warn("[mdast-util-gfm-footnote] Warning: Found a colon in footnote identifier `" + id + "`. GitHub currently crahes on colons in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)");
      warningColonInFootnote = true;
    }
    if (!warningListInFootnote) {
      visit2(node, "list", () => {
        console.warn("[mdast-util-gfm-footnote] Warning: Found a list in a footnote definition. GitHub currently crahes on lists in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)");
        warningListInFootnote = true;
        return EXIT2;
      });
    }
    return value;
    function map3(line, index2, blank) {
      if (index2) {
        return (blank ? "" : "    ") + line;
      }
      return (blank ? label : label + " ") + line;
    }
  }
}

// node_modules/mdast-util-gfm-strikethrough/index.js
var gfmStrikethroughFromMarkdown = {
  canContainEols: ["delete"],
  enter: { strikethrough: enterStrikethrough },
  exit: { strikethrough: exitStrikethrough }
};
var gfmStrikethroughToMarkdown = {
  unsafe: [{ character: "~", inConstruct: "phrasing" }],
  handlers: { delete: handleDelete }
};
handleDelete.peek = peekDelete;
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _, context) {
  const exit3 = context.enter("emphasis");
  const value = containerPhrasing(node, context, { before: "~", after: "~" });
  exit3();
  return "~~" + value + "~~";
}
function peekDelete() {
  return "~";
}

// node_modules/markdown-table/index.js
function markdownTable(table2, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table2.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table2[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table2[rowIndex].length;
    }
    while (++columnIndex2 < table2[rowIndex].length) {
      const cell = serialize(table2[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code3 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code3;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code3 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code3 === 99) {
      before = ":";
      after = ":";
    } else if (code3 === 108) {
      before = ":";
    } else if (code3 === 114) {
      after = ":";
    }
    let size = options.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
    const cell = before + "-".repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code3 = alignments[columnIndex];
        if (code3 === 114) {
          before = " ".repeat(size);
        } else if (code3 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (options.padding !== false && !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(" ");
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code3 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
}

// node_modules/mdast-util-gfm-table/index.js
var gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit2,
    tableHeader: exit2,
    tableRow: exit2
  }
};
function enterTable(token) {
  const align = token._align;
  this.enter({
    type: "table",
    align: align.map((d) => d === "none" ? null : d),
    children: []
  }, token);
  this.setData("inTable", true);
}
function exitTable(token) {
  this.exit(token);
  this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.getData("inTable")) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node = this.stack[this.stack.length - 1];
  node.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      { atBreak: true, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: true, character: ":", after: "-" },
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align);
  }
  function handleTableRow(node, _, context) {
    const row = handleTableRowAsData(node, context);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node, _, context) {
    const exit3 = context.enter("tableCell");
    const subexit = context.enter("phrasing");
    const value = containerPhrasing(node, context, {
      before: around,
      after: around
    });
    subexit();
    exit3();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  function handleTableAsData(node, context) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], context);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node, context) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node, context);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode(node, parent, context);
    if (context.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}

// node_modules/mdast-util-gfm-task-list-item/index.js
var gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
};
var gfmTaskListItemToMarkdown = {
  unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
  handlers: { listItem: listItemWithTaskListItem }
};
function exitCheck(token) {
  this.stack[this.stack.length - 2].checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  const node = this.stack[this.stack.length - 1];
  const siblings = parent.children;
  const head = node.children[0];
  let index2 = -1;
  let firstParaghraph;
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean" && head && head.type === "text") {
    while (++index2 < siblings.length) {
      const sibling = siblings[index2];
      if (sibling.type === "paragraph") {
        firstParaghraph = sibling;
        break;
      }
    }
    if (firstParaghraph === node) {
      head.value = head.value.slice(1);
      if (head.value.length === 0) {
        node.children.shift();
      } else {
        head.position.start.column++;
        head.position.start.offset++;
        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context) {
  const head = node.children[0];
  let value = listItem(node, parent, context);
  if (typeof node.checked === "boolean" && head && head.type === "paragraph") {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + "[" + (node.checked ? "x" : " ") + "] ";
  }
}

// node_modules/mdast-util-gfm/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}

// node_modules/remark-gfm/index.js
function remarkGfm(options = {}) {
  const data = this.data();
  add("micromarkExtensions", gfm(options));
  add("fromMarkdownExtensions", gfmFromMarkdown());
  add("toMarkdownExtensions", gfmToMarkdown(options));
  function add(field, value) {
    const list3 = data[field] ? data[field] : data[field] = [];
    list3.push(value);
  }
}

// node_modules/shirkhan-remark/src/lib/index.js
function khanPlugin() {
  return (tree) => {
    const converter = this.data("khanConverter") || void 0;
    if (!converter)
      return;
    visit2(tree, "text", (node, index2, parent) => {
      if (parent.type === "link")
        return;
      node.value = converter(node, index2, parent);
    });
  };
}
var processor = unified().use(remark_parse_default).use(remark_stringify_default).freeze();
var remarkKhan = processor().use(remarkMath).use(remarkGfm).use(khanPlugin);

// src/util/converter.js
function khanTextToUgText(text5) {
  return unified().use(baseParser).use(toKhan).use(khanToUg).use(baseCompiler).processSync(text5).toString();
}
function ugTextToKhanText(text5) {
  return unified().use(baseParser).use(ugToKhan).use(baseCompiler).processSync(text5).toString();
}
function khanMarkdownToUgMarkdown(markdownText) {
  return remarkKhan().data("khanConverter", (node) => {
    if (node.value) {
      try {
        return khanTextToUgText(node.value.toLowerCase());
      } catch (error) {
        console.log("error", error);
      }
    }
    return node.value;
  }).processSync(markdownText).toString();
}
function ugMarkdownToKhanMarkdown(markdownText) {
  return remarkKhan().data("khanConverter", (node) => {
    if (node.value) {
      try {
        return ugTextToKhanText(node.value.toLowerCase());
      } catch (error) {
        console.log("error", error);
      }
    }
    return node.value;
  }).processSync(markdownText).toString();
}

// src/plugins/markdownItPlugin.js
function shirkhanAlphabetPlugin(md, isActiveConvert) {
  const defaultRender = md.renderer.rules.text;
  md.renderer.rules.text = function(tokens, idx, options, env, slf) {
    let result = defaultRender(tokens, idx, options, env, slf);
    if (!isActiveConvert())
      return result;
    if (idx > 0 && tokens[idx - 1].type === "link_open") {
      return result;
    }
    result = md.utils.unescapeAll(result);
    result = khanTextToUgText(result);
    return md.utils.escapeHtml(result);
  };
  md.renderer.backuprender = md.renderer.render;
  md.renderer.render = function(tokens, options, env) {
    const result = md.renderer.backuprender(tokens, options, env);
    if (!isActiveConvert())
      return result;
    return `<div class="shirkhan-markdown-body">${result}</div>`;
  };
  return md;
}

// src/activate.js
var import_markdown_it_emoji = __toESM(require_markdown_it_emoji());

// src/commands/index.js
var vscode4 = require("vscode");
var fs = require("fs");
function markdownConverCommands(context) {
  registerCommand(context, "shirkhan-markdown.changeMarkdownToUg", () => {
    const markdown = fs.readFileSync(vscode4.window.activeTextEditor.document.fileName).toString();
    const newMarkdown = khanMarkdownToUgMarkdown(markdown);
    vscode4.workspace.openTextDocument({
      content: newMarkdown,
      fileName: "shirkhan-markdown-ug.md",
      language: "Markdown"
    }).then((doc) => {
      vscode4.window.showTextDocument(doc);
    });
  });
  registerCommand(context, "shirkhan-markdown.changeMarkdownToKhan", () => {
    const markdown = fs.readFileSync(vscode4.window.activeTextEditor.document.fileName).toString();
    const newMarkdown = ugMarkdownToKhanMarkdown(markdown);
    vscode4.workspace.openTextDocument({
      content: newMarkdown,
      fileName: "shirkhan-markdown-khan.md",
      language: "Markdown"
    }).then((doc) => {
      vscode4.window.showTextDocument(doc);
    });
  });
}

// src/activate.js
function updateConvertState(context) {
  registerCommand(context, "shirkhan-markdown.changeConvertState", () => {
    const currentStage = getConvertState(context);
    const message = !currentStage ? "\u5F00\u542F" : "\u5173\u95ED";
    showInfoMessage(`\u8F6C\u6362\u529F\u80FD\u5DF2${message}`);
    setConvertState(context, !currentStage);
  });
}
function activate(context) {
  const convertState = getActiveConvert(context);
  setConvertState(context, convertState);
  updateConvertState(context);
  markdownConverCommands(context);
  return {
    extendMarkdownIt(md) {
      convertState && md.use(import_markdown_it_emoji.default);
      md.use(shirkhanAlphabetPlugin, () => {
        return getConvertState(context);
      });
      return md;
    }
  };
}

// src/deactivate.js
function deactivate() {
  console.log("shirkhan-markdown \u63D2\u4EF6\u5DF2\u91CA\u653E \u3010deactivate\u3011");
}

// src/main.js
module.exports = {
  activate,
  deactivate
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=extension.js.map
