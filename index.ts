import {autoUpdater} from 'electron-updater';

console.log({static: autoUpdater});

import('electron-updater')
  .then(({autoUpdater}) => {
    console.log({dynamic: autoUpdater});
  });


