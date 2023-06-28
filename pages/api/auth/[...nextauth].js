import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

console.log('process.env.AZURE_AD_CLIENT_ID', process.env.AZURE_AD_CLIENT_ID);

export const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
};

export default NextAuth(authOptions);
