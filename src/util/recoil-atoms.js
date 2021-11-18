import { atom } from 'recoil';

export const mode = atom({
    key: 'mode',
    default: !localStorage.getItem("mode") ? 'light' : localStorage.getItem("mode")
  });
  