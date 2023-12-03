export class Region {
  name: string;
  alert: boolean;
  changed: string;

  constructor(name: string, alert: boolean, changed: string) {
    this.name = name;
    this.alert = alert;
    this.changed = changed;
  }
}
