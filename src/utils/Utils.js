
export const Utils={
  getLayoutsFromLS: (key)=> {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("DASHIT-LAYOUTS")) || {};
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  },

  saveLayoutsToLS:(key, value)=> {
    if (global.localStorage) {
      global.localStorage.setItem(
        "DASHIT-LAYOUTS",
        JSON.stringify({
          [key]: value
        })
      );
    }
  },

  getItemsFromLS:(key)=> {
    let ls = [];
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("DASHIT-ITEMS")) || [];
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  },

  saveItemsToLS:(key, value)=> {
    console.log("Save Items", JSON.stringify({
      [key]: value
    }));
    if (global.localStorage) {
      global.localStorage.setItem(
        "DASHIT-ITEMS",
        JSON.stringify({
          [key]: value
        })
      );
    }
  },
}




