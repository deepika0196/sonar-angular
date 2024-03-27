export function checkRequiredFields(input: any, name: string) {
  if (input == null) {
    throw new Error('El elemento "' + name + '" es obligatorio');
  }
}

export function checkRequired2Fields(input: any, name: string, input2: any) {
  if (input == null && input2 == null) {
    throw new Error('El elemento "' + name + '" es obligatorio');
  }
}

export function checkRequiredListFields(input: any[], name: string[]) {
  input.forEach(function (value, i) {
    checkRequiredFields(value, name[i]);
  });
}
