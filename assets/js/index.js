function globalMethods() {
  return {
    enterLine(text) {
        const inputHistory = document.getElementById("input-history");
        const input = document.querySelector("input");
        const newElement = document.createElement("div");
        const ansElement = document.createElement("div");
        const fragment = document.createDocumentFragment();
        const cursorWidth = 0;
      
        newElement.innerHTML = `C:\\Users\\basil>${text}`;
        fragment.appendChild(ansElement);

        function getCommand(cmd) {
            const br = document.createElement("br");
            ansElement.innerHTML = cmd;
            fragment.appendChild(ansElement);
            fragment.appendChild(br);
        }
      
        if (!text) {
            inputHistory.appendChild(newElement);
          } else {
            inputHistory.appendChild(newElement);
            switch (text) {
              case "about":
                getCommand('Test');
                break;
              case "contact":
                getCommand('info');
                break;
              case "help":
                getCommand('Coming Soon');
                break;
              default:
                const br = document.createElement("br");
                const error = `'${text}' is not recognized as an internal or external command.`;
                ansElement.innerHTML = error;
                fragment.appendChild(newElement);
                fragment.appendChild(ansElement);
                fragment.appendChild(br);
                break;
            }
            inputHistory.appendChild(fragment);
          }
        input.style.width = `${cursorWidth}ch`;
      },      

    index() {
      window.addEventListener("load", function () {
        document.querySelector("input").style.width = 0 + "ch";
      });

      var input = document.getElementById("my-Input");
      var cursor_caret = document.getElementById("cursor-caret");

      input.focus();
      input.select();
      var input = document.querySelector("input");
      input.addEventListener("input", resizeInput);
      resizeInput.call(input);

      function resizeInput() {
        this.style.width = this.value.length + "ch";
      }

      var mainCmd = document.getElementById("main-cmd-body");
      mainCmd.addEventListener("click", function () {
        cursor_caret.classList.remove("opacity-0");
      });

      document.addEventListener("keyup", function(event) {
        cursor_caret.classList.remove("opacity-0");
        input.focus();
      });

      document.body.onclick = function (e) {
        if (e.target != mainCmd) {
          cursor_caret.classList.toggle("opacity-0");
        }
      };
    },
    dragWindow(el) {
        dragElement(el);
        function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById("cmd-container-header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById("cmd-container-header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
        }
        var resizeable = document.querySelector('.resizeable');
        var handle = document.querySelector('.resizeable-handle');
        var isResizing = false;
        var lastX, lastY;

        handle.addEventListener('mousedown', function (e) {
          isResizing = true;
          lastX = e.clientX;
          lastY = e.clientY;
        });

        document.addEventListener('mousemove', function (e) {
          if (!isResizing) return;

          var width = resizeable.offsetWidth;
          var newWidth = width + (e.clientX - lastX);
          resizeable.style.width = newWidth + 'px';
          lastX = e.clientX;

          var height = resizeable.offsetHeight;
          var newHeight = height + (e.clientY - lastY);
          resizeable.style.height = newHeight + 'px';
          lastY = e.clientY;
        });

        document.addEventListener('mouseup', function (e) {
          isResizing = false;
        });

    },
    cursorCaretBlink(el) {
        window.addEventListener("load", function () {
            setInterval(function () {
            el.classList.toggle("hidden");
            }, 500);
          });
    }
  };
}