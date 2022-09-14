import { isRegistered, register } from '@tauri-apps/api/globalShortcut';
import { next } from './phi';

type keybinds = 'screenshot';

type keybindKeys = {
    [key in keybinds]: string;
};

const keybindCallbacks: {[key in keybinds] : () => void} = {
    screenshot: () => {
        
    }
}

export function loadKeybinds(keybinds: keybindKeys) {
    for (let [key, bind] of next(keybinds)) {
        register(bind, keybindCallbacks[key]);
    }
}