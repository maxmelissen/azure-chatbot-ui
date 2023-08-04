export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  'I am Enterprise GPT, a privacy & security focussed alternative for ChatGPT. I will follow your instructions carefully. Need support? Email info@nextnovate.ai';

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || '1',
);

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';

export const SKIP_AUTH = process.env.NEXT_PUBLIC_SKIP_AUTH === 'true';

export const OPENAI_API_HOST_CUSTOM =
  process.env.NEXT_PUBLIC_OPENAI_API_HOST_CUSTOM || '';
