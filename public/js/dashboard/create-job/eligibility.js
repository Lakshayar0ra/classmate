/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/notify.js":
/*!**************************!*\
  !*** ./src/js/notify.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var Notifier = function () {
  var a = {
    container: null,
    default_time: 4500,
    vanish_time: 300,
    fps: 30,
    success: {
      classes: "alert-success",
      header: "Yay! Everything worked!",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Checkmark Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"/></svg>'
    },
    error: {
      classes: "alert-danger",
      header: "Uh oh, something went wrong",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Alert Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.94v-.05a21.74 21.74 0 1143.44 0z"/></svg>'
    },
    warning: {
      classes: "alert-warning",
      header: "Be careful!",
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\"><path d=\"M3.09 0c-.06 0-.1.04-.13.09l-2.94 6.81c-.02.05-.03.13-.03.19v.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-.81c0-.05-.01-.14-.03-.19l-2.94-6.81c-.02-.05-.07-.09-.13-.09h-.81zm-.09 3h1v2h-1v-2zm0 3h1v1h-1v-1z\" /></svg>"
    },
    info: {
      classes: "alert-info",
      header: "Did you know?",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Information Circle</title><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"/></svg>'
    }
  },
      b = function b(a, _b, c, d, e, f, g) {
    // The Root Function which creates notification

    /**
     * a - the root 'div.notifyjs-container'
     * b - custom message
     * c - type of notification
     * d - default_time for display of notification
     * e - vanish_time of notification
     * f - fps of notification
     * g - optional callback argument
     */
    var customMessage = "<div class=\"notifyjs-message\"><p class=\"header\">".concat(c.header, "</p><p class=\"message\">").concat(_b, "</p></div>");
    this.pushed = !1, this.element = document.createElement("div"), this.element.className = "notifyjs-notification " + c.classes, this.element.innerHTML = "<div class='notifyjs-icon'>" + c.icon + "</div>" + customMessage, a.appendChild(this.element); // Notification progress

    this.callback = g;
    var j = this;
    this.push = function () {
      if (!j.pushed) {
        j.pushed = !0;
        var a = 0,
            b = 1e3 / f;
        j.element.style.display = "flex", j.element.classList.add("slideIn"), j.interval = setInterval(function () {
          a++;
          var c = 100 * (1 - b * a / d);
          0 >= c && ("function" == typeof g && g(), j.element.classList.remove("slideIn"), j.clear());
        }, b);
      }
    }, this.clear = function () {
      if (j.pushed) {
        var a = 1e3 / f,
            b = 1;
        "undefined" != typeof j.interval && clearInterval(j.interval), j.interval = setInterval(function () {
          b -= 1 / (e / a), j.element.style.opacity = b, 0 >= b && (clearInterval(j.interval), j.destroy());
        }, a);
      }
    }, this.destroy = function () {
      j.pushed && (j.pushed = !1, "undefined" != typeof j.interval && clearInterval(j.interval), a.removeChild(j.element));
    };
  }; // Constructor to create Notification component...


  return function Notifier(c) {
    this.options = Object.assign({}, a), this.options = Object.assign(this.options, c), null === this.options.container && (this.options.container = document.createElement("div"), document.getElementsByTagName("body")[0].appendChild(this.options.container)); // This creates a container for all Notifications...,

    this.options.container.className += " notifyjs-container", // The 'notify' function creates a notification whenever click event occurs and displays the notification to user...
    this.notify = function (a, c, d, e) {
      return "undefined" == typeof this.options[a] ? void console.error("Notify.js: Error, undefined '" + a + "' notification type") : ("undefined" == typeof d && (d = this.options.default_time), new b(this.options.container, c, this.options[a], d, this.options.vanish_time, this.options.fps, e));
    };
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifier);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./src/js/dashboard/create-job/eligibility.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notify */ "./src/js/notify.js");

var inputs = document.querySelectorAll(".create-job main .form-area .form-container form fieldset .avalid.input");
var regEligForm = document.querySelector(".create-job main .form-area .form-container form#registration-eligibility-form");
var submitButton = document.querySelector(".create-job main .form-area .back-forth-container .button.navigator#next-section-button");
var chipInput = document.querySelector(".create-job main .form-area .form-container form fieldset .chipped.input");
var tabInput = document.querySelector(".create-job main .form-area .form-container form fieldset .tabbed.input");
var regModeFeild = document.querySelector(".create-job main .form-area .form-container form fieldset#reg-mode-action");
var draftStatus = document.querySelector(".create-job main .form-area .form-container .step-count span.draft-status");
var notifier = new _notify__WEBPACK_IMPORTED_MODULE_0__["default"]();
var inputUpdateEvent = false;
var draftData = {
  tabs: {},
  inputs: {},
  chips: {}
};
var timer;
var timeoutVal = 2000;
tabInput.querySelectorAll(".wrap input[name='regMode']").forEach(function (inp) {
  inp.addEventListener("change", function (e) {
    inputUpdateEvent = true;
    var tab = tabInput.querySelector(".wrap input[name='regMode']:checked");
    draftData.tabs[tab.name] = {
      value: tab.value,
      inputId: tab.id
    };
    updateRegModeAction(tab.value);
  });
});
inputs.forEach(function (input) {
  var feild = input.querySelector('input'); // triggers a check to see if the user is actually done typing

  feild.addEventListener('keydown', function (e) {
    window.clearTimeout(timer);
    draftStatus.classList.remove("saved");
    draftStatus.classList.add("saving");
    draftStatus.innerText = "Saving...";
  });
  feild.addEventListener('keyup', function (e) {
    window.clearTimeout(timer); // prevent errant multiple timeouts from being generated

    timer = window.setTimeout(function () {
      saveAsDraft();
      draftStatus.classList.remove("saving");
      draftStatus.classList.add("saved");
      draftStatus.innerText = "Draft Saved";
    }, timeoutVal);
  });
  feild.addEventListener('input', function (e) {
    inputUpdateEvent = true;
    draftData.inputs[e.target.name] = {
      value: e.target.value,
      inputId: e.target.id
    };
    var valid = isValid(e.target);

    if (valid) {
      input.classList.remove("incorrect");
      input.classList.add("correct");
    } else {
      input.classList.remove("correct");
      input.classList.add("incorrect");
    }
  });
});
regEligForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.classList.add("disable");

  if (validateForm()) {
    sendForm();
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove("disable");
  }
});
var eligibility = [];
var chips = chipInput.querySelectorAll('.category-chip input');
chips.forEach(function (ch) {
  ch.addEventListener("change", function (e) {
    inputUpdateEvent = true;

    if (e.target.checked) {
      if (e.target.id === "eligibility-all" && e.target.value === "All") {
        deSelectAllChips(chips);
        eligibility.splice(0, eligibility.length);
      } else if (eligibility.includes("All")) {
        document.querySelector(".create-job main .form-area .form-container form fieldset .chipped.input .category-chip input#eligibility-all").checked = false;
        var i = eligibility.indexOf("All");
        eligibility.splice(i, 1);
      }

      eligibility.push(e.target.value);
    } else {
      var _i = eligibility.indexOf(e.target.value);

      eligibility.splice(_i, 1);
    }
  });
});
document.addEventListener('visibilitychange', function (e) {
  if (document.visibilityState === 'hidden') {
    saveAsDraft();
  }
});

