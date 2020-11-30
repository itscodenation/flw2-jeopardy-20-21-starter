/* TODO: Program the following:
 *   Start the countdown timer whenever a question cell is clicked.
 *
 * 1. Add a click handler to all elements with the 'question-cell' class (like
 *    we did in click_handler.js), which does the following actions.
 *
 * 2. Call startCountdownTimer with three parameters:
 *
 *    a) Timer length, in seconds (start with 10)
 *    b) A callback function which returns true when the timer should be
 *       canceled, e.g. when the user presses "show answer" before time is up!
 *    c) A callback function which runs when the user runs out of time.
 *
 * 3. Implement the times-up callback function 2(c), which should show the
 *    answer choices, but with the "correct" button disabled.
 *
 * 4. Implement the should-cancel callback function 2(b), which should return
 *    true if the user pressed the show-answer or close buttons.
 *
 * THIS ONE IS HARD! DON'T WORRY IF YOU NEED TO ASK FOR HELP!
 */
function attachCountdownTimerHandlers() {
  // Add code here.
}

function disableCorrectButton() {
  // Only allow the user to press the "wrong" button.
  $("#correct-button").prop("disabled", true);
}

function showAnswerChoices() {
  // Invoke the previously wired up click handlers directly.
  $("#question-modal-show-answer").click();
}

/* Begins a chain of 1 second timeouts based on the given seconds-remaining
 * parameter.
 *
 * On every second, the should-cancel parameter is called (as a function with
 * zero parameter) and will cancel the timer if it returns true.
 *
 * If the countdown timer hits zero ("time's up!"), the given timeout-callback
 * parameter is called.
 */
function startCountdownTimer(secondsRemaining, shouldCancel, timeoutCallback) {
  if (!shouldCancel || !timeoutCallback) {
    console.error("Missing callbacks to start countdown timer function");
    return;
  }

  if (shouldCancel()) {
    console.log("Timeout canceled with seconds remaining:", secondsRemaining);
    return;
  }

  $("#question-modal-timer").html(secondsRemaining);

  if (secondsRemaining > 0) {
    setTimeout(() => {
      startCountdownTimer(secondsRemaining - 1, shouldCancel, timeoutCallback);
    }, 1000);
  } else {
    timeoutCallback();
  }
}
