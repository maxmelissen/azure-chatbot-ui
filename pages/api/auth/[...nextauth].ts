import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { AuthOptions } from 'next-auth/src/core/types';

export const authOptions: AuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID ?? 'not defined',
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? 'not defined',
      tenantId: process.env.AZURE_AD_TENANT_ID ?? 'not defined',
    }),
  ],
  pages: {
    signIn: '/',
    error: '/',
  },
  theme: {
    colorScheme: 'dark',
    brandColor: '#F5AD00',
    logo: 'https://www.nextnovate.ai/wp-content/themes/nextnovate/assets/img/logo-dark.svg',
  },
  callbacks: {
    async signIn({ user }) {
      const allowedDomains = (process.env.AZURE_AD_ALLOWED_DOMAINS ?? '')
        .split(',')
        .map((domain) => domain.trim());

      if (!user.email || !allowedDomains.length) {
        return false;
      }

      const emailDomain = user.email.split('@')[1];

      return allowedDomains.includes(emailDomain);
    },
  },
};

export default NextAuth(authOptions);