function deSelectAllChips(chips) {
  chips.forEach(function (ch) {
    if (ch.id === "eligibility-all" && ch.value === "All") {
      ch.checked = true;
    } else {
      ch.checked = false;
    }
  });
}

function updateRegModeAction(mode) {
  if (mode === "url") {
    regModeFeild.querySelector("legend").innerText = "Registration URL ";
    var rqrd = document.createElement("span");
    rqrd.style.color = "orangered";
    rqrd.innerText = "*";
    regModeFeild.querySelector("legend").appendChild(rqrd);
    regModeFeild.querySelector(".tooltip span p").innerText = "Enter the valid registration link for your application";
    regModeFeild.querySelector(".avalid.input input").type = "url";
  } else if (mode === "email") {
    regModeFeild.querySelector("legend").innerText = "Registration Email ";

    var _rqrd = document.createElement("span");

    _rqrd.style.color = "orangered";
    _rqrd.innerText = "*";
    regModeFeild.querySelector("legend").appendChild(_rqrd);
    regModeFeild.querySelector(".tooltip span p").innerText = "Enter the valid registration email where you want to recieve application details";
    regModeFeild.querySelector(".avalid.input input").type = "email";
  }
}

function saveAsDraft() {
  draftData.chips["eligibility"] = {
    value: eligibility
  };
  var data = new Blob([JSON.stringify({
    draftData: draftData
  })], {
    type: 'application/json'
  });
  navigator.sendBeacon('/api/in/draft/save', data);
}

function sendForm() {
  var FD = new FormData(regEligForm);
  FD.append("eligibility", JSON.stringify(eligibility));
  var XHR = new XMLHttpRequest();
  XHR.addEventListener("load", function (e) {
    var res = JSON.parse(e.target.response);

    if (res.success) {
      location.replace(res.redirect);
    } else {
      if (res.error.status === "JSM400" && res.error.custom) {
        location.replace("/in/create-job");
      } else {
        var notification = notifier.notify("error", res.error.message);
        notification.push();
        submitButton.disabled = false;
        submitButton.classList.remove("disable");
      }
    }
  });
  XHR.addEventListener("error", function (e) {
    var res = JSON.parse(e.target.response);

    if (res.error) {
      var notification = notifier.notify("error", "Something went wrong");
      notification.push();
    }
  });
  XHR.open("POST", "/api/in/create-job");
  XHR.send(FD);
}

function isValid(inp) {
  if (inp.id === "application-reg-action" && inp.type === "url") {
    var re = /(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/i;
    return re.test(inp.value.toLowerCase());
  }

  if (inp.id === "application-reg-action" && inp.type === "email") {
    var _re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return _re.test(inp.value);
  }

  if (inp.id === "application-start-time" && inp.type === "datetime-local") {
    var d1 = new Date();
    var d2 = new Date(inp.value);
    return d1.getTime() <= d2.getTime();
  }

  if (inp.id === "application-end-time" && inp.type === "datetime-local") {
    var start = document.querySelector(".create-job main .form-area .form-container form fieldset .avalid.input input#application-start-time");

    var _d = new Date();

    var d3 = new Date(start.value);

    var _d2 = new Date(inp.value);

    return _d.getTime() < _d2.getTime() && d3.getTime() < _d2.getTime();
  }
}

function validateForm() {
  var isVal = true;
  var allFilled = true;
  inputs.forEach(function (input) {
    var feild = input.querySelector('input');

    if (!isValid(feild)) {
      isVal = false;
    }
  });
  var checked = chipInput.querySelectorAll('.category-chip input:checked').length;

  if (!checked) {
    isVal = false;
    allFilled = false;
  }

  if (!isVal && allFilled) {
    var notification = notifier.notify("error", "Invalid details in one or more feilds");
    notification.push();
  } else if (!allFilled) {
    var _notification = notifier.notify("error", "Complete all required feilds");

    _notification.push();
  }

  return isVal;
}
})();

/******/ })()
;