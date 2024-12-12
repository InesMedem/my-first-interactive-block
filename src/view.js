/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

const { state } = store("create-block", {
  actions: {
    guessAttempt: () => {
      const context = getContext();
      console.log(context.index === context.correctAnswer);
    },
    //   state: {
    //     get themeText() {
    //       return state.isDark ? state.darkText : state.lightText;
    //     },
    //   },
    // buttonHandler: () => {
    //   const context = getContext();
    //   context.clickCount++;
    // },
    toggleOpen() {
      const context = getContext();
      context.isOpen = !context.isOpen;
    },
    toggleTheme() {
      state.isDark = !state.isDark;
    },
  },
  callbacks: {
    logIsOpen: () => {
      const { isOpen } = getContext();
      // Log the value of `isOpen` each time it changes.
      console.log(`Is open: ${isOpen}`);
    },
  },
});
