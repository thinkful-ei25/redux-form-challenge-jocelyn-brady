export const required = value => value  ? undefined : "required"; 
export const nonEmpty = value => value.trim() !== '' ? undefined : "value cannot be empty"; 
export const valLength = value => value.length === 5 ? undefined : "not a valid tracking id";
export const valNum = value => Number(value) !== NaN ? undefined : "not a valid tracking id"; 