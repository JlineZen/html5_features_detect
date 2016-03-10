// HTML5 features detection

;(function(S) {
  if (typeof module === 'object' && typeof require === 'function') {
    module.exports.support = S;
  } else {
    this.support = S;
  }
})(function() {

  /*** detect geolocation ****/

  function support_geolocation() {
    return 'geolocation' in navigator;
  }

  /*** detect input features ***/

  function detect_input_features() {
    var input = document.createElement('input');
    input.setAttribute('type', 'date');
    return input.type !== 'text';
  }

  /*** detect placeholder ***/

  function detect_placeholder() {
    var input = document.createElement('input');
    return 'placeholder' in input;
  }

  /*** detect autofocus ***/

  function detect_autofocus() {
    var input = document.createElement('input');
    return 'autofocus' in input;
  }

  /*** detect history state ***/

  function supports_history_api() {
    return !!(window.history && history.pushState);
  }

  /*** detect canvas ***/

  function detect_canvas() {
    return !!document.createElement('canvas').getContext;
  }

  /*** detect vedio ***/

  function support_video() {
    return !!document.createElement('video').canPlayType;
  }

  /*** support localstorage ***/

  function support_localStorage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  /*** support webworkers ***/

  function support_webworkers() {
    return !!window.Worker;
  }

  /*** support offline ***/

  function supports_offline() {
    return !!window.applicationCache;
  }

  return {
    location     : support_geolocation,
    input        : detect_input_features,
    placeholder  : detect_placeholder,
    autofocus    : detect_autofocus,
    history      : supports_history_api,
    canvas       : detect_canvas,
    vedio        : support_video,
    localStorage : support_localStorage,
    webworkers   : support_webworkers,
    offline      :  supports_offline
  };

}());