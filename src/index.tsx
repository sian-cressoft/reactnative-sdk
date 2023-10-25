import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'digio-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DigioReactNative = NativeModules.DigioReactNative
  ? NativeModules.DigioReactNative
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DigioReactNative.multiply(a, b);
}
