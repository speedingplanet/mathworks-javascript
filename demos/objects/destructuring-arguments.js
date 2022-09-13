/* eslint-disable no-unused-vars */
const defaultConfig = {
  primaryClass: '',
  accentClass: '',
  fields: [],
  labels: [],
  height: 0,
  width: 0,
};

function createForm(config) {
  const mergedOptions = { ...defaultConfig, ...config };
}

function createForm2({ primaryClass, accentClass, fields, ...foo }) {
  // Whatever
  console.log('Primary class is ', primaryClass);
}

function createForm3(config) {
  const primaryClass = config.primaryClass;
  const accentClass = config.accentClass;
  const fields = config.fields;
}

createForm2(defaultConfig);
