export function isUndefined(value: any) {
  return value === undefined;
}

export function isNull(value: any) {
  return value === null;
}

export function isValidObject(obj: any) {
  if (Array.isArray(obj)) {
    return !isNull(obj) && !isUndefined(obj) && obj.length !== 0;
  }

  return !isNull(obj) && !isUndefined(obj) && obj !== 0;
}

export function isValidString(str: string | null) {
  return str && str.trim() !== "";
}
