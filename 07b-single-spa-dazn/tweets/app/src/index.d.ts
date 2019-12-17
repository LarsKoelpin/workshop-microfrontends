interface DevValues {
  token: string;
  upn: string;
  sub: string
}
// eslint-disable-next-line
declare let __DEV_ENV_FILE__: DevValues;

declare module '*.svg' {
  const value: any;
  export = value;
}
