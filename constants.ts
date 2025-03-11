function getEnvVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }

  return value;
}

// Server Constants
export const PORT = getEnvVariable("PORT");
export const CORS_ORIGIN = getEnvVariable("CORS_ORIGIN");

// Token Secrets Constants
export const ACCESS_TOKEN_SECRET = getEnvVariable("ACCESS_TOKEN_SECRET");
export const REFRESH_TOKEN_SECRET = getEnvVariable("REFRESH_TOKEN_SECRET");

// Token Expiry Constants
export const ACCESS_TOKEN_EXPIRY = parseInt(getEnvVariable("ACCESS_TOKEN_EXPIRY"), 10);
export const REFRESH_TOKEN_EXPIRY = parseInt(getEnvVariable("REFRESH_TOKEN_EXPIRY"), 10);

// Database Constants
export const DATABASE_URI = getEnvVariable("DATABASE_URI");
export const DATABASE_NAME = getEnvVariable("DATABASE_NAME");
