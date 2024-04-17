import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const validateEnvVar = (varName, expectedType) => {
  const value = process.env[varName];

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }

  // Convert before type check
  const convertedValue = expectedType === "number" ? Number(value) : value;

  if (typeof convertedValue !== expectedType) {
    throw new Error(
      `Invalid type for environment variable: ${varName}. Expected ${expectedType}, got ${typeof value}`
    );
  }

  return convertedValue;
};

const configEnv = {
  PORT: validateEnvVar("PORT", "number"),

  MONGODB_URI: validateEnvVar("MONGODB_URI", "string"),
};

export { configEnv };