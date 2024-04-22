import Ajv, { type ValidateFunction } from 'ajv';
import AjvFormats from 'ajv-formats';
import AjvErrors from 'ajv-errors';

//configure AJV
const ajv = new Ajv({
  allErrors: true,
  strict: false,
  $data: true,
});
AjvFormats(ajv);
AjvErrors(ajv);

const schemasCache: Record<string, ValidateFunction<unknown>> = {};

const validateResolver = async (
  data: FormData,
  context: string | undefined,
  schema: object
) => {
  if (!context) {
    return {
      values: {},
      errors: {},
      message: 'Context not provided.',
    };
  }
  // Cache schemas for performance optimization
  if (!schemasCache[context]) {
    schemasCache[context] = ajv.compile(schema);
  }

  const validate = schemasCache[context];

  try {
    // Run validation
    const isValid = validate(data);

    if (isValid) {
      // No errors, return data and empty error object
      return {
        values: data,
        errors: {},
      };
    } else {
      // Format errors for React Hook Form
      if (!validate.errors) {
        return {
          values: {},
          errors: {},
          message: 'An error occurred during validation.',
        };
      }
      const errorsFormatted = validate.errors.reduce(
        (prev, current) => ({
          ...prev,
          [current.instancePath.replace('/', '')]: {
            type: current.keyword,
            message: current.message,
          },
        }),
        {}
      );

      return {
        values: {},
        errors: errorsFormatted,
      };
    }
  } catch (error) {
    console.error('Validation error:', error);
    return {
      values: {},
      errors: {},
      message: 'An error occurred during validation. Please check your input.',
    };
  }
};

export { validateResolver };
